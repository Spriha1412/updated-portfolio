import React from 'react';
import { FaBriefcase, FaGraduationCap, FaBook } from 'react-icons/fa';

const quests = [
    {
        icon: FaBriefcase,
        title: 'UI/UX and Web Developer Intern',
        role: 'Cybersort (Remote)',
        period: 'Oct 2025 — Dec 2025',
        status: 'Completed',
        progress: 100,
        colors: 'from-green-400 to-neon-cyan',
        statusColor: 'text-green-400',
        statusBg: 'bg-green-400/10',
        details: [
            'Built responsive UI components from design prototypes',
            'Improved cross-device compatibility & page performance',
            'Collaborated with team on usability improvements',
        ],
    },
    {
        icon: FaGraduationCap,
        title: 'B.Tech — Computer Science',
        role: 'Galgotias University, Greater Noida',
        period: '2022 — Expected 2026',
        status: 'In Progress',
        progress: 85,
        colors: 'from-neon-violet to-neon-cyan',
        statusColor: 'text-neon-cyan',
        statusBg: 'bg-neon-cyan/10',
        details: [],
    },
    {
        icon: FaBook,
        title: 'Placement Preparation',
        role: 'DSA, System Design & Interview Prep',
        period: '2024 — Present',
        status: 'Active',
        progress: 75,
        colors: 'from-neon-magenta to-neon-violet',
        statusColor: 'text-neon-magenta',
        statusBg: 'bg-neon-magenta/10',
        details: null,
    },
];

const ExperiencePanel = ({ glowing }) => {
    return (
        <section id="experience-panel" className={`neon-card p-5 animate-float-in transition-all duration-500 ${glowing ? 'ring-4 ring-neon-violet shadow-2xl shadow-neon-violet/40 animate-pulse-glow' : ''}`} style={{ animationDelay: '0.3s' }}>
            <h2 className="panel-title">🏆 Experience</h2>

            <div className="space-y-3">
                {quests.map((quest) => {
                    const Icon = quest.icon;
                    return (
                        <div
                            key={quest.title}
                            className="neon-glow-border rounded-2xl p-4 bg-deep-purple/40 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer group"
                        >
                            <div className="flex items-start gap-3 mb-2.5">
                                <div className="w-9 h-9 rounded-xl bg-deep-purple2/80 flex items-center justify-center shrink-0 border border-panel-border">
                                    <Icon className="text-lg text-neon-violet group-hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.6)] transition-all duration-300" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="text-sm font-semibold text-text-primary leading-tight">
                                            {quest.title}
                                        </h3>
                                        <span className={`text-[0.55rem] font-bold font-[var(--font-orbitron)] px-2 py-0.5 rounded-full shrink-0 ${quest.statusColor} ${quest.statusBg}`}>
                                            {quest.status}
                                        </span>
                                    </div>
                                    <p className="text-[0.65rem] text-text-muted mt-0.5">{quest.role}</p>
                                    <p className="text-[0.6rem] text-text-muted/60 font-[var(--font-orbitron)]">{quest.period}</p>
                                </div>
                            </div>

                            {/* Quest details */}
                            {quest.details && (
                                <ul className="ml-12 mb-2.5 space-y-0.5">
                                    {quest.details.map((d, i) => (
                                        <li key={i} className="text-[0.6rem] text-text-muted/80 before:content-['▸'] before:text-neon-violet/60 before:mr-1.5">
                                            {d}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Progress Bar */}
                            <div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-[0.55rem] text-text-muted font-[var(--font-orbitron)]">Progress</span>
                                    <span className="text-[0.55rem] text-text-muted font-[var(--font-orbitron)]">{quest.progress}%</span>
                                </div>
                                <div className="w-full h-1.5 bg-deep-purple2/70 rounded-full overflow-hidden border border-panel-border">
                                    <div
                                        className={`h-full rounded-full bg-gradient-to-r ${quest.colors}`}
                                        style={{ width: `${quest.progress}%` }}
                                    />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ExperiencePanel;
