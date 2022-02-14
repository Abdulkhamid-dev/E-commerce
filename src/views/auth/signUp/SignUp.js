import React, { useRef, useState } from "react";
import { StyledSignIn } from "../signIn/SignIn.style";
import LogoImg from "../../../assets/img/sign_logo.svg";
import user from "../../../assets/img/user.svg";
import lock from "../../../assets/img/lock.svg";
import { Link } from "react-router-dom";

function SignIn() {
  const inputName = useRef();
  const inputPassword = useRef();
  const inputEmail = useRef();
  const [value, setValue] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const { userName, email, password } = value;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValue((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <StyledSignIn>
      <div className="content">
        <div className="logo">
          <img src={LogoImg} alt="Logo" />
        </div>
        <div>
          <form onsubmit={handleSubmit}>
            <div onClick={() => inputName.current.focus()}>
              <img src={user} alt="user" />
              <input
                required
                type="text"
                placeholder="USERNAME"
                value={userName}
                name="userName"
                onChange={handleInputChange}
                ref={inputName}
              />
            </div>
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
            <button onClick={handleSubmit}>LOGIN</button>
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
