import React from 'react'
import Link from 'gatsby-link'
import mapImage from '../images/map.png'

const About = () => (
  <div>
    <div style={{textAlign: 'center'}}>
      <img src={mapImage} alt="Map" style={{width: '500px', align:"middle"}}/>
    </div>
    <p>I reside in Brighton, Michigan and commute to Ann Arbor. When I'm not building software, I'm lifting weights, reading books, reading the internet, and socializing.</p>
  </div>
)

export default About
