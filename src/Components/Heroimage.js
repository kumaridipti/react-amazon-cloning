import React from 'react'

function Heroimage() {
    return (
        <>
            <div className="hero-section" style={{ backgroundImage: "url('/Images/hero_image.jpg')" }}>
                <div className="hero-msg">
                    <p>you are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.
                        Click here to go to<a href="https://www.amazon.in/"> amazon.in</a></p>
                </div>
            </div>
        </>
    )
}

export default Heroimage