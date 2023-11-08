import React from 'react'
import TitleRecuring from '../../../recurring/Title/TitleRecuring'
import BG from "../../../../assets/img/bgabout.jpg"
const AboutItem :React.FC= () => {
  return (
    <TitleRecuring text="ABOUT" img={BG} />
  )
}

export default AboutItem