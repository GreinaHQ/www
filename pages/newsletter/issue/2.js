import { getClientIp } from 'request-ip'

import { pageView } from '../../../services/ga'

const NewsletterIssue2Page = () => null

NewsletterIssue2Page.getInitialProps = async ({ req, res }) => {
  const doNotTrack = (req && req.headers['dnt'] === '1') || false

  if (!doNotTrack) {
    await pageView(
      `https://greina.io${req.url}`,
      getClientIp(req),
      req.headers['user-agent'],
      req.headers['referer'],
    )
  }
  res.writeHead(307, { 'Location': 'https://mailchi.mp/483ec5290ff8/fintech-monthly-2' })
  res.end()
}

export default NewsletterIssue2Page
