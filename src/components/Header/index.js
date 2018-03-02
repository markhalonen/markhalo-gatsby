import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
  <div
    style={{
      background: 'lightgrey',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
        <h3 style={{ margin: 0}}>
          <Link
            to="/"
            style={{
              color: 'black',
            }}
          >
            Home
          </Link>
          <Link
            to="/About"
            style={{
              color: 'black',
              paddingLeft: 10
            }}
          >
            About
          </Link>
        </h3>
    </div>
  </div>
)

export default Header
