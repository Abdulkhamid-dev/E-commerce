import React, { useRef, useState } from "react";
import { StyledSignIn } from "./SignIn.style";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import {AiOutlineMail} from 'react-icons/ai'
import LogoImg from "../../../assets/img/sign_logo.svg";
import user from "../../../assets/img/user.svg";
import lock from "../../../assets/img/lock.svg";
import { Link } from "react-router-dom";

function SignIn() {
  const auth = getAuth();
  const inputName = useRef();
  const inputPassword = useRef();
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = value;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
    signInWithEmailAndPassword(auth, email, password)
    .then((cred) => {
      console.log('user', cred.user);
      localStorage.setItem("userInfo", JSON.stringify(cred.user.email));
      localStorage.setItem("jwt", cred.user.accessToken);
      window.location.pathname = '/shop'
    })
    .catch((err) => {
      console.log(err.message);
    })
  };
  return (
    <StyledSignIn>
      <div className="content">
        <div className="logo">
          <img src={LogoImg} alt="Logo" />
        </div>
        <div>
          <form>
            <div onClick={() => inputName.current.focus()}>
              <img src={user} alt="user" />
              <input type="email" placeholder="EMAIL"
              style={{backgroundColor: "transparent"}}
               value={email}
               name="email"
               onChange={handleInputChange}
              ref={inputName} />
            </div>
            <div onClick={() => inputPassword.current.focus()}>
              <img src={lock} alt="lock" />
              <input
                type="password"
                placeholder="PASSWORD"
                ref={inputPassword}
                value={password}
                name="password"
                onChange={handleInputChange}
              />
            </div>
            <button onClick={handleSubmit}>LOGIN</button>
            <a>
              <Link to="/signup">No account?</Link>
            </a>
          </form>
        </div>
      </div>
    </StyledSignIn>
  );
}

export default SignIn;
