import React from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaBootstrap, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiSqlite, SiFramer, SiCplusplus } from 'react-icons/si';
import { FaTrophy, FaMedal } from 'react-icons/fa';

const stats = [
    { label: 'JavaScript (ES6+)', value: 90, colors: 'from-yellow-400 to-neon-violet' },
    { label: 'Frontend (React)', value: 85, colors: 'from-neon-violet to-neon-cyan' },
    { label: 'UI/UX (Figma)', value: 75, colors: 'from-neon-magenta to-neon-violet' },
    { label: 'Backend (Node.js)', value: 70, colors: 'from-neon-cyan to-neon-magenta' },
];

const skills = [
    { name: 'React', icon: FaReact, color: 'text-neon-cyan', glow: 'shadow-neon-cyan/30' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400', glow: 'shadow-yellow-400/30' },
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', glow: 'shadow-orange-500/30' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-400', glow: 'shadow-blue-400/30' },
    { name: 'Tailwind', icon: SiTailwindcss, color: 'text-neon-cyan', glow: 'shadow-neon-cyan/30' },
    { name: 'Node.js', icon: FaNodeJs, color: 'text-green-400', glow: 'shadow-green-400/30' },
    { name: 'SQLite', icon: SiSqlite, color: 'text-blue-300', glow: 'shadow-blue-300/30' },
    { name: 'Git', icon: FaGitAlt, color: 'text-orange-400', glow: 'shadow-orange-400/30' },
    { name: 'Bootstrap', icon: FaBootstrap, color: 'text-purple-400', glow: 'shadow-purple-400/30' },
    { name: 'Figma', icon: FaFigma, color: 'text-neon-magenta', glow: 'shadow-neon-magenta/30' },
    { name: 'C++', icon: SiCplusplus, color: 'text-blue-500', glow: 'shadow-blue-500/30' },
    { name: 'Framer', icon: SiFramer, color: 'text-neon-violet', glow: 'shadow-neon-violet/30' },
];

const achievements = [
    { icon: FaTrophy, text: 'Smart India Hackathon (Pre-Qualifier)' },
    { icon: FaMedal, text: 'University Literature Club Coordinator' },
    { icon: FaMedal, text: 'National-Level Classical Odissi Dancer' },
];

const StatsPanel = ({ glowing }) => {
    return (
        <section id="stats-panel" className={`neon-card p-5 animate-float-in transition-all duration-500 ${glowing ? 'ring-4 ring-neon-violet shadow-2xl shadow-neon-violet/40 animate-pulse-glow' : ''}`} style={{ animationDelay: '0.1s' }}>
            <h2 className="panel-title">⚔ Stats</h2>

            {/* Progress Bars */}
            <div className="space-y-4 mb-6">
                {stats.map((stat) => (
                    <div key={stat.label}>
                        <div className="flex justify-between mb-1.5">
                            <span className="text-xs text-text-secondary font-medium">{stat.label}</span>
                            <span className="text-xs font-bold font-[var(--font-orbitron)] text-neon-violet">{stat.value}</span>
                        </div>
                        <div className="w-full h-2 bg-deep-purple2/70 rounded-full overflow-hidden border border-panel-border">
                            <div
                                className={`h-full rounded-full bg-gradient-to-r ${stat.colors} animate-bar-fill`}
                                style={{ width: `${stat.value}%` }}
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Equipped Skills */}
            <h3 className="panel-title text-[0.65rem] mt-2">🛡 Equipped Skills</h3>
            <div className="grid grid-cols-3 gap-2.5">
                {skills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                        <div
                            key={skill.name}
                            className="neon-glow-border rounded-xl p-2.5 flex flex-col items-center gap-1.5 bg-deep-purple/50 cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 group"
                        >
                            <Icon className={`text-xl ${skill.color} transition-all duration-300 group-hover:drop-shadow-[0_0_8px_currentColor]`} />
                            <span className="text-[0.55rem] text-text-secondary font-semibold tracking-wider uppercase font-[var(--font-orbitron)] leading-tight text-center">
                                {skill.name}
                            </span>
                        </div>
                    );
                })}
            </div>

            {/* Achievements — below skills */}
            <h3 className="panel-title text-[0.65rem] mt-5 mb-3">🎖 Achievements</h3>
            <div className="space-y-2">
                {achievements.map((a, i) => {
                    const Icon = a.icon;
                    return (
                        <div key={i} className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-deep-purple/40 border border-panel-border/50 transition-all duration-300 hover:border-neon-violet/30">
                            <Icon className="text-sm text-yellow-400 shrink-0" />
                            <span className="text-[0.65rem] text-text-secondary">{a.text}</span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default StatsPanel;
