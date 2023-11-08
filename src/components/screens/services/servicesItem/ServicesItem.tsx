import React from 'react'
import TitleRecuring from '../../../recurring/Title/TitleRecuring'
import BG from "../../../../assets/img/bgabout.jpg"
const ServicesItem:React.FC = () => {
  return (
    <TitleRecuring text="SERVICES" img={BG} ptext='Embedded Systems Engineering Services'/>
  )
}

export default ServicesItem