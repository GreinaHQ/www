import React, { Fragment } from 'react'

import {
  Footer,
  Header,
  HtmlHeader,
  NewsletterSignup,
  SlideShow,
  Tracking
} from '../../components'

import '../../styles.css'

const NewsletterPage = ({ doNotTrack }) => (
  <Fragment>
    <div className="withHeader">
      <HtmlHeader
        title="Greina Monthly FinTech Newsletter | Greina - We ❤ FinTech"
        url="https://greina.io/newsletter"
      />
      <Header />
      <div className="u-bg-gradient-tb">
        <SlideShow className="u-center u-flex-col-center u-p-sm" style={{ minHeight: '300px' }}>
          <h3>Your financial advisor is an AI chatbot?</h3>
          <h3>You have not one, but all the fancy debit cards?</h3>
          <h3>You’re not worrying about exchange fees while travelling?</h3>
          <h3>Your card payments get rounded up and straight to your auto-investing portfolio?</h3>
          <h3>You own not 5000 but 5 shares in that new startup with a revolutionary idea?</h3>
          <h3>Can’t stop wondering how the homeless person is supposed to pay at the cashless coffee shop?</h3>
        </SlideShow>
      </div>
      <div className="Container">
        <p className="u-bigger u-bold u-center">We’re a Match! 🤗</p>
        <NewsletterSignup />
        <Footer />
      </div>
    </div>
    <Tracking doNotTrack={doNotTrack} />
  </Fragment>
)

NewsletterPage.getInitialProps = async ({ req, res }) => {
  const doNotTrack = (req && req.headers['dnt'] === '1') || false

  return { doNotTrack }
}

export default NewsletterPage
