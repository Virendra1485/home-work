import React, {useState, useEffect} from "react";
import { api } from "../core/axios";
import { toast } from "react-toastify";


const FooterCities = React.memo(() => {
    console.log("Rendering footer citipage");
    const [cities, setCities] = useState([]);

    useEffect(() => {
        console.log('Fetching data...');

        const fetchData = async() => {
            try {
                const response = await api.get("/user/account/cities/");
                setCities(response.data);
                console.log("==================", typeof response.json());
            } catch (error) {
                toast.error(error);
            }
        };
        fetchData();
    }, []); 

    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "#23afb3", padding: "20px", marginBottom: "20px", marginTop: "20px" }}>
                <div className="container">
                    <h5>Populer cities</h5>
                    <div style={{display: "flex"}}>
                        {cities.map(item => (
                            <span style={{marginRight: "20px"}} key={item}>{item}</span>
                        ))}
                        
                    </div>
                </div>
            </div>
        </>
    );
});

export default FooterCities;