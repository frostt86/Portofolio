import { ExternalLink, Linkedin, Terminal } from 'lucide-react';

const LINKEDIN_YENLO = 'https://www.linkedin.com/posts/ron-van-der-veeke-3a051a8b_last-week-i-finally-got-the-chance-to-meet-ugcPost-7409902097455947776-sowX?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEeIgyoBBNzm5IteV-QcEnLoygAmq0ktIXc';

const skills = [
  { group: 'Core & Backend', items: ['Java 26', 'Spring Boot 3.5', 'RESTful APIs', 'Microservices', 'SQL / PostgreSQL', 'MySQL', 'Flyway', 'Docker'] },
  { group: 'Integration & Automation', items: ['Dell Boomi', 'API Management', 'Boomi Flow', 'Data Transformation (JSON/XML/DDPs)', 'Webhooks', 'Teams Webhooks', 'Confluence API'] },
  { group: 'Web3 & Governance', items: ['Solidity', 'Web3.js', 'Ethereum', 'Smart Contracts', 'Cryptographic Tallying'] },
  { group: 'Frontend & UI', items: ['TypeScript', 'JavaScript', 'React', 'Angular', 'Thymeleaf', 'Bootstrap', 'Tailwind CSS', 'Vite'] },
  { group: 'Tools & Agile', items: ['Git / GitHub', 'Jira', 'Confluence', 'Agile / Scrum', 'Linux Operations', 'Windows Admin'] },
];

const certGroups = [
  { label: 'Boomi Professional', count: 4, items: ['Integration Developer', 'API Management', 'Linux Operational Admin', 'Windows Operational Admin'] },
  { label: 'Boomi Associate', count: 6, items: ['Integration Developer', 'Integration Architect', 'Runtime Architect', 'Administrator', 'Data Hub', 'Flow Essentials'] },
  { label: 'Anthropic AI & Tools', count: 3, items: ['Claude 101', 'Claude Code 101', 'Claude Cowork Workflows'] },
];

