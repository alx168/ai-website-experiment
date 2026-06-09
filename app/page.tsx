export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero">
        <p className="eyebrow">AI-first website build</p>
        <h1>Building the site by building the harness first.</h1>
        <p className="lede">
          This project explores whether a website can be planned, scaffolded, and improved through AI-generated
          changes, with the repository itself acting as the steering system.
        </p>
      </section>

      <section className="grid">
        <article className="card">
          <h2>What exists now</h2>
          <p>
            A documentation-first repository structure that defines goals, quality rules, decisions, and execution
            plans before the app grows.
          </p>
        </article>

        <article className="card">
          <h2>Why this matters</h2>
          <p>
            The experiment is not just about shipping pages. It is about making AI-generated progress legible,
            reviewable, and durable over time.
          </p>
        </article>

        <article className="card">
          <h2>Next milestone</h2>
          <p>
            Turn this minimal shell into a real homepage with stronger sections, navigation, and a first round of test
            coverage.
          </p>
        </article>
      </section>
    </main>
  );
}
