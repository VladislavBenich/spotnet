import React, { useState, useEffect } from 'react';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollPosition = window.innerHeight + window.pageYOffset;
      if (scrollHeight - scrollPosition > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  return isVisible ? (
    <div className="fixed right-8 bottom-8 z-50">
      <button
        onClick={scrollToBottom}
        className="group bg-backdrop-dark border-border-light text-primary font-primary hover:bg-backdrop-darker hover:border-border-lighter relative flex cursor-pointer items-center gap-2 rounded-full border px-5 py-3 text-sm backdrop-blur-[8px] transition-all duration-200 ease-in-out"
      >
        <span className="font-medium">Scroll down</span>
        <svg
          className="translate-y-[1px] transform transition-transform duration-200 ease-in-out group-hover:translate-y-[2px]"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div className="from-gradient-purple to-gradient-transparent absolute inset-[-1px] rounded-full bg-gradient-to-r p-[1px] opacity-0 transition-opacity duration-200 ease-in-out [mask-composite:exclude] [mask-image:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] group-hover:opacity-100" />
      </button>
    </div>
  ) : null;
};

export default ScrollButton;
