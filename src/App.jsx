export default function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Project></Project>
      <Footer></Footer>
    </>
  );
}

const Header = () => {
  const handleClickHamburger = () => {
    const hamburger = document.getElementById("hamburger");
    const arrayClass = Array.from(hamburger.classList);
    const navbar = document.getElementById("nav-menu");

    if (
      arrayClass.filter((item) => item.includes("hamburger-active")) ==
      "hamburger-active"
    ) {
      hamburger.classList.remove("hamburger-active");
      navbar.classList.toggle("hidden");
    } else {
      hamburger.classList.add("hamburger-active");
      navbar.classList.remove("hidden");
    }
  };

  return (
    <>
      <header
        id="header"
        className="w-full fixed shadow-md bg-opacity-70 top-0 left-0 bg-bgColor z-50"
      >
        <div className="container">
          <div className="flex justify-between md:justify-around relative p-4">
            <div className="px-4 flex items-center">
              <a
                href="#home"
                className="text-lg block font-semibold text-primary drop-shadow-lg uppercase font-sans  md:text-2xl"
              >
                Iqoqacola
              </a>
            </div>

            <div className="flex items-center px-4">
              <button
                id="hamburger"
                type="button"
                className="block md:hidden"
                onClick={handleClickHamburger}
              >
                <span className="hamburger-line hamburger-transition origin-top-left"></span>
                <span className="hamburger-line hamburger-transition"></span>
                <span className="hamburger-line hamburger-transition origin-bottom-left"></span>
              </button>

              <nav
                id="nav-menu"
                className="md:flex md:static md:max-w-full md:shadow-none md:bg-transparent absolute right-4 top-16 bg shadow-lg max-w-[200px] w-full bg-bgColor rounded-lg p-2 hidden"
              >
                <ul className="block">
                  <li className="group">
                    <a
                      href="#home"
                      className="text-base font-semibold text-secondary py-2 px-8 flex group-hover:text-primary items-center box-border md:text-2xl transition duration-300 ease-in-out"
                    >
                      HOME
                    </a>
                  </li>
                </ul>
                <ul className="block">
                  <li className="group">
                    <a
                      href="#about"
                      className="text-base font-semibold text-secondary py-2 px-8 flex group-hover:text-primary items-center box-border md:text-2xl transition duration-300 ease-in-out"
                    >
                      ABOUT ME
                    </a>
                  </li>
                </ul>
                <ul className="block">
                  <li className="group">
                    <a
                      href="#project"
                      className="text-base font-semibold text-secondary py-2 px-8 flex group-hover:text-primary items-center box-border md:text-2xl transition duration-300 ease-in-out"
                    >
                      PROJECT
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const Hero = () => {
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

const About = () => {
  let AboutMe = `I am a Full Stack Software Developer with a focus on modern web development, specializing primarily in using React to build dynamic and responsive user interfaces. I possess a strong understanding of frontend development using React and modern JavaScript. Additionally, I have a solid grasp of backend development with Node.js and Express.`;

  return (
    <>
      <section id="about" className="lg:my-20 my-8">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 self-center lg:pl-56">
              <h3 className="text-primary text-xl font-bold md:text-3xl">
                ABOUT ME
              </h3>
              <h4></h4>
              <p className="text-secondary text-base md:text-2xl">
                {AboutMe}{" "}
                <a
                  href="https://drive.google.com/uc?export=download&id=1TIP2QHwFuxF42U7LLaWn_RP4BHAtR0v5"
                  target="_blank"
                  className="text-slate-700 hover:text-slate-400 font-semibold"
                >
                  Read more...
                </a>
              </p>
            </div>

            <div className="w-full px-4 my-6 lg:w-1/2 flex justify-center flex-col">
              <h3 className="text-secondary text-large font-bold md:text-3xl text-center">
                SOCIAL MEDIA
              </h3>

              <div className="icon flex flex-wrap m-5 gap-7 justify-center">
                {/* INSTAGRAM */}
                <a
                  target="_blank"
                  href="https://www.instagram.com/iqoqacola_/"
                  className="text-secondary hover:text-primary transition duration-300 ease-in-out"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    className="fill-current"
                  >
                    <title>Instagram</title>
                    <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
                  </svg>
                </a>

                {/* FACEBOOK */}
                <a
                  target="_blank"
                  href="https://www.facebook.com/annisa.s.904750 "
                  className="text-secondary hover:text-primary transition duration-300 ease-in-out"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    className="fill-current"
                  >
                    <title>Facebook</title>
                    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
                  </svg>
                </a>

                {/* TWITTER X */}
                <a
                  target="_blank"
                  href="https://twitter.com/iqoqacolaa"
                  className="text-secondary hover:text-primary transition duration-300 ease-in-out"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    className="fill-current"
                  >
                    <title>X</title>
                    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                  </svg>
                </a>

                {/* FREECODECAMP */}
                <a
                  target="_blank"
                  href="https://www.freecodecamp.org/Iqoqacola"
                  className="text-secondary hover:text-primary transition duration-300 ease-in-out"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    className="fill-current"
                  >
                    <title>freeCodeCamp</title>
                    <path d="M19.885 3.906a.621.621 0 00-.354.12c-.08.08-.161.196-.161.313 0 .2.236.474.673.923 1.822 1.754 2.738 3.903 2.732 6.494-.007 2.867-.97 5.17-2.844 6.954-.394.353-.556.63-.557.867 0 .116.08.237.16.353.076.08.237.162.353.162.434 0 1.04-.512 1.833-1.509 1.542-1.89 2.24-3.978 2.279-6.824.036-2.847-.857-4.777-2.603-6.77-.63-.712-1.153-1.082-1.511-1.083zm-15.769.002c-.358 0-.882.37-1.51 1.083C.858 6.984-.035 8.914.001 11.761c.04 2.846.737 4.933 2.28 6.824.791.997 1.398 1.51 1.832 1.509a.573.573 0 00.352-.162c.08-.116.16-.237.16-.353 0-.237-.162-.514-.556-.866-1.873-1.785-2.837-4.087-2.844-6.955-.006-2.591.91-4.74 2.732-6.494.437-.449.674-.722.673-.923 0-.117-.08-.233-.161-.313a.621.621 0 00-.354-.12zm7.056.895s.655 2.081-2.649 6.727c-3.156 4.433 1.045 7.15 1.432 7.386-.281-.18-2.001-1.5.402-5.423.466-.77 1.076-1.47 1.834-3.041 0 0 .67.946.32 2.998-.523 3.101 2.271 2.214 2.314 2.257.976 1.15-.808 3.17-.917 3.233-.108.061 5.096-3.13 1.399-7.935-.253.253-.582 1.442-1.267 1.266-.684-.174 2.125-3.494-2.868-7.468zM9.955 18.916c.023.016.038.024.038.024l-.038-.024z" />
                  </svg>
                </a>

                {/* GITHUB */}
                <a
                  target="_blank"
                  href="https://github.com/Iqoqacola"
                  className="text-secondary hover:text-primary transition duration-300 ease-in-out"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    className="fill-current"
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>

                {/* LINKEDIN */}
                <a
                  target="_blank"
                  href="https://www.linkedin.com/feed/"
                  className="text-secondary hover:text-primary transition duration-300 ease-in-out"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    className="fill-current"
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const Project = () => {
  return (
    <>
      <section id="project" className="bg-[#c9e0df] pb-10">
        <div className="container p-5">
          <h3 className="m-5 text-xl md:text-3xl font-bold text-[#0F1035] text-center">
            PROJECT
          </h3>

          <div className="flex w-full justify-center flex-wrap gap-5 md:gap-10">
            <a
              href="https://iqoqacola.github.io/tic-tac-toe"
              target="_blank"
              className="hover:scale-105 hover:opacity-95 transition duration-300 ease-in-out"
            >
              <div className="shadow-2xll w-[300px] h-[375px] border-slate-500 border-2 rounded-2xl bg-bgColor flex flex-col justify-center items-center gap-10">
                <img
                  src="/tic-tac-toe.png"
                  alt="tictactoe project"
                  className="project bg-no-repeat shadow-2xl w-[250px] h-[250px] rounded-md"
                ></img>
                <h3 className="text-lg  md:text-2xl font-semibold">
                  TIC TAC TOE
                </h3>
              </div>
            </a>

            <a
              href="https://iqoqacola.github.io/calculator-app"
              target="_blank"
              className="hover:scale-105 hover:opacity-95 transition duration-300 ease-in-out"
            >
              <div className="shadow-2xll w-[300px] h-[375px] border-slate-500 border-2 rounded-2xl bg-bgColor flex flex-col justify-center items-center gap-10">
                <img
                  src="/calculator.png"
                  alt="calculator project"
                  className="project bg-no-repeat shadow-2xl w-[250px] h-[250px] rounded-md"
                ></img>
                <h3 className="text-lg  md:text-2xl font-semibold">
                  CALCULATOR
                </h3>
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="flex flex-wrap p-5">
            <div className="w-full m-2 md:mx-16">
              <div>
                <h2>Iqoqacola</h2>
                <p>
                  Petung, Cengkeh Jl. Tomat RT 14
                  <br />
                  Kabupaten Penajam 76141 <br />
                  PPU, Indonesia
                </p>
                <h2>Contact</h2>
                <a
                  href="mailto:iqoqacola@gmail.com"
                  className="flex gap-1 text-[#9197A1] text-sm md:text-lg items-center hover:text-primary transition duration-300 ease-in-out"
                >
                  <svg
                    width={"15"}
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <title>Gmail</title>
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                  iqoqacola@gmail.com
                </a>
              </div>
            </div>
            <div className="w-full border-t-[1px] md:mx-16 m-2 py-4">
              <p className="text-sm">Hak Cipta © 2024 Iqoqacola</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
