export default function About() {
  return (
    <section id="about" className="pt-36 pb-32 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full px-4 mb-10 lg:w-1/2">
            <h4 className="font-bold text-primary text-lg mb-4">About Me</h4>
            <h2 className="font-bold text-dark dark:text-white text-3xl mb-5 max-w-md">
              Passionate About Technology and Continuous Learning.
            </h2>
            <p className="font-medium text-base text-secondary max-w-xl lg:text-lg text-justify">
              I am a Bachelor's degree graduate in Information Systems from the
              Faculty of Engineering & Informatics at Bina Sarana Informatika
              University. I also serve as a mentor in the Coding Camp powered by
              DBS Foundation 2025, where I lead and assist a cohort of 25
              students in a Front-End & Back-End development class.
            </p>
            <br />
            <p className="font-medium text-base text-secondary max-w-xl lg:text-lg text-justify">
              I have also participated in the SIB Dicoding x Kampus Merdeka
              Batch 5 program in 2023 to enhance my skills in the field of
              technology. I believe that this education and experience will help
              me prepare for the challenges in the ever-evolving tech industry.
              I am very passionate about the world of technology and am
              committed to continuous learning.
            </p>
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <h3 className="font-semibold text-dark dark:text-white text-2xl mb-4 lg:text-3xl lg:pt-10">
              let's be friends
            </h3>
            <p className="font-medium text-base text-secondary mb-6 lg:text-lg text-justify">
              Feel free to reach out and connect with me on social media. Im
              always open to building relationships and discussing new ideas in
              the world of technology.
            </p>
            <div className="flex items-center">
              <a
                href="https://github.com/maulanafikriash"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-400 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
              <a
                href="https://instagram.com/maulanafikriash"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-400 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Instagram</title>
                  <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/maulanafikriash/"
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-400 hover:border-primary hover:bg-primary hover:text-white"
              >
                <svg
                  role="img"
                  width="20"
                  className="fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>LinkedIn</title>
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            {/* Resume section */}
            <div className="w-full rounded-lg border border-slate-200 bg-white/70 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-800/60 mt-7">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0 md:max-w-xl">
                  <h4 className="text-lg font-semibold text-dark dark:text-white">
                    Download My CV / Resume
                  </h4>
                  <p className="text-sm text-secondary mt-1">
                    Download my CV in PDF format or view it directly in your
                    browser.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {/* Download button */}
                  <a
                    href="/assets/file/resume_maulanafikriash_2025.pdf"
                    download
                    className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-white text-sm font-medium shadow hover:opacity-95 transition"
                    aria-label="Download CV (PDF)"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {/* Download icon */}
                    <svg
                      aria-hidden="true"
                      width="18"
                      className="mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 3v12"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 11l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 21H3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Download CV
                  </a>

                  {/* View button */}
                  <a
                    href="/assets/file/resume_maulanafikriash_2025.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-transparent px-5 py-2 text-sm font-medium text-dark dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition"
                    aria-label="View CV (PDF in new tab)"
                  >
                    {/* Eye icon */}
                    <svg
                      aria-hidden="true"
                      width="18"
                      className="mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="12"
                        cy="12"
                        r="3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    View CV
                  </a>
                </div>
              </div>

              <div className="mt-3 text-xs text-slate-500">
                <span>PDF • ~233 KB • Last updated: Sept 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
