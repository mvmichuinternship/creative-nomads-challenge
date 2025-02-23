// "use client";
// import { Canvas } from "@react-three/fiber";
// import { ReactElement, Suspense } from "react";
// import cn from "clsx";
// import { Environment } from "@react-three/drei";

// interface RenderThreeModelProps {
//   className: String;
//   children: ReactElement;
// }
// const RenderThreeModel = ({ children, className }: RenderThreeModelProps) => {
//     console.log("model loaded")
//   return (
//     <Canvas
//       className={cn(
//         `w-full h-screen z-150 flex items-center justify-center `,
//         className
//       )}
//     >
//       <Suspense fallback={null}>{children}</Suspense>
//       <Environment preset="dawn"/>
//     </Canvas>
//   );
// };

// export default RenderThreeModel;

"use client";
import { Canvas } from "@react-three/fiber";
import { ReactElement, Suspense } from "react";
import cn from "clsx";
import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";

interface RenderThreeModelProps {
  className?: string;
  children: ReactElement;
  isHelldiver?:Boolean;
}

const RenderThreeModel = ({ children, className,isHelldiver }: RenderThreeModelProps) => {
  // console.log("model loaded");
  return (
    <Canvas
      className={cn(
        `w-full h-1/2   z-0 w-[300px]  h-[300px]  bg-primary rounded-full `,
        className
      )}
      
      camera={{ position: [0, 0, 100], fov: 35 }}
    >

      <Suspense fallback={null}>
        {/* <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} /> */}

        <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />

        {children}
      </Suspense>

      <Environment preset="lobby" />
    </Canvas>
  );
};

export default RenderThreeModel;
