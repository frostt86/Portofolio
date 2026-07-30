import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Sparkles, Sliders, Activity, Power, ShieldCheck, Zap, Sun, Moon } from 'lucide-react';

/* ─── Web Audio & Physical Haptic Vibration Generator ─── */
class SoundEngine {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private init() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public vibrate(pattern: number | number[] = 15) {
    if (!this.enabled || typeof window === 'undefined') return;
    if ('vibrate' in navigator && typeof navigator.vibrate === 'function') {
      try {
        navigator.vibrate(pattern);
      } catch {
        // Silently handle environment haptic restrictions
      }
    }
  }

  public playClick(freq = 800, type: OscillatorType = 'sine', duration = 0.03) {
    if (!this.enabled) return;
    this.vibrate(15);
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch {
      // Ignore audio autoplay restrictions
    }
  }

  public playThump() {
    this.vibrate([25, 15, 20]);
    this.playClick(150, 'triangle', 0.06);
  }
}

export const soundFx = new SoundEngine();

/* ─── Mode Definitions: Light, Dark ─── */
export const THEME_MODES = [
  { id: 'light', name: 'Light Mode' },
  { id: 'dark', name: 'Dark Mode' },
];

/* ─── 1. Interactive Rotary Dial Component ─── */
interface RotaryDialProps {
  label?: string;
  valueIndex: number;
  maxIndex: number;
  onChange: (index: number) => void;
  optionsLabel?: string[];
  size?: number;
}

export const RotaryDial: React.FC<RotaryDialProps> = ({
  label,
  valueIndex,
  maxIndex,
  onChange,
  optionsLabel,
  size = 72,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const dialRef = useRef<HTMLDivElement>(null);

  // Calculate rotation angle based on valueIndex (spanning -120 deg to +120 deg)
  const angleStep = 240 / Math.max(1, maxIndex - 1);
  const rotationAngle = -120 + valueIndex * angleStep;

  const handleAngleCalc = (clientX: number, clientY: number) => {
    if (!dialRef.current) return;
    const rect = dialRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rad = Math.atan2(clientY - centerY, clientX - centerX);
    let deg = (rad * 180) / Math.PI + 90; // normalize 0 at top
    if (deg < -180) deg += 360;
    if (deg > 180) deg -= 360;

    // Map -120 to +120 range to index
    const clampedDeg = Math.min(Math.max(deg, -120), 120);
    const normalized = (clampedDeg + 120) / 240;
    const newIdx = Math.round(normalized * (maxIndex - 1));
    if (newIdx !== valueIndex && newIdx >= 0 && newIdx < maxIndex) {
      soundFx.playClick(700 + newIdx * 150, 'sine', 0.025);
      onChange(newIdx);
    }
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    handleAngleCalc(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (isDragging) {
      handleAngleCalc(e.clientX, e.clientY);
    }
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        (e.target as HTMLElement).releasePointerCapture(e.pointerId);
      } catch {
        // ignore
      }
    }
  };

  const handleClickStep = () => {
    const nextIdx = (valueIndex + 1) % maxIndex;
    soundFx.playClick(850, 'sine', 0.03);
    onChange(nextIdx);
  };

  return (
    <div className="flex flex-col items-center select-none group/dial">
      {label && (
        <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 mb-1.5 flex items-center gap-1">
          <Sliders size={11} className="text-[#ff6b35]" /> {label}
        </span>
      )}

      {/* Outer Rim Frame */}
      <div
        ref={dialRef}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onClick={handleClickStep}
        style={{ width: size, height: size }}
        className="relative rounded-full bg-[#e6ecf5] border border-white/90 p-1.5 shadow-[7px_7px_15px_#c2c9d6,-7px_-7px_15px_#ffffff] hover:shadow-[9px_9px_18px_#b8c0cf,-9px_-9px_18px_#ffffff] cursor-grab active:cursor-grabbing transition-shadow flex items-center justify-center"
        title="Click or drag knob to rotate dial"
      >
        {/* Perimeter Tick Markers */}
        <div className="absolute inset-0 rounded-full pointer-events-none">
          {Array.from({ length: maxIndex }).map((_, i) => {
            const tickAngle = -120 + i * angleStep;
            const active = i === valueIndex;
            return (
              <div
                key={i}
                style={{ transform: `rotate(${tickAngle}deg)` }}
                className="absolute inset-0 flex justify-center pt-0.5"
              >
                <div
                  className={`w-0.5 rounded-full transition-all duration-300 ${
                    active
                      ? 'h-2 bg-[#ff6b35] shadow-[0_0_6px_#ff6b35]'
                      : 'h-1.5 bg-slate-400/60'
                  }`}
                />
              </div>
            );
          })}
        </div>

        {/* Inner Rotary Knob */}
        <div
          style={{ transform: `rotate(${rotationAngle}deg)` }}
          className="w-full h-full rounded-full bg-[#e6ecf5] border border-white/80 shadow-[inset_3px_3px_6px_#c2c9d6,inset_-3px_-3px_6px_#ffffff] relative transition-transform duration-200 ease-out flex items-center justify-center"
        >
          {/* Indicator Line / Notch */}
          <div className="absolute top-1.5 w-1 h-3.5 rounded-full bg-[#ff6b35] shadow-[0_0_8px_#ff6b35]" />
          {/* Center LED Dot */}
          <div className="w-3.5 h-3.5 rounded-full bg-[#e6ecf5] border border-white shadow-[2px_2px_4px_#c2c9d6,-2px_-2px_4px_#ffffff] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-pulse" />
          </div>
        </div>
      </div>

      {optionsLabel && optionsLabel[valueIndex] && (
        <span className="mt-1.5 text-[10px] font-mono font-extrabold text-slate-800 bg-[#e2e8f2] px-2 py-0.5 rounded-md border border-white/70 shadow-[inset_1px_1px_3px_#c2c9d6]">
          {optionsLabel[valueIndex]}
        </span>
      )}
    </div>
  );
};

