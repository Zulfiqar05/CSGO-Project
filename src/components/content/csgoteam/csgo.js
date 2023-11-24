import React from "react";
import "./csgo.css";
import img5 from "./images/Rectangle 8 (1).jpg";
import img6 from "./images//Rectangle 9.jpg";
import img7 from "./images//Rectangle 10.jpg";
import img8 from "./images//Rectangle 11.jpg";
import img9 from "./images//Rectangle 12.jpg";

function csgo() {
  return (
    <div>
      <div className="main-container-csgo">
        <img src={img5} />
        <img src={img9} />
        <img src={img7} />
        <img src={img8} />
        <img src={img9} />
      </div>

      <div className="csgo-tm">

        <h3>
          CSGO TEAM
        </h3>

        <hr></hr>


      </div>

      <div className="img-part">
      <img src={img6} />
      <img src={img6} />
      </div>

      <div className="cc">

      <h3>Content Creaters</h3>
      </div>

      <div className="contact">
        <h3>
        Contact
        </h3>
        <p>
          Prees@choro-esports.com
        </p>
        <p>
          Team@choro-esports.com
        </p>
        


      </div>

      <div className="link">
        <h3>
          linktr.ee/teamchr
        </h3>
      </div>
    </div>
  );
}

export default csgo;