export default function About() {
  return (
    <section id="about" className="py-20 max-w-[760px] mx-auto px-5">
      <hr className="section-divider mb-16" />

      {/* Section Header */}
      <p className="section-label mb-2">Engineering Identity & Vision</p>
      <h2 className="section-title mb-8">About Pamitha Kularathne</h2>

      {/* Main Philosophy & Narrative Card */}
      <div className="card-flat p-6 sm:p-8 mb-10 border-white/80 bg-[#e6ecf5] relative overflow-hidden shadow-[9px_9px_18px_#c2c9d6,-9px_-9px_18px_#ffffff]">
        <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Terminal size={18} className="text-[#ff6b35]" />
          Software Engineering & System Architecture
        </h3>

        <p className="text-sm text-slate-700 leading-relaxed mb-4">
          I am a <strong className="text-slate-950 font-bold">Software Engineering undergraduate at the University of Westminster</strong> with a deep passion for backend engineering, enterprise integration, distributed systems, and emerging technologies such as blockchain. My core engineering philosophy centers on building software that addresses complex real-world challenges with uncompromised focus on <strong className="text-[#ff6b35] font-bold">scalability, reliability, and clean architecture</strong>.
        </p>

        <p className="text-sm text-slate-700 leading-relaxed mb-4">
          In my professional role as an <strong className="text-slate-950 font-bold">Integration Consultant at Yenlo Lanka</strong>, I developed and maintained enterprise-grade integration ecosystems powered by Dell Boomi. My work spanned building RESTful API integrations, transforming & validating complex data payloads (JSON/XML/DDPs), engineering SQL database workflows, monitoring critical production environments, and troubleshooting high-frequency integration challenges in Agile teams (Jira & Confluence).
        </p>

        <p className="text-sm text-slate-700 leading-relaxed">
          From pioneering decentralized electronic voting with <strong className="text-[#ff6b35] font-bold">BlockBallot</strong> to building enterprise-grade Java/Spring Boot platforms, my goal is to join innovative engineering teams where I can design high-throughput systems, tackle challenging technical bottlenecks, and build software that delivers lasting value.
        </p>
      </div>

      {/* Highlight Grid: Professional Experience */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
        
        {/* Experience Card */}
        <div className="card p-6 border-white/80 bg-[#e6ecf5] shadow-[9px_9px_18px_#c2c9d6,-9px_-9px_18px_#ffffff]">
          <div className="flex items-center justify-between mb-3">
            <span className="pill pill-accent text-[10px]">Enterprise Integration</span>
            <span className="text-xs font-mono text-slate-500 font-bold">2025 – Present</span>
          </div>
          <h4 className="text-base font-bold text-slate-900 mb-1">Yenlo Lanka</h4>
          <p className="text-xs text-[#ff6b35] font-mono font-bold mb-3">Integration Consultant</p>
          <ul className="space-y-1.5 text-xs text-slate-600 leading-relaxed mb-4">
            <li className="flex items-start gap-1.5"><span className="text-[#ff6b35] mt-px">·</span> Built 5 production Boomi automation suites for SLA monitoring.</li>
            <li className="flex items-start gap-1.5"><span className="text-[#ff6b35] mt-px">·</span> Automated inventory sync, employee onboarding & FX rates.</li>
            <li className="flex items-start gap-1.5"><span className="text-[#ff6b35] mt-px">·</span> Cut manual 2-3 hour reporting cycles to ~20 minutes (~90% time savings).</li>
          </ul>
          <a href={LINKEDIN_YENLO} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#ff6b35] hover:underline pt-2 border-t border-slate-300/80 w-full">
            <Linkedin size={13} /> View Team Spotlight by Ron van der Veeke <ExternalLink size={11} />
          </a>
        </div>

        {/* Ambition Card */}
        <div className="card p-6 border-white/80 bg-[#e6ecf5] shadow-[9px_9px_18px_#c2c9d6,-9px_-9px_18px_#ffffff]">
          <div className="flex items-center justify-between mb-3">
            <span className="pill pill-blue text-[10px]">Distributed Systems</span>
            <span className="text-xs font-mono text-blue-600 font-bold">Web3 & Architecture</span>
          </div>
          <h4 className="text-base font-bold text-slate-900 mb-1">BlockBallot Architecture</h4>
          <p className="text-xs text-blue-600 font-mono font-bold mb-3">Decentralized Governance</p>
          <p className="text-xs text-slate-600 leading-relaxed mb-3">
            Architected smart contract vote casting and cryptographic tallying for tamper-proof election integrity in Sri Lanka, showcased live at the CuttingEdge '25 showcase at Temple Trees.
          </p>
          <div className="pt-3 border-t border-slate-300/80 flex items-center justify-between text-[11px] font-mono text-slate-600">
            <span className="text-slate-900 font-bold">Spring Boot & Solidity</span>
            <span className="text-[#ff6b35] font-bold">CuttingEdge '25</span>
          </div>
        </div>

      </div>

      {/* Education & Academic Background */}
      <p className="section-label mb-4">Academic Background</p>
      <div className="card-flat p-6 mb-10 border-white/80 bg-[#e6ecf5] shadow-[9px_9px_18px_#c2c9d6,-9px_-9px_18px_#ffffff]">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="pill pill-accent text-[10px] mb-2 inline-flex">Undergraduate Degree</span>
            <h3 className="text-base font-bold text-slate-900">University of Westminster</h3>
            <p className="text-xs text-slate-600 font-mono font-medium">BSc (Hons) Software Engineering</p>
          </div>
          <span className="pill text-[10px]">2023 – 2027</span>
        </div>

        <div className="pt-4 border-t border-slate-300/80 flex justify-between items-start">
          <div>
            <h3 className="text-sm font-bold text-slate-900">St. Peter's College, Colombo</h3>
            <p className="text-xs text-slate-600 font-mono font-medium">Primary & Secondary Education</p>
          </div>
          <span className="pill text-[10px]">2013 – 2021</span>
        </div>
      </div>

      {/* Technical Arsenal — Categorized Skill Matrix */}
      <p className="section-label mb-4">Technical Arsenal & Skill Matrix</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        {skills.map((group) => (
          <div key={group.group} className="card-flat p-5 border-white/80 bg-[#e6ecf5] shadow-[7px_7px_14px_#c2c9d6,-7px_-7px_14px_#ffffff]">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 pb-2 border-b border-slate-300/80 flex items-center justify-between">
              <span>{group.group}</span>
              <span className="text-[10px] text-[#ff6b35] font-mono font-bold">● Verified</span>
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((s) => (
                <span key={s} className="text-[11px] px-2.5 py-1 rounded-md bg-[#e2e8f2] text-slate-800 border border-white/80 font-semibold shadow-[inset_1px_1px_3px_#c2c9d6,inset_-1px_-1px_3px_#ffffff]">
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Certifications & Industry Credentials */}
      <p className="section-label mb-4">Certifications & Industry Credentials</p>

      {/* InnoServe International Certificate */}
      <div className="card p-5 border-l-4 border-l-[#ff6b35] mb-4 bg-[#e6ecf5] shadow-[8px_8px_16px_#c2c9d6,-8px_-8px_16px_#ffffff] flex items-center justify-between">
        <div>
          <span className="pill pill-accent text-[10px] mb-1 inline-flex">🏆 International Honor</span>
          <h3 className="text-sm font-bold text-slate-900">InnoServe Awards Certificate — Taiwan ICT</h3>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">Awarded 1st Place Certificate · International ICT Exchange Division</p>
        </div>
        <span className="text-xs font-mono font-bold text-[#ff6b35]">1st Place</span>
      </div>

      {/* Academic Distinction Badge */}
      <div className="card p-5 border-l-4 border-l-blue-600 mb-6 bg-[#e6ecf5] shadow-[8px_8px_16px_#c2c9d6,-8px_-8px_16px_#ffffff] flex items-center justify-between">
        <div>
          <span className="pill pill-blue text-[10px] mb-1 inline-flex">Academic Distinction</span>
          <h3 className="text-sm font-bold text-slate-900">Java Programming Certificate — IIT</h3>
          <p className="text-xs text-slate-600 mt-0.5 font-medium">Spring Boot, Microservices, Bootstrap, Thymeleaf Architecture</p>
        </div>
        <span className="text-xs font-mono font-bold text-blue-600">Distinction</span>
      </div>

      {/* Certification Breakdown Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {certGroups.map((g) => (
          <div key={g.label} className="card-flat p-4 border-white/80 bg-[#e6ecf5] shadow-[7px_7px_14px_#c2c9d6,-7px_-7px_14px_#ffffff]">
            <div className="flex justify-between items-center mb-2.5 pb-2 border-b border-slate-300/80">
              <h4 className="text-xs font-bold text-slate-900">{g.label}</h4>
              <span className="text-[10px] font-mono text-[#ff6b35] font-bold">{g.count}</span>
            </div>
            <ul className="space-y-1">
              {g.items.map((c) => (
                <li key={c} className="text-[11px] text-slate-600 font-medium flex items-start gap-1.5">
                  <span className="text-[#ff6b35] font-bold mt-px">·</span> {c}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </section>
  );
}