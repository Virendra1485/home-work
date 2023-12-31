import HomeWorkNevigation from "./navbar"
import React, { useState } from "react";
import * as Yup from 'yup'
import { error } from "jquery";
import { api } from "../core/axios";
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import FooterCities from "./footerCities";


const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+={}[\]:"|;'\\<>?,./~])/,
            "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character")
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required')
})

const LogIn = () => {
    const nevigate = useNavigate(); 
    const [formData, setFormData] = useState({})
    const [formErrors, setFormErrors] = useState({
        username: "",
        password: ""
    })
    const localStorage = window.localStorage;

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        validationSchema.validate(formData, { abortEarly: false })
            .then(() => {
                _postfunc(formData)
            }).catch((errors) => {
                const newErrors = {};
                errors.inner.forEach((error) => {
                    newErrors[error.path] = error.message;
                })
                setFormErrors(newErrors)
            }
            )
    }

    const _postfunc = async (formData) => {
        try {
            const res = await api.post("user/account/login/", JSON.stringify(formData), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            console.log(res);
            setFormData({})

            if (res.status == 200) {
                console.log(res.data.access, "-----------access token-----------------")
                localStorage.setItem("accessToken", res.data.access);
                localStorage.setItem("refreshToken", res.data.refresh);
                toast.success("Login Successful!")
                nevigate('/customers')
            }
        } catch (error) {
            console.log(error, "errror");
        }
    }

    return (
        <>
            <div className='container' style={{marginBottom:"380px"}}>
                <HomeWorkNevigation />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <form style={{ minWidth: '600px', marginTop: '40px' }}>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="username" onChange={handleChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" name="password" onChange={handleChange} />
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={(event) => handleSubmit(event)}>Submit</button>
                    </form>
                </div>
            </div>
            <FooterCities />
        </>
    )
}

export default LogIn;