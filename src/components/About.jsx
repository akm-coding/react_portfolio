import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hello. I'm Aung Kaung Myat, a passionate full stack developer. I'm
              19 years old.
            </p>
          </div>
          <div>
            <p>
              I'm a dedicated full stack developer with a beginner experience.
              Skilled in Html, Css, JavaScript, React.js, and PHP. I've built
              responsive web applications and recently completed a coding
              bootcamp. Continuously expanding my knowledge, currently focusing
              on databases and cloud technologies. Open to collaborations and
              eager to explore new opportunities in the field.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
