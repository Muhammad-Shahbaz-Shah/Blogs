import React from 'react'
import { Button } from '@/components/ui/button'

const Pricing = () => {
  return (
    <div className=' py-5'>
      <div className="my-5 ">
        <h1 className="tracking-wider text-3xl my-2 font-bold text-center">Pricing Plans</h1>
        <p className="capitalize tracking-wider  text-center">Choose a plan to get started with us</p>
      </div>

      <div className="container mx-auto flex flex-wrap justify-center gap-6 px-4">
        {/* Card Wrapper */}
        {[{
          title: "Starter",
          description: "a Best option for personal use & for your next project.",
          price: "$29",
          features: [
            "Individual configuration",
            "No setup, or hidden fees",
            "Team size: 10 developers",
            "Premium support: 24 months",
            "Free updates: 24 months"
          ],
          borderColor: "border-zinc-300 border"
        }, {
          title: "Company",
          description: "Relevant for multiple users, extended & premium support.",
          price: "$99",
          features: [
            "Individual configuration",
            "No setup, or hidden fees",
            "Team size: 10 developers",
            "Premium support: 24 months",
            "Free updates: 24 months"
          ],
          borderColor: "border-zinc-400 border-2"
        }, {
          title: "Enterprise",
          description: "Best for large scale uses and extended redistribution rights.",
          price: "$499",
          features: [
            "Individual configuration",
            "No setup, or hidden fees",
            "Team size: 10 developers",
            "Premium support: 24 months",
            "Free updates: 24 months"
          ],
          borderColor: "border-zinc-400 border"
        }].map((plan, index) => (
          <div
            key={index}
            className="w-full sm:w-[90%] md:w-[42%] lg:w-[30%] flex justify-center"
          >
            <div
              className={`hover:scale-[1.025] transition-all duration-300 ${plan.borderColor.includes("border-2") && "translate-y-3"}  ${plan.borderColor} flex flex-col gap-3 p-6 text-center w-full max-w-sm rounded-xl shadow-md`}
            >
              <h1 className="text-2xl font-semibold">{plan.title}</h1>
              <p className="capitalize ">{plan.description}</p>
              <p className="font-bold my-1 text-5xl">
                {plan.price}
                <sub className="text-zinc-500 font-normal text-lg">/month</sub>
              </p>
              <ul className="mb-8 space-y-3 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button>Get Started</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricing
