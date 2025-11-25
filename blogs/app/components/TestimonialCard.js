 "use client"
import { Star } from "lucide-react";
import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import { IoBookmark } from "react-icons/io5";

 const TestimonialCard = ({ name, image, quote, rating }) => {

  const [bookmark, setBookmark] = useState(false)

  return (
    <div className="card w-72  relative shadow-xl border border-base-300">
      <span onClick={()=>setBookmark(!bookmark)} className="absolute   top-3 left-4.5 text-2xl">
        {bookmark ? <IoBookmark /> : <CiBookmark /> }
        </span>
      <div className="card-body items-center text-center p-2 ">
        <div className="avatar mb-3 flex justify-center">
          <div className="w-16 rounded-full  overflow-hidden">
            <img src={image} alt={`Avatar of ${name}`} className="w-full h-full object-cover" />
          </div>
        </div>
        <h2 className="card-title text-lg font-semibold">{name}</h2>
        <p className="text-sm text-gray-500 italic">"{quote}"</p>
        <div className="flex justify-center mt-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            size={20}
            className={index < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
          />
        ))}
      </div>
      </div>
    </div>
  );
};

export default TestimonialCard
