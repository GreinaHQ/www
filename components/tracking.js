import React, { Fragment } from 'react'

const Tracking = ({ doNotTrack, noPageView }) => (
  <Fragment>
    <script dangerouslySetInnerHTML={{ __html: `
      document.documentElement.lang = 'en';
      ${doNotTrack ? "window['ga-disable-UA-24905421-3'] = true;" : ''}
      window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
      ga('create', 'UA-24905421-3', {
        storeGac: false,
      });
      ga('set', 'anonymizeIp', true);
      ${noPageView ?
        `if (window.history.pushState) {
          const newurl = window.location.protocol + '//' + window.location.host + window.location.pathname;
          window.history.replaceState({ path: newurl }, '', newurl);
        }` : "ga('send', 'pageview');"}
    ` }} />
    <script async src="https://www.google-analytics.com/analytics.js" />
  </Fragment>
)

export default Tracking
