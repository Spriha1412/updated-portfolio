import React, { useState } from 'react';
import { FaBitcoin, FaNewspaper, FaPuzzlePiece, FaChartLine, FaCloudSunRain, FaLock, FaPlus, FaGithub, FaTimes, FaSearch } from 'react-icons/fa';

const projects = [
    {
        icon: FaChartLine,
        title: 'WealthMind',
        description: 'High-fidelity financial tracking dashboards with intuitive data visual.',
        stack: 'Figma, Framer',
        status: 'working',
        color: 'text-neon-magenta',
        github: null,
    },
    {
        icon: FaBitcoin,
        title: 'ChainMetrics',
        description: 'Crypto portfolio tracker with real-time prices & persistence.',
        stack: 'React, Node.js, SQLite',
        status: 'completed',
        color: 'text-yellow-400',
        github: 'https://github.com/Spriha1412/ChainMetrics',
    },
    {
        icon: FaNewspaper,
        title: 'NewsSync',
        description: 'Real-time responsive news platform with category filters.',
        stack: 'React, Tailwind, Framer Motion',
        status: 'completed',
        color: 'text-neon-cyan',
        github: 'https://github.com/Spriha1412/NewsSync',
    },
    {
        icon: FaPuzzlePiece,
        title: 'The Challenge Box',
        description: 'Interactive coding challenge generator with difficulty tiers.',
        stack: 'HTML, CSS, JavaScript',
        status: 'completed',
        color: 'text-neon-violet',
        github: 'https://github.com/Spriha1412/The-Challenge-Box',
    },
    {
        icon: FaCloudSunRain,
        title: 'Dynamic Weather App',
        description: 'Real-time weather with dynamic backgrounds & location data.',
        stack: 'HTML, CSS, JavaScript',
        status: 'completed',
        color: 'text-green-400',
        github: 'https://github.com/Spriha1412/Dynamic-Weather-app',
    },
];

const ProjectsPanel = ({ glowing }) => {
    const [inspecting, setInspecting] = useState(null);

    return (
        <section id="projects-panel" className={`neon-card p-5 animate-float-in transition-all duration-500 ${glowing ? 'ring-4 ring-neon-violet shadow-2xl shadow-neon-violet/40 animate-pulse-glow' : ''}`} style={{ animationDelay: '0.2s' }}>
            <h2 className="panel-title">🎒 Projects</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projects.map((project) => {
                    const Icon = project.icon;
                    const isWorking = project.status === 'working';
                    return (
                        <div
                            key={project.title}
                            onClick={() => setInspecting(inspecting === project.title ? null : project.title)}
                            className="neon-glow-border rounded-2xl p-4 bg-deep-purple/40 transition-all duration-300 hover:scale-[1.03] hover:shadow-lg cursor-pointer group"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-deep-purple2/80 flex items-center justify-center shrink-0 border border-panel-border group-hover:border-transparent transition-colors">
                                        <Icon className={`text-lg ${project.color} transition-all duration-300 group-hover:drop-shadow-[0_0_8px_currentColor]`} />
                                    </div>
                                    <h3 className="text-sm font-semibold text-text-primary leading-tight">
                                        {project.title}
                                    </h3>
                                </div>
                                {/* Status Tag */}
                                <span className={`text-[0.5rem] font-bold font-[var(--font-orbitron)] px-2 py-0.5 rounded-full shrink-0 uppercase tracking-wider
                                    ${isWorking
                                        ? 'text-yellow-400 bg-yellow-400/10 border border-yellow-400/30'
                                        : 'text-green-400 bg-green-400/10 border border-green-400/30'
                                    }`}>
                                    {isWorking ? 'Working' : 'Completed'}
                                </span>
                            </div>

                            {/* Inspect Button — larger and more visible */}
                            <div
                                className={`flex items-center gap-2 text-[0.65rem] font-[var(--font-orbitron)] uppercase tracking-wider mt-1 px-3 py-1.5 rounded-lg border transition-all duration-300
                                    ${inspecting === project.title
                                        ? 'text-neon-cyan border-neon-cyan/40 bg-neon-cyan/10'
                                        : 'text-text-muted border-panel-border hover:text-neon-cyan hover:border-neon-cyan/40'
                                    }`}
                            >
                                <FaSearch className="text-[0.55rem]" />
                                {inspecting === project.title ? 'Close' : 'Inspect'}
                            </div>

                            {/* Inspect Popup — inline expand */}
                            {inspecting === project.title && (
                                <div className="mt-3 pt-3 border-t border-panel-border animate-float-in">
                                    <p className="text-[0.65rem] text-text-secondary mb-2 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <span className="inline-block text-[0.55rem] font-[var(--font-orbitron)] text-neon-cyan/80 bg-neon-cyan/10 px-2 py-0.5 rounded-full mb-3">
                                        {project.stack}
                                    </span>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="flex items-center gap-2 w-full justify-center bg-gradient-to-r from-neon-violet/20 to-neon-magenta/20 border border-neon-violet/40 rounded-xl px-3 py-2 text-[0.6rem] font-[var(--font-orbitron)] text-neon-violet hover:text-white hover:from-neon-violet/40 hover:to-neon-magenta/40 transition-all duration-300 uppercase tracking-wider"
                                        >
                                            <FaGithub className="text-sm" />
                                            View on GitHub
                                        </a>
                                    )}
                                    {!project.github && (
                                        <p className="text-[0.55rem] text-text-muted/60 font-[var(--font-orbitron)] italic text-center">
                                            🚧 In Development
                                        </p>
                                    )}
                                </div>
                            )}
                        </div>
                    );
                })}

                {/* Locked Project */}
                <div className="neon-glow-border rounded-2xl p-4 bg-deep-purple/40 opacity-40 cursor-not-allowed relative overflow-hidden">
                    <div className="absolute inset-0 backdrop-blur-[2px] bg-deep-purple/30 z-10 flex items-center justify-center">
                        <FaLock className="text-xl text-text-muted/60" />
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-deep-purple2/80 flex items-center justify-center shrink-0 border border-panel-border">
                            <span className="text-lg text-text-muted">?</span>
                        </div>
                        <h3 className="text-sm font-semibold text-text-muted">Locked Project</h3>
                    </div>
                </div>

                {/* Add New Project */}
                <div className="rounded-2xl p-4 border-2 border-dashed border-panel-border bg-transparent cursor-pointer transition-all duration-300 hover:border-neon-violet/50 hover:bg-neon-violet/5 flex items-center justify-center gap-2 group min-h-[88px]">
                    <FaPlus className="text-sm text-text-muted group-hover:text-neon-violet transition-colors" />
                    <span className="text-xs text-text-muted group-hover:text-neon-violet font-medium transition-colors">
                        Add New Project
                    </span>
                </div>
            </div>
        </section>
    );
};

export default ProjectsPanel;
