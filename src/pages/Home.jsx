import React from "react"
import { Banner, Hero, BannerReverse, BestProducts } from "../components"
import { Phone, Phone2 } from "../assets"

const Home = () => {
  return (
    <div>
      <Hero />
      <BestProducts/>
      <Banner
        title="High quality devices"
        text="Bargain E-Commerce provides the best products at affordable prices directly from manufacturers."
        img={Phone}
      />
      <BannerReverse
        title="High quality devices"
        text="Bargain E-Commerce provides the best products at affordable prices directly from manufacturers."
        img={Phone2}
      />
      
    </div>
  )
}

export default Home
