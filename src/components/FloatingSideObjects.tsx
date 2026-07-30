import React, { useState } from 'react';
import { Cpu, Terminal, Shield, Zap, Layers, Radio, Activity, Droplet } from 'lucide-react';
import { soundFx } from './NeumorphicControls';

export default function FloatingSideObjects() {
  const [dialAngleLeft, setDialAngleLeft] = useState(45);
  const [dialAngleSignal, setDialAngleSignal] = useState(120);
  const [knobPressed, setKnobPressed] = useState(false);

  const rotateLeftDial = () => {
    soundFx.playClick(900, 'sine', 0.03);
    setDialAngleLeft((prev) => (prev + 45) % 360);
  };

  const rotateSignalDial = () => {
    soundFx.playClick(650, 'triangle', 0.04);
    setDialAngleSignal((prev) => (prev + 60) % 360);
  };

  const handleKnobClick = () => {
    soundFx.playThump();
    setKnobPressed(true);
    setTimeout(() => setKnobPressed(false), 200);
  };

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-30 overflow-hidden select-none">
      
      {/* ═══════════════════════════════════════════════
         LEFT MARGIN FLOATING NEUMORPHIC OBJECTS
         ═══════════════════════════════════════════════ */}

      {/* 1. Left Top Floating Rotary Dial Knob (Hero Level) */}
      <div className="absolute top-[200px] left-6 xl:left-12 pointer-events-auto animate-float-slow">
        <div 
          onClick={rotateLeftDial}
          className="card-flat p-3 bg-[#e6ecf5] border border-white/80 rounded-2xl shadow-[8px_8px_16px_#c2c9d6,-8px_-8px_16px_#ffffff] hover:shadow-[10px_10px_20px_#b8c0cf,-10px_-10px_20px_#ffffff] transition-all cursor-pointer group flex flex-col items-center gap-2"
          title="Click to turn ambient dial"
        >
          <div className="w-12 h-12 rounded-full bg-[#e6ecf5] border border-white/90 shadow-[inset_3px_3px_6px_#c2c9d6,inset_-3px_-3px_6px_#ffffff] relative flex items-center justify-center">
            {/* Rotatable indicator notch */}
            <div 
              style={{ transform: `rotate(${dialAngleLeft}deg)` }}
              className="absolute inset-1 rounded-full transition-transform duration-300 ease-out flex justify-center pt-1"
            >
              <div className="w-1 h-3 rounded-full bg-[#ff6b35] shadow-[0_0_6px_#ff6b35]" />
            </div>
            <div className="w-4 h-4 rounded-full bg-[#e6ecf5] border border-white shadow-[2px_2px_4px_#c2c9d6] flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] animate-pulse" />
            </div>
          </div>
          <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-wider group-hover:text-[#ff6b35] transition-colors flex items-center gap-1">
            <Activity size={10} className="text-[#ff6b35]" /> BOOMI_DIAL
          </span>
        </div>
      </div>

      {/* 2. Left Upper Floating Signal Dial (MOVED TO LEFT SIDE!) */}
      <div className="absolute top-[480px] left-5 xl:left-10 pointer-events-auto animate-float-reverse">
        <div 
          onClick={rotateSignalDial}
          className="card-flat p-3 bg-[#e6ecf5] border border-white/80 rounded-2xl shadow-[8px_8px_16px_#c2c9d6,-8px_-8px_16px_#ffffff] hover:shadow-[10px_10px_20px_#b8c0cf,-10px_-10px_20px_#ffffff] cursor-pointer transition-all flex flex-col items-center gap-2 group"
          title="Click to turn signal dial"
        >
          <div className="w-11 h-11 rounded-full bg-[#e2e8f2] border border-white/90 shadow-[inset_3px_3px_6px_#c2c9d6,inset_-3px_-3px_6px_#ffffff] relative flex items-center justify-center">
            <div 
              style={{ transform: `rotate(${dialAngleSignal}deg)` }}
              className="absolute inset-0 transition-transform duration-500 ease-out flex justify-center pt-0.5"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#ff6b35] shadow-[0_0_6px_#ff6b35]" />
            </div>
            <Zap size={14} className="text-[#ff6b35] group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-[9px] font-mono font-bold text-slate-600 uppercase tracking-wider group-hover:text-[#ff6b35] transition-colors flex items-center gap-1">
            <Radio size={10} className="text-[#ff6b35]" /> SIGNAL_ACTIVE
          </span>
        </div>
      </div>

      {/* 3. Left Middle Floating Telemetry Pill (About Level) */}
      <div className="absolute top-[900px] left-4 xl:left-8 pointer-events-auto animate-float-slow">
        <div className="card-flat px-3.5 py-2.5 bg-[#e6ecf5] border border-white/80 rounded-full shadow-[7px_7px_15px_#c2c9d6,-7px_-7px_15px_#ffffff] hover:scale-105 transition-transform flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-full bg-[#e2e8f2] border border-white/80 shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff] flex items-center justify-center">
            <Cpu size={12} className="text-[#ff6b35]" />
          </div>
          <div>
            <p className="text-[9px] font-mono font-bold text-slate-800 uppercase leading-none">JAVA 26 · SPRING</p>
            <p className="text-[8px] font-mono text-emerald-600 font-bold mt-0.5 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              RUNTIME ACTIVE
            </p>
          </div>
        </div>
      </div>

      {/* 4. Left Lower Floating 3D Gauge Ring (Work Level) */}
      <div className="absolute top-[1650px] left-6 xl:left-12 pointer-events-auto animate-float-reverse">
        <div className="card-flat p-3 bg-[#e6ecf5] border border-white/80 rounded-2xl shadow-[8px_8px_16px_#c2c9d6,-8px_-8px_16px_#ffffff] flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-full bg-[#e2e8f2] border border-white/70 shadow-[inset_2px_2px_5px_#c2c9d6,inset_-2px_-2px_5px_#ffffff] flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#ff6b35]/60 animate-spin-slow" />
            <Shield size={14} className="text-[#ff6b35]" />
          </div>
          <div className="text-left">
            <p className="text-[9px] font-mono font-extrabold text-slate-900">DELL BOOMI</p>
            <p className="text-[8px] font-mono text-slate-500 font-semibold">90% SLA SAVINGS</p>
          </div>
        </div>
      </div>

      {/* 5. Left Bottom Floating Tactile Badge (Contact Level) */}
      <div className="absolute top-[2600px] left-5 xl:left-10 pointer-events-auto animate-float-slow">
        <div 
          onClick={handleKnobClick}
          className={`card-flat px-4 py-2 bg-[#e6ecf5] border border-white/80 rounded-full shadow-[6px_6px_12px_#c2c9d6,-6px_-6px_12px_#ffffff] cursor-pointer transition-all duration-150 flex items-center gap-2 ${
            knobPressed ? 'shadow-[inset_2px_2px_4px_#c2c9d6,inset_-2px_-2px_4px_#ffffff] translate-y-0.5' : ''
          }`}
          title="Tactile Button"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_#10b981]" />
          <span className="text-[10px] font-mono font-bold text-slate-800">SYSTEM: ONLINE</span>
        </div>
      </div>


    </div>
  );
}
