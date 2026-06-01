import Card from "./components/Card";
import Hero from "./components/Hero";
import type { ModelInfo } from "./types";
export default function App() {
  const Donutinfo: ModelInfo = {
    title: "Blender Donut",
    description: "A classic 3D donut model. Includes icing, sprinkles, and a baked texture.",
    verts: 45893,
    faces: 45853,
    isRigged: "No",
    imageRender: "/models/donut/render.png",
    glbPath: "/models/donut/view.glb",
    blendPath: "/models/donut/donut.blend"
  };

  return (
    <>
      <Hero />

      <Card info={Donutinfo} />
    </>
  )
}

