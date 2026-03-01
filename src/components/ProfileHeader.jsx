import React, { useState, useRef, useEffect } from 'react';
import { FaDownload, FaCoins, FaTimes, FaEye } from 'react-icons/fa';
import TypewriterText from './TypewriterText';

const avatars = [
    {
        id: 'profile',
        src: '/avatars/profile.png',
        label: 'Profile',
        section: null,
        borderColor: 'from-neon-violet via-neon-magenta to-neon-cyan',
    },
    {
        id: 'skills',
        src: '/avatars/avatar-skills.png',
        label: 'Skills',
        section: 'stats-panel',
        borderColor: 'from-neon-cyan to-neon-violet',
    },
    {
        id: 'experience',
        src: '/avatars/avatar-experience.png',
        label: 'Experience',
        section: 'experience-panel',
        borderColor: 'from-green-400 to-neon-cyan',
    },
    {
        id: 'projects',
        src: '/avatars/avatar-projects.png',
        label: 'Projects',
        section: 'projects-panel',
        borderColor: 'from-neon-magenta to-neon-cyan',
    },
    {
        id: 'contact',
        src: '/avatars/avatar-contact.png',
        label: 'Contact',
        section: 'social-links',
        borderColor: 'from-neon-violet to-neon-magenta',
    },
];

