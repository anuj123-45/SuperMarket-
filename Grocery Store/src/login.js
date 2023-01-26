
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './login.css';
import { Link } from 'react-router-dom';

const Login=()=>{
return(
    <>
    <Link to="/gotohome"><button className="btn btn-primary">Home</button></Link>
<div className="login-form">
    <form action="/examples/actions/confirmation.php" method="post">
        <h2 className="text-center">Login In</h2>   
        <div className="form-group">
        	<div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <span className="fa fa-user"></span>
                    </span>                    
                </div>
                <input type="text" className="form-control" name="username" placeholder="Username" required="required"/>				
            </div>
        </div>
		<div className="form-group">
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <i className="fa fa-lock"></i>
                    </span>                    
                </div>
                <input type="password" className="form-control" name="password" placeholder="Password" required="required"/>				
            </div>
        </div>        
        <div className="form-group">
            <button type="submit" className="btn btn-primary login-btn btn-block">Sign in</button>
        </div>
        <div className="clearfix">
            <label className="float-left form-check-label"><input type="checkbox"/> Remember me</label>
            <a href="#" className="float-right">Forgot Password?</a>
        </div>
		<div className="or-seperator"><i>or</i></div>
        <p className="text-center">Login with your social media account</p>
        <div className="text-center social-btn">
            <a href="https://www.facebook.com/" className="btn btn-secondary"><i className="fa fa-facebook"></i>&nbsp; Facebook</a>
            <a href="https://twitter.com/login?lang=en" className="btn btn-info"><i className="fa fa-twitter"></i>&nbsp; Twitter</a>
			<a href="https://accounts.google.com/signup/v2/webcreateaccount?hl=en&flowName=GlifWebSignIn&flowEntry=SignUp" className="btn btn-danger"><i className="fa fa-google"></i>&nbsp; Google</a>
        </div>
    </form>
    <p className="text-center text-muted small"><b className="last">Don't have an account?</b> <Link to="/grocery/signup">Sign up here!</Link></p>
</div>
    
    
    </>
);
}


export default Login;