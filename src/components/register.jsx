import React from 'react';
import '../styles.css';
import HomeWorkNevigation from './navbar'
import CRS from './cr';
import FooterCities from './footerCities';




const Register = () => {
    return (
        <>
            <HomeWorkNevigation />
            <CRS />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <form style={{ minWidth: '600px', marginTop: '40px', padding: '20px', border: '1px' }}>

                    <div className="mb-3">
                        <label className="form-label">First Name</label>
                        <input type="string" className="form-control" id="exampleInputFirstName" aria-describedby="firstNameHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Last Name</label>
                        <input type="string" className="form-control" id="exampleInputLastName" aria-describedby="lastNameHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email Address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="row highlighted-row" style={{ marginTop: '25px', marginBottom: '25px', backgroundColor: '#e4f1f5', padding: '10px', borderRadius: '10px' }}>
                        <div className="col-md-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label">
                                    Default checkbox
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked1" checked />
                                <label className="form-check-label" >
                                    Checked checkbox
                                </label>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                                <label className="form-check-label">
                                    Checked checkbox
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    {/* <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label">Check me out</label>
                        </div> */}
                    {/* <button type="submit" className="btn btn-primary">Submit</button> */}
                </form>
            </div>
            <FooterCities />
        </>
    )
}

export default Register;