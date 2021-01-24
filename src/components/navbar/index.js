  
import "./header.sass";
import { ReactComponent as Perseo } from "../assets/perseo.svg"
import { Button } from './../common/Button/index';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header id="header" className="section">
            <div className="inner-section">
                <div className="brand-logo">
                    <div className="logo"><Link to="/"><Perseo /></Link></div>
                    <div className="brand">Perseo</div>
                </div>
                <div className="lg-nav-menu">
                    <ul>
                        <li><Button to="/courses" text="Courses" /></li>
                        <li><Button to="/login" text="Log In" /></li>
                        <li><Button to="/signup" text="Sign In" /></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};