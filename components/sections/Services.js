export default function Services() {
  return (
    <section className="services" id="services">
      <div className="services-inner">
        <div className="services-header">
          <span className="section-label">How we work together</span>
          <h2>
            Coaching shaped around you,<br />
            not a template.
          </h2>
          <p>
            Every engagement starts with a free, no-pressure conversation to explore what you need
            and whether we&apos;re the right fit.
          </p>
        </div>

        {/* Main packages — 2 columns */}
        <div className="services-grid">
          <div className="service-card service-card--featured">
            <span className="service-badge">Most popular</span>
            <h3>Clarity Sprint</h3>
            <div className="service-price">$1,095</div>
            <span className="service-meta">3 months · save $75</span>
            <p>
              A focused engagement for a defined goal — a promotion, a career pivot, or a decision
              you&apos;ve been sitting with too long.
            </p>
            <ul className="service-includes">
              <li>6 bi-weekly sessions</li>
              <li>Support between sessions</li>
            </ul>
            <span className="service-detail">Bi-weekly · 60 min each</span>
          </div>

          <div className="service-card">
            <h3>Transformation</h3>
            <div className="service-price">$1,995</div>
            <span className="service-meta">6 months · save $345</span>
            <p>
              For deeper work — identity, work-life alignment, sustained change beyond the
              presenting challenge.
            </p>
            <ul className="service-includes">
              <li>12 bi-weekly sessions</li>
              <li>Support between sessions</li>
            </ul>
            <span className="service-detail">Bi-weekly · 60 min each</span>
          </div>
        </div>

        {/* Free exploratory call — full width */}
        <div className="services-free-strip">
          <div>
            <h3>Exploratory conversation</h3>
            <p>Not sure if coaching is right for you? Let&apos;s simply talk — no pressure, no pitch.</p>
          </div>
          <span className="services-free-badge">Free · 30 min</span>
        </div>

        {/* Single session — de-emphasised */}
        <div className="services-single">
          <span className="services-single-label">Also available</span>
          <div className="services-single-inner">
            <p>
              Single session — for returning clients, or a one-time session to experience coaching
              before committing to a package.
            </p>
            <span className="services-single-price">$195</span>
          </div>
        </div>
      </div>
    </section>
  )
}
