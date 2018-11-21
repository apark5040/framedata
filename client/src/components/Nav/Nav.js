import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {

    state = {
        isOpen: false,
        addOpen: ""
    };

    slideToggle = (event) => {
        event.preventDefault();

        var initHeight = 120;

        var mdiv = document.getElementsByClassName('mobile-header-nav');
        var divStyle = mdiv[0].style;

        var items = document.getElementsByClassName('listItems');
        var itemsStyle = items[0].style;

        if (this.state.isOpen) {
            divStyle.height = '0px';
            itemsStyle.display = "none";

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
            divStyle.height = initHeight + 'px';
            itemsStyle.display = "block";

        }
    }

    render() {
        return (
            <header>
                <nav className="mobile-header-wrap" role="navigation">
                    <ul className="mobile-header-nav">
                        <div className="listItems">
                            <li>
                                <a href="#">Example1</a>
                            </li>
                            <li>
                                <a href="#">Example2</a>
                            </li>
                        </div>
                    </ul>
                </nav>

                <a className={`mobile-menu-toggle nav-menu ${this.state.addOpen}`} href="#" onClick={this.slideToggle}>
                    <span className="menu-item"></span>
                    <span className="menu-item"></span>
                    <span className="menu-item"></span>
                </a>
            </header>

        );
    }
}

export default Nav;