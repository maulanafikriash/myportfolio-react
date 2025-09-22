import portfolio from "../data/portfolioData";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-slate-100 pt-36 pb-16 dark:bg-slate-800"
    >
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg text-primary mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-dark dark:text-white text-3xl mb-4">
              Latest Projects
            </h2>
            <p className="text-secondary font-medium text-md">
              Here are the web-based projects I have worked on, both in teams
              and individually.
            </p>
          </div>
        </div>

        <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
          {portfolio.map((item) => (
            <div key={item.id} className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full" />
              </div>

              <h3 className="font-semibold text-dark dark:text-white text-xl mt-5 mb-3">
                {item.title}
              </h3>

              {item.link && (
                <a
                  className="font-semibold text-primary pb-5 dark:text-white block"
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit
                </a>
              )}

              {item.description &&
              typeof item.description === "object" &&
              !Array.isArray(item.description) ? (
                <>
                  {item.description.intro && (
                    <p className="font-medium text-base text-secondary mt-2 text-justify">
                      {item.description.intro}
                    </p>
                  )}

                  {Array.isArray(item.description.points) &&
                    item.description.points.length > 0 && (
                      <ul className="list-disc list-inside mt-2 text-base text-secondary">
                        {item.description.points.map((line, idx) => (
                          <li key={idx} className="mb-1">
                            {line}
                          </li>
                        ))}
                      </ul>
                    )}
                </>
              ) : Array.isArray(item.description) ? (
                <ul className="list-disc list-inside mt-2 text-base text-secondary">
                  {item.description.map((line, idx) => (
                    <li key={idx} className="mb-1">
                      {line}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="font-medium text-base text-secondary mt-2 text-justify">
                  {item.description}
                </p>
              )}

              <p className="mt-2 text-sm text-slate-500">
                Built with: {item.tech}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
