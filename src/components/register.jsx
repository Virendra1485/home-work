import React from 'react';
import '../styles.css';
import HomeWorkNevigation from './navbar'
import CRS from './cr';




const Register = () => {
    return (
        <>
            <HomeWorkNevigation />
            <CRS />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <form style={{ minWidth: '600px', marginTop: '40px', padding: '20px', border: '1px' }}>

                    <div class="mb-3">
                        <label for="exampleFirstName" class="form-label">First Name</label>
                        <input type="string" class="form-control" id="exampleInputFirstName" aria-describedby="firstNameHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleLastName" class="form-label">Last Name</label>
                        <input type="string" class="form-control" id="exampleInputLastName" aria-describedby="lastNameHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email Address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="row highlighted-row" style={{ marginTop: '25px', marginBottom: '25px', backgroundColor: '#e4f1f5', padding: '10px', borderRadius: '10px' }}>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Default checkbox
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked1" checked />
                                <label class="form-check-label" for="flexCheckChecked1">
                                    Checked checkbox
                                </label>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked2" checked />
                                <label class="form-check-label" for="flexCheckChecked2">
                                    Checked checkbox
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                    </div>
                    {/* <div class="mb-3 form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            <label class="form-check-label" for="exampleCheck1">Check me out</label>
                        </div> */}
                    {/* <button type="submit" class="btn btn-primary">Submit</button> */}
                </form>
            </div>
        </>
    )
}

export default Register;