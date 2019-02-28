import { getClientIp } from 'request-ip'

import { pageView } from '../services/ga'

const NewsletterPage = () => null

NewsletterPage.getInitialProps = async ({ req, res }) => {
  const doNotTrack = (req && req.headers['dnt'] === '1') || false

  if (!doNotTrack) {
    await pageView(
      'https://greina.io/newsletter',
      getClientIp(req),
      req.headers['user-agent'],
      req.headers['referer'],
    )
  }
  res.writeHead(307, { 'Location': '/?ref=%2Fnewsletter' })
  res.end()
}

export default NewsletterPage
