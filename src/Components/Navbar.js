import React from 'react'

function Navbar() {
    return (
        <>
            <header>
                <div className="navbar">
                    <div className="nav-logo border">
                        <div className="logo" style={{backgroundImage: "url('/Images/amazon_logo.png')"}}></div>
                    </div>

                    <div className="nav-address border">
                        <p className="add-first">Hello</p>
                        <div className="add-icon">
                            <i className="fa-solid fa-location-dot"></i>
                            <p className="add-second">Select Your Address</p>
                        </div>
                    </div>

                    <div className="nav-search">
                        <select className="search-select">
                            <option>All</option>
                        </select>
                        <input placeholder="Search Amazon" className="search-input"/>
                            <div className="search-icon">
                                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
                            </div>
                    </div>

                    <div className="nav-signin border">
                        <p><span>Hello, sign in</span></p>
                        <p className="nav-second">Account & Lists</p>
                    </div>

                    <div className="nav-return border">
                        <p><span>Returns</span></p>
                        <p className="nav-second">& Orders</p>
                    </div>

                    <div className="nav-cart border">
                        <i className="fa-solid fa-cart-shopping"></i>
                        Cart
                    </div>
                </div>

                <div className="panel">
                    <div className="panel-all border">
                        <i className="fa-solid fa-bars"></i>
                        All
                    </div>
                    <div className="panel-ops">
                        <p className="border">Amazon miniTV</p>
                        <p className="border">Sell</p>
                        <p className="border">Best Sellers</p>
                        <p className="border">Mobiles</p>
                        <p className="border">Today's Deals</p>
                        <p className="border">Customer Service</p>
                        <p className="border">New Releases</p>
                        <p className="border">Prime</p>
                        <p className="border">Electronics</p>
                        <p className="border">Home & Kitchen</p>
                        <p className="border">Amazon Pay</p>
                    </div>
                    <div className="panel-prime">
                        <p className="border">Prime Day <i className="fa-solid fa-arrow-right"></i> 15th - 16th july</p>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Navbar