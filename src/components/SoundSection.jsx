import React from "react";

function SoundSection() {
    const handleLearnMore = () => {

        console.log("sadsds")
        const element = document.querySelector(".display-section");

        console.log(element)
        window.scrollTo({
            top: element?.getBoundingClientRect().bottom,
            left: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section-content content">
                    <h2 className="title">New Sound System</h2>
                    <p className="text">Feel the base.</p>
                    <span className="description">
            From $41.62/mo. for 24 mo. or $999 before trade-in
          </span>
                    <ul className="links">
                        <li>
                            <button className="button" href="/">
                                Buy
                            </button>
                        </li>
                        <li>
                            <a className="link" onClick={handleLearnMore}>
                                Learn more
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default SoundSection;
