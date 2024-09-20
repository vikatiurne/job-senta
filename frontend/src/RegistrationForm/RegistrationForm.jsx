import React from 'react';
import './registrationForm.css';
import { Formik } from 'formik';
import userIcon from '../assets/userIcon.png';
import mailIcon from "../assets/mailIcon.png";
import passwordIcon from "../assets/passwordIcon.svg";
import Button from '../UI/Button/Button';

export default function RegistrationForm() {
    return (
        <div className='registrationFormContainer'>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        console.log(values); 
                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        {['firstName', 'lastName'].map((field, index) => (
                            <div key={index} className='registrationFormInputContainer'>
                                <img className="inputIcon" src={userIcon} alt="User Icon" />
                                <input
                                    type={field === 'email' ? 'email' : 'text'}
                                    name={field}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values[field]}
                                    placeholder={`Your ${field === 'firstName' ? 'name' : 'last name'}`}
                                    className='registrationFormInput'
                                />
                                {errors[field] && touched[field] && <div className="error">{errors[field]}</div>}
                            </div>
                        ))}

                        <div className='registrationFormInputContainer'>
                            <img className="inputIcon" src={mailIcon} alt="Mail Icon" />
                            <input
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder="Your email"
                                className='registrationFormInput'
                            />
                            {errors.email && touched.email && <div className="error">{errors.email}</div>}
                        </div>

                        <div className='registrationFormInputContainerPass'>
                            {['password', 'confirmPassword'].map((field, index) => (
                                <div key={index} className='registrationFormInputContainer'>
                                    <img className="inputIcon" src={passwordIcon} alt="Password Icon" />
                                    <input
                                        type="password"
                                        name={field}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values[field]}
                                        placeholder={field === 'password' ? 'Password' : 'Password confirmation'}
                                        className='registrationFormInputPassword'
                                    />
                                    {errors[field] && touched[field] && <div className="error">{errors[field]}</div>}
                                </div>
                            ))}
                        </div>

                        <div className="registrationFormButtonContainer">
                            <Button type="submit" disabled={isSubmitting} className='registrationFormButton'>
                                SIGN UP
                            </Button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    );
}
