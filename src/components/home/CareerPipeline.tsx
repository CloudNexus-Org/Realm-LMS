import PipelineAnimation from "./PipelineAnimation";

export default function CareerPipeline() {
  return (
    <section className="dark-section" id="pipeline">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow" style={{ color: "var(--cyan-300)" }}>
            The Pipeline
          </span>
          <h2>From inquiry to offer letter — one continuous build.</h2>
          <p>
            Every student runs through the same three stages. No shortcuts, no
            black box — just training, real work, and a placement push at the
            end.
          </p>
        </div>

        <PipelineAnimation />
      </div>
    </section>
  );
}
