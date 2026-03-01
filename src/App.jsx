import React, { useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
import StatsPanel from './components/StatsPanel';
import ProjectsPanel from './components/ProjectsPanel';
import ExperiencePanel from './components/ExperiencePanel';
import SocialLinks from './components/SocialLinks';
import ParticleBackground from './components/ParticleBackground';
import WelcomePage from './components/WelcomePage';

const App = () => {
    const [showWelcome, setShowWelcome] = useState(true);
    const [activeSection, setActiveSection] = useState(null);

    return (
        <>
            {/* Global background elements that run continuously across both screens */}
            <ParticleBackground />

            {showWelcome && (
                <WelcomePage onComplete={() => setShowWelcome(false)} />
            )}

            <div className={`transition-opacity duration-1000 ease-in-out ${showWelcome ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100 min-h-screen'}`}>
                <div className="relative z-10 p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
                    {/* Top Profile Header */}
                    <ProfileHeader onSectionChange={setActiveSection} activeSection={activeSection} />

                    {/* 3-Column Dashboard Grid */}
                    <main className="grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-5">
                        {/* Left: Stats */}
                        <StatsPanel glowing={activeSection === 'stats-panel'} />

                        {/* Center: Projects */}
                        <ProjectsPanel glowing={activeSection === 'projects-panel'} />

                        {/* Right: Experience */}
                        <ExperiencePanel glowing={activeSection === 'experience-panel'} />
                    </main>

                    {/* Bottom Social Links */}
                    <SocialLinks glowing={activeSection === 'social-links'} />
                </div>
            </div>
        </>
    );
};

export default App;
