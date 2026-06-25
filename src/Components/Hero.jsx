import { ArrowRight, Download } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-canvas h-dvh max-h-screen pt-32 pb-24 md:pt-56 md:pb-32"
    >
      {/* Decorative Circles */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-40 -right-10 w-50 h-50 rounded-full bg-accent/15 blur-3xl animate-float" />
        <div
          className="absolute top-1/3 -left-16 w-64 h-64 rounded-full bg-accept/10 blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-20 right-1/4 w-72 h-72 rounded-full bg-primary/8 blur-3xl animate-float"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Content — centered ✅ */}
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 mt-0.5 rounded-full border border-secondary bg-surface/70 text-sm text-primary font-alt mb-7 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Open to work
        </span>

        <h1
          className="font-heading text-5xl sm:text-6xl md:text-7xl text-deep/50 leading-[1.1] mb-6 animate-fade-up"
          style={{ animationDelay: "0.1s", animationFillMode: "both" }}
        >
          Ayush <span>`</span>
          <span className="text-gradient">Pakar</span>
        </h1>
        <h2 className="font-alt text-xl sm:text-2xl md:text-3xl text-primary font-medium mb-5 animate-fade-up">
          Front End Developer
        </h2>
        <p className="text-sm font-body text-primary leading-relaxed md:text-large mx-auto mb-10">
          B.Tech 3rd year CSE (AI) student with frontend development skills in
          React and TailwindCSS, and a DSA practitioner.
        </p>

        <div className="flex flex-col justify-center items-center gap-4 md:flex-row">
          <a
            href="#projects"
            className="flex gap-1 text-white hover:bg-deep/80 bg-primary p-3 text-md rounded-full items-center justify-center border border-secondary shadow-sm btn-primary w-full sm:w-auto"
          >
            {" "}
            View Projects <ArrowRight />
          </a>
          <a
            href="https://drive.usercontent.google.com/download?id=1yhTSvptaICgEpafDG5nTs29qlYtEVedQ&export=download&authuser=0&confirm=t&uuid=0fc4bd77-19f6-431e-845b-67ce6cb93e97&at=ABswASaKmS_ZsA3WBZ_0lg1Ro-fS:1782394457470"
            className="flex gap-1 hover:bg-deep/10 text-primary bg-canvas p-3 text-md rounded-full items-center justify-center border-2 border-secondary shadow-sm btn-primary w-full sm:w-auto"
          >
            <Download /> Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
