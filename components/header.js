import React, { Fragment } from 'react'
import Link from 'next/link'

const Header = () => (
  <header className="Header">
    <div className="Container u-flex-row-left-center">
      <Link href="/">
        <span style={{ cursor: 'pointer' }}>
          <img alt="Greina Logo" className="u-mr-xs" src="/static/images/logo-100.svg" width="32" />
          <strong style={{ verticalAlign: 'middle' }}>Greina</strong>
        </span>
      </Link>
      <span>&nbsp;| Newsletter</span>
    </div>
  </header>
)

export default Header
