import React from 'react'
import Link from 'gatsby-link'
import mapImage from '../images/map.png'

class Contact extends React.Component {

  constructor() {
    super()
    this.state = { count: 0 }
  }

render () {
  return (
    <div>
       <a href="javascript:void( window.open( 'https://form.jotform.com/80600859275158', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500' ) ) "> Labelless Responsive Contact Form </a>
    </div>
  )
}
}

export default Contact
