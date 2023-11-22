import web1 from "../../images/web1.png";
import web2 from "../../images/web2.png";
import web3 from "../../images/web3.png";
import web4 from "../../images/web4.png";
import web5 from "../../images/web5.png";
import web6 from "../../images/web6.png";
import web7 from "../../images/web7.png";
import web8 from "../../images/web8.png";
import web9 from "../../images/web9.png";
import Image from "next/image";
import Navbar from "./Navbar";

const Work = () => {
  return (
    <>
      <Navbar />
      <hr />
      <section className="bg-white ">
        <div className="container px-6 py-10 mx-auto">
          <div className="text-center">
            <h1 className="uppercase block text-center text-3xl xs:text-4xl md:text-5xl italic p-5 font-bold">
              Work
            </h1>

            <p className="py-4 md:text-lg lg:px-64 text-slate-600">
              I&apos;ve embarked on numerous projects throughout the years, but these
              are the ones I hold closest to my heart. Many of them are
              open-source, so if you come across something that intrigues your
              interest, feel free to explore the codebase and contribute your
              ideas for further enhancements. Your collaboration is highly
              valued!
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:grid-cols-2">
            <div>
              <Image
                className="relative z-10 object-cover w-full rounded-md h-96 transform hover:scale-125 transition duration-300"
                src={web1}
                alt="project image"
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow border">
                <a
                  href="https://google2-0-build.vercel.app/"
                  className="font-semibold text-blue-700 hover:underline md:text-xl"
                >
                  Google Clone
                </a>

                <p className="mt-3 text-sm text-gray-500">
                  A perfect{" "}
                  <span className="underline decoration-sky-500 text-gray-900">
                    Google Clone
                  </span>
                </p>

                <div class="inline-flex rounded-md gap-2">
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    NextJS
                  </p>
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    TailwindCSS
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                className="relative z-10 object-cover w-full rounded-md h-96 transform hover:scale-125 transition duration-300"
                src={web2}
                alt="project image"
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow">
                <a
                  href="https://hulu-clone-coderpoop.vercel.app/"
                  className="font-semibold text-blue-700 hover:underline "
                >
                  Hulu Clone
                </a>

                <p className="mt-3 text-sm text-gray-500 md:text-sm">
                  An exceptional{" "}
                  <span className="underline decoration-sky-500 text-gray-900">
                    Hulu Clone
                  </span>
                </p>

                <div class="inline-flex rounded-md gap-2">
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    NextJS
                  </p>
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    TailwindCSS
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                className="relative z-10 object-cover w-full rounded-md h-96 transform hover:scale-125 transition duration-300"
                src={web3}
                alt="project image"
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow border">
                <a
                  href="https://tweetera.vercel.app/"
                  className="font-semibold text-blue-700 hover:underline md:text-xl"
                >
                  Tweetera
                </a>

                <p className="mt-3 text-sm text-gray-500 md:text-sm">
                  Tweetera: An out of the ordinary{" "}
                  <span className="underline decoration-sky-500 text-gray-900">
                    Twitter Clone
                  </span>
                </p>

                <div class="inline-flex rounded-md gap-2">
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    NextJS
                  </p>
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    TailwindCSS
                  </p>
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    Prisma
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                className="relative z-10 object-cover w-full rounded-md h-96 transform hover:scale-125 transition duration-300"
                src={web4}
                alt="project image"
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow border">
                <a
                  href="https://ping-pong-arjuncodess.vercel.app/"
                  className="font-semibold text-blue-700 hover:underline md:text-xl"
                >
                  Ping Pong Clone
                </a>

                <p className="mt-3 text-sm text-gray-500 md:text-sm">
                  A remarkable clone of the classic{" "}
                  <span className="underline decoration-sky-500 text-gray-900">
                    Ping Pong Game
                  </span>
                </p>

                <div class="inline-flex rounded-md gap-2">
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    HTML
                  </p>
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    CSS
                  </p>
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    JavaScript
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                className="relative z-10 object-cover w-full rounded-md h-96 transform hover:scale-125 transition duration-300"
                src={web5}
                alt="project image"
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow border">
                <a
                  href="https://sushiexpress.vercel.app/"
                  className="font-semibold text-blue-700 hover:underline md:text-xl"
                >
                  Japanese Sushi
                </a>

                <p className="mt-3 text-sm text-gray-500 md:text-sm">
                  A remarkable{" "}
                  <span className="underline decoration-sky-500 text-gray-900">
                    Japanese Sushi Delivering
                  </span>{" "}
                  website
                </p>
                <div class="inline-flex rounded-md gap-2">
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    HTML
                  </p>
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    CSS
                  </p>
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    JavaScript
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                className="relative z-10 object-cover w-full rounded-md h-96 transform hover:scale-125 transition duration-300"
                src={web6}
                alt="project image"
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow border">
                <a
                  href="https://pricetrackr.vercel.app/"
                  className="font-semibold text-blue-700 hover:underline md:text-xl"
                >
                  Price Trackr
                </a>

                <p className="mt-3 text-sm text-gray-500 md:text-sm">
                  <span className="underline decoration-sky-500 text-gray-900">
                    Smart Shopping{" "}
                  </span>
                  Starts Here: PriceTrackr
                </p>

                <div class="inline-flex rounded-md gap-2">
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    NextJS
                  </p>
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    TailwindCSS
                  </p>
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    MongoDB
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                className="relative z-10 object-cover w-full rounded-md h-96 transform hover:scale-125 transition duration-300"
                src={web7}
                alt="project image"
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow border">
                <a
                  href="https://colab.research.google.com/drive/1iwgvRg3kQLh_ytNUEb81HhKAYFFJMArD?usp=sharing"
                  className="font-semibold text-blue-700 hover:underline md:text-xl"
                >
                  Movie Seperations
                </a>

                <p className="mt-3 text-sm text-gray-500 md:text-sm">
                  <span className="underline decoration-sky-500 text-gray-900">
                    Machine Learning Model
                  </span>
                  {" "}That Seperates Movies Based on Theme
                </p>

                <div class="inline-flex rounded-md gap-2">
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    Python
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                className="relative z-10 object-cover w-full rounded-md h-96 transform hover:scale-125 transition duration-300"
                src={web8}
                alt="project image"
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow border">
                <a
                  href="https://colab.research.google.com/drive/16XCoEnVfV6wYi242TfVcXSU9NBl_Rqqv?usp=sharing"
                  className="font-semibold text-blue-700 hover:underline md:text-xl"
                >
                  Movie Recommendation System
                </a>

                <p className="mt-3 text-sm text-gray-500 md:text-sm">
                  <span className="underline decoration-sky-500 text-gray-900">
                    Data Manipulation and Analysis Model
                  </span>
                  {" "}That Recommends Movies
                </p>

                <div class="inline-flex rounded-md gap-2">
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    Python
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Image
                className="relative z-10 object-cover w-full rounded-md h-96 transform hover:scale-125 transition duration-300"
                src={web9}
                alt="project image"
              />

              <div className="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow border">
                <a
                  href="https://github.com/ArjunCodess/tictactoe_AI"
                  className="font-semibold text-blue-700 hover:underline md:text-xl"
                >
                  Tic Tac Toe AI
                </a>

                <p className="mt-3 text-sm text-gray-500 md:text-sm">
                  <span className="underline decoration-sky-500 text-gray-900">
                    An AI for Tic Tac Toe
                  </span>
                  {" "}to Play Against!
                </p>

                <div class="inline-flex rounded-md gap-2">
                  <p class="px-2 py-2 mt-2 rounded-lg text-sm font-medium border border-gray-200 bg-gray-100 text-slate-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-slate-700">
                    Python
                  </p>
                </div>
              </div>
            </div>

            {/* add new project from here! */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
