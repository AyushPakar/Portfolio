import Cards from "./Cards";

function Projects() {
  return (
    <section id="projects" className="overflow-hidden bg-canvas py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="section-title mb-4">Projects</h2>
          <p className="text-sm font-body text-deep/60 max-w-lg mx-auto">
            A few things I've built recently, across product, tooling, and
            design systems.
          </p>
        </div>

        {/* Project Cards */}
        <Cards />
      </div>
    </section>
  );
}

export default Projects;
