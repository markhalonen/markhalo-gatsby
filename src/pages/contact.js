import React from 'react'
import Link from 'gatsby-link'
import mapImage from '../images/map.png'

class Contact extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      message: '',
      messageSent: false
    }
  }

  handleSubmit() {
    fetch('https://hooks.zapier.com/hooks/catch/1812902/korber/', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        message: this.state.message,
      })
    }).then(() => {
      this.setState({messageSent: true});
    })
  }

render () {
  if(this.state.messageSent)
  {
    return (
      <div style={{textAlign: 'center'}}>
        <p>Thanks for reaching out!</p>
      </div>
    )
  }
  else {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}>
        <input
          placeholder='Email'
          type="email"
          value={this.state.email}
          onChange={(event) => this.setState({email: event.target.value})}
          style={{width: 400, maxWidth: '90%'}}
        />
        <textarea
          placeholder='Your Message'
          value={this.state.message}
          onChange={(event) => this.setState({message: event.target.value})}
          style={{width: 400, height: 150, maxWidth: '90%', marginTop: 5}}
        />
        <button
          onClick={this.handleSubmit.bind(this)}
          style={{marginTop: 10}}
          >Submit</button>
      </div>
    )
  }
}
}

export default Contact
