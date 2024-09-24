import React from "react";
import ChildHeader from "../childComponent1/ChildHeader";
import logo from "../common_resources/images/icons/logo.png";
import search from "../common_resources/images/icons/search-icon.png";
import cart from "../common_resources/images/icons/cart.png";

class Header extends React.Component {
  render() {
    return (
      <div>
        <header className="header-wrapper">
          <div className="internal-wrapper">
            <div className="header-links-wrapper">
              <ul>
                <li>
                  <a href="https://www.apple.com/apple">
                    <img className="logo-link" src={logo} alt="logo"/>
                  </a>
                </li>
                <ChildHeader href="https://www.apple.com/mac" content="mac" />
                <ChildHeader href="https://www.apple.com/ipad" content="ipad" />
                <ChildHeader
                  href="https://www.apple.com/iphone"
                  content="iphone"
                />
                <ChildHeader
                  href="https://www.apple.com/watch"
                  content="watch"
                />
                <ChildHeader
                  href="https://www.apple.com/vision"
                  content="vision"
                />
                <ChildHeader
                  href="https://www.apple.com/airpods"
                  content="airpods"
                />
                <ChildHeader
                  href="https://www.apple.com/tv&home"
                  content="tv&home"
                />
                <ChildHeader
                  href="https://www.apple.com/entertainment"
                  content="entertainment"
                />
                <ChildHeader
                  href="https://www.apple.com/accessories"
                  content="accessories"
                />
                <ChildHeader
                  href="https://www.apple.com/support"
                  content="support"
                />
                <li>
                  <a href="https://www.apple.com/apple">
                    <img className="search-link" src={search}></img>
                  </a>
                </li>
                <li>
                  <a href="https://www.apple.com/apple">
                    <img className="cart-link" src={cart}></img>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
