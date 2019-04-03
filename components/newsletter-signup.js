const NewsletterSignup = () => (
  <div id="mc_embed_signup">
    <form
      action="https://greina.us20.list-manage.com/subscribe/post?u=efa9b5936be6ede9d0f643b25&amp;id=062b48ad54"
      className="u-bg-gray u-p-lg u-rounded-sm"
      id="mc-embedded-subscribe-form"
      method="post"
      name="mc-embedded-subscribe-form"
      noValidate
      onSubmit={() => ga('send', 'event', { eventAction: 'submit', eventCategory: 'Form', eventLabel: 'Newsletter' })}
      target="_blank"
    >
      <div id="mc_embed_signup_scroll" className="u-center">
        <div>
          <label className="u-bold" htmlFor="mce-EMAIL">
            Join our monthly FinTech newsletter
          </label>
        </div>
        <div className="u-flex-row-center-stretch u-py-sm">
          <input
            className="Input"
            id="mce-EMAIL"
            name="EMAIL"
            placeholder="E-mail address"
            required
            type="email"
            defaultValue=""
          />
          <input
            className="Button"
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
          <a href="/newsletter/issue/latest">Latest issue (#2)</a> |{' '}
          <a href="/newsletter/archives">Archives</a> |{' '}
          <a href="/newsletter/rss">RSS</a>
        </div>
      </div>
    </form>
  </div>
)

export default NewsletterSignup
