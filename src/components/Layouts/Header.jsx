import { Link } from "react-router-dom";

export const Header = () => {
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
      <header id="header" className="w-full fixed shadow-md top-0 left-0 z-10">
        <div className="container">
          <div className="flex justify-between md:justify-between relative p-4">
            <div className="px-4 flex items-center">
              <Link
                to={"/"}
                className="text-lg block font-bold text-thirdty drop-shadow-lg uppercase font-sans md:text-xl"
              >
                Iqoqacola
              </Link>
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
                    <Link
                      to={"/"}
                      className="text-base font-semibold text-thirdty py-2 px-8 flex group-hover:text-black items-center box-border md:text-xl transition duration-300 ease-in-out"
                    >
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 576 512"
                          width={20}
                          className="fill-current"
                        >
                          <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                        </svg>{" "}
                      </span>
                      Home
                    </Link>
                  </li>
                </ul>
                <ul className="block">
                  <li className="group">
                    <Link
                      to={"/about"}
                      className="text-base font-semibold text-thirdty py-2 px-8 flex group-hover:text-black items-center box-border md:text-xl transition duration-300 ease-in-out"
                    >
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          width={20}
                          className="fill-current"
                        >
                          <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                        </svg>
                      </span>
                      About
                    </Link>
                  </li>
                </ul>
                <ul className="block">
                  <li className="group">
                    <Link
                      to={"/project"}
                      className="text-base font-semibold text-thirdty py-2 px-8 flex group-hover:text-black items-center box-border md:text-xl transition duration-300 ease-in-out"
                    >
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          width={20}
                          className="fill-current"
                        >
                          <path d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z" />
                        </svg>
                      </span>
                      Projects
                    </Link>
                  </li>
                </ul>
                <ul className="block">
                  <li className="group">
                    <Link
                      to={"/contact"}
                      className="text-base font-semibold text-thirdty py-2 px-8 flex group-hover:text-black items-center box-border md:text-xl transition duration-300 ease-in-out"
                    >
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                          width={20}
                          className="fill-current"
                        >
                          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z" />
                        </svg>{" "}
                      </span>
                      Contact
                    </Link>
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
