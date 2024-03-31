export const Footer = () => {
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
              <p className="text-sm">Copyright © 2024 Iqoqacola</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
