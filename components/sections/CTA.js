export default function CTA() {
  return (
    <section className="cta-section" id="contact">
      <h2>
        Ready to stop just getting by<br />
        and start living <em>with intention</em>?
      </h2>
      <p>
        Begin with a free 30-minute conversation. No pressure, no pitch — just space to explore
        what&apos;s possible.
      </p>

      <div className="cta-email-direct">
        <a href="mailto:clearskycoachmichelle@gmail.com">clearskycoachmichelle@gmail.com</a>
      </div>

      <div className="cta-divider">
        <span className="cta-divider-line"></span>
        <span className="cta-divider-text">or send a message</span>
        <span className="cta-divider-line"></span>
      </div>

      <form
        className="cta-form"
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: 'none' }}>
          <label>Don&apos;t fill this out: <input name="bot-field" /></label>
        </p>

        <div className="cta-field">
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div className="cta-field">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="e.g. Exploratory conversation"
            required
          />
        </div>

        <div className="cta-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me a little about where you are and what you&apos;re looking for…"
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-blush">Send message</button>
      </form>
    </section>
  )
}
