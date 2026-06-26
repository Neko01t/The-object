export default function Hero() {
  return (
    <div className="relative w-full min-h-[80vh] flex flex-col justify-center items-center p-6 bg-background overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-size-[40px_40px] mask-image:linear-gradient(to_bottom,white,transparent)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl w-full">
        <h1 className="text-center font-extrabold tracking-tight flex flex-col gap-2">
          <span className="text-4xl md:text-5xl lg:text-6xl text-foreground/80">
            World With{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-br from-orange-400 to-orange-600">
              Blender
            </span>
          </span>
          <span className="text-6xl md:text-8xl lg:text-[10rem] leading-none text-foreground drop-shadow-2xl">
            The Object
          </span>
        </h1>

        <p className="text-lg md:text-xl text-foreground/60 font-medium text-center max-w-2xl mt-4">
          Crafting immersive digital environments and stunning assets that bring your imagination into reality.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button className="px-8 py-3 rounded-full bg-foreground text-background font-semibold hover:scale-105 transition-transform duration-300 shadow-lg shadow-foreground/20">
            View Render
          </button>
          <button className="px-8 py-3 rounded-full bg-transparent border border-foreground/20 text-foreground font-semibold hover:bg-foreground/5 transition-colors duration-300">
            Explore Models
          </button>
        </div>

      </div>
    </div>
  );
}
