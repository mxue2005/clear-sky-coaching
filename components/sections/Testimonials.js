export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials-inner">
        <span className="section-label">What clients say</span>

        <div className="t-block">
          <div className="t-rule" aria-hidden="true"></div>
          <blockquote>
            &ldquo;For the first time in years I felt like someone was genuinely present with me —
            not rushing to fix or advise, but truly there while I worked it out myself. That space
            changed everything.&rdquo;
          </blockquote>
          <cite>— [Client Name], Senior Engineer</cite>
        </div>

        <div className="t-block">
          <div className="t-rule" aria-hidden="true"></div>
          <blockquote>
            &ldquo;I came in thinking I had to choose between my career and my family. I left
            realising that was never the right question — and that I already had the answer.&rdquo;
          </blockquote>
          <cite>— [Client Name], Product Manager</cite>
        </div>
      </div>
    </section>
  )
}
