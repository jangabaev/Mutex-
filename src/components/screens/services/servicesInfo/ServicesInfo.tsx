import React from "react";
import Img1 from "../../../../assets/img/servicescoding.png";
import Img2 from "../../../../assets/img/servicescpu-tower.png";
import Img3 from "../../../../assets/img/serviceselectrical-panel.png";
import "./servicesInfo.css";
const ServicesInfo: React.FC = () => {
  return (
    <section>
      <div className="container">
        <div className="servicesInfo">
          <p>
            Our clients are typically startup or R&D companies with an
            electronic system idea that requires expert Embedded Systems
            Engineers to design, so that they do not need to setup Systems
            Engineering Team which is expensive, time-consuming and requires
            years of experience.
          </p>
          <p>
            Whereas hiring an already trained and experienced Embedded Systems
            Engineering team in nowadays global world is an optimal option for
            companies growth, and with Mutex Embedded Solutions, you can benefit
            from the following:
          </p>

          <div className="servicesInfo__items">
            <div className="servicesInfo__item">
              <div className="servicesInfo__item__img">
                <img src={Img1} alt="" />
              </div>
              <h3>EMBEDDED SOFTWARE</h3>
              <p>
                We specialize in Embedded Microcontroller Software development
                with our own Embedded Software Framework that we developed over
                years, with well-tested libraries, drivers and design patterns.
              </p>
            </div>
            <div className="servicesInfo__item">
              <div className="servicesInfo__item__img">
                <img src={Img2} alt="" />
              </div>
              <h3>PCB AND HARDWARE</h3>
              <p>
                PCB Design is another key area of our expertise, we design PCBs
                for MCUs, LCDs, Memories, Sensors, Motors, Communication devices
                and more. We have helped delivering many products to the market.
              </p>
            </div>
            <div className="servicesInfo__item">
              <div className="servicesInfo__item__img">
                <img src={Img3} alt="" />
              </div>
              <h3>PANEL & ENCLOSURE</h3>
              <p>
                We design panels with keypads and LCD displays for the User
                Interface. We also provide enclosure design service including
                ready-made, plastic molding and aluminum enclosures.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesInfo;
