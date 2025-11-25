import React from 'react'

const AboutCard = ({direction,title,desc,image,more}) => {
  return (
    <div className={`w-full items-center justify-around ${direction === "left" ? "md:flex md:flex-row" : "md:flex md:flex-row-reverse"}  flex-col`}>
        <div className='w-full md:w-[72%] px-4 ' >
            <h2 className='text-2xl font-semibold tracking-wider '>{title}</h2>
            <p className='text-justify '>{desc}</p>
            {more}
        </div>
        <div className='w-60 h-60 mx-auto rounded-full overflow-hidden'>
            <img className='w-full  h-full object-cover' src={image} alt={'Shahbaz'}  />
            </div>
    </div>
  )
}

export default AboutCard