import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function LastofusModel(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('models/lastofus-transformed.glb')
  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    // console.log(actions)
    //idle
    const animation = actions["idle"];
    animation.setEffectiveWeight(100);
    animation.setLoop(true);
    animation.play();
  }, []);
  return (
    <group ref={group} {...props} dispose={null} scale={[30, 30, 30] } position={[0, -20, 0]}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes._rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials['mat_12-sarah-bracelets-necklace-color_-_DXT1.png']}
          skeleton={nodes.Object_7.skeleton}
          scale={0.005}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials['mat_0-ellie-hands-singleplayer-color_-_DXT1.png']}
          skeleton={nodes.Object_8.skeleton}
          scale={0.005}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials['mat_1-fma-shirt-sarah-wrinkle-neutral-color_-_DXT1.png']}
          skeleton={nodes.Object_9.skeleton}
          scale={0.005}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials['mat_2-fma-pants-sarah-color_-_DXT1.png']}
          skeleton={nodes.Object_10.skeleton}
          scale={0.005}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials['mat_1-fma-shirt-sarah-wrinkle-neutral-color_-_DXT1.png']}
          skeleton={nodes.Object_11.skeleton}
          scale={0.005}
        />
        <skinnedMesh
          name="Object_12"
          geometry={nodes.Object_12.geometry}
          material={materials['mat_4-fma-sarah-feet-color_-_DXT1.png']}
          skeleton={nodes.Object_12.skeleton}
          scale={0.005}
        />
        <skinnedMesh
          name="Object_13"
          geometry={nodes.Object_13.geometry}
          material={materials['mat_5-sarah-arm-hires-color_-_DXT1.png']}
          skeleton={nodes.Object_13.skeleton}
          scale={0.005}
        />
        <skinnedMesh
          name="Object_14"
          geometry={nodes.Object_14.geometry}
          material={materials['mat_12-sarah-bracelets-necklace-color_-_DXT1.png']}
          skeleton={nodes.Object_14.skeleton}
          scale={0.005}
        />
        <skinnedMesh
          name="Object_15"
          geometry={nodes.Object_15.geometry}
          material={materials['mat_7-sarah-head-fma2-color_-_DXT1.png']}
          skeleton={nodes.Object_15.skeleton}
          scale={0.005}
        />
        <skinnedMesh
          name="Object_16"
          geometry={nodes.Object_16.geometry}
          material={materials['mat_8-sarah-eyeoverlay-color_-_DXT1.png']}
          skeleton={nodes.Object_16.skeleton}
          scale={0.005}
        />
        <skinnedMesh
          name="Object_17"
          geometry={nodes.Object_17.geometry}
          material={materials['mat_9-sarah-eyelashes-color_-_DXT1.png']}
          skeleton={nodes.Object_17.skeleton}
          scale={0.005}
        />
        <skinnedMesh
          name="Object_18"
          geometry={nodes.Object_18.geometry}
          material={materials['mat_10-sarah-eyes-color_-_DXT1.png']}
          skeleton={nodes.Object_18.skeleton}
          scale={0.005}
        />
        <skinnedMesh
          name="Object_19"
          geometry={nodes.Object_19.geometry}
          material={materials['mat_11-sarah-hair-color-hires_-_DXT1.png']}
          skeleton={nodes.Object_19.skeleton}
          scale={0.005}
        />
      </group>
    </group>
  )
}

useGLTF.preload('models/lastofus-transformed.glb')