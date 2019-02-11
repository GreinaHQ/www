import Head from 'next/head'
import React, { Fragment } from 'react'
import IconTwitter from 'react-feather/dist/icons/twitter'

import '../styles.css'

const HtmlHeader = () => (
  <Head>
    <meta charSet="utf-8" />
    <title>Greina - We &hearts; FinTech</title>
    <meta name="description" content="We love great Banking, Money Management and Investing, naturally we like FinTech Startups! Join our newsletter and follow us on Twitter @GreinaHQ" />
    <meta name="og:title" content="Greina - We &hearts; FinTech" />
    <meta name="og:description" content="We love great Banking, Money Management and Investing, naturally we like FinTech Startups! Join our newsletter and follow us on Twitter @GreinaHQ" />
    <meta name="og:url" content="https://greina.io" />
    <meta name="og:image" content="/static/images/preview-1200.jpg" />
    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:description" content="We love great Banking, Money Management and Investing, naturally we like FinTech Startups! Join our newsletter!"></meta>
    <meta name="twitter:image" content="https://greina.io/static/images/preview-1200.jpg"></meta>
    <meta name="twitter:image:alt" content="Greina - We ❤ FinTech - Join our newsletter!"></meta>
    <meta name="twitter:site" content="@GreinaHQ"></meta>
    <link rel="shortcut icon" type="image/ico" href="/static/images/favicon.ico"></link>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    <link href="//fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet" type="text/css" />
  </Head>
)

const Tracking = ({ doNotTrack }) => (
  <Fragment>
    <script dangerouslySetInnerHTML={{ __html: `
      document.documentElement.lang = 'en'
      ${doNotTrack ? "window['ga-disable-UA-24905421-3'] = true;" : ''}
      window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
      ga('create', 'UA-24905421-3', {
        storeGac: false,
      });
      ga('set', 'anonymizeIp', true);
      ga('send', 'pageview');
    ` }} />
    <script async src="https://www.google-analytics.com/analytics.js" />
  </Fragment>
)

const Newsletter = () => (
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
        <div><small>First issue coming soon!</small></div>
      </div>
    </form>
  </div>
)

const HomePage = ({ doNotTrack }) => (
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
      <Newsletter />
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
    <Tracking doNotTrack={doNotTrack} />
  </Fragment>
)

HomePage.getInitialProps = ({ req }) => {
  const doNotTrack = (req && req.headers['dnt'] === '1') || false
  return { doNotTrack }
}

export default HomePage
