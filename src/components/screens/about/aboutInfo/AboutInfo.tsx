import React from 'react'
import Plata from "../../../../assets/img/background image2.jpg"
import "./aboutInfo.css"
const AboutInfo:React.FC = () => {
  return (
    <section className="aboutinfo">
        <div className="container">
            <div className="aboutinfo__flex">
                <div className="aboutinfo__left">
                    <h3>EMBEDDED SYSTEMS ENGINEERING</h3>
                    <p>Mutex Embedded Solutions is an Embedded Systems Engineering company specialized in the Design and Development of Embedded Systems products or projects. We help startup companies accelerate their products to market, through our services:</p>
                    <ul>
                        <li>1. Embedded C Software</li>
                        <li>2. PCB Design</li>
                        <li>3. Panel and Enclosure Design</li>
                    </ul>
                    <p>Clients typically reach us with a system/device idea that they want to make and sell. We will Design, Develop and Maintain their Software and Hardware throughout the product lifecycle.</p>
                    <p>The company was founded in 2018 by Mohamed Yaqoob, a Senior Embedded Systems Engineer who graduated from the University of Sheffield UK, with a degree in Systems and Control Engineering BEng. We are very passionate about Embedded Systems.</p>
                    <p>One of our prominent clients is Simple Injection LLC, a company in the USA in the oil and gas industry, that we have been working with since 2018. They dedicate all their Embedded Systems Design and Development tasks to us. Now, they sell their devices all over The United States.</p>
                    <p>Our experience coupled with good engineering practices enable us to Engineer Advanced Embedded Systems.</p>
                    <p>Get your Product to market quickly by hiring Expert Embedded Systems Engineering team.</p>
                </div>
                <div className="aboutinfo__rigth">
                    <img src={Plata} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutInfo