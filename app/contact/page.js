"use client";
import React from "react";
import { handleform } from "../actions/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner"


const page = () => {
  const handler = async (formData) => {
    const data = {
      email: formData.get("email"),
      username: formData.get("username"),
      message: formData.get("message"),
    };
    const res = await handleform(data);
    if (res.success) {
     toast("Email Has Been Sent")

    } else {
     toast("Faild To Send Mail")

    }
  };
  return (
    <div className="w-full flex flex-col md:flex-row items-center h-[89vh]">
      <div className="w-1/2 h-full  flex justify-center items-center">
           <Toaster />
        <div className="text-3xl capitalize">
          <span className="text-black/20 dark:text-gray-400 text-5xl ">
            Fill
          </span>{" "}
          This Form to <br />{" "}
          <span className="text-black/20 dark:text-gray-400 text-5xl ">
            contact Us
          </span>
        </div>
      </div>
      <div className="md:w-1/2 w-full p-5 h-full flex items-center">
        <form
          action={handler}
          className="md:w-1/2 w-[80%] mx-auto flex flex-col gap-5"
        >
          <Label className="my-2" htmlFor="email">
            Email{" "}
          </Label>
          <Input type="email" id="email" placeholder="Email" name="email" />

          <Label className="my-2" htmlFor="username">
            Username{" "}
          </Label>
          <Input
            type="username"
            id="username"
            placeholder="Username"
            name="username"
          />

          <Label className="my-2" htmlFor="message">
            Message{" "}
          </Label>
          <Textarea
            placeholder="Type your message here."
            id="message"
            name="message"
          />
          <Button>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default page;
