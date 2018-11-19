import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {

    state = {
        isOpen: false,
        addOpen: ""
    };

    componentDidMount(){

    }

    slideToggle = (event) => {
        event.preventDefault();

        var initHeight = 120;

        var mdiv = document.getElementsByClassName('mobile-header-nav');

        if (this.state.isOpen) {
            mdiv[0].style.height = '0px';

            this.setState({
                isOpen: false,
                addOpen: ""
            });
        }
        else {
            this.setState({
                isOpen: true,
                addOpen: "open"
            });
            mdiv[0].style.height = initHeight + 'px';

        }
    }

    render() {
        return (
            <header>
                <nav className="mobile-header-wrap" role="navigation">
                    <ul className="mobile-header-nav">
                        <li>
                            <a href="#">Example1</a>
                        </li>
                        <li>
                            <a href="#">Example2</a>
                        </li>
                    </ul>
                </nav>

                <a className={`mobile-menu-toggle hamburger-menu ${this.state.isOpen}`} href="#" onClick={this.slideToggle}>
                    <span className="menu-item"></span>
                    <span className="menu-item"></span>
                    <span className="menu-item"></span>
                </a>
            </header>

        );
    }
}

export default Nav;