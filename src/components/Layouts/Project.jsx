import { LinkProject } from "../Fragments/LinkProject";

export const Project = () => {
  return (
    <>
      <section id="project" className="bg-[#c9e0df] pb-10">
        <div className="container p-5">
          <h3 className="m-5 text-xl md:text-3xl font-bold text-[#0F1035] text-center">
            PROJECT
          </h3>

          <div className="flex w-full justify-center flex-wrap gap-5 md:gap-10">
            <LinkProject
              cover="/landing-page.png"
              altCover="landing-page project"
              link="https://iqoqacola.github.io/landing-page"
            >
              LANDING PAGE
            </LinkProject>
            <LinkProject
              cover="/aniverse.png"
              altCover="aniverse project"
              link="https://iqoqacola.github.io/anime-list"
            >
              ANIVERSE
            </LinkProject>
            <LinkProject
              cover="/tic-tac-toe.png"
              altCover="/tic-tac-toe.png"
              link="https://iqoqacola.github.io/tic-tac-toe"
            >
              TIC TAC TOE
            </LinkProject>
            <LinkProject
              cover="/calculator.png"
              altCover="calculator project"
              link="https://iqoqacola.github.io/calculator-app"
            >
              CALCULATOR
            </LinkProject>
          </div>
        </div>
      </section>
    </>
  );
};
