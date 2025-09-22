const icons = [
  "/assets/img/tech/html5.svg",
  "/assets/img/tech/css.svg",
  "/assets/img/tech/js.svg",
  "/assets/img/tech/php.svg",
  "/assets/img/tech/codeigniter.svg",
  "/assets/img/tech/postgresql.svg",
  "/assets/img/tech/mysql.svg",
  "/assets/img/tech/bootstrap.svg",
  "/assets/img/tech/tailwindcss.svg",
  "/assets/img/tech/react.svg",
];

export default function Skills() {
  return (
    <section id="skills" className="pt-36 pb-32 dark:bg-dark">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">Skills</h4>
            <h2 className="font-bold text-dark text-3xl mb-4 dark:text-white">
              My Skills
            </h2>
          </div>
        </div>

        <div className="w-full px-4">
          <div className="grid grid-cols-2 justify-center sm:flex sm:flex-wrap items-center">
            {icons.slice(0, 6).map((src, i) => (
              <div
                key={i}
                className="mx-auto max-w-[120px] py-4 lg:mx-6 xl:mx-8"
              >
                <img src={src} alt={`skill-${i}`} />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full px-4">
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center justify-center">
            {icons.slice(6).map((src, i) => (
              <div
                key={i}
                className="mx-auto max-w-[120px] py-4 lg:mx-6 xl:mx-8"
              >
                <img src={src} alt={`skill2-${i}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
