import { getClientIp } from 'request-ip'

import { pageView } from '../../services/ga'

const NewsletterRssPage = () => null

NewsletterRssPage.getInitialProps = async ({ req, res }) => {
  const doNotTrack = (req && req.headers['dnt'] === '1') || false

  if (!doNotTrack) {
    await pageView(
      'https://greina.io/newsletter/rss',
      getClientIp(req),
      req.headers['user-agent'],
      req.headers['referer'],
    )
  }
  res.writeHead(307, { 'Location': 'https://us20.campaign-archive.com/feed?u=efa9b5936be6ede9d0f643b25&id=062b48ad54' })
  res.end()
}

export default NewsletterRssPage
