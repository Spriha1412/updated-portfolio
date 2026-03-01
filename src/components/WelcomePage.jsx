import React, { useEffect, useState } from 'react';

const WelcomePage = ({ onComplete }) => {
    const [isExiting, setIsExiting] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    const handleStart = () => {
        setIsExiting(true);
        setTimeout(() => {
            if (onComplete) onComplete();
        }, 800); // Wait for exit animation
    };

    // Parallax effect for mouse movement (fixed conflict with CSS animation)
    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 40;
            const y = (e.clientY / window.innerHeight - 0.5) * 40;
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className={`fixed inset-0 z-[200] overflow-hidden flex flex-col items-center justify-center transition-opacity duration-800 ease-in-out ${isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>

            {/* Ambient Radial Glow behind the whole page matching main app neon colors - INTENSIFIED */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center mix-blend-screen">
                <div className="w-[100vw] h-[100vw] max-w-[1200px] max-h-[1200px] bg-gradient-radial from-neon-violet/30 via-neon-cyan/20 to-transparent blur-[120px] animate-pulse-glow" />
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 flex flex-col items-center justify-between w-full h-full max-w-7xl mx-auto p-4 sm:p-6 md:p-8 pt-6 sm:pt-10 pb-10 max-h-screen overflow-hidden">

                {/* Header Typography - Always fully centered at the top */}
                <div className="flex flex-col items-center text-center mt-2 sm:mt-4 w-full animate-fade-in-up flex-shrink-0 z-20" style={{ animationDelay: '0.1s' }}>
                    <h2 className="text-sm sm:text-lg md:text-2xl text-white font-[var(--font-orbitron)] tracking-[0.2em] md:tracking-[0.3em] uppercase mb-2 md:mb-4 bg-clip-text drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] font-bold border-b-2 border-white/20 pb-1 px-4 inline-block">
                        WELCOME TO MY PORTFOLIO ARENA
                    </h2>
                    <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-[var(--font-orbitron)] text-[#a8d5d1] tracking-tighter drop-shadow-[0_5px_20px_rgba(168,213,209,0.3)]">
                        HI, I'M SPRIHA
                    </h1>
                </div>

                {/* Middle Area: Left Text + Center Avatar */}
                <div className="relative flex-1 w-full max-w-6xl mx-auto flex items-center justify-center -mt-4 sm:mt-0 z-10">

                    {/* Left Text Box (Absolute on desktop to strictly center the avatar, relative on mobile) */}
                    <div className="hidden lg:block absolute left-0 bottom-[10%] xl:bottom-[20%] w-[300px] xl:w-[350px] z-20 animate-fade-in-left" style={{ animationDelay: '0.3s' }}>
                        <p className="text-sm md:text-base text-neon-cyan leading-relaxed font-[var(--font-orbitron)] font-light tracking-[0.1em] drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] border-l-2 border-neon-cyan/50 pl-4 py-1">
                            Frontend Developer passionate about building responsive, user-friendly web experiences.
                            <br /><br />
                            I enjoy transforming ideas into interactive interfaces using modern technologies and clean, intuitive design.
                        </p>
                    </div>

                    <div className="lg:hidden absolute left-4 bottom-[5%] sm:bottom-[10%] w-[180px] sm:w-[250px] z-20 animate-fade-in-left hidden md:block" style={{ animationDelay: '0.3s' }}>
                        <p className="text-xs sm:text-sm text-neon-cyan leading-snug font-[var(--font-orbitron)] font-light tracking-[0.05em] drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] border-l-2 border-neon-cyan/50 pl-3">
                            Frontend Developer passionate about building responsive, user-friendly web experiences.
                        </p>
                    </div>

                    {/* Right Side Button Box (Symmetrical to left text) */}
                    <div className="hidden lg:flex absolute right-0 bottom-[10%] xl:bottom-[20%] w-[300px] xl:w-[350px] justify-end z-30 animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
                        <div className="relative group">
                            {/* Persistent animated glowing aura behind button */}
                            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#ffca61] to-[#ffb62b] rounded-full blur-[15px] opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
                            <button
                                onClick={handleStart}
                                className="relative px-6 py-4 bg-[#ffca61] hover:bg-[#ffb62b] text-black font-bold font-[var(--font-orbitron)] text-sm lg:text-base rounded-full uppercase tracking-wider transition-all duration-300 transform group-hover:scale-105 overflow-hidden flex items-center gap-3 border border-[#ffca61]"
                            >
                                <span className="relative z-10 text-left">START THE<br />EXPERIENCE</span>
                                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </button>
                        </div>
                    </div>

                    {/* Center Avatar WITH SEPARATED ANIMATION to fix mouse movement bug */}
                    <div
                        className="w-[450px] h-[450px] sm:w-[550px] sm:h-[550px] md:w-[650px] md:h-[650px] lg:w-[750px] lg:h-[750px] xl:w-[900px] xl:h-[900px] xl:max-w-[85vh] xl:max-h-[85vh] shrink-0 relative transition-transform duration-100 ease-out z-10 flex items-center justify-center mt-4 lg:-mt-6 xl:-mt-10"
                        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
                    >
                        {/* Nested CSS float animation, separate from the dynamic transform wrapper */}
                        <div className="w-full h-full animate-float relative flex items-center justify-center">
                            {/* Inner glowing core matching the avatar size */}
                            <div className="absolute inset-4 rounded-full bg-neon-cyan/30 blur-[80px] animate-pulse-glow" />

                            <img
                                src="/avatars/welcome-avatar.png"
                                alt="Spriha Avatar"
                                className="w-full h-full object-contain relative z-10 drop-shadow-[0_0_40px_rgba(34,211,238,0.5)] scale-[1.15]"
                            />
                        </div>
                    </div>

                    {/* Mobile/Tablet fallback button -> placed right next to middle area below paragraph */}
                    <div className="lg:hidden absolute right-4 bottom-[5%] sm:bottom-[10%] z-30 animate-fade-in-right" style={{ animationDelay: '0.6s' }}>
                        <div className="relative group">
                            {/* Persistent animated glowing aura behind button */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#ffca61] to-[#ffb62b] rounded-full blur-[10px] opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-glow"></div>
                            <button
                                onClick={handleStart}
                                className="relative px-4 py-3 bg-[#ffca61] hover:bg-[#ffb62b] text-black font-bold font-[var(--font-orbitron)] text-xs rounded-full uppercase tracking-wider transition-all duration-300 transform group-hover:scale-105 overflow-hidden flex items-center gap-1 border border-[#ffca61]"
                            >
                                <span className="relative z-10 text-left">START<br />EXPERIENCE</span>
                                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default WelcomePage;
