import React from "react";
import macLaptop from '../images/home/mac-laptop.jpg'
import ChildSection1 from "../childComponent2/ChildSection1";
class ParentSection1 extends React.Component {
  render() {
    return (
      <div>
        <section className="main-highlight-wrapper">
          <div className="internal-wrapper">
            <ChildSection1 className="model" content="16-inch model" />
            <ChildSection1 className="product-title" content="MacBook Pro" />
            <ChildSection1
              className="brief-description"
              content="The best for the brightest."
            />

            <div className="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>

            <div className="main-image-wrapper">
              <img src={macLaptop} alt='mac laptop' />
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ParentSection1;
