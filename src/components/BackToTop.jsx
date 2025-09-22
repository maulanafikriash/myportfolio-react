import React, { useEffect, useState } from 'react';

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#home"
      className={`h-10 w-10 bg-primary fixed z-[99] bottom-4 right-4 rounded-full flex items-center justify-center transition-opacity ${show ? 'block' : 'hidden'}`}
      id="to-top"
      aria-label="Back to top"
    >
      <span className="h-3 w-3 block rotate-45 border-t-2 border-l-2"></span>
    </a>
  );
}
