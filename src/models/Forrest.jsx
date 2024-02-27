
import React, {useLayoutEffect, useRef} from 'react'
import {useGLTF, useScroll} from '@react-three/drei'
import gsap from "gsap"
import {useFrame} from "@react-three/fiber";

export const Forrest = (props) => {
    const { nodes, materials } = useGLTF('/src/assets/forrest.glb')

    const ref = useRef();
    const tl = useRef();

    const scroll = useScroll();

    useFrame(() => {
        // tl.current.seek(scroll.offset * tl.current.duration());
    });

    useLayoutEffect(() => {
        tl.current = gsap.timeline();

        tl.current.to(ref.current.rotation, { duration:2, x:1})
        tl.current.to(ref.current.position , { duration:2, z:2})

    }, [])

    // console.log(tl)
    return (
        <group {...props} dispose={null} ref={ref}>
            <group position={[0.504, -0.171, 0.206]} scale={0.039}>
                <group rotation={[-Math.PI / 2, 0, 0]}>
                    <mesh geometry={nodes.Mesh_0.geometry} material={materials['HOJAS.005']} />
                    <mesh geometry={nodes.Mesh_1.geometry} material={materials['HOJAS.005']} />
                    <mesh geometry={nodes.Mesh_10.geometry} material={materials['LEAVES.003']} />
                    <mesh geometry={nodes.Mesh_11.geometry} material={materials['LEAVES.003']} />
                    <mesh geometry={nodes.Mesh_12.geometry} material={materials['LEAVES.003']} />
                    <mesh geometry={nodes.Mesh_13.geometry} material={materials['LEAVES.003']} />
                    <mesh geometry={nodes.Mesh_14.geometry} material={materials['LEAVES.002']} />
                    <mesh geometry={nodes.Mesh_15.geometry} material={materials['LEAVES.002']} />
                    <mesh geometry={nodes.Mesh_16.geometry} material={materials['VEIN.001']} />
                    <mesh geometry={nodes.Mesh_17.geometry} material={materials['Material.017']} />
                    <mesh geometry={nodes.Mesh_2.geometry} material={materials['HOJAS.005']} />
                    <mesh geometry={nodes.Mesh_3.geometry} material={materials['HOJAS.005']} />
                    <mesh geometry={nodes.Mesh_4.geometry} material={materials.GLOW} />
                    <mesh geometry={nodes.Mesh_5.geometry} material={materials.GLOW} />
                    <mesh geometry={nodes.Mesh_6.geometry} material={materials['Material.019']} />
                    <mesh geometry={nodes.Mesh_7.geometry} material={materials['LEAVES.003']} />
                    <mesh geometry={nodes.Mesh_8.geometry} material={materials['LEAVES.003']} />
                    <mesh geometry={nodes.Mesh_9.geometry} material={materials['LEAVES.003']} />
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/src/assets/forrest.glb')
