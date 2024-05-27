import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const About = () => {
  let paragrafhOne = `I am a Full Stack Software Developer specializing in modern web development, with a particular focus on utilizing React to construct dynamic and responsive user interfaces. I possess a deep understanding of frontend development using React and modern JavaScript. Additionally, I have a solid grasp of backend development with Node.js and Express.`;

  let paragrafhTwo = `As a lifelong learner, I am continuously honing my craft and exploring emerging technologies to enhance my skill set. Whether it's mastering the latest frameworks or refining my understanding of best practices, I approach each challenge with curiosity and determination.`;

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <>
      <section className="lg:mt-24 mt-8 pt-16">
        <div className="container">
          <div
            className="w-full px-4 self-center lg:w-2/3 lg:pl-32"
            data-aos="fade-right"
          >
            <h3 className="text-red-400 text-xl font-bold md:text-2xl">
              About Me
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width={30}
                  className="fill-current inline"
                >
                  <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 256h64c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16c0-44.2 35.8-80 80-80zm-32-96a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm256-32H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H368c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
              </span>
            </h3>
            <p className="text-black text-base md:text-xl my-4">
              {paragrafhOne}{" "}
            </p>
            <p className="text-black text-base md:text-xl my-4">
              {paragrafhTwo}{" "}
            </p>

            <a
              href="https://drive.google.com/uc?export=download&id=1TIP2QHwFuxF42U7LLaWn_RP4BHAtR0v5"
              target="_blank"
              className="w-fit mt-5 block p-4 shadow-2xl bg-primary font-semibold rounded-xl hover:bg-slate-900 hover:text-white transition duration-300 ease-in-out"
            >
              Download Resume{" "}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width={15}
                  className="fill-current inline"
                >
                  <path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
                </svg>
              </span>
            </a>
          </div>
          <div className="flex items-center mt-10 md:mt-20 flex-col">
            <h3 className="text-2xl text-red-400 font-bold" data-aos="zoom-in">
              Technical Skills{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
                width={40}
                className="fill-current inline ml-2"
              >
                <path d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z" />
              </svg>
            </h3>
            <div className="mt-10 md:mt-20 w-5/6 flex flex-wrap gap-5 justify-center">
              <div
                className="p-12 border-4 rounded-lg shadow-md  items-center justify-center bg-red-400 text-white hover:bg-slate-600 hover:text-slate-300 hover:scale-105 transition ease-in-out duration-300"
                data-aos="fade-up"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width={80}
                  className="fill-current drop-shadow-md"
                >
                  <path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z" />
                </svg>
              </div>
              <div
                className="p-12 border-4 rounded-lg shadow-md bg-red-400 items-center justify-center text-white hover:bg-slate-600 hover:text-slate-300 hover:scale-105 transition ease-in-out duration-300"
                data-aos="fade-up"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  width={80}
                  className="fill-current drop-shadow-md"
                >
                  <path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3 .1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2 .1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z" />
                </svg>
              </div>
              <div
                className="p-12 border-4 rounded-lg shadow-md bg-red-400 flex items-center justify-center  text-white hover:bg-slate-600 hover:text-slate-300 hover:scale-105 transition ease-in-out duration-300"
                data-aos="fade-up"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  width={90}
                  className="fill-current drop-shadow-md"
                >
                  <path d="M333.5 201.4c0-22.1-15.6-34.3-43-34.3h-50.4v71.2h42.5C315.4 238.2 333.5 225 333.5 201.4zM517 188.6c-9.5-30.9-10.9-68.8-9.8-98.1c1.1-30.5-22.7-58.5-54.7-58.5H123.7c-32.1 0-55.8 28.1-54.7 58.5c1 29.3-.3 67.2-9.8 98.1c-9.6 31-25.7 50.6-52.2 53.1v28.5c26.4 2.5 42.6 22.1 52.2 53.1c9.5 30.9 10.9 68.8 9.8 98.1c-1.1 30.5 22.7 58.5 54.7 58.5h328.7c32.1 0 55.8-28.1 54.7-58.5c-1-29.3 .3-67.2 9.8-98.1c9.6-31 25.7-50.6 52.1-53.1v-28.5C542.7 239.2 526.5 219.6 517 188.6zM300.2 375.1h-97.9V136.8h97.4c43.3 0 71.7 23.4 71.7 59.4c0 25.3-19.1 47.9-43.5 51.8v1.3c33.2 3.6 55.5 26.6 55.5 58.3C383.4 349.7 352.1 375.1 300.2 375.1zM290.2 266.4h-50.1v78.4h52.3c34.2 0 52.3-13.7 52.3-39.5C344.7 279.6 326.1 266.4 290.2 266.4z" />
                </svg>
              </div>
              <div
                className="p-12 border-4 rounded-lg shadow-md bg-red-400 flex items-center justify-center  text-white hover:bg-slate-600 hover:text-slate-300 hover:scale-105 transition ease-in-out duration-300"
                data-aos="fade-up"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={90}
                  className="fill-current drop-shadow-md"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.395 7.081c-.488-.207-1.053-.002-1.29.472-.224.448-.523.723-.914.838-.612.183-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C16.214 5.688 14.018 4 11 4 8.586 4 7.346 5.239 5.293 7.293 4.902 7.684 4.899 8.32 5.29 8.71 5.67 9.092 6.28 9.104 6.672 8.74c.01-.009.02-.019.03-.028.552-.426 4.03-.012 5.55 1.196C14.511 11.703 16.142 13 18 13c2.659 0 4.879-1.741 5.94-4.658C24.121 7.844 23.882 7.291 23.395 7.081zM18.395 14.081c-.488-.207-1.053-.002-1.29.472-.224.448-.523.723-.914.838-.612.18-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C11.214 12.688 9.018 11 6 11c-2.414 0-3.654 1.239-5.707 3.293-.391.391-.394 1.027-.003 1.417.38.382.991.395 1.383.03.01-.009.02-.019.03-.028.551-.426 4.031-.012 5.55 1.196C9.511 18.703 11.142 20 13 20c2.659 0 4.879-1.741 5.94-4.658C19.121 14.844 18.882 14.291 18.395 14.081z"></path>
                </svg>
              </div>
              <div
                className="p-12 border-4 rounded-lg shadow-md bg-red-400 flex items-center justify-center  text-white hover:bg-slate-600 hover:text-slate-300 hover:scale-105 transition ease-in-out duration-300"
                data-aos="fade-up"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={90}
                  className="fill-current drop-shadow-md"
                  viewBox="0 0 50 50"
                >
                  <path d="M43.03,27.802c-1.747,0.009-3.261,0.429-4.53,1.054c-0.464-0.926-0.934-1.741-1.013-2.347 c-0.092-0.707-0.199-1.129-0.088-1.972c0.111-0.843,0.599-2.036,0.591-2.125c-0.007-0.089-0.109-0.518-1.117-0.526 c-1.008-0.007-1.87,0.194-1.972,0.46c-0.102,0.266-0.296,0.865-0.416,1.49c-0.177,0.914-2.012,4.174-3.055,5.879 c-0.341-0.666-0.631-1.252-0.691-1.716c-0.092-0.707-0.199-1.129-0.088-1.972c0.111-0.843,0.599-2.036,0.591-2.125 c-0.007-0.089-0.109-0.518-1.117-0.526c-1.008-0.007-1.87,0.194-1.972,0.46c-0.102,0.266-0.21,0.888-0.416,1.49 c-0.207,0.602-2.647,6.039-3.286,7.448c-0.326,0.718-0.609,1.295-0.809,1.689c-0.001-0.001-0.001-0.002-0.001-0.002 s-0.012,0.026-0.034,0.071c-0.171,0.335-0.273,0.521-0.273,0.521s0.001,0.003,0.003,0.007c-0.136,0.246-0.281,0.475-0.353,0.475 c-0.05,0-0.151-0.656,0.022-1.555c0.363-1.886,1.235-4.828,1.227-4.929c-0.004-0.052,0.162-0.564-0.57-0.833 c-0.711-0.26-0.965,0.174-1.03,0.175c-0.063,0.001-0.11,0.153-0.11,0.153s0.793-3.308-1.512-3.308c-1.44,0-3.436,1.576-4.42,3.004 c-0.62,0.338-1.948,1.063-3.357,1.837c-0.541,0.297-1.093,0.601-1.617,0.89c-0.036-0.039-0.071-0.079-0.108-0.118 c-2.794-2.981-7.958-5.089-7.739-9.096c0.08-1.457,0.586-5.293,9.924-9.946c7.649-3.812,13.773-2.763,14.831-0.438 c1.512,3.321-3.273,9.494-11.216,10.384c-3.027,0.339-4.62-0.834-5.017-1.271c-0.417-0.46-0.479-0.481-0.635-0.394 c-0.254,0.141-0.093,0.547,0,0.789c0.237,0.617,1.21,1.712,2.87,2.256c1.46,0.479,5.013,0.742,9.311-0.92 c4.813-1.862,8.571-7.041,7.468-11.37c-1.123-4.403-8.423-5.85-15.332-3.396c-4.112,1.461-8.563,3.754-11.764,6.747 c-3.806,3.56-4.412,6.658-4.162,7.952c0.889,4.6,7.228,7.595,9.767,9.815c-0.125,0.069-0.243,0.134-0.35,0.193 c-1.273,0.63-6.105,3.159-7.314,5.831c-1.371,3.031,0.218,5.206,1.271,5.499c3.26,0.907,6.606-0.725,8.404-3.407 c1.798-2.681,1.578-6.172,0.753-7.766c-0.01-0.02-0.022-0.039-0.032-0.059c0.329-0.195,0.664-0.392,0.996-0.587 c0.648-0.38,1.284-0.735,1.836-1.036c-0.309,0.846-0.535,1.86-0.653,3.325c-0.138,1.721,0.567,3.945,1.49,4.82 c0.406,0.385,0.895,0.394,1.205,0.394c1.074,0,1.564-0.893,2.103-1.95c0.662-1.296,1.249-2.804,1.249-2.804 s-0.737,4.075,1.271,4.075c0.731,0,1.467-0.949,1.795-1.432c0.001,0.005,0.001,0.008,0.001,0.008s0.019-0.031,0.056-0.095 c0.076-0.116,0.119-0.19,0.119-0.19s0.002-0.008,0.004-0.021c0.294-0.51,0.946-1.674,1.924-3.594 c1.263-2.48,2.475-5.586,2.475-5.586s0.113,0.76,0.482,2.015c0.217,0.739,0.679,1.556,1.043,2.339 c-0.293,0.407-0.473,0.64-0.473,0.64s0.002,0.004,0.005,0.012c-0.234,0.311-0.497,0.646-0.772,0.974 c-0.997,1.188-2.185,2.544-2.344,2.936c-0.187,0.461-0.143,0.801,0.219,1.073c0.264,0.199,0.735,0.23,1.227,0.197 c0.896-0.06,1.527-0.283,1.838-0.418c0.485-0.171,1.05-0.441,1.58-0.831c0.978-0.719,1.568-1.748,1.512-3.111 c-0.031-0.751-0.271-1.495-0.574-2.198c0.089-0.128,0.178-0.256,0.267-0.387c1.542-2.255,2.738-4.732,2.738-4.732 s0.113,0.76,0.482,2.015c0.187,0.636,0.556,1.329,0.887,2.009c-1.45,1.178-2.349,2.547-2.662,3.445 c-0.577,1.661-0.125,2.414,0.723,2.585c0.384,0.078,0.927-0.098,1.335-0.271c0.508-0.168,1.118-0.449,1.688-0.868 c0.978-0.719,1.919-1.726,1.862-3.089c-0.026-0.62-0.194-1.236-0.422-1.828c1.229-0.512,2.821-0.797,4.848-0.56 c4.349,0.508,5.202,3.223,5.039,4.359c-0.163,1.137-1.075,1.761-1.38,1.95c-0.305,0.189-0.398,0.254-0.372,0.394 c0.037,0.204,0.178,0.196,0.438,0.152c0.358-0.06,2.283-0.924,2.366-3.022C50.102,30.703,47.55,27.778,43.03,27.802z M9.512,39.102 c-1.44,1.571-3.453,2.165-4.316,1.665c-0.932-0.54-0.563-2.854,1.205-4.521c1.077-1.016,2.468-1.952,3.391-2.529 c0.21-0.126,0.518-0.312,0.893-0.537c0.062-0.035,0.097-0.055,0.097-0.055l-0.001-0.002c0.072-0.043,0.147-0.088,0.223-0.134 C11.647,35.363,11.024,37.453,9.512,39.102z M20.005,31.968c-0.502,1.223-1.552,4.352-2.191,4.184 c-0.549-0.144-0.883-2.523-0.11-4.863c0.389-1.178,1.22-2.586,1.709-3.133c0.786-0.879,1.652-1.167,1.862-0.81 C21.544,27.8,20.32,31.201,20.005,31.968z M28.675,36.105c-0.213,0.111-0.408,0.181-0.498,0.127 c-0.067-0.04,0.088-0.186,0.088-0.186s1.084-1.167,1.512-1.698c0.248-0.309,0.537-0.676,0.85-1.086 c0.003,0.041,0.004,0.082,0.004,0.122C30.627,34.782,29.277,35.725,28.675,36.105z M35.354,34.582 c-0.159-0.113-0.132-0.478,0.389-1.614c0.205-0.446,0.672-1.198,1.485-1.916c0.094,0.295,0.152,0.578,0.15,0.842 C37.367,33.653,36.112,34.31,35.354,34.582z"></path>
                </svg>
              </div>
              <div
                className="p-12 border-4 rounded-lg shadow-md bg-red-400 flex items-center justify-center text-white hover:bg-slate-600 hover:text-slate-300 hover:scale-105 transition ease-in-out duration-300"
                data-aos="fade-up"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width={90}
                  className="fill-current drop-shadow-md"
                >
                  <path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z" />
                </svg>
              </div>
              {/* <div className="p-12 border-4 rounded-lg shadow-md bg-red-400 flex items-center justify-center  text-white hover:bg-slate-600 hover:text-slate-300 hover:scale-105 transition ease-in-out duration-300" data-aos="fade-up">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={90}
                  className="fill-current drop-shadow-md"
                  viewBox="0 0 50 50"
                >
                  <path d="M45,4H5C4.447,4,4,4.448,4,5v40c0,0.552,0.447,1,1,1h40c0.553,0,1-0.448,1-1V5C46,4.448,45.553,4,45,4z M29,26.445h-5V42h-4	V26.445h-5V23h14V26.445z M30.121,41.112v-4.158c0,0,2.271,1.712,4.996,1.712c2.725,0,2.62-1.782,2.62-2.026	c0-2.586-7.721-2.586-7.721-8.315c0-7.791,11.25-4.717,11.25-4.717l-0.14,3.704c0,0-1.887-1.258-4.018-1.258s-2.9,1.013-2.9,2.096	c0,2.795,7.791,2.516,7.791,8.141C42,44.955,30.121,41.112,30.121,41.112z"></path>
                </svg>
              </div> */}
              <div
                className="p-12 border-4 rounded-lg shadow-md bg-red-400 flex items-center justify-center  text-white hover:bg-slate-600 hover:text-slate-300 hover:scale-105 transition ease-in-out duration-300"
                data-aos="fade-up"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  width={90}
                  className="fill-current drop-shadow-md"
                >
                  <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1 .9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2 .6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6 .4 19.5 .6 29.5 .6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8 .9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z" />
                </svg>
              </div>
              <div
                className="p-12 border-4 rounded-lg shadow-md bg-red-400 flex items-center justify-center  text-white hover:bg-slate-600 hover:text-slate-300 hover:scale-105 transition ease-in-out duration-300"
                data-aos="fade-up"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={90}
                  className="fill-current drop-shadow-md"
                  viewBox="0 0 32 32"
                >
                  <path d="M 21.300781 6 C 21.143781 6 21 6.1257812 21 6.3007812 L 21 11.796875 L 19.753906 11.070312 C 19.675906 11.024313 19.588 11.001953 19.5 11.001953 C 19.412 11.001953 19.324094 11.024312 19.246094 11.070312 L 16.251953 12.816406 C 16.095953 12.906406 16 13.072953 16 13.251953 L 16 16.748047 C 16 16.928047 16.095953 17.093594 16.251953 17.183594 L 19.246094 18.929688 C 19.324094 18.975687 19.412 18.998047 19.5 18.998047 C 19.588 18.998047 19.675906 18.975688 19.753906 18.929688 L 22.748047 17.183594 C 22.904047 17.093594 23 16.927047 23 16.748047 L 23 15 L 23 13.251953 L 23 7.2304688 C 23 7.0524688 22.904953 6.8888281 22.751953 6.7988281 L 21.449219 6.0410156 C 21.400219 6.0130156 21.350781 6 21.300781 6 z M 11.5 11.001953 C 11.41225 11.001953 11.324594 11.024813 11.246094 11.070312 L 8.2519531 12.816406 C 8.0959531 12.906406 8 13.072953 8 13.251953 L 8 16.748047 C 8 16.928047 8.0959531 17.093594 8.2519531 17.183594 L 11.246094 18.929688 C 11.403094 19.020688 11.596906 19.020688 11.753906 18.929688 L 14.748047 17.183594 C 14.904047 17.093594 15 16.927047 15 16.748047 L 15 13.251953 C 15 13.071953 14.904047 12.906406 14.748047 12.816406 L 11.753906 11.070312 C 11.675406 11.024812 11.58775 11.001953 11.5 11.001953 z M 27.5 11.001953 C 27.412 11.001953 27.324094 11.024312 27.246094 11.070312 L 24.251953 12.816406 C 24.095953 12.906406 24 13.072953 24 13.251953 L 24 16.748047 C 24 16.928047 24.095953 17.093594 24.251953 17.183594 L 27.15625 18.939453 C 27.31225 19.034453 27.508016 19.035359 27.666016 18.943359 L 29.09375 18.113281 C 29.24175 18.028281 29.24275 17.813562 29.09375 17.726562 L 26 15.904297 L 26 14.109375 L 27.5 13.236328 L 29 14.109375 L 29 15.359375 C 29 15.526375 29.140375 15.552094 29.234375 15.496094 C 29.612375 15.274094 30.751953 14.613281 30.751953 14.613281 C 30.904953 14.524281 31 14.359641 31 14.181641 L 31 13.251953 C 31 13.071953 30.904047 12.906406 30.748047 12.816406 L 27.753906 11.070312 C 27.674906 11.024313 27.588 11.001953 27.5 11.001953 z M 3.5 11.003906 C 3.412 11.003906 3.3240937 11.026266 3.2460938 11.072266 L 0.25195312 12.816406 C 0.095953125 12.907406 0 13.073906 0 13.253906 L 0 17.716797 C 0 17.934797 0.23582812 18.069938 0.42382812 17.960938 L 1.7519531 17.1875 C 1.9049531 17.0975 2 16.933859 2 16.755859 L 2 14.113281 L 3.5 13.238281 L 5 14.113281 L 5 16.755859 C 5 16.933859 5.0950469 17.0975 5.2480469 17.1875 L 6.5761719 17.960938 C 6.7641719 18.070938 7 17.934797 7 17.716797 L 7 13.253906 C 7 13.073906 6.9040469 12.907406 6.7480469 12.816406 L 3.7539062 11.072266 C 3.6759063 11.026266 3.588 11.003906 3.5 11.003906 z M 19.5 13.236328 L 21 14.111328 L 21 15 L 21 15.888672 L 19.5 16.763672 L 18 15.888672 L 18 14.111328 L 19.5 13.236328 z M 27.5 14.003906 L 26.642578 14.503906 L 26.642578 15.501953 L 27.5 16 L 28.357422 15.501953 L 28.357422 14.503906 L 27.5 14.003906 z M 15.40625 17.998047 C 15.303375 17.998047 15.199375 18.023219 15.109375 18.074219 L 12.296875 19.699219 C 12.111875 19.801219 12 20.001938 12 20.210938 L 12 23.457031 C 12 23.666031 12.116875 23.86275 12.296875 23.96875 L 13.037109 24.390625 C 13.392109 24.565625 13.522594 24.566406 13.683594 24.566406 C 14.213594 24.566406 14.515625 24.249453 14.515625 23.689453 L 14.515625 20.482422 C 14.515625 20.433422 14.477594 20.398438 14.433594 20.398438 L 14.078125 20.398438 C 14.029125 20.398438 13.994141 20.438422 13.994141 20.482422 L 13.994141 23.689453 C 13.994141 23.932453 13.737359 24.181656 13.318359 23.972656 L 12.548828 23.529297 C 12.523828 23.514297 12.505859 23.484078 12.505859 23.455078 L 12.505859 20.208984 C 12.505859 20.179984 12.519828 20.145859 12.548828 20.130859 L 15.361328 18.509766 C 15.391328 18.494766 15.425219 18.494766 15.449219 18.509766 L 18.263672 20.130859 C 18.292672 20.145859 18.306641 20.174984 18.306641 20.208984 L 18.306641 23.455078 C 18.306641 23.489078 18.287672 23.518203 18.263672 23.533203 L 15.449219 25.160156 C 15.424219 25.175156 15.385328 25.175156 15.361328 25.160156 L 14.642578 24.732422 C 14.623578 24.722422 14.593219 24.716562 14.574219 24.726562 C 14.375219 24.843563 14.335391 24.858875 14.150391 24.921875 C 14.101391 24.936875 14.034781 24.966922 14.175781 25.044922 L 15.109375 25.599609 C 15.202375 25.648609 15.30425 25.677734 15.40625 25.677734 C 15.51325 25.677734 15.617219 25.648703 15.699219 25.595703 L 18.511719 23.96875 C 18.696719 23.86675 18.808594 23.666031 18.808594 23.457031 L 18.808594 20.210938 C 18.808594 20.001938 18.691719 19.806219 18.511719 19.699219 L 15.699219 18.074219 C 15.611719 18.023219 15.509125 17.998047 15.40625 17.998047 z M 19.792969 19.496094 C 19.505969 19.496094 19.253906 19.728156 19.253906 20.035156 C 19.253906 20.332156 19.495969 20.576172 19.792969 20.576172 C 20.089969 20.576172 20.332031 20.332156 20.332031 20.035156 C 20.332031 19.728156 20.084969 19.491094 19.792969 19.496094 z M 19.787109 19.582031 C 20.041109 19.582031 20.246094 19.782156 20.246094 20.035156 C 20.246094 20.283156 20.040109 20.488141 19.787109 20.494141 C 19.538109 20.494141 19.335938 20.288156 19.335938 20.035156 C 19.335938 19.782156 19.539109 19.582031 19.787109 19.582031 z M 19.589844 19.728516 L 19.589844 20.335938 L 19.705078 20.335938 L 19.705078 20.09375 L 19.8125 20.09375 C 19.8565 20.09375 19.866953 20.112484 19.876953 20.146484 C 19.876953 20.151484 19.895391 20.308891 19.900391 20.337891 L 20.025391 20.337891 C 20.011391 20.308891 20.001094 20.225781 19.996094 20.175781 C 19.982094 20.097781 19.977531 20.044062 19.894531 20.039062 C 19.938531 20.024063 20.011719 20.000672 20.011719 19.888672 C 20.011719 19.727672 19.871828 19.728516 19.798828 19.728516 L 19.589844 19.728516 z M 19.705078 19.826172 L 19.802734 19.826172 C 19.832734 19.826172 19.890625 19.825203 19.890625 19.908203 C 19.890625 19.942203 19.875875 19.997094 19.796875 19.996094 L 19.705078 19.996094 L 19.705078 19.826172 z M 16.160156 20.322266 C 15.357156 20.322266 14.880859 20.664516 14.880859 21.228516 C 14.880859 21.846516 15.357953 22.011844 16.126953 22.089844 C 17.046953 22.181844 17.119141 22.314141 17.119141 22.494141 C 17.119141 22.810141 16.865484 22.941406 16.271484 22.941406 C 15.526484 22.941406 15.362594 22.756719 15.308594 22.386719 C 15.303594 22.347719 15.268609 22.318359 15.224609 22.318359 L 14.859375 22.318359 C 14.815375 22.318359 14.777344 22.353344 14.777344 22.402344 C 14.777344 22.874344 15.034625 23.439453 16.265625 23.439453 C 17.168625 23.438453 17.679688 23.088609 17.679688 22.474609 C 17.679688 21.866609 17.270297 21.704891 16.404297 21.587891 C 15.528297 21.470891 15.441406 21.412031 15.441406 21.207031 C 15.441406 21.037031 15.513156 20.814453 16.160156 20.814453 C 16.739156 20.814453 16.954969 20.941078 17.042969 21.330078 C 17.052969 21.369078 17.080141 21.392578 17.119141 21.392578 L 17.484375 21.392578 C 17.508375 21.392578 17.528969 21.383141 17.542969 21.369141 C 17.557969 21.350141 17.5675 21.330641 17.5625 21.306641 C 17.5045 20.634641 17.061156 20.322266 16.160156 20.322266 z"></path>
                </svg>
              </div>
              <div
                className="p-12 border-4 rounded-lg shadow-md bg-red-400 flex items-center justify-center  text-white hover:bg-slate-600 hover:text-slate-300 hover:scale-105 transition ease-in-out duration-300"
                data-aos="fade-up"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={90}
                  className="fill-current drop-shadow-md"
                  viewBox="0 0 50 50"
                >
                  <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
                </svg>
              </div>
              <div
                className="p-12 border-4 rounded-lg shadow-md bg-red-400 flex items-center justify-center  text-white hover:bg-slate-600 hover:text-slate-300 hover:scale-105 transition ease-in-out duration-300"
                data-aos="fade-up"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 128 128"
                  width={90}
                  className="fill-current drop-shadow-md"
                >
                  <path d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z" />
                  <path d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z" />
                  <path d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z" />
                  <path d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z" />
                  <path d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z" />
                  <path d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z" />
                  <path d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z" />
                  <path d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z" />
                  <path d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z" />
                  <path d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z" />
                  <path d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z" />
                  <path d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z" />
                  <path d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z" />
                  <path d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z" />
                  <path d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z" />
                  <path d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z" />
                </svg>
              </div>
              <div
                className="p-12 border-4 rounded-lg shadow-md bg-red-400 flex items-center justify-center text-white hover:bg-slate-600 hover:text-slate-300 hover:scale-105 transition ease-in-out duration-300"
                data-aos="fade-up"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={90}
                  className="fill-current drop-shadow-md"
                  viewBox="0 0 50 50"
                >
                  <path d="M 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 24.511719 10.660156 26.511719 10.855469 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 34.511719 20.660156 36.511719 20.855469 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 36.265625 29.390625 33.734375 29.390625 32.171875 27.828125 C 30.855469 26.511719 30.660156 24.511719 31.5625 22.976563 L 27.019531 18.433594 C 26.695313 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.789063 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 Z"></path>
                </svg>
              </div>
              <div
                className="p-12 border-4 rounded-lg shadow-md bg-red-400 flex items-center justify-center text-white hover:bg-slate-600 hover:text-slate-300 hover:scale-105 transition ease-in-out duration-300"
                data-aos="fade-up"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width={90}
                  className="fill-current drop-shadow-md"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </div>
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