import React, { Component } from "react";
import ChildSection2 from "../childComponent2/ChildSection2";

class ParentSection2 extends Component {
  render() {
    return (
      <>
        <section className="second-hightlight-wrapper">
          <div className="internal-wrapper">
            <ChildSection2 className="title-wraper" content="iPhone 11 Pro" />
            <ChildSection2 className="description-wrapper" content="Pro cameras. Pro display. Pro performance."/>
            <ChildSection2 className="price-wrapper" content="From $24.95/mo. or $599 with trade‑in." />
            <div class="links-wrapper">
              <ul>
                <li>
                  <a href="">Learn more</a>
                </li>
                <li>
                  <a href="">Buy</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ParentSection2;
