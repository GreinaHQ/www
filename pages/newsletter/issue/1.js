import { getClientIp } from 'request-ip'

import { pageView } from '../../../services/ga'

const NewsletterIssue1Page = () => null

NewsletterIssue1Page.getInitialProps = async ({ req, res }) => {
  const doNotTrack = (req && req.headers['dnt'] === '1') || false

  if (!doNotTrack) {
    await pageView(
      `https://greina.io${req.url}`,
      getClientIp(req),
      req.headers['user-agent'],
      req.headers['referer'],
    )
  }
  res.writeHead(307, { 'Location': 'https://mailchi.mp/25ddd11edab1/fintech-monthly-1' })
  res.end()
}

export default NewsletterIssue1Page
