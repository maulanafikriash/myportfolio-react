export default function Hero() {
  return (
    <section id="home" className="pt-36 dark:bg-dark">
      <div className="container">
        <div className="flex flex-wrap">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-base font-semibold text-primary md:text-xl">
              Hello Guys 👋, I'am
              <span className="block font-bold text-dark dark:text-white text-4xl mt-1 lg:text-5xl">
                Maulana Fikri Ash-Shidiq
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 dark:text-white">
              Front-End Web Developer
            </h2>
            <p className="text-secondary font-medium mb-10 lg:text-2xl dark:text-white">
              I am very enthusiastic about the world of technology and have a
              commitment to keep learning.
            </p>

            <button className="bg-primary text-white px-8 py-3 rounded-full hover:shadow-lg hover:opacity-80 hover:font-semibold transition duration-300 ease-in-out">
              <a href="#contact">Contact Me</a>
            </button>
          </div>

          <div className="w-full self-end px-4 lg:w-1/2">
            <div className="relative mt-10 lg:right-0 lg:mt-9">
              <img
                src="/assets/img/my-img-11.png"
                alt="maulanafikriash"
                className="relative z-10 mx-auto max-w-full rounded-full border-b-2 border-primary"
              />
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 md:scale-125">
                <svg
                  width="400"
                  height="400"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#1041B7"
                    d="M47.4,-51C59.2,-35.6,65.1,-17.8,63.4,-1.7C61.7,14.5,52.6,28.9,40.8,36.6C28.9,44.2,14.5,45,-2,47C-18.4,49,-36.8,52.1,-45.4,44.5C-53.9,36.8,-52.5,18.4,-51.2,1.3C-49.9,-15.8,-48.7,-31.7,-40.2,-47.1C-31.7,-62.4,-15.8,-77.3,1,-78.3C17.8,-79.2,35.6,-66.3,47.4,-51Z"
                    transform="translate(100 100) scale(1.1)"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
