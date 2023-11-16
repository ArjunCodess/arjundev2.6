import Image from "next/image";
import Navbar from "./Navbar";
import imageGallery from "../../images/images-gallery.png";
import laptopHero from "../../images/laptop hero.gif";

const About = () => {
  return (
    <>
      <Navbar />

      <section classNames="py-20 lg:py-24">
        <div className="px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="relative w-full lg:w-1/2 px-4 mb-12 lg:mb-0 lg:pr-24 xl:pr-40">
              <div className="max-w-md md:max-w-lg mx-auto lg:mr-0 mb-12 md:mb-20">
                <div className="flex justify-center items-center mt-10 md:hidden">
                  <Image className="rounded-xl" src={imageGallery} alt="" />
                </div>
              </div>
              <h1 className="font-heading text-5xl xs:text-6xl md:text-7xl font-bold text-gray-900 mt-10 sm:ml-20">
                <span className="block font-serif">ARJUN</span>
                <span className="block text-xl xs:text-1xl md:text-2xl font-serif italic">
                  @arjuncodess
                </span>
                <div className="md:mr-20 lg:mr-0">
                  <span className="block text-4xl xs:text-5xl font-serif italic text-end">
                    developer
                  </span>
                  <span className="block text-4xl xs:text-5xl font-serif italic text-end">
                    designer
                  </span>
                  <span className="block text-4xl xs:text-5xl font-serif italic text-end">
                    student
                  </span>
                  <span className="block text-4xl xs:text-5xl font-serif italic text-end">
                    writer
                  </span>
                </div>
              </h1>
              <div className="md:flex justify-center items-center mt-10 md:ml-40 hidden">
                <Image className="rounded-xl" src={laptopHero} alt="" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4 md:py-20">
              <div className="max-w-md md:max-w-lg xl:max-w-2xl mx-auto lg:mx-0">
                <p className="text-2xl text-gray-800 mb-8 font-bold">
                  Passionate Talented Young Full-Stack Developer, Writer and
                  Student by Profession from India 🇮🇳
                </p>
                <p className="md:text-xl text-lg text-gray-700 mb-8">
                  Namaste! 🙏, my name is Arjun Vijay Prakash 💁‍♂️, and I am a
                  14-year-old full-stack developer based in India. With 4 years
                  of experience in web development, I have developed a passion
                  for creating dynamic and functional websites that meet the
                  needs of my clients. I have participated in several hackathons
                  and coding competitions, which has allowed me to showcase my
                  skills in both front-end and back-end development.
                </p>
                <p className="md:text-xl text-lg text-gray-700">
                  As a developer, I am committed to staying up-to-date with the
                  latest trends and technologies in the industry. My goal is to
                  create websites that not only look great but also provide an
                  exceptional user experience 💻. If you are looking for a
                  talented and dedicated developer to bring your website to
                  life, look no further. I am confident in my ability to deliver
                  a high-quality product that exceeds your expectations 👨‍💻.
                </p>

                <div className="md:flex justify-center items-center mt-10 hidden">
                  <Image className="rounded-xl" src={imageGallery} alt="" />
                </div>
              </div>
            </div>

            <div className="max-w-md md:max-w-lg mx-auto lg:mr-0 mb-12 md:mb-20">
              <div className="flex justify-center items-center mt-10 md:ml-40 md:hidden">
                <Image className="rounded-xl" src={laptopHero} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
