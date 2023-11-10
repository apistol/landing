import React, { forwardRef } from 'react';
import { useGLTF } from '@react-three/drei';

const Forrest = forwardRef((props, ref) => {
    const { nodes, materials } = useGLTF('/forrest.glb');

    return (
        <primitive
            ref={ref}
            object={nodes.digitalobjcleanermaterialmergergles}
            material={materials["GLOW"]}
            {...props} // Spread other props to allow customization
        />
    );
});

export default Forrest;