/* ─── 2. Tactile Rocker Switch (ON/OFF 3D Toggle) ─── */
interface RockerSwitchProps {
  label: string;
  active: boolean;
  onToggle: (active: boolean) => void;
  icon?: React.ReactNode;
}

export const RockerSwitch: React.FC<RockerSwitchProps> = ({
  label,
  active,
  onToggle,
  icon,
}) => {
  const handleClick = () => {
    soundFx.playThump();
    onToggle(!active);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group/rocker px-3 py-1.5 rounded-xl text-[11px] font-mono font-bold flex items-center gap-2 border transition-all duration-200 select-none ${
        active
          ? 'bg-[#e2e8f2] text-slate-900 border-white/60 shadow-[inset_3px_3px_6px_#c2c9d6,inset_-3px_-3px_6px_#ffffff]'
          : 'bg-[#e6ecf5] text-slate-600 border-white/90 shadow-[4px_4px_9px_#c2c9d6,-4px_-4px_9px_#ffffff] hover:text-slate-900'
      }`}
    >
      <div
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          active
            ? 'bg-[#ff6b35] shadow-[0_0_8px_#ff6b35]'
            : 'bg-slate-400'
        }`}
      />
      {icon}
      <span>{label}</span>
    </button>
  );
};

/* ─── 3. Neumorphic Circular Telemetry Gauge Object ─── */
interface GaugeProps {
  label: string;
  value: number; // 0 to 100
  unit?: string;
  status?: string;
}

export const NeumorphicGauge: React.FC<GaugeProps> = ({
  label,
  value,
  unit = '%',
  status = 'Nominal',
}) => {
  return (
    <div className="card-flat p-3.5 bg-[#e6ecf5] border border-white/80 rounded-2xl shadow-[6px_6px_14px_#c2c9d6,-6px_-6px_14px_#ffffff] flex items-center gap-3 select-none">
      {/* Recessed Gauge Ring */}
      <div className="relative w-12 h-12 rounded-full bg-[#e2e8f2] border border-white/70 shadow-[inset_3px_3px_6px_#c2c9d6,inset_-3px_-3px_6px_#ffffff] flex items-center justify-center shrink-0">
        <svg className="w-10 h-10 -rotate-90 transform" viewBox="0 0 36 36">
          <path
            className="text-slate-300/80"
            strokeWidth="3.5"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <path
            className="text-[#ff6b35] transition-all duration-700 ease-out"
            strokeDasharray={`${value}, 100`}
            strokeWidth="3.5"
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
          />
        </svg>
        <span className="absolute text-[10px] font-mono font-extrabold text-slate-800">
          {value}{unit}
        </span>
      </div>

      <div>
        <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">{label}</p>
        <p className="text-xs font-bold text-slate-900 flex items-center gap-1.5 mt-0.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          {status}
        </p>
      </div>
    </div>
  );
};

/* ─── Tactile Sun/Moon Theme Rotary Dial Component ─── */
interface ThemeDialSwitchProps {
  activeModeIdx: number;
  onChange: (idx: number) => void;
}

export const ThemeDialSwitch: React.FC<ThemeDialSwitchProps> = ({ activeModeIdx, onChange }) => {
  const isDark = activeModeIdx === 1;

  const toggleTheme = () => {
    soundFx.playClick(isDark ? 650 : 850, 'triangle', 0.04);
    onChange(isDark ? 0 : 1);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 select-none w-full">
      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1">
        {isDark ? <Sun size={11} className="text-[#ff6b35]" /> : <Moon size={11} className="text-[#ff6b35]" />} Theme Dial
      </span>

      {/* 3D Tactile Rotary Knob for Light / Dark Switching */}
      <button
        type="button"
        onClick={toggleTheme}
        className="relative w-14 h-14 rounded-full bg-[#e6ecf5] border border-white/90 shadow-[6px_6px_12px_#c2c9d6,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#b8c0cf,-8px_-8px_16px_#ffffff] active:shadow-[inset_2px_2px_5px_#c2c9d6,inset_-2px_-2px_5px_#ffffff] transition-all duration-300 flex items-center justify-center cursor-pointer group"
        title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      >
        {/* Rotatable Outer Ring Notch */}
        <div 
          style={{ transform: `rotate(${isDark ? 180 : 0}deg)` }}
          className="absolute inset-1 rounded-full border border-white/70 shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff] transition-transform duration-500 ease-out flex justify-center pt-1"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] shadow-[0_0_6px_#ff6b35]" />
        </div>

        {/* Center Sun / Moon Icon Indicator */}
        <div className="w-8 h-8 rounded-full bg-[#e2e8f2] border border-white/80 shadow-[inset_1.5px_1.5px_3px_#c2c9d6,inset_-1.5px_-1.5px_3px_#ffffff] flex items-center justify-center transition-transform group-hover:scale-110">
          {isDark ? (
            <Sun size={16} className="text-[#ff6b35] animate-pulse" />
          ) : (
            <Moon size={16} className="text-slate-700 dark:text-slate-300 group-hover:text-[#ff6b35] transition-colors" />
          )}
        </div>
      </button>

      <span className="text-[10px] font-mono font-bold text-slate-700 dark:text-slate-300 uppercase">
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </span>
    </div>
  );
};

/* ─── 4. Interactive Neumorphic Control Deck Component ─── */
export const NeumorphicControlDeck: React.FC = () => {
  const [activeModeIdx, setActiveModeIdx] = useState(0);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [focusMode, setFocusMode] = useState(false);

  // Apply theme mode dynamically (light, dark)
  const handleModeChange = (idx: number) => {
    setActiveModeIdx(idx);
    const mode = THEME_MODES[idx];
    document.documentElement.setAttribute('data-theme', mode.id);
  };

  useEffect(() => {
    soundFx.enabled = soundEnabled;
  }, [soundEnabled]);

  return (
    <div className="card-flat p-4 sm:p-5 bg-[#e6ecf5] border border-white/80 rounded-2xl shadow-[8px_8px_16px_#c2c9d6,-8px_-8px_16px_#ffffff] mb-8 relative overflow-hidden">
      {/* Control Panel Header */}
      <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-300/80">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-[#e6ecf5] border border-white/90 shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center">
            <Activity size={14} className="text-[#ff6b35]" />
          </div>
          <div>
            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider">Tactile Control Console</h4>
            <p className="text-[10px] font-mono text-slate-500">Light Mode · Dark Mode Dial</p>
          </div>
        </div>

        {/* Live Status LED */}
        <span className="pill text-[9px] font-mono font-bold flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_#10b981]" />
          SYS_ONLINE
        </span>
      </div>

      {/* Control Dials & Toggles Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 items-stretch">
        {/* Tactile Sun/Moon Theme Rotary Dial */}
        <div className="flex items-center justify-center p-3.5 rounded-2xl bg-[#e2e8f2]/60 border border-white/70 shadow-[inset_2px_2px_5px_#c2c9d6]">
          <ThemeDialSwitch
            activeModeIdx={activeModeIdx}
            onChange={handleModeChange}
          />
        </div>

        {/* Audio & Haptic Vibration Switch */}
        <div className="flex flex-col items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#e2e8f2]/60 border border-white/70 shadow-[inset_2px_2px_5px_#c2c9d6]">
          <span className="text-[10px] font-mono font-bold uppercase text-slate-500">Haptics & Audio FX</span>
          <RockerSwitch
            label={soundEnabled ? 'Haptics: ON' : 'Haptics: OFF'}
            active={soundEnabled}
            onToggle={(val) => setSoundEnabled(val)}
            icon={soundEnabled ? <Volume2 size={13} className="text-[#ff6b35]" /> : <VolumeX size={13} />}
          />
        </div>

        {/* Focus Mode Switch */}
        <div className="flex flex-col items-center justify-center gap-2 p-3.5 rounded-2xl bg-[#e2e8f2]/60 border border-white/70 shadow-[inset_2px_2px_5px_#c2c9d6]">
          <span className="text-[10px] font-mono font-bold uppercase text-slate-500">Engineering Mode</span>
          <RockerSwitch
            label={focusMode ? 'Focus Mode' : 'Standard'}
            active={focusMode}
            onToggle={(val) => setFocusMode(val)}
            icon={<Zap size={13} className={focusMode ? 'text-[#ff6b35]' : 'text-slate-500'} />}
          />
        </div>
      </div>
    </div>
  );
};
