import React from "react";

const Navbar = () => {
    return (
        <nav>
            <div className="bg-primary d-flex p-2 justify-content-between align-items-center">
                <h3 className="fw-bold">Meet</h3>
                <div className="d-flex  gap-5 mx-5">
                    <p className="shadow bg-white rounded p-1 mt-2">Home</p>
                    <p className="shadow bg-white rounded p-1 mt-2">About</p>
                    <p className="shadow bg-white rounded p-1 mt-2">Contact</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;