import React from 'react'
import Link from 'gatsby-link'
import avatar from '../images/Avatar.jpeg'
import { SocialIcon } from 'react-social-icons'

const IndexPage = () => (
  <div>
    <div>
      <div style={{textAlign: 'center'}}>
        <img src={avatar} alt="Avatar" style={{borderRadius: '5%', width: '300px', align:"middle"}}/>
      </div>
      <div style={{textAlign: 'center'}}>
        <SocialIcon url="http://github.com/markhalonen" style={{margin: 5}}/>
        <SocialIcon url="https://www.linkedin.com/in/mark-halonen-31a923b3/" style={{margin: 5}}/>
        <SocialIcon url="https://medium.com/@markhalonen/" style={{margin: 5}}/>
        <SocialIcon url="https://www.upwork.com/fl/markhalonen" style={{margin: 5}}/>
      </div>
      <div style={{paddingTop: 10}}>
        <p>Hello! My name is Mark. I'm the creator of <a href="https://getVora.com" target="_blank">Vora</a>, an Android and iOS fasting tracker. I'm currently a full-time engineer at <a href="https://soartech.com/" target="_blank">SoarTech</a>, working on simulation software for the Navy.</p>
      <p>I am available for hire on freelance projects.</p>
      </div>
    </div>
  </div>
)

export default IndexPage
