import React from 'react'
import IconTwitter from 'react-feather/dist/icons/twitter'

const Footer = () => (
  <footer className="u-center">
    <p className="u-bold u-mb-0 u-p-sm">
      Follow us<br />
      <a href="https://twitter.com/GreinaHQ" onClick={() => ga('send', 'event', { eventAction: 'click', eventCategory: 'Outbound Link', eventLabel: 'https://twitter.com/GreinaHQ' })}>
        <IconTwitter size={48} />
        <span className="sr-only">Link to Twitter profile</span>
      </a>
    </p>
    <small className="u-block u-p-sm">
      Copyright &copy;
      <a href="https://ronnyhaase.com" onClick={() => ga('send', 'event', { eventAction: 'click', eventCategory: 'Outbound Link', eventLabel: 'https://ronnyhaase.com' })}>
        {' '}Ronny Haase
      </a>
      , 2019
    </small>
    <p className="u-smaller">
      This site uses Google Analytics, without cookies and anonymizing your IP.<br />
      If you enabled Do Not Track, you won't get tracked at all.
    </p>
  </footer>
)

export default Footer
