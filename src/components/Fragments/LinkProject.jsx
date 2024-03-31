export const LinkProject = ({children, cover, altCover, link}) => {
  return (
    <a
      href={link}
      target="_blank"
      className="hover:scale-105 hover:opacity-95 transition duration-300 ease-in-out"
    >
      <div className="shadow-2xll w-[300px] h-[375px] px-2 border-slate-500 border-2 rounded-2xl bg-bgColor flex flex-col justify-center items-center gap-10">
        <div className="w-[250px] h-[250px] flex items-center">
          <img
            src={cover}
            alt={altCover}
            className="project bg-no-repeat shadow-2xl w-fit h-fit rounded-md"
          ></img>
        </div>
        <h3 className="text-lg  md:text-2xl font-semibold">{children}</h3>
      </div>
    </a>
  );
};
