import React from "react"
import { Banner, Hero } from "../components"
import { Phone } from "../assets"

const Home = () => {
  return (
    <div>
      <Hero />
      <Banner
        title="High quality devices"
        text="Bargain E-Commerce provides the best products at affordable prices directly from manufacturers."
        img={Phone}
      />
    </div>
  )
}

export default Home
