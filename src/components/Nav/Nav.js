import React, { Component } from "react";
import "./Nav.scss";

class Nav extends Component {

    state = {
        isOpen: false,
        addOpen: ""
    };

    componentDidMount(){
        document.addEventListener('click', this.handleClick, false);
    }

    componentWillUnmount(){
        document.removeEventListener('click', this.handleClick, false);
    }

    handleClick = (event) => {
        event.preventDefault();
        if(this.node.contains(event.target)){
            return;
        }

        this.slideToggle();
    }

    slideToggle = () => {

        let initHeight = 220;
        let initWidth = 20;

        const mdiv = document.getElementsByClassName('mobile-header-nav');
        const divStyle = mdiv[0].style;

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
            divStyle.width = initWidth + 'vw';
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
                                <a href="/">Main</a>
                            </li>
                            <li>
                                <a href="/character/1">Example1</a>
                            </li>
                            <li>
                                <a href="/character/2">Example2</a>
                            </li>
                            <li>
                                <a href="/character/3">Example3</a>
                            </li>
                        </div>
                    </ul>
                </nav>

                <button className={`mobile-menu-toggle nav-menu ${this.state.addOpen}`} ref={node => this.node = node} onClick={this.slideToggle}>
                    <span className="menu-item"></span>
                    <span className="menu-item"></span>
                    <span className="menu-item"></span>
                </button>
            </header>

        );
    }
}

export default Nav;