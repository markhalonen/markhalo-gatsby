import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'lightgrey',
      marginBottom: '1.45rem',
      textAlign: 'center'
    }}
  >
    <title>Mark Halonen</title>
    <meta name="description" content="Mark Halonen Michigan Software Engineer Developer" />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h3 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'black',
          }}
        >
          Home
          </Link>
        <Link
          to={'/About'}
          style={{
            color: 'black',
            paddingLeft: 10
          }}
        >
          About
          </Link>
        <a style={{
          color: 'black',
          paddingLeft: 10
        }}
          target="_blank"
          href={'https://drive.google.com/file/d/1QnxHFoCFrrNk1uie1mi6fyhxKszHJTZu/view?usp=sharing'}>
          Resume
        </a>
        <Link
          to={'/Contact'}
          style={{
            color: 'black',
            paddingLeft: 10
          }}
        >
          Contact
        </Link>
      </h3>
    </div>
  </div>
)

export default Header
