import React from 'react'
import Iphone from "../assets/images/iphone-14.jpg";
import HoldingIphone from "../assets/images/iphone-hand.png";

const Jumbotron = () => {
    return (
        <div className={"jumbotron-section wrapper"}>
            <h2 className="title">
                New
            </h2>
            <img src={Iphone} alt={""} className={"logo"}/>
            <p className="text">Brillsia</p>
            <span className='description'>
                a display
            </span>
            <ul className={"links"}>
                <li>
                    <button className={"button"}>Buy</button>
                </li>
                <li>
                    <a className={"link"}>Learn more</a>
                </li>
            </ul>

            <img className={"iphone-img"} src={HoldingIphone} alt={""}/>
        </div>
    )
}
export default Jumbotron
