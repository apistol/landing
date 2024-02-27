import React from 'react'
import {OrbitControls, ScrollControls} from "@react-three/drei";
import {Forrest} from "../models/Forrest.jsx";

const LandingScene = () => {
    return (
        <>
            <ambientLight intensity={10}/>
            <ScrollControls pages={3} damping={0.25}>
                <OrbitControls enableZoom={false}/>
            </ScrollControls>
            <Forrest/>
        </>
    )
}
export default LandingScene
