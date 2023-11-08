import React from "react";
import Dev from "../../../../assets/icon/dev.png";
import Plata from "../../../../assets/icon/plata.png";
import Grafik from "../../../../assets/icon/grafik.png";
import { data } from "./systemdata";

import "./homeSystem.css";
const HomeSystem: React.FC = () => {
  return (
    <section className="homeSystem">
      <div className="container">
        <div className="homeSystem__text">
          <div className="homeSystem__text__centr">
            <h2>EMBEDDED SYSTEMS ENGINEERING</h2>
            <div className="homeSystem__text__centr__p">
              <p>
                We are dedicated to the Design and Development of Embedded
                Systems Solutions including Software, Hardware, Electrical and
                Enclosures. We have our own Embedded Software framework that we
                developed over years of our experience, with a large collection
                of well-tested and proven libraries, drivers, design patterns,
                state-machines, GUI libraries, RTOS, Signal processing, Control
                algorithms and more.
              </p>
            </div>
          </div>
        </div>
        <div className="homeSystem__grid">
          <div className="homeSystem__grid__item">
            <div className="homeSystem__grid__item__top">
              <img src={Dev} alt="" />
            </div>
            <h3>EMBEDDED SOFTWARE</h3>
            <p>
              Embedded Software design and development in C with a
              Microcontroller. Software is developed using our own Embedded C
              Framework.
            </p>
          </div>
          <div className="homeSystem__grid__item">
            <div className="homeSystem__grid__item__top">
              <img src={Plata} alt="" />
            </div>
            <h3>PCB DESIGN</h3>
            <p>
              PCB Design with a variety of features such as LCDs, RAM, Motor,
              Keypad, Sensors, Communication and more.{" "}
            </p>
          </div>

          <div className="homeSystem__grid__item">
            <div className="homeSystem__grid__item__top">
              <img src={Grafik} alt="" />
            </div>
            <h3>MECHANICAL</h3>
            <p>
              We take the PCB design further and design enclosure for the
              circuit boards and panels with keypad and LCD display.{" "}
            </p>
          </div>
        </div>

        <div className="homeSystem__border"></div>

        <div className="homeSystem__text">
          <div className="homeSystem__text__centr">
            <h3>HAVE AN ELECTRONIC SYSTEM IDEA ?</h3>
            <div className="homeSystem__text__centr__p">
              <p>
                Our clients are typically startup or R&D companies with an
                electronic system idea that requires expert Embedded Systems
                Engineers to implement, so that they do not need to setup
                Systems Engineering Team which is expensive, time-consuming and
                requires years of training.
              </p>
            </div>

            <div className="homeSystem__text__centr__p">
              <p>
                Whereas hiring an already trained and experienced Embedded
                Systems Engineering team in nowadays global world is the most
                optimal option for companies growth. Mutex Embedded Solutions
                team will design and develop your system while taking care of
                all the technical parts such as the following:
              </p>
            </div>
          </div>
        </div>

        <div className="homeSystem__container">
          <div className="homeSystem__system">
            {data.map((el) => {
              return (
                <div className="homeSystem__system__item" key={el.id}>
                  <div className="homeSystem__system__item__img">
                    <img src={el.img} alt="" />
                  </div>
                  <div className="homeSystem__system__item__text">
                    <p>{el.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSystem;
