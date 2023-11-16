import Head from "next/head";
import Link from "next/link";
import AnimatedWave from "./AnimatedWave";
import { useEffect, useRef } from "react";

const Main = () => {
  const GithubLink = "https://github.com/ArjunCodess";
  const InstagramLink = "https://www.instagram.com/arjuncodess/";
  const DevLink = "https://dev.to/arjuncodess";
  const TwitterLink = "https://twitter.com/arjuncodess";
  const LinkTree = "https://linktr.ee/ArjunCodess";

  const myDivRef = useRef(null);
  const minHeight = 640;
  const minWidth = 600;

  useEffect(() => {
    const handleVisibility = () => {
      if (window.innerHeight >= minHeight && window.innerWidth >= minWidth) {
        myDivRef.current.style.display = "block";
      } else {
        myDivRef.current.style.display = "none";
      }
    };

    // Initial check on component mount
    handleVisibility();

    // Check on window resize
    window.addEventListener("resize", handleVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleVisibility);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Home - ArjunCodess</title>
        <meta
          name="description"
          content="Home: Portfolio of a Passionate Talented Young Full-Stack Developer from India 🇮🇳"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div className="flex flex-col items-center justify-center h-screen">
        <div name="home" className="relative lg:block w-full lg:w-auto max-w-lg lg:max-w-fit">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="lg:hidden">
            <div className="absolute top-0 -left-4 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-1 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animation-delay-2000 animate-blob"></div>
            <div class="absolute bottom-24 left-20 w-60 h-60 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animation-delay-4000 animate-blob"></div>
          </div>
          <div
            className="relative hidden md:flex md:flex-col text-black"
            id="mobile-menu"
          >
            <ul className="flex justify-center text-lg text-center py-0">
              <li className="mr-0 hover:bg-blue-600 transition duration-200 each-in-out hover:text-white px-6 py-2 rounded font-medium">
                <Link
                  className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="mr-0 hover:bg-green-600 transition duration-200 each-in-out hover:text-white px-6 py-2 rounded font-medium">
                <Link
                  className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="mr-0 hover:bg-orange-600 transition duration-200 each-in-out hover:text-white px-6 py-2 rounded font-medium">
                <Link
                  className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                  href="/skills"
                >
                  Skills
                </Link>
              </li>
              <li className="mr-0 hover:bg-violet-600 transition duration-200 each-in-out hover:text-white px-6 py-2 rounded font-medium">
                <Link
                  className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                  href="/work"
                >
                  Work
                </Link>
              </li>
              <li className="mr-0 hover:bg-yellow-600 transition duration-200 each-in-out hover:text-white px-6 py-2 rounded font-medium">
                <Link
                  className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="relative md:hidden text-black" id="mobile-menu">
            <ul className="flex justify-center text-lg text-center py-8">
              <li className="mr-0">
                <Link
                  className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                  href="/about"
                >
                  About
                </Link>
              </li>
              <li className="mr-0">
                <Link
                  className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                  href="/skills"
                >
                  Skills
                </Link>
              </li>
              <li className="mr-0">
                <Link
                  className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                  href="/work"
                >
                  Work
                </Link>
              </li>
              <li className="mr-0">
                <Link
                  className="inline-block border border-white rounded hover:border-gray-200 text-black hover:bg-gray-200"
                  href="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-2xl md:text-5xl text-center md:pt-0 px-2 font-heading">
            <h1
              id="name"
              className="p-4 mt-4 font-bold text-[160%] lg:text-[250%] border-[#27274c] lg:hover:border-y-8 rounded-md transition-all"
            >
              <span className="border-green-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md font-serif italic transition-all text-5xl md:text-9xl">
                A
              </span>
              <span className="border-red-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                R
              </span>
              <span className="border-blue-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                J
              </span>
              <span className="border-purple-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                U
              </span>
              <span className="border-yellow-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                N
              </span>
              <span className="border-orange-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                {" "}
              </span>
              <span className="border-orange-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                V
              </span>
              <span className="border-yellow-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                I
              </span>
              <span className="border-pink-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                J
              </span>
              <span className="border-blue-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                A
              </span>
              <span className="border-red-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                Y
              </span>
              <span className="border-blue-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                {" "}
              </span>
              <span className="border-blue-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                P
              </span>
              <span className="border-green-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                R
              </span>
              <span className="border-green-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                A
              </span>
              <span className="border-amber-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                K
              </span>
              <span className="border-orange-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                @
              </span>
              <span className="border-pink-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                S
              </span>
              <span className="border-purple-500 lg:hover:border-b-8 lg:hover:border-t-8 rounded-md transition-all">
                H
              </span>
            </h1>
            <h1 className="lg:p-6 text-lg lg:text-right my-2 text-slate-800">
              @arjuncodess
            </h1>
          </div>
        </div>

        <div>
          <ul className="text-lg wrapper">
            <a href={LinkTree} target="_blank" rel="noreferrer">
              <li className="icon link">
                <span>
                  <i className="fas fa-link fa-spin"></i>
                </span>
              </li>
            </a>

            <a href={GithubLink} target="_blank" rel="noreferrer">
              <li className="icon github">
                <span className="tooltip text-black">Github</span>
                <span>
                  <i className="fab fa-github fa-spin"></i>
                </span>
              </li>
            </a>

            <a href={TwitterLink} target="_blank" rel="noreferrer">
              <li className="icon twitter">
                <span className="tooltip">Twitter</span>
                <span>
                  <i className="fab fa-twitter fa-spin"></i>
                </span>
              </li>
            </a>

            <a href={InstagramLink} target="_blank" rel="noreferrer">
              <li className="icon instagram">
                <span className="tooltip">Instagram</span>
                <span>
                  <i className="fab fa-instagram fa-spin"></i>
                </span>
              </li>
            </a>

            <a href={DevLink} target="_blank" rel="noreferrer">
              <li className="icon dev">
                <span className="tooltip">Dev.to</span>
                <span>
                  <i className="fab fa-dev fa-spin"></i>
                </span>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div className="myDiv hidden lg:block" ref={myDivRef}>
        <AnimatedWave
          color={"#1a3aba"}
          animationDuration="4s"
          opacity={"0.7"}
        />
        <AnimatedWave
          color={"#1a3aba"}
          animationDuration="12s"
          opacity={"0.5"}
        />
        <AnimatedWave
          color={"#1a3aba"}
          animationDirection="reverse"
          animationDuration="10s"
          opacity={"0.2"}
        />
      </div>
    </>
  );
};

export default Main;
