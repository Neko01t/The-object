import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import type { ModelInfo } from '../types';

interface CardProps {
  info: ModelInfo
}

export default function Card({ info }: CardProps) {
  const [activeView, setActiveView] = useState('default');

  // const info = {
  //   title: "Blender Donut",
  //   description: "A classic 3D donut model. Includes icing, sprinkles, and a baked texture.",
  //   verts: 45893,
  //   faces: 45853,
  //   isRigged: "No",
  //   imageRender: "/models/donut/render.png",
  //   glbPath: "/models/donut/view.glb",
  //   blendPath: "/models/donut/donut.blend"
  // };
  //
  return (
    <div className="max-w-sm rounded-xl overflow-hidden bg-card text-card-foreground shadow-lg border border-border relative">

      <div className="relative w-full h-64 bg-muted flex items-center justify-center overflow-hidden">

        <div className="absolute top-3 right-3 z-10 flex bg-background/80 backdrop-blur-sm rounded-lg border border-border p-1 shadow-sm">
          <button
            onClick={() => setActiveView('default')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${activeView === 'default'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            Render
          </button>
          <button
            onClick={() => setActiveView('view')}
            className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${activeView === 'view'
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            3D View
          </button>
        </div>

        {activeView === 'default' ? (
          <img
            src={info.imageRender}
            alt={info.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full cursor-move">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} />
              <OrbitControls autoRotate />
              <primitive object={useGLTF(info.glbPath).scene} />
            </Canvas>
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-bold mb-1">
            {info.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {info.description}
          </p>
        </div>

        <div className="flex justify-between bg-secondary text-secondary-foreground p-3 rounded-lg border border-border">
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Polygons</span>
            <span className="font-medium">{info.faces.toLocaleString()}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Vertices</span>
            <span className="font-medium">{info.verts.toLocaleString()}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Rigged</span>
            <span className="font-medium">{info.isRigged}</span>
          </div>
        </div>

        <a
          href={info.blendPath}
          download
          className="mt-2 w-full flex justify-center items-center py-2.5 px-4 bg-primary text-primary-foreground hover:opacity-90 font-medium rounded-lg transition-opacity duration-200"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download .blend
        </a>
      </div>
    </div>
  );
}
