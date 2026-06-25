export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-eyebrow">Career &amp; Life Coaching · Women in Tech</p>
        <h1>
          Stop just<br />
          getting by.<br />
          <em>Start living<br />with intention.</em>
        </h1>
        <div className="hero-rule" aria-hidden="true"></div>
        <p className="hero-sub">
          Coaching for women in tech — wherever you are in your career — ready to align your
          professional ambition with a life that feels genuinely, sustainably yours.
        </p>
        <div className="hero-btns">
          <a href="#contact" className="btn-primary">Begin the Conversation</a>
          <a href="#recognition" className="btn-outline">Is this you?</a>
        </div>
      </div>
      <div className="hero-photo" aria-label="Woman walking in an open natural landscape"></div>
    </section>
  )
}
