import React from 'react';
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

const socials = [
    {
        icon: FaLinkedinIn,
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/spriha-jha77',
        hoverColor: 'hover:text-blue-400 hover:border-blue-400/50 hover:shadow-blue-400/20',
    },
    {
        icon: FaGithub,
        label: 'GitHub',
        href: 'https://github.com/Spriha1412',
        hoverColor: 'hover:text-white hover:border-white/50 hover:shadow-white/10',
    },
    {
        icon: FaEnvelope,
        label: 'Email',
        href: 'mailto:sprihaj.2004@gmail.com',
        hoverColor: 'hover:text-neon-magenta hover:border-neon-magenta/50 hover:shadow-neon-magenta/20',
    },
];

const SocialLinks = ({ glowing }) => {
    return (
        <footer id="social-links" className={`neon-card p-5 mt-5 animate-float-in transition-all duration-500 ${glowing ? 'ring-4 ring-neon-violet shadow-2xl shadow-neon-violet/40 animate-pulse-glow' : ''}`} style={{ animationDelay: '0.4s' }}>
            <h2 className="panel-title text-center mb-4">✉ Contact Me</h2>
            <div className="flex items-center justify-center gap-6">
                {socials.map((s) => {
                    const Icon = s.icon;
                    return (
                        <a
                            key={s.label}
                            href={s.href}
                            target={s.label === 'Email' ? '_self' : '_blank'}
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            className="group flex flex-col items-center gap-2"
                        >
                            <div className={`w-12 h-12 rounded-full border border-panel-border bg-deep-purple/50 flex items-center justify-center text-text-muted transition-all duration-300 hover:scale-110 hover:shadow-lg ${s.hoverColor}`}>
                                <Icon className="text-xl" />
                            </div>
                            <span className="text-[0.55rem] text-text-muted font-[var(--font-orbitron)] tracking-wider uppercase group-hover:text-text-secondary transition-colors">
                                {s.label}
                            </span>
                        </a>
                    );
                })}
            </div>
        </footer>
    );
};

export default SocialLinks;
