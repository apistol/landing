import {useEffect, useRef} from "react";
import {Canvas} from '@react-three/fiber';
import {OrbitControls} from '@react-three/drei';
import {Forrest} from "./models/Forrest.jsx"; // `drei` is a helper library for R3F
import gsap from 'gsap';
import LandingScene from "./components/LandingScene.jsx";


function App() {

    const forrestRef = useRef();
    const timeline = gsap.timeline({paused: true});


    const handleStart = () => {
        console.log("asdas")
            timeline.fromTo(forrestRef.current.position, {}, {z: -10, duration: 2});
        timeline.play();

    }

    useEffect(() => {
        // forrestRef.current.position.x = 1
    })

    useEffect(() => {
        setTimeout(() => {
            if (forrestRef.current) {


                // Sample GSAP animations using the timeline:
                // timeline.fromTo(forrestRef.current.position, {z: -100}, {z: -10, duration: 2});
                // timeline.fromTo(forrestRef.current.rotation, { x: 0 }, { x: -1.2, duration: 2 });
                // timeline.fromTo(forrestRef.current.rotation, { z: 0 }, { z: 2, duration: 20, repeat:100 });
                //
                // // Play the timeline:
                // timeline.play();
            }
        }, 1000)
    }, [forrestRef])


    return (
        <div className={"h-screen"}>
            <p><a href="javascript:(function(){var script=document.createElement('script');script.type='text/javascript';script.src='https://cdn.rawgit.com/zz85/zz85-bookmarklets/master/js/ThreeInspector.js';document.body.appendChild(script);})()">Three.js Inspector</a></p>
            <button onClick={handleStart}>start experience</button>
            <Canvas id={"threejs-container"}  className={"h-screen"}>
               <LandingScene/>
            </Canvas>
        </div>
    );
}

export default App;
