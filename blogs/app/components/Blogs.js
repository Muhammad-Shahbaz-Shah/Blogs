import { Button } from "@/components/ui/button";  
import Link from "next/link";
import React from "react";

const Blogs = () => {
  const blogs = [
    {
      title: "Python for Beginners",
img: "https://prod.socialgoodplatform.com/p/ff9e491c-49be-4734-803e-a79e6e83dab1/407c875e-1b8b-11ec-9621-0242ac130003/image.png",
desc: "A complete beginner-friendly guide to learning Python with detailed explanations and examples."
    },
    {
      title: "Learn C++",
img: "https://cdn.thenewstack.io/media/2025/01/34e3b0e3-c-introduction.jpg",
desc: "A complete beginner-to-advanced tutorial for learning C++ with detailed examples in a single page."
    },
    {
      title: "Master JavaScript",
img: "https://files.ably.io/ghost/prod/2023/12/choosing-the-best-javascript-frameworks-for-your-next-project.png",
desc: "A complete beginner-to-advanced guide to mastering JavaScript with practical examples."
    },
   
  ];
  return (<div className="dark:bg-zinc-900 bg-zinc-100 p-8 mb-4">
   <div className="my-7">  <h1 className="tracking-wider text-3xl my-2 font-bold text-center">Top Blogs</h1>
     <p className="capitalize tracking-wider  text-center">Choose a plan to get started with us</p></div>
    <div className="w-full flex flex-wrap px-9 item-center  justify-evenly gap-4">
      {blogs.map((item, index) => (
        <div
          key={index}
          className="max-w-[360px]  p-2 border border-gray-200 rounded-lg shadow-sm"
        >
          <Link className="w-full overflow-hidden " href={`/blogs/${item.title.replace(/ (?=)/g, '-')}`}>
            <img
              className="object-cover border border-zinc-300 rounded-t-lg w-full h-42"
              src={item.img}
              alt={item.title}
            />
          </Link>
          <div className="p-1">
            <Link href={`/blogs/${item.title.replace(/ (?=)/g, '-')}`}>
              <h5 className="mb-2 text-xl font-bold tracking-tight">
                {item.title}
              </h5>
            </Link>
            <p className="mb-3 font-normal">{item.desc}</p>
           <Link href={`/blogs/${item.title.replace(/ (?=)/g, '-')}`}>
            <Button type="button">
              Read More{" "}
              <svg
                              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Button>
           </Link>
          </div>
        </div>
      ))}   
    </div>
    
  </div>
  );
};

export default Blogs;
