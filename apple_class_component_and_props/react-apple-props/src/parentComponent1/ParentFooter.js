import React, { Component } from "react";
import ChilFooter from "../childComponent1/ChilFooter";
import img16  from"../common_resources/images/icons/16.png";

class ParentFooter extends Component {
  render() {
    return (
      <>
        <footer className="footer-wrapper">
          <div className="internal-wrapper">
            <div className="upper-text-container">
              1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro
              promotional pricing is after trade‑in of iPhone 8 Plus and iPhone
              X in good condition. Additional trade‑in values require purchase
              of a new iPhone, subject to availability and limits. Must be at
              least 18. Apple or its trade-in partners reserve the right to
              refuse or limit any Trade In transaction for any reason. In‑store
              trade‑in requires presentation of a valid, government-issued photo
              ID (local law may require saving this information). Sales tax may
              be assessed on full value of new iPhone. Additional terms from
              Apple or Apple’s trade-in partners may apply. Monthly pricing:
              Available to qualified customers and requires 0% APR, 24‑month
              installment loan with Citizens One, and iPhone activation with
              AT&T, Sprint, T‑Mobile, or Verizon.{" "}
              <a href="#"> Full terms apply</a>.
            </div>
            <div className="footer-links-wrapper">
              <div className="links-wrapper-1">
                <h3>Shop and Learn</h3>
                <ul>
                  <ChilFooter content="mac" />
                  <ChilFooter content="ipad" />
                  <ChilFooter content="iphone" />
                  <ChilFooter content="watch" />
                  <ChilFooter content="tv" />
                  <ChilFooter content="music" />
                  <ChilFooter content="airpods" />
                  <ChilFooter content="homepod" />
                  <ChilFooter content="ipad touch" />
                  <ChilFooter content="accessories" />
                  <ChilFooter content="gift cards" />
                </ul>
              </div>
              <div className="links-wrapper-2">
                <h3>Services</h3>
                <ul>
                  <ChilFooter content="Apple Music" />
                  <ChilFooter content="Apple News+" />
                  <ChilFooter content="Apple TV+" />
                  <ChilFooter content="Apple Arcade" />
                  <ChilFooter content="Apple Card" />
                  <ChilFooter content="iCloud" />
                </ul>
                <h3>Account</h3>
                <ul>
                  <ChilFooter content="Manage Your Apple ID" />
                  <ChilFooter content="Apple Store Account" />
                  <ChilFooter content="iCloud.com" />
                </ul>
              </div>
              <div className="links-wrapper-3">
                <h3>Apple Store</h3>
                <ul>
                  <ChilFooter content="Find a Store" />
                  <ChilFooter content="Genius Bar" />
                  <ChilFooter content="Today at Apple" />
                  <ChilFooter content="Apple Camp" />
                  <ChilFooter content="Field Trip" />
                  <ChilFooter content="Apple Store App" />
                  <ChilFooter content="Refurbished and Clearance" />
                  <ChilFooter content="Financing" />
                  <ChilFooter content="Apple Trade In" />
                  <ChilFooter content="Order Status" />
                  <ChilFooter content="Shopping Help" />
                </ul>
              </div>
              <div className="links-wrapper-4">
                <h3>For Business</h3>
                <ul>
                  <ChilFooter content="Apple and Business" />
                  <ChilFooter content="Shop for Business" />
                </ul>
                <h3>For Education</h3>
                <ul>
                  <ChilFooter content="Apple and Education" />
                  <ChilFooter content="Shop for College" />
                </ul>
                <h3>For Healthcare</h3>
                <ul>
                  <ChilFooter content="Manage Your Apple ID" />
                  <ChilFooter content="Apple Store Account" />
                  <ChilFooter content="iCloud.com" />
                </ul>
                <h3>For Government</h3>
                <ul>
                  <ChilFooter content="Apple and Education" />
                  <ChilFooter content="Shop for College" />
                </ul>
              </div>

              <div className="links-wrapper-5">
                <h3>Apple Values</h3>
                <ul>
                  <ChilFooter content="Find a Store" />
                  <ChilFooter content="Genius Bar" />
                  <ChilFooter content="Today at Apple" />
                  <ChilFooter content="Apple Camp" />
                  <ChilFooter content="Field Trip" />
                  <ChilFooter content="Apple Store App" />
                </ul>
                <h3>About Apple</h3>
                <ul>
                  <ChilFooter content="Find a Store" />
                  <ChilFooter content="Genius Bar" />
                  <ChilFooter content="Today at Apple" />
                  <ChilFooter content="Apple Camp" />
                  <ChilFooter content="Field Trip" />
                  <ChilFooter content="Apple Store App" />
                </ul>
              </div>
            </div>
            <div className="my-apple-wrapper">
              More ways to shop: <a href="#">Find an Apple Store</a> or{" "}
              <a href="#">other retailer</a> near you. Or call 1-800-MY-APPLE.
            </div>
            <div className="copyright-wrapper">
              <div className="copyright">
                Copyright © 2019 Apple Inc. All rights reserved.
              </div>
              <div className="footer-links-terms">
                <ul>
                  <li><ChilFooter content="Privacy Policy" /></li>
                  <li><ChilFooter content="Terms of Use" /></li>
                  <li><ChilFooter content="Sales and Refunds" /></li>
                  <li><ChilFooter content="Legal" /></li>
                  <li><ChilFooter content="Site Map" /></li>
                </ul>
              </div>
              <div className="footer-country">
                <div className="flag-wrapper">
                  <img src={img16} />
                </div>
                <div className="footer-country-name">United States</div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default ParentFooter;
