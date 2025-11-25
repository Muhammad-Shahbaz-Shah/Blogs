import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

import fs from "fs"
import matter from 'gray-matter';
import Download from '../components/download';



const page = async () => {
  const dir = fs.readdirSync('content','utf-8')
  const blog = dir.map((mdFile)=>{
    const {data} =  matter(fs.readFileSync(`content/${mdFile}`, "utf-8"))
    return data
  }
  
  )
  const Html = dir.map((mdFile)=>{
    const {content} =  matter(fs.readFileSync(`content/${mdFile}`, "utf-8"))
    console.log(content);
    return content
  }
  
  )

  






  return (
    <section>
        <div>
       <h1 className="tracking-wider text-3xl my-2 font-bold text-center">All Blogs</h1>
     <p className="capitalize tracking-wider  text-center">Choose a plan to get started with us</p></div>
     <div className="w-full flex flex-wrap px-9 py-9 item-center  justify-evenly gap-4">
      {blog.map((item, index) =>
      <div
          key={index}
          className="max-w-[360px]  relative p-2 border border-gray-200 rounded-lg shadow-sm"
        >
          <div className='absolute top-3 right-4 text-white dark:text-black dark:bg-white bg-black rounded p-1'>
        <Download />
          </div>
          <Link className="w-full overflow-hidden " href={`/blogs/${item.slug}`}>
            <img
              className="object-cover border border-zinc-300 rounded-t-lg w-full h-42"
              src={item.img}
              alt={item.title}
            />
          </Link>
          <div className="p-1">
             <Link href={`/blogs/${item.slug}`}>
              <h5 className="mb-2 text-xl font-bold tracking-tight">
                {item.title}
              </h5>
            </Link>
            <p className="mb-3 font-normal">{item.desc}</p>
            <Link href={`/blogs/${item.slug}`}>
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
            </Button></Link>
          </div>
        </div>
)}  
    </div>
    </section>
  )
}

export default page