export const Hero = () => {
  return (
    <>
      <section id="home" className="pt-32 w-full">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-8 sm:px-44 md:w-1/2 md:px-8 lg:pl-56 self-center">
              <h1 className="text-primary text-xl md:text-2xl font-semibold drop-shadow-lg lg:text-3xl">
                Hello 👋, I'am
                <span className="block text-3xl md:text-4xl text-black font-bold lg:text-5xl my-2">
                  Muhammad Iqbal
                </span>
              </h1>
              <h2 className="text-lg md:text-xl font-medium text-gray-500 lg:text-2xl">
                Full Stack Web Developer 💻
              </h2>
              <p className="text-base md:text-lg md:max-w-none max-w-xs mt-5">
                Web Development Excellence: Your Idea, Our Execution
              </p>

              <a
                href="https://wa.me/+6289690772452"
                target="_blank"
                className="bg-primary p-4 block w-fit mt-5 rounded-xl text-xs md:text-base font-semibold shadow-2xl hover:opacity-80 transition duration-300 ease-in-out relative z-10"
              >
                Contact Me
              </a>
            </div>

            <div className="w-full md:w-1/2 lg:px-48 self-center">
              <div className="relative w-full scale-75 lg:scale-90 flex justify-center">
                <div className="relative w-[350px] h-[350px]">
                  <img
                    src="iqoqacola.png"
                    alt="profile"
                    className="max-w-xs drop-shadow-lg m-auto top-0 right-0 left-0 bottom-24 scale-125 md:scale-150 absolute"
                  ></img>
                  <span className="absolute top-0 right-0 left-0 bottom-0 inset-x-0 -z-10">
                    <svg
                      width="100%"
                      height="300"
                      viewBox="0 0 200 200"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <path
                        fill="#7FC7D9"
                        d="M41.1,-57.9C53.3,-47.8,63.1,-35.7,64.4,-23C65.7,-10.2,58.4,3.2,54.7,18.7C50.9,34.2,50.6,51.7,42.1,65.1C33.5,78.5,16.8,87.7,1,86.4C-14.8,85.1,-29.7,73.2,-42.2,61.1C-54.8,49,-65,36.7,-70.7,22.3C-76.4,7.8,-77.6,-8.9,-71.7,-22.1C-65.8,-35.3,-52.8,-45,-39.7,-54.8C-26.5,-64.6,-13.3,-74.4,0.6,-75.3C14.5,-76.1,29,-68,41.1,-57.9Z"
                        transform="translate(100 100) scale(1.3)"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
