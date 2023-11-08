import { FC } from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";


import "./map.css";


const Map1: FC = () => {
  const defaultState = {
    center: [42.443870, 59.627362],
    zoom: 16,
  };
  return (
    <section className="map">
      <div className="container">
        <div className="map__flex">
          <div className="map__left">
            <h3>COMPANY ADDRESS</h3>
            <p>
              Mutex Embedded Solutions
              <br />
              Office 207
              <br />
              Block 738
              <br />
              A'Ali, Bahrain
              <br />
              Working Hours: 8AM to 5PM
            </p>
          </div>
          <div className="map__rigth">
            <YMaps >
              <Map defaultState={defaultState} >
                <Placemark geometry={[42.443870, 59.627362]} />
                
              </Map>
            </YMaps>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Map1;
