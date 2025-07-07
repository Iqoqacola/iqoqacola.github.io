import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { LinkProject } from "../components/Fragments/LinkProject";

export const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <section className="mt-16 md:mt-28">
        <div className="container">
          <h3
            className="m-5 text-lg md:text-2xl font-bold text-red-400 text-center"
            data-aos="fade-down"
          >
            My Projects
          </h3>

          <div className="flex w-full justify-center flex-wrap gap-5 md:gap-10">
            <div data-aos="fade-up">
              <LinkProject
                cover="/cinemox.png"
                altCover="cinemox project"
                linkCode="https://github.com/Iqoqacola/CineMOX"
                title={"Cinemox"}
              >
                The CINEMOX project is developed using React. This project
                serves as a platform for users to discover and search for both
                released and upcoming MOVIES based on various categories.
              </LinkProject>
            </div>
            <div data-aos="fade-up">
              <LinkProject
                cover="/task-manager.png"
                altCover="task-manager project"
                linkCode="https://github.com/Iqoqacola/client-taskManajer"
                linkCode2="https://github.com/Iqoqacola/restAPI-taskManager"
                title={"Task Manager"}
              >
                Efficiently manage tasks with Task Manager, leveraging MERN
                Stack. Streamline project organization and task tracking. Enjoy
                seamless collaboration, responsive interface, and enhanced
                productivity.
              </LinkProject>
            </div>

            <div data-aos="fade-up">
              <LinkProject
                cover="/landing-page.png"
                altCover="landing-page project"
                linkSite="https://iqoqacola.github.io/nexcent"
                linkCode="https://github.com/Iqoqacola/nexcent"
                title={"Landing Page"}
              >
                This project focuses on building an optimized landing page using
                React and Bootstrap for rapid development. The goal is to create
                an engaging user experience that increases visitor conversion
                into customers.
              </LinkProject>{" "}
            </div>
            <div data-aos="fade-up">
              <LinkProject
                cover="/aniverse.png"
                altCover="aniverse project"
                linkSite="https://iqoqacola.github.io/anime-list"
                linkCode="https://github.com/Iqoqacola/anime-list"
                title={"Aniverse"}
              >
                The ANIVERSE project is developed using React. This project
                serves as a platform for users to discover and search for both
                released and upcoming anime based on various categories.
              </LinkProject>
            </div>
            <div data-aos="fade-up">
              <LinkProject
                cover="/tic-tac-toe.png"
                altCover="tic-tac-toe 'project"
                linkSite="https://iqoqacola.github.io/tic-tac-toe"
                linkCode="https://github.com/Iqoqacola/tic-tac-toe"
                title={"TicTacToe"}
              >
                Mini project ”Tic Tac Toe”.{" "}
              </LinkProject>
            </div>
            <div data-aos="fade-up">
              <LinkProject
                cover="/calculator.png"
                altCover="calculator project"
                linkSite="https://iqoqacola.github.io/calculator-app"
                linkCode="https://github.com/Iqoqacola/calculator-app"
                title={"Calculator"}
              >
                Mini Project ”Calculator”
              </LinkProject>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-6 md:mt-8">
          <p className="font-normal text-base">
            Copyright @ 2024 | All Rights Reversed.
          </p>
        </div>
      </section>
    </>
  );
};
