const NewsletterPage = () => null

NewsletterPage.getInitialProps = ({ res }) => {
  res.writeHead(307, { 'Location': '/' })
  res.end()
}

export default NewsletterPage
