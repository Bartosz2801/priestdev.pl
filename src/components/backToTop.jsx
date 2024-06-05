"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button
    onClick={scrollToTop}
    className={`${
        isVisible ? 'block' : 'hidden'
    } fixed bottom-4 right-4 bg-red-900 text-white px-4 py-2 rounded-md`}
    style={{ fontSize: '1.5rem', width: '3rem', height: '3rem' }}
>
    <FontAwesomeIcon icon={faArrowUp} />
</button>

    );
};

export default BackToTopButton;