const ProfileHeader = ({ onSectionChange, activeSection }) => {
    const [selectedAvatar, setSelectedAvatar] = useState('profile');
    const [showSelector, setShowSelector] = useState(false);
    const [showResume, setShowResume] = useState(false);
    const selectorRef = useRef(null);
    const xpPercent = 78;

    // Close resume modal on Escape
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') setShowResume(false);
        };
        if (showResume) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = '';
        };
    }, [showResume]);

    // Close selector when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (selectorRef.current && !selectorRef.current.contains(e.target)) {
                setShowSelector(false);
            }
        };
        if (showSelector) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showSelector]);

    const handleAvatarClick = (avatar) => {
        setSelectedAvatar(avatar.id);

        // Tell App which section to highlight (null for profile = no highlight)
        if (onSectionChange) {
            onSectionChange(avatar.section);
        }

        // Scroll to section
        if (avatar.section) {
            const el = document.getElementById(avatar.section);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            // Profile selected — scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        setShowSelector(false);
    };

    const activeAvatar = avatars.find((a) => a.id === selectedAvatar) || avatars[0];

    return (
        <>
            <header className="neon-card p-5 md:p-6 mb-5 animate-float-in">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
                    {/* Left: Main Avatar + Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-5">
                        {/* Main Avatar Display — click to toggle selector */}
                        <div className="relative shrink-0" ref={selectorRef}>
                            <button
                                onClick={() => setShowSelector(!showSelector)}
                                className="relative cursor-pointer group"
                                aria-label="Select character avatar"
                            >
                                <div className={`w-28 h-28 md:w-36 md:h-36 rounded-full bg-gradient-to-br ${activeAvatar.borderColor} p-[3px] transition-all duration-500 group-hover:shadow-xl group-hover:shadow-neon-violet/30`}>
                                    <div className="w-full h-full rounded-full bg-deep-purple overflow-hidden">
                                        <img
                                            src={activeAvatar.src}
                                            alt={activeAvatar.label}
                                            className="w-full h-full object-cover object-top scale-125 transition-all duration-500"
                                        />
                                    </div>
                                </div>
                                {/* Level Badge */}
                                <div className="absolute -bottom-1 -right-1 bg-gradient-to-r from-neon-violet to-neon-magenta text-white text-[0.6rem] font-bold font-[var(--font-orbitron)] px-2.5 py-1 rounded-full shadow-lg shadow-neon-violet/30">
                                    LVL 21
                                </div>
                                {/* Click hint */}
                                <div className="absolute -top-1 -left-1 w-6 h-6 rounded-full bg-neon-cyan/20 border border-neon-cyan/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <span className="text-[0.5rem] text-neon-cyan">▼</span>
                                </div>
                            </button>
                            {/* Select Avatar hint */}
                            <p className="text-[0.5rem] text-neon-cyan/70 font-[var(--font-orbitron)] tracking-wider text-center mt-1.5 animate-pulse cursor-pointer" onClick={() => setShowSelector(!showSelector)}>
                                ▸ Select Your Avatar
                            </p>

                            {/* Avatar Selector Popup — opens to the RIGHT */}
                            {showSelector && (
                                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 z-50 animate-float-in">
                                    <div className="neon-card neon-glow-border p-4 rounded-2xl min-w-[320px]">
                                        <p className="text-[0.6rem] text-text-muted font-[var(--font-orbitron)] tracking-widest uppercase mb-3 text-center">
                                            Select Character
                                        </p>
                                        <div className="flex items-end justify-center gap-2.5 flex-wrap">
                                            {avatars.map((avatar) => {
                                                const isActive = selectedAvatar === avatar.id;
                                                return (
                                                    <button
                                                        key={avatar.id}
                                                        onClick={() => handleAvatarClick(avatar)}
                                                        className={`group/av flex flex-col items-center gap-1 transition-all duration-300 cursor-pointer
                                                            ${isActive ? 'scale-110' : 'hover:scale-105 opacity-70 hover:opacity-100'}`}
                                                    >
                                                        <div
                                                            className={`relative rounded-2xl overflow-hidden transition-all duration-300
                                                                ${isActive
                                                                    ? 'w-14 h-18 ring-2 ring-neon-violet shadow-lg shadow-neon-violet/30'
                                                                    : 'w-11 h-14 ring-1 ring-panel-border hover:ring-neon-violet/50'
                                                                }`}
                                                        >
                                                            <div className={`absolute inset-0 bg-gradient-to-b ${avatar.borderColor} opacity-20 group-hover/av:opacity-30 transition-opacity`} />
                                                            <img src={avatar.src} alt={avatar.label} className="w-full h-full object-cover object-top" />
                                                            {isActive && (
                                                                <div className="absolute inset-0 border-2 border-neon-violet/50 rounded-2xl" />
                                                            )}
                                                        </div>
                                                        <span
                                                            className={`text-[0.5rem] font-[var(--font-orbitron)] tracking-wider uppercase transition-colors duration-300
                                                                ${isActive ? 'text-neon-violet' : 'text-text-muted group-hover/av:text-text-secondary'}`}
                                                        >
                                                            {avatar.label}
                                                        </span>
                                                        {avatar.section && (
                                                            <span className={`w-1 h-1 rounded-full transition-colors duration-300 ${isActive ? 'bg-neon-cyan' : 'bg-text-muted/30'}`} />
                                                        )}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    {/* Arrow pointer on left side */}
                                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 rotate-45 bg-panel border-b border-l border-panel-border" />
                                </div>
                            )}
                        </div>

                        {/* Name + Title */}
                        <div className="text-center sm:text-left">
                            <h1 className="text-2xl md:text-3xl font-bold font-[var(--font-orbitron)] bg-gradient-to-r from-neon-violet via-neon-magenta to-neon-cyan bg-clip-text text-transparent leading-tight">
                                Spriha
                            </h1>
                            <p className="text-neon-cyan font-semibold text-sm mt-1 tracking-wide">
                                Frontend Developer
                            </p>
                            <p className="text-text-secondary text-xs mt-0.5 max-w-xs h-4">
                                <TypewriterText
                                    texts={[
                                        'Building responsive apps with React & modern JS',
                                        'Strong in component-based architecture',
                                        'Focused on performance optimization',
                                        'Seeking entry-level development roles',
                                    ]}
                                />
                            </p>

                            {/* XP Bar */}
                            <div className="mt-3 w-[200px]">
                                <div className="flex items-center gap-2 mb-1.5">
                                    <span className="text-[0.65rem] font-bold font-[var(--font-orbitron)] text-neon-violet tracking-wider">XP</span>
                                    <div className="flex-1 h-3 bg-deep-purple2/70 rounded-full overflow-hidden border border-panel-border">
                                        <div
                                            className="h-full rounded-full bg-gradient-to-r from-xp-start via-neon-violet to-neon-magenta"
                                            style={{ width: `${xpPercent}%` }}
                                        />
                                    </div>
                                    <span className="text-[0.65rem] font-bold font-[var(--font-orbitron)] text-neon-cyan tabular-nums">{xpPercent}/100</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Credits + Resume */}
                    <div className="flex items-center gap-3 shrink-0">
                        <div className="flex items-center gap-1.5 bg-deep-purple2/60 border border-panel-border rounded-full px-3 py-1.5">
                            <FaCoins className="text-sm text-yellow-400" />
                            <span className="text-sm font-bold text-text-primary font-[var(--font-orbitron)]">12,450</span>
                        </div>
                        <button
                            onClick={() => setShowResume(true)}
                            className="flex items-center gap-2 bg-gradient-to-r from-neon-violet to-neon-magenta px-5 py-2 rounded-full text-sm font-semibold text-white shadow-lg shadow-neon-violet/30 transition-all duration-300 hover:shadow-xl hover:shadow-neon-violet/50 hover:scale-105 cursor-pointer"
                        >
                            <FaEye className="text-xs" />
                            Resume
                        </button>
                    </div>
                </div>
            </header>

            {/* Resume Modal Overlay */}
            {showResume && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8" onClick={() => setShowResume(false)}>
                    {/* Backdrop */}
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

                    {/* Modal */}
                    <div
                        className="relative w-full max-w-4xl h-[90vh] neon-card neon-glow-border rounded-2xl overflow-hidden flex flex-col animate-float-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Top bar */}
                        <div className="flex items-center justify-between px-5 py-3 border-b border-panel-border bg-deep-purple2/60">
                            <h3 className="text-sm font-bold font-[var(--font-orbitron)] text-text-primary tracking-wider">
                                📄 Resume — Spriha Jha
                            </h3>
                            <div className="flex items-center gap-3">
                                <a
                                    href="/resume.pdf"
                                    download="Spriha_Jha_Resume.pdf"
                                    className="flex items-center gap-2 bg-gradient-to-r from-neon-violet/30 to-neon-magenta/30 border border-neon-violet/50 rounded-full px-4 py-1.5 text-[0.65rem] font-[var(--font-orbitron)] text-neon-violet hover:text-white hover:from-neon-violet/50 hover:to-neon-magenta/50 transition-all duration-300 uppercase tracking-wider"
                                >
                                    <FaDownload className="text-xs" />
                                    Download
                                </a>
                                <button
                                    onClick={() => setShowResume(false)}
                                    className="w-8 h-8 rounded-full bg-deep-purple2/80 border border-panel-border flex items-center justify-center text-text-muted hover:text-neon-magenta hover:border-neon-magenta/50 transition-all duration-300 cursor-pointer"
                                >
                                    <FaTimes className="text-sm" />
                                </button>
                            </div>
                        </div>

                        {/* PDF Viewer */}
                        <div className="flex-1 bg-white/5">
                            <iframe
                                src="/resume.pdf"
                                className="w-full h-full border-0"
                                title="Resume"
                            />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProfileHeader;

