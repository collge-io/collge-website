'use client'

import React, { useRef, useState } from 'react'
import styles from "@/styles/InterestPage.module.css"
import { OrbitCicles } from '@/components/custom/OrbitCircle'

function UserInterest() {

    const [isLoading, setIsLoading] = useState(false)

    const [gender, setGender] = useState('Male');
    const [isError, setIsError] = useState({
        error: false,
        errorMsg: ""
    })
    const [response, setResponse] = useState({
        success: false,
        statusCode: null,
        statusResponse: ""
    })

    const [name, setName] = useState('');
    const [uniName, setUniName] = useState('');
    const [emailInput, setEmailInput] = useState('');

    const NAME_REGEX = /^[A-Za-z]+(?:[' -]?[A-Za-z]+)*$/
    const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const UNIVERSITY_NAME = /^[A-Za-z]+(?:[' -]?[A-Za-z]+)*$/


    const validateForm = () => {
        let isValid = true;

        if (!NAME_REGEX.test(name)) {
            setIsError({
                error: true,
                errorMsg: "Hold up! Name should be between 4-32 characters & should not contain any special characters."
            });
            isValid = false;
        } else if (!EMAIL_REGEX.test(emailInput)) {
            setIsError({
                error: true,
                errorMsg: "Whoops! We really need your email!\n Please add a valid email address."
            });
            isValid = false;
        } else if (!UNIVERSITY_NAME.test(uniName)) {
            setIsError({
                error: true,
                errorMsg: "Uh Oh! We need your university so we can get to you sooner!\n University name should be between 8-48 characters"
            });
            isValid = false;
        } else if (gender === '' || gender === null) {
            setIsError({
                error: true,
                errorMsg: "We need to know your gender."
            });
            isValid = false;
        } else {
            setIsError({ error: false, errorMsg: "" });
        }

        return isValid;
    }

    const submitForm = async () => {

        setIsLoading(true);

        const isRegexVerified = await validateForm();

        if (!isRegexVerified) {
            setIsLoading(false);
            return;
        }

        try {


            const data = {
                fullName: name,
                gender: gender,
                email: emailInput,
                universityName: uniName,
            };

            const response = await fetch(`/user`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data),
            });

            if (response.status === 200) {
                setResponse({
                    success: true,
                    statusCode: 200,
                    statusResponse: "Yay! You're all set!"
                });

            } else {
                setResponse({
                    success: true,
                    statusCode: 409,
                    statusResponse: "Looks like you're already registered for updates!"
                });
            }

        } catch (err) {
            console.log(err);
            setIsError({
                error: true,
                errorMsg: "Could not register interest. Please try again later."
            });


        } finally {
            setIsLoading(false);
        }
    }

    return (
        <React.Fragment>

            <div className={styles.interestWrapper}>
                <div className={styles.interestContainer}>
                    <div className={styles.textCon}>
                        <h1 className={styles.heading}>Register your <span style={{ color: "#45ea69" }}>interest</span>!</h1>
                        <h4 className={styles.subHeading}>It's only gonna get <span style={{ color: "#45ea69" }}>better</span> from here!</h4>

                        <label className={styles.label}>Full Name</label>
                        <input onChange={(e) => setName(e.target.value)} required className={styles.input} placeholder='Full Name'></input>

                        <label className={styles.label}>Email</label>
                        <input onChange={(e) => setEmailInput(e.target.value)} required className={styles.input} placeholder='Personal or Student Email'></input>

                        <label className={styles.label}>University Name</label>
                        <input onChange={(e) => setUniName(e.target.value)} required className={styles.input} placeholder='University Name'></input>

                        <label className={styles.label}>Gender</label>
                        <select value={gender} onChange={(e) => setGender(e.target.value)} className={styles.menu} name="genders" id="genders">
                            <option className={styles.dropdownOption} value="Male">Male</option>
                            <option className={styles.dropdownOption} value="Female">Female</option>
                        </select>

                        {
                            response.success === true && <p style={{ color: response.statusCode === 200 ? "#5CB85C" : "#FFBF00", marginTop: "1rem" }}>{response.statusResponse}</p>
                        }

                        {
                            isError.error === true && <p className={styles.errorMsg}>{isError.errorMsg}</p>
                        }

                        <div>
                            <button onClick={submitForm} className={styles.submitBtn} type='submit'>{isLoading ? "Submitting..." : "Submit!"}</button>
                        </div>

                    </div>
                    <div className={styles.imgCon}>
                        <OrbitCicles></OrbitCicles>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default UserInterest