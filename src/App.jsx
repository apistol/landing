import {useEffect, useRef} from "react";
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import Forrest from "./models/Forrest.jsx"; // `drei` is a helper library for R3F
import gsap from 'gsap';


function App() {

    const forrestRef = useRef();
    const timeline = gsap.timeline({paused: true});


    const handleStart = () => {
        if (forrestRef.current) {
            const timeline = gsap.timeline({paused: true});

            // Sample GSAP animations using the timeline:
            timeline.fromTo(forrestRef.current.position, {}, {z: -10, duration: 2});
            // timeline.fromTo(forrestRef.current.rotation, { y: 0 }, { y: Math.PI * 2, duration: 2 });

            // Play the timeline:
            timeline.play();
        }
    }

    useEffect(() => {
        setTimeout(() => {
            if (forrestRef.current) {


                // Sample GSAP animations using the timeline:
                timeline.fromTo(forrestRef.current.position, {z: -100}, {z: -10, duration: 2});
                timeline.fromTo(forrestRef.current.rotation, { y: 0 }, { y: 1, x:-1, duration: 2 });

                // Play the timeline:
                timeline.play();
            }
        }, 1000)
    }, [forrestRef])


    return (
        <div>
            <button onClick={handleStart}>start experience</button>
            <Canvas id={"threejs-container"}>
                <ambientLight/>
                <pointLight position={[1000, 1000, 1000]}/>
                <Forrest ref={forrestRef}/>
                <OrbitControls/>
            </Canvas>
        </div>
    );
}

export default App;
