'use client'
import { useState } from 'react'

export default function CTA() {
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('submitting')
    const formData = new FormData(e.target)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email:   formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
      })

      if (res.ok) {
        setStatus('success')
        e.target.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="cta-section" id="contact">
      <h2>
        Ready to stop just getting by and start living <em>with intention</em>?
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

      {status === 'success' ? (
        <p className="cta-success">Thank you — I&apos;ll be in touch soon.</p>
      ) : (
        <>
          <form className="cta-form" onSubmit={handleSubmit}>
            <div className="cta-field">
              <label htmlFor="email">Your email</label>
              <input
                type="email" id="email" name="email"
                placeholder="you@example.com" required
              />
            </div>
            <div className="cta-field">
              <label htmlFor="subject">Subject</label>
              <input
                type="text" id="subject" name="subject"
                placeholder="e.g. Exploratory conversation" required
              />
            </div>

            <div className="cta-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message"
                placeholder="Tell me a little about where you are and what you're looking for…"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-blush" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Send message'}
            </button>
          </form>

          {status === 'error' && (
            <p className="cta-error">
              Something went wrong — please try again or email me directly.
            </p>
          )}
        </>
      )}
    </section>
  )
}
