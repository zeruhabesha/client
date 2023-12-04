import React from "react";
import "./ResearchCss.css";
import back from "./img/back.jpg";
function Research() {
  return (
    <div className="ResMain">
      <div className="OneSide">
        <h3 className="resP">Research Policy</h3>
        <p className="ResPolicy">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </p>
      </div>
      <div className="SecoSide">
        <h3
          style={{
            marginTop: `140px`,
            textAlign: `center`,
            fontFamily: `serif`,
            color: `brown`,
          }}
        >
          Sign in(Login) here to find any kind of research journals.
        </h3>
        <div class="Rescontainer">
          <div class="Res">
            <a class="Reslogin">Log in</a>
            <div class="ResinputBox">
              <input type="text" required="required" className="Resin" />
              <span class="Resuser">Username</span>
            </div>

            <div class="ResinputBox">
              <input type="password" required="required" className="Resin" />
              <span>Password</span>
            </div>

            <button class="Resenter">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Research;
