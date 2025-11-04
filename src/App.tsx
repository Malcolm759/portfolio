import portfolio from "./assets/portfolio.png";
const App = () => {
  return (
    <>
      <div className=" h-[30em]">
        <header className="Sans text-center text-3xl mt-3">
          <b>My Portfolio</b>
        </header>

        <div className="text-center light text-4xl mt-[140px] appearance">
          Hi, i am Malcolm.
          <br />
          I'm a front-end developer
        </div>
      </div>

      <div className=" h-[27em] bg-[#E5E4EA] p-4 max-sm:h-[54em]">
        <h1 className="text-center sans text-3xl mt-3">About me</h1>
        <div className="inline-flex justify-center max-sm:max-md:flex-col-reverse">
          <div className=" flex items-center text-center p-5 w-2 light text-[17px] slide max-sm:max:-md:text-center p-2 w-[100%]">
            I'm junior front-end developer with 2 years of experience working at
            Marolt Digital agency, Warri Nigeria. I specialize in creating
            responsive and user-friendly web applications using modern
            technologies such as React, Tailwind, Typescript and version
            control systems <br />
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
    </>
  );
};

export default App;
