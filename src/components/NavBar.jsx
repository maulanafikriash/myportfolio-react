import { useState, useEffect, useRef } from "react";

function DarkToggle() {
  const [dark, setDark] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [dark]);

  return (
    <div className="flex items-center">
      <span className="mr-2 text-sm text-slate-500">light</span>
      <button
        onClick={() => setDark((d) => !d)}
        aria-label="Toggle dark mode"
        className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-500 p-1"
      >
        <span
          className={`h-4 w-4 rounded-full bg-white transition-transform duration-300 ease-in-out ${
            dark ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </button>
      <span className="ml-2 text-sm text-slate-500">dark</span>
    </div>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    const onHash = () => setOpen(false);
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!open) return;
      if (
        navRef.current &&
        !navRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const navItems = ["home", "about", "portfolio", "skills", "contact"];

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white/60 dark:bg-slate-900/60 backdrop-blur-md border-b border-white/10 dark:border-slate-800/60 transition-colors">
      <div className="container">
        <div className="relative flex items-center justify-between">
          <div className="px-4">
            <a
              href="#home"
              className="block py-6 text-lg font-bold text-primary"
            >
              maulanafikriash
            </a>
          </div>

          <div className="flex items-center px-4">
            {/* Hamburger button (visible on mobile). Clean spacing + accessible attributes */}
            <button
              ref={btnRef}
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle navigation"
              aria-expanded={open}
              aria-controls="nav-menu"
              className="relative z-50 inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden focus:outline-none focus:ring-2 focus:ring-primary/50"
            >
              {/* wrapper for 3 lines */}
              <span className="sr-only">Toggle navigation</span>

              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out bg-slate-800 dark:bg-white ${
                  open ? "translate-y-0 rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out bg-slate-800 dark:bg-white ${
                  open ? "opacity-0" : "translate-y-0"
                }`}
              />
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-6 transform transition duration-300 ease-in-out bg-slate-800 dark:bg-white ${
                  open ? "translate-y-0 -rotate-45" : "translate-y-2"
                }`}
              />
            </button>

            {/* Desktop nav always visible; mobile uses hidden/block controlled by open */}
            <nav
              id="nav-menu"
              ref={navRef}
              role="navigation"
              aria-label="Main navigation"
              className={`${
                open ? "block" : "hidden"
              } absolute right-4 top-full z-40 w-full max-w-[260px] rounded-lg bg-white/95 py-4 shadow-lg dark:bg-slate-900/95 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none lg:dark:bg-transparent`}
            >
              <ul className="flex flex-col lg:flex-row lg:items-center">
                {navItems.map((label) => (
                  <li className="group" key={label}>
                    <a
                      href={`#${label}`}
                      onClick={() => setOpen(false)}
                      className="block px-6 py-2 text-base text-dark group-hover:text-primary dark:text-white"
                    >
                      {label === "about"
                        ? "About Me"
                        : label.charAt(0).toUpperCase() + label.slice(1)}
                    </a>
                  </li>
                ))}

                <li className="mt-3 flex items-center px-6 lg:mt-0 lg:ml-4">
                  <DarkToggle />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
