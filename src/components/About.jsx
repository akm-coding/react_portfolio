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
              19 years old. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am fascinated by the ever-evolving world of full stack
              development and the ability to create innovative solutions that
              enhance user experiences. Recently, I completed a coding bootcamp
              where I gained a solid foundation in full stack development. I
              have hands-on experience with HTML, CSS, JavaScript, and have
              built responsive web applications using popular frameworks like
              React.js and Laravel. I used React.js for the front-end and integrated
              a PHP back-end for data management. Although I have beginner-level
              experience, I am constantly learning and expanding my skills
              through self-study and hands-on projects. I am eager to
              collaborate and explore new opportunities in the field. Feel free
              to reach out or explore my projects further!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
