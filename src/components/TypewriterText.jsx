import React, { useState, useEffect } from 'react';

const TypewriterText = ({ texts, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000 }) => {
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState('');

    useEffect(() => {
        const current = texts[textIndex];

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                setDisplayText(current.substring(0, charIndex + 1));
                setCharIndex((prev) => prev + 1);
                if (charIndex + 1 === current.length) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                setDisplayText(current.substring(0, charIndex - 1));
                setCharIndex((prev) => prev - 1);
                if (charIndex <= 1) {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % texts.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

    return (
        <span className="inline-flex items-center">
            <span>{displayText}</span>
            <span className="ml-0.5 w-[2px] h-4 bg-neon-cyan animate-[blink_1s_infinite]" />
        </span>
    );
};

export default TypewriterText;
