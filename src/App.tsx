import portfolio from "./assets/portfolio.png";
import one from "./assets/one.png";
import cart from "./assets/cart.png";
import search from "./assets/search.png";
import display from "./assets/display.png";
import github from "./assets/github.svg";
import whatsapp from "./assets/whatsapp.svg"
import resume from "./assets/resume.pdf";

const App = () => {
  return (
    <>
      <div className=" h-[30em]">
        <header className="sans  text-center text-3xl mt-3">
          <b>My Portfolio</b>
          
            </header>

        <div className="text-center light text-4xl mt-[140px] appearance">
          Hi, i am Malcolm.
          <br />
          I'm a front-end developer
        </div>
        <br />
        <div className="flex justify-center">
           <button className="border-2  p-3 text-2xl transition-all appearance border-black rounded-full text-center hover:border-[#808080]">
            <a href={resume}>My resume</a>
          </button>
        </div>
      </div>

      <div className=" h-[27em] bg-[#E5E4EA] p-4 max-sm:h-[54em] mb-[30px]">
        <header className="flex justify-center gap-3">
          <div className="w-[40%] grid items-center">
            <hr />
          </div>
          <h1 className="text-center sans text-3xl mt-3 mb-2">About me</h1>
          <div className="w-[40%] grid items-center">
            <hr />
          </div>
        </header>
        <div className="inline-flex justify-center max-sm:max-md:flex-col-reverse">
          <div className=" flex items-center text-center p-5 w-2 light text-[17px] slide max-sm:max:-md:text-center p-2 w-[100%]">
            I'm junior front-end developer with 2 years of experience working at
            Marolt Digital agency, Warri Nigeria. I specialize in creating
            responsive and user-friendly web applications using modern
            technologies such as React, Tailwind, bootstrap, Typescript and version control
            systems <br />
            (git and github).
            <br />
            My passion lies in solving complex problems and delivering effective
            solutions in real life scenerios.
          </div>
          <img
            src={portfolio}
            alt="picture"
            className="h-[330px] object-contain picture"
          />
        </div>
      </div>

      <div className="p-4 mb-[50px]">
        <header className="flex justify-center gap-3 mb-[30px]">
          <div className="w-[40%] grid items-center">
            <hr />
          </div>
          <h1 className="text-center sans text-3xl mt-3 mb-2">
            Featured projects
          </h1>
          <div className="w-[40%] grid items-center">
            <hr />
          </div>
        </header>

        <div className=" grid grid-cols-2 gap-7 max-sm:max-md:grid-cols-1 gap-6">
          <img
            src={one}
            loading="lazy"
            alt="Main page"
            className="w-[600px] border-1 appearance"
          />
          <img
            src={search}
            loading="lazy"
            alt="search-bar"
            className="w-[600px] border-1 appearance"
          />
          <img
            loading="lazy"
            src={display}
            alt="display page"
            className="w-[600px] border-1 appearance"
          />
          <img
            src={cart}
            loading="lazy"
            alt="Cart page"
            className="w-[600px] border-1 appearance"
          />
        </div>
        <p className="light text-center mt-7 mb-7 p-4 slide">
          An E-commerce website for clothes shopping built with React,
          bootstrap, react-router-dom featuring a functional search bar that
          displays data gotten from an API whenever there is an input, a
          functional cart page with a remove item function and a display page
          for all the products available.
        </p>
        <div className="text-center">
          link:
          <a
            href="https://everlane-weld.vercel.app/"
            target="_blank"
            className="sans ml-4 underline"
          >
            Everlane web app
          </a>
        </div>
      </div>

      <footer>
        <div className="bg-[#E5E4EA]">
          <header className="flex justify-center gap-3 mb-[20px]">
            <div className="w-[40%] grid items-center">
              <hr />
            </div>
            <h1 className="text-center sans text-3xl mt-3 mb-2">Contact me</h1>
            <div className="w-[40%] grid items-center">
              <hr />
            </div>
          </header>
          <br />
          <div className="flex justify-center">
            <a
              href="https://github.com/Malcolm759"
              target="_blank"
              className="sans ml-4 underline"
            >
              <img
                loading="lazy"
                src={github}
                alt="display page"
                className="w-[90px] max-sm:max-md:w-[50px]"
              />
            </a>

            <a
              href="https://wa.me/+2348149601724"
              target="_blank"
              className="sans ml-4 underline"
            >
              <img
                loading="lazy"
                src={whatsapp}
                alt="display page"
                className="w-[90px] max-sm:max-md:w-[50px]"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
