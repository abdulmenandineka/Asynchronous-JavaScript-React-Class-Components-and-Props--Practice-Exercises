import React from "react";
import appleTv from "./images/icons/apple-tv-logo.png";
import servant from "./images/icons/servant-logo.png";
function section5() {
  return (
    <div>
      <section class="fifth-heghlight-wrapper">
        <div class="left-side-wrapper">
          <div class="top-logo-wrapper">
            <div class="logo-wrapper">
              <img src={appleTv} alt="apple tv" />
            </div>
          </div>

          <div class="tvshow-logo-wraper">
            <img src={servant} alt="servant" />
          </div>

          <div class="watch-more-wrapper">
            <a href="#">Watch the trailer</a>
          </div>
        </div>
        <div class="right-side-wrapper">
          <div class="top-logo-wrapper">
            <div class="logo-wrapper">AirPods Pro</div>
          </div>

          <div class="description-wraper">Magic like you’ve never heard.</div>

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
    </div>
  );
}

export default section5;
