import React, { useRef, useState } from "react";
import { StyledSignIn } from "../signIn/SignIn.style";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import LogoImg from "../../../assets/img/sign_logo.svg";
import user from "../../../assets/img/user.svg";
import lock from "../../../assets/img/lock.svg";
import { Link } from "react-router-dom";

function SignIn() {
  const auth = getAuth();
  const inputPassword = useRef();
  const inputEmail = useRef();
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

    createUserWithEmailAndPassword(auth, email, password)
      .then((cred) => {
        console.log("user", cred.user);
        localStorage.setItem("userInfo", JSON.stringify(cred.user.email));
        localStorage.setItem("jwt", cred.user.uid);
        window.location.pathname = '/shop'
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <StyledSignIn>
      <div className="content">
        <div className="logo">
          <img src={LogoImg} alt="Logo" />
        </div>
        <div>
          <form onsubmit={handleSubmit}>
            <div onClick={() => inputEmail.current.focus()}>
              <img src={user} alt="user" />
              <input
                required
                type="email"
                placeholder="EMAIL"
                value={email}
                name="email"
                onChange={handleInputChange}
                ref={inputEmail}
              />
            </div>
            <div onClick={() => inputPassword.current.focus()}>
              <img src={lock} alt="lock" />
              <input
                required
                type="password"
                placeholder="PASSWORD"
                value={password}
                name="password"
                onChange={handleInputChange}
                ref={inputPassword}
              />
            </div>
            <button onClick={handleSubmit}>SIGN UP</button>
            <a>
              <Link to="/signin">You have account!</Link>
            </a>
          </form>
        </div>
      </div>
    </StyledSignIn>
  );
}

export default SignIn;
