import React from 'react';




function Login() {
    return (
        <div className="login_container">
            <h1 className="title_login">Login Page</h1>
            <form>
                <h3>Email</h3>
                <input className="input_login" type="text"/>
                <h3>Password</h3>
                <input className="input_login" type="password"/><br></br>
                <button className="button_login_a">Sign In</button>
                <h4>Or</h4>
                <button className="button_login_b">Create account</button>
            </form>
        </div>
    );
}

export default Login;
