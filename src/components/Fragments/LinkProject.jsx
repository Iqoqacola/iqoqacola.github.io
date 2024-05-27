import { Link } from "react-router-dom";

export const LinkProject = ({
  children,
  cover,
  altCover,
  linkCode,
  linkSite,
  title,
  linkCode2,
}) => {
  return (
    <>
      <div className="hover:scale-105 hover:opacity-90 transition duration-300 ease-in-out">
        <div className="w-[300px] h-[450px] p-4 border-2 border-black rounded-lg shadow-lg bg-secondary flex flex-col justify-center items-center hover:bg-thirdty transition duration-300 ease-in-out">
          <div className="w-[250px] flex items-center flex-col gap-2 mt-4">
            <img
              src={cover}
              alt={altCover}
              className="project bg-no-repeat shadow-2xl w-fit h-fit rounded-md border-2 border-black"
            ></img>
            <h3 className="text-lg text-white md:text-xl font-semibold drop-shadow-md">
              {title}
            </h3>
          </div>
          <div className="mt-2">
            <p className="text-white drop-shadow-md text-base">{children}</p>
          </div>
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            <a
              href={linkCode}
              target="_blank"
              className="bg-black text-white px-5 py-2 rounded-md flex gap-2 border-2 hover:border-black hover:bg-white hover:text-black transition ease-in-out duration-300"
            >
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                className="fill-current"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub (FE)
            </a>
            {linkCode2 && (
              <a
                href={linkCode2}
                target="_blank"
                className="bg-black text-white px-5 py-2 rounded-md flex gap-2 border-2 hover:border-black hover:bg-white hover:text-black transition ease-in-out duration-300"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  className="fill-current"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub (BE)
              </a>
            )}
            <a
              href={linkSite}
              target="_blank"
              className="bg-black text-white px-5 py-2 rounded-md flex gap-2 border-2 hover:border-black hover:bg-white hover:text-black transition ease-in-out duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="10"
                className="fill-current"
              >
                <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
              </svg>
              Site
            </a>
          </div>
        </div>{" "}
      </div>
    </>
  );
};
