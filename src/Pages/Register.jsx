import auth from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useState } from "react";
import { FaEye, FaEyeSlash, FaQuestionCircle } from 'react-icons/fa';

const Register = () => {

    const [userSuccessMessage, setUserSuccessMessage] = useState('')
    const [userErrorMessage, setUserErrorMessage] = useState('')

    const [showExampleEmail, setShowExampleEmail] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleFormSubmit = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setUserSuccessMessage('')
        setUserErrorMessage('')

        if (password.length < 6) {
            setUserErrorMessage('Password must be at least six(6) characters!')
            return;
        } else if (!/[A-Z][a-z]/.test(password)) {
            setUserErrorMessage('Password must have contain at least one upper case and one lower case letter!')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                console.log(userCredential.user)
                setUserSuccessMessage('Account registered successfully!')

                e.target.email.value = '';
                e.target.password.value = '';

            })
            .catch(error => {
                console.error(error.message)
                setUserErrorMessage(error.message)
            })
    }

    return (
        <HelmetProvider>
            <Helmet>
                <title>User Authentication | Register</title>
            </Helmet>
            <div className="flex flex-col items-center gap-8">
                <h2 className="text-4xl">Register</h2>
                <form onSubmit={handleFormSubmit} className="bg-slate-300 p-5 rounded-lg">
                    <label htmlFor="email">Email: <div className="input-group">
                        <input className="p-2 rounded-lg" type="email" name="email" id="email" placeholder={showExampleEmail ? "ex@mple.com" : "Email"} required />
                        <button className="btn btn-square" onClick={() => { setShowExampleEmail(!showExampleEmail) }}><FaQuestionCircle></FaQuestionCircle></button>
                    </div>
                    </label>
                    <br />
                    <label htmlFor="password">Password: <div className="input-group">
                        <input className="p-2 rounded-lg" type={showPassword ? "text" : "password"} name="password" id="password" placeholder="Password" required />
                        <button className="btn btn-square" onClick={() => { setShowPassword(!showPassword) }}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</button>
                    </div>
                    </label>
                    <br />
                    <input className="btn" type="submit" value="Register" />
                </form>
                {
                    userSuccessMessage && <div>
                        <h2 className="text-green-950 text-xl">{userSuccessMessage}</h2>
                    </div>
                }
                {
                    userErrorMessage && <h2 className="text-red-700 text-2xl">{userErrorMessage}</h2>
                }
            </div>

        </HelmetProvider>
    );
};

export default Register;