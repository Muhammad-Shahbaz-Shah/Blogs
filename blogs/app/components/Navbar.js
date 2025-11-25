"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiAlignRight } from "react-icons/bi";
import LoadingBar from "react-top-loading-bar";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import ThemeToggleButton from "@/components/ui/theme-toggle-button";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [progress, setProgress] = useState(0);
  const theme = useTheme()
  const path = usePathname();

  useEffect(() => {
    setProgress(20);
    setTimeout(() => {
      setProgress(45);
    }, 100);

    setTimeout(() => {
      setProgress(80);
    }, 500);
    setTimeout(() => {
      setProgress(100);
    }, 700);
  }, [path]);
  console.log(theme.theme)

  return (
    <nav className="flex px-15  z-10 backdrop-blur p-3 items-center border-b-zinc-200 justify-between  border-b sticky top-0">
      <LoadingBar color={theme.theme === 'dark' ? "#f1faee" : "#03045e"} progress={progress} />
      <div className="font-bold text-xl"> Blogs</div>

      <div className="hidden md:block">
        <ul className="md:flex gap-3 hidden transition-all duration-600  items-center">
          <li
            className={`${
              path === "/"
                ?  ` ${theme.theme === 'dark' ? 'bg-[#f1faee] text-black' : 'bg-black text-white'} cursor-pointer `
                : "cursor-pointer"
            } px-[4px] p-[1px] rounded `}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`${
              path === "/about" || (path.includes("/about") && path !== "/")
                ? ` ${theme.theme === 'dark' ? 'bg-[#f1faee] text-black' : 'bg-black text-white'} cursor-pointer `
                : "cursor-pointer"
            } px-[4px] p-[1px] rounded`}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`${
              path === "/blogs" || (path.includes("/blogs") && path !== "/")
                ?  ` ${theme.theme === 'dark' ? 'bg-[#f1faee] text-black' : 'bg-black text-white'} cursor-pointer `
                : "cursor-pointer"
            } px-[4px] p-[1px] rounded`}
          >
            <Link href="/blogs">Blog</Link>
          </li>
          <li
            className={`${
              path === "/contact" || (path.includes("/contact") && path !== "/")
                ?  ` ${theme.theme === 'dark' ? 'bg-[#f1faee] text-black' : 'bg-black text-white'} cursor-pointer `
                : "cursor-pointer"
            } px-[4px] p-[1px] rounded`}
          >
            <Link href="/contact">Contact</Link>
          </li>
          <button className="border border-zinc-300 px-3 p-0.5 rounded">
            Login
          </button>
          <button className="border border-zinc-300 px-3 p-0.5 rounded">
            Signup
          </button>

          <ThemeToggleButton />
        </ul>
      </div>
      <div className="flex items-center gap-3 md:hidden ">
        <ThemeToggleButton />

        <Sheet>
          <SheetTrigger>
            <BiAlignRight className=" text-2xl" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle className="text-3xl font-semibold">Blogs</SheetTitle>
              <SheetDescription>
                <div className="flex flex-col justify-between h-[89vh] ">
                  <div className="flex gap-6 flex-col  text-zinc-600        items-center">
                    <SheetClose asChild>
                      <Link
                        className={`${
                          path === "/"
                            ?  ` ${theme.theme === 'dark' ? 'bg-[#f1faee] text-black' : 'bg-black text-white'} cursor-pointer `
                            : "cursor-pointer"
                        } px-[4px] p-[1px] rounded `}
                        href="/"
                      >
                        Home
                      </Link>
                    </SheetClose>

                    <SheetClose asChild>
                      <Link
                        className={`${
                          path === "/about" ||
                          (path.includes("/about") && path !== "/")
                            ?  ` ${theme.theme === 'dark' ? 'bg-[#f1faee] text-black' : 'bg-black text-white'} cursor-pointer `
                            : "cursor-pointer"
                        } px-[4px] p-[1px] rounded`}
                        href="/about"
                      >
                        About
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        className={`${
                          path === "/blogs" ||
                          (path.includes("/blogs") && path !== "/")
                            ? ` ${theme.theme === 'dark' ? 'bg-[#f1faee] text-black' : 'bg-black text-white'} cursor-pointer `
                            : "cursor-pointer"
                        } px-[4px] p-[1px] rounded`}
                        href="/blogs"
                      >
                        Blog
                      </Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link
                        className={`${
                          path === "/contact" ||
                          (path.includes("/contact") && path !== "/")
                            ?  ` ${theme.theme === 'dark' ? 'bg-[#f1faee] text-black' : 'bg-black text-white'} cursor-pointer `
                            : "cursor-pointer"
                        } px-[4px] p-[1px] rounded`}
                        href="/contact"
                      >
                        Contact
                      </Link>
                    </SheetClose>

                    <div className="space-x-2">
                      <button className="border border-zinc-300 px-3 p-0.5 rounded">
                        Login
                      </button>
                      <button className="border border-zinc-300 px-3 p-0.5 rounded">
                        Signup
                      </button>
                    </div>
                  </div>

                  <div className="text-center">
                    All Rights Are Reserved <sup> &copy;</sup> | Created By
                    Shahbaz
                  </div>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
