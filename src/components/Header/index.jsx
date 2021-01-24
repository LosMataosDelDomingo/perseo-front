import "./header.sass";
import { ReactComponent as Perseo } from "assets/perseo.svg"
import { Button } from './../common/Button/index';

export const Header = () => {
    return (
        <header id="header" className="section">
            <div className="inner-section">
                <div className="brand-logo">
                    <div className="logo"><Perseo /></div>
                    <div className="brand">Perseo</div>
                </div>
                <div className="lg-nav-menu">
                    <ul>
                        <li><Button to="/" text="Log In" /></li>
                        <li><Button to="/" text="Sign In" /></li>
                    </ul>
                </div>
            </div>
        </header>
    );
};
// #F5F6FA
// #FAFAFA
// #F6FCFF