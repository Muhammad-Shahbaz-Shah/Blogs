import React from "react";
import AboutCard from "../components/AboutCard";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div className="w-full h-full">
      <div className="w-full h-[90vh] flex items-center justify-center">
        <div
        animate={{width:[0,"70%"]}}
        className="flex gap-5 w-[70%] md:w-[50%] flex-col md:flex-row items-center justify-center border md:px-5  p-2 shadow-md rounded-2xl">
          <div className="w-[100%] md:w-[30%] flex justify-center items-center">
            <div className="w-40 border h-40 shadow-md rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
          </div>
          <div className="w-[70%]">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="text-justify  leading-[22px]">
              I’m <span className="italic font-semibold">Shahbaz</span>, a web developer passionate about creating clean and user-friendly experiences. Skilled in React  Next.js and Tailwind CSS and I blend design and functionality to build projects that make a real impact.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[87%] mx-auto flex flex-col gap-10 md:5">
        <AboutCard direction= "left" title= "👋 Introduction"
    desc= "Hi! I’m Shahbaz, a passionate web developer who loves building beautiful and functional web applications. My journey into coding started with simple curiosity, and over time it became my full-time passion. I believe in creating experiences that feel intuitive."
    image= "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <AboutCard  direction= "right"
    title= "💻 My Skills"
    desc= "I specialize in React, Next.js, Tailwind CSS, and modern JavaScript, crafting interfaces that are fast, responsive, and user-friendly. My skills extend to backend integrations, API handling, and database management. "
    image= "https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <AboutCard  direction= "left"
    title= "🚀 My Journey"
    desc= "From my early days of building static HTML websites to creating complex, full-stack applications, my career has been a constant evolution. I’ve tackled everything from freelance projects to large-scale systems, each experience teaching me valuable lessons in problem-solving and adaptability."
    image= "https://png.pngtree.com/png-vector/20230831/ourmid/pngtree-man-avatar-image-for-profile-png-image_9197908.png"/>
    <AboutCard direction= "right"
    title= "🎯 My Goals"
    desc= "My mission is to develop applications that not only solve problems but also inspire users through great design and usability. I aim to work on projects that leave a meaningful impact, whether they help a small business grow or make life easier for thousands of users. ."
    image= "https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
    <AboutCard  direction= "left"
    title= "📩 Let’s Connect"
    desc= "If you’d like to collaborate on a project or simply exchange ideas, I’d love to hear from you. Whether you’re a fellow developer, a business owner, or someone curious about tech, I’m always open to meaningful conversations. let’s build something amazing together!"
    image= "https://plus.unsplash.com/premium_photo-1671656349218-5218444643d8?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    more={<Button className={"my-4"}>Contact US</Button>}/>
      </div>
    </div>
  );
};

export default page;
