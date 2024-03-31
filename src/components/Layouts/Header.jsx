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