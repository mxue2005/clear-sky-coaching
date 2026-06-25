export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-inner">
        <div className="about-photo-stack">
          <img
            src="/images/michelle-portrait.jpg"
            alt="Michelle Xue"
            className="about-main-img"
          />
          <div className="about-mini-row">
            <div style={{ overflow: 'hidden' }}>
              <img
                src="/images/michelle-beach.jpg"
                alt="Michelle at the beach with her dog"
                className="about-mini-img"
              />
            </div>
            <div style={{ overflow: 'hidden' }}>
              <img
                src="/images/michelle-family.jpg"
                alt="Michelle with her family"
                className="about-mini-img about-img-family"
              />
            </div>
          </div>
        </div>

        <div className="about-content">
          <span className="section-label">Your coach</span>
          <h2>I&apos;m Michelle Xue.</h2>
          <p>
            I spent over twenty years building a career in tech that looked exactly like it was
            supposed to. A degree in Electrical Engineering and Computer Science from UC Berkeley.
            I started as an engineer — in startups and large companies — working my way up to
            senior engineer before moving into leadership, eventually serving as an Engineering VP
            and Director.
          </p>
          <p>
            I was good at it. Capable, effective, and by every external measure, successful. But
            somewhere along the way I began to notice something uncomfortable: I had become an
            expert at climbing a ladder — I just hadn&apos;t stopped to ask whether it was my
            ladder.
          </p>
          <p>
            Although I was technically strong — comfortable with roadmaps, architecture, and
            strategy — what I found most motivating and energising was my people. Coaching and
            mentoring my team members, watching them grow, discover what they were capable of, and
            find real satisfaction in their work — that gave me more fulfilment than anything I
            built or shipped.
          </p>
          <p>
            At the same time, I was quietly navigating something harder. Balancing the demands of
            being a leader, a mother, and a wife — while slowly realising I didn&apos;t actually
            know what <em>I</em> wanted. Not what success was supposed to look like. Not what was
            expected of a woman in my position. What I, genuinely and authentically, wanted for my
            life.
          </p>
          <p>That question — honest, uncomfortable, and important — changed everything.</p>
          <p>
            It led me to coaching. Not as a departure from tech, but as the most authentic
            expression of everything I had learned in twenty years of building, leading, and
            growing alongside people. I discovered that the most profound impact I could make
            wasn&apos;t through products or processes — it was by helping people reconnect with
            their own inner wisdom, clarify what truly matters to them, and build a life that feels
            genuinely theirs.
          </p>
          <p>
            That realisation brought me to the Gestalt Institute of Cleveland, where I trained as
            a <strong>GPCC™ certified coach</strong>. And it is what brings me to every
            conversation I have today.
          </p>

          <div className="about-mission">
            <p>
              My mission is to help women in tech navigate the complex intersection of their
              professional path and personal fulfillment — moving from burnout to renewed joy and
              drive across work and life. Whether you are seeking a promotion, a career change, a
              path to early retirement, or simply more space for family, together we clarify your{' '}
              <em>authentic vision</em> and resolve the struggles within your work, relationships,
              and parenting — allowing you to engage in work you love while becoming the grounded,
              present parent and partner you want to be.
            </p>
          </div>

          <div className="credentials">
            <span className="credential">GPCC™ Certified</span>
            <span className="credential">ICF Trained</span>
            <span className="credential">Gestalt Institute of Cleveland</span>
            <span className="credential">EECS · UC Berkeley</span>
          </div>
        </div>
      </div>
    </section>
  )
}
