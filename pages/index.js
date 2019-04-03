import React, { Fragment } from 'react'

import { Footer, HtmlHeader, NewsletterSignup, Tracking } from '../components'

import '../styles.css'

const HomePage = ({ doNotTrack, noPageView }) => (
  <Fragment>
    <HtmlHeader />
    <div className="Container a-fadein u-center">
      <h1>Greina</h1>
      <p>
        <img alt="Greina Logo" className="u-responsive" src="/static/images/logo.png" />
      </p>
      <p>
        We love great Banking, Money Management and Investing, naturally we like FinTech Startups!
      </p>
      <NewsletterSignup />
      <Footer />
    </div>
    <Tracking doNotTrack={doNotTrack} noPageView={noPageView} />
  </Fragment>
)

HomePage.getInitialProps = ({ req }) => {
  const doNotTrack = (req && req.headers['dnt'] === '1') || false
  const parsedUrl = require('url').parse(req.url)
  const noPageView = require('querystring').parse(parsedUrl.query).ref === '/newsletter'
  return { doNotTrack, noPageView }
}

export default HomePage
