import React from 'react'
import { CiInstagram, CiLinkedin, CiTwitter, CiYoutube } from 'react-icons/ci'

const Footer = () => {
    const links = [<CiYoutube/>,<CiInstagram />,<CiTwitter />,<CiLinkedin />]
  return (
    <footer className='backdrop-blur-3xl  rounded-xl bg-transparent flex justify-between px-5 items-center p-2'>
        <h3 className='font-bold text-xl'>Blogs</h3>
        <div><p className='capitalize text-sm text-zinc-500'>all rights are reserved <sup>&copy;</sup> | | created by <span className='text-zinc-400 tracking-widest font-semibold'>shahbaz</span> with  </p></div>
        <div className='flex gap-2'>
            {links.map((item,index)=>{
                return <span className=' text-2xl cursor-pointer' key={index}> {item}</span>
            })}
        </div>
    </footer>
  )
}

export default Footer