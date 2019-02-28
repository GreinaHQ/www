import React, { Fragment } from 'react'
import IconTwitter from 'react-feather/dist/icons/twitter'

import { HtmlHeader, Tracking } from '../components'

import '../styles.css'

const NewsletterSignup = () => (
  <div id="mc_embed_signup">
    <form
      action="https://greina.us20.list-manage.com/subscribe/post?u=efa9b5936be6ede9d0f643b25&amp;id=062b48ad54"
      className="u-bg-gray u-p-lg u-rounded-sm"
      id="mc-embedded-subscribe-form"
      method="post"
      name="mc-embedded-subscribe-form"
      noValidate
      target="_blank"
    >
      <div id="mc_embed_signup_scroll">
        <div>
          <label className="u-bold" htmlFor="mce-EMAIL">
            Join our monthly FinTech newsletter
          </label>
        </div>
        <div className="u-flex-row-center u-py-sm">
          <input
            className="input"
            id="mce-EMAIL"
            name="EMAIL"
            placeholder="E-mail address"
            required
            type="email"
            defaultValue=""
          />
          <input
            className="btn"
            id="mc-embedded-subscribe"
            name="subscribe"
            type="submit"
            value="Subscribe"
          />
          <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
            <input
              type="text"
              name="b_efa9b5936be6ede9d0f643b25_062b48ad54"
              tabIndex="-1"
              defaultValue=""
            />
          </div>
        </div>
        <div>
          <a href="https://mailchi.mp/25ddd11edab1/fintech-monthly-1">Latest issue (1)</a> |{' '}
          <a href="https://us20.campaign-archive.com/home/?u=efa9b5936be6ede9d0f643b25&id=062b48ad54">Archives</a> |{' '}
          <a href="https://us20.campaign-archive.com/feed?u=efa9b5936be6ede9d0f643b25&id=062b48ad54">RSS</a>
        </div>
      </div>
    </form>
  </div>
)

const HomePage = ({ doNotTrack, noPageView }) => (
  <Fragment>
    <HtmlHeader />
    <div className="a-fadein container u-center">
      <h1>Greina</h1>
      <p>
        <img alt="Greina Logo" className="u-responsive" src="/static/images/logo.png" />
      </p>
      <p>
        We love great Banking, Money Management and Investing, naturally we like FinTech Startups!
      </p>
      <NewsletterSignup />
      <p className="u-bold u-mb-0 u-p-sm">
        Follow us<br />
        <a href="https://twitter.com/GreinaHQ">
          <IconTwitter size={48} />
          <span className="sr-only">Link to Twitter profile</span>
        </a>
      </p>
      <small className="u-block u-p-sm">
        Copyright &copy; <a href="https://ronnyhaase.com">Ronny Haase</a>, 2019
      </small>
      <p className="u-smaller">
        This site uses Google Analytics, without cookies and anonymizing your IP.<br />
        If you enabled Do Not Track, you won't get tracked at all.
      </p>
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
