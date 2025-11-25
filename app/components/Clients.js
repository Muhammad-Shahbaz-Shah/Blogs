
"use client"
import React from 'react'
import { CardCarousel } from '@/components/ui/card-carousel'
import TestimonialCard from "./TestimonialCard"
const Clients = () => {
  
    const slides = [
  <TestimonialCard
    name="Alice Johnson"
    image="https://i.pravatar.cc/300?img=1"
    quote="Outstanding experience from start to finish."
    rating={5}
  />,
  <TestimonialCard
    name="Ben Carter"
    image="https://i.pravatar.cc/300?img=2"
    quote="Quick response and very helpful support team."
    rating={4}
  />,
  <TestimonialCard
    name="Clara Mendes"
    image="https://i.pravatar.cc/300?img=3"
    quote="Very satisfied with the quality and service!"
    rating={5}
  />,
  <TestimonialCard
    name="Daniel Smith"
    image="https://i.pravatar.cc/300?img=4"
    quote="Good service but could improve the delivery time."
    rating={3}
  />,
  <TestimonialCard
    name="Ella Brown"
    image="https://i.pravatar.cc/300?img=5"
    quote="Absolutely love it! Highly recommend."
    rating={5}
  />,
  <TestimonialCard
    name="Felix Nguyen"
    image="https://i.pravatar.cc/300?img=6"
    quote="Decent service overall, no major issues."
    rating={4}
  />,
  <TestimonialCard
    name="Grace Lee"
    image="https://i.pravatar.cc/300?img=7"
    quote="Customer support went above and beyond."
    rating={5}
  />,
  <TestimonialCard
    name="Henry Torres"
    image="https://i.pravatar.cc/300?img=8"
    quote="Satisfactory experience, will use again."
    rating={4}
  />,
  <TestimonialCard
    name="Isabella Davis"
    image="https://i.pravatar.cc/300?img=9"
    quote="So easy to work with this team. Great service!"
    rating={5}
  />,
  <TestimonialCard
    name="Jake Wilson"
    image="https://i.pravatar.cc/300?img=10"
    quote="Not bad, but communication could be better."
    rating={3}
  />,
  <TestimonialCard
    name="Kylie Morgan"
    image="https://i.pravatar.cc/300?img=11"
    quote="Perfect experience! Highly professional team."
    rating={5}
  />,
  <TestimonialCard
    name="Liam Patel"
    image="https://i.pravatar.cc/300?img=12"
    quote="Service was okay, pricing felt a bit high."
    rating={3}
  />,
  <TestimonialCard
    name="Maya Singh"
    image="https://i.pravatar.cc/300?img=13"
    quote="Great customer care and attention to detail."
    rating={5}
  />,
  <TestimonialCard
    name="Noah Kim"
    image="https://i.pravatar.cc/300?img=14"
    quote="Product exceeded expectations!"
    rating={5}
  />,
  <TestimonialCard
    name="Olivia Martinez"
    image="https://i.pravatar.cc/300?img=15"
    quote="Very happy with the overall service quality."
    rating={4}
  />
];

  return (<>
     <div className='py-7 bg-zinc-100 dark:bg-zinc-900'>
         <CardCarousel
        data={slides}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={false}
        /> 
    </div> 
  </>
  )
}

export default Clients