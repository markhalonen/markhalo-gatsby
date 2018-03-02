import React from 'react'
import Link from 'gatsby-link'
import avatar from '../images/Avatar.jpeg'

const IndexPage = () => (
  <div>
    <div style={{display: 'flex', justifyContent: 'flex-start', flex: 1}}>
      <div style={{display: 'flex', flex: 1}}>
        <img src={avatar} alt="Avatar" style={{alignSelf: 'center', borderRadius: '5%'}}/>
      </div>
      <div style={{display: 'flex', flex: 5, paddingLeft: 10}}>
        <p>Hello! My name is Mark. I'm the creator of <a href="https://getVora.com" target="_blank">Vora</a>, an Android and iOS fasting tracker. I'm currently a full-time engineer at <a href="https://soartech.com/" target="_blank">SoarTech</a>, working on simulation software for the Navy.</p>

      </div>
    </div>
    <Link to="/About/">Go to page 2</Link>
  </div>
)

export default IndexPage
