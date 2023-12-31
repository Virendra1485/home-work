import React from "react";
import HomeWorkNevigation from "./navbar";



const Customers = () => {
    return (
        <>
            <HomeWorkNevigation />
            <div classNameName="container-fluid" style={{ display: "flex", flexDirection: "row" }}>
                <div style={{ flex: 1, padding: "20px" }}>
                    smdnsdkj
                </div>
                <div style={{ flex: 2, padding: "20px" }}>
                    <div className="card" style={{width: "18rem"}}>
                        <img src="..." className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Customers;