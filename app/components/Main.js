"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const Main = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings:['Coding', 'Web Dev', 'Express JS', 'Data Science', 'Node JS', 'JavaScript' , "React", "Next Js"],
      smartBackspace: false,
      shuffle:true,
      backDelay:'800',  
      loop: true,
      typeSpeed: 40,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className="container px-4 py-10 mx-auto lg:h-128 xlg:space-x-8 lg:flex lg:items-center">
      <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8  pl-9">
        <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
          A <span className="font-semibold">Coding Tutorials</span> for community
          <br className="hidden lg:block" /> using{" "}
          <span className="font-semibold underline decoration-primary">
            <span ref={el} />
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
          Open source Tailwind UI components and templates to
          <br className="hidden lg:block" /> bootstrap your new apps, projects
          or landing sites!
        </p>

        <div className="mt-6 bg-transparent border rounded-lg dark:border-gray-700 lg:w-2/3 focus-within:border-primary focus-within:ring focus-within:ring-primary dark:focus-within:border-primary focus-within:ring-opacity-20"></div>
      </div>

      <div className="w-full mt-4 lg:mt-0 lg:w-1/2 ">
        <img
          src="https://www.creative-tim.com/twcomponents/svg/website-designer-bro-purple.svg"
          alt="tailwind css components"
          className="w-full h-full max-w-md mx-auto"
        />
      </div>
    </section>
  );
};

export default Main;
