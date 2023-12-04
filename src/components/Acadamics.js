import react from "react";
import AcadamicsCss from "./AcadamicsCss.css";
import cs from "./img/cs.png";
import design from "./img/design.webp";
import businesss from "./img/business.png";
import exam from "./img/exam.jpg";
import journalism from "./img/jpurn.jpg";
import language from "./img/lan.webp";
import mern from "./img/mern.png";
import app from "./img/app.jpg";

function Acadamics() {
  return (
    <div>
      <div class="wrapper">
        <div class="cards_wrap">
          <div class="card_item">
            <div class="card_inner">
              <img src={businesss} />
              <div class="role_name">Business And Finance</div>
              <div class="real_name">Regular/Extension class</div>
              <div class="film">
                <button
                  type="button"
                  data-toggle="modal"
                  data-target="#business"
                  id="button"
                >
                  Course Lists
                </button>

                {/* <!-- Modal --> */}
                <div
                  class="modal fade"
                  id="business"
                  tabindex="-1"
                  role="dialog"
                  aria-labelledby="exampleModalCenterTitle"
                  aria-hidden="true"
                >
                  <div
                    class="modal-dialog modal-dialog-centered"
                    role="document"
                  >
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="business">
                          Business And Finance Course
                        </h5>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <ol>
                          <li>
                            &#128073;Modern accontancy and aduting with
                            peachtree
                          </li>
                          <li>
                            {" "}
                            &#128073;IFRS,IPSASA,QUICKBOOKS,and Peachtree
                          </li>
                          <li>
                            {" "}
                            &#128073;Banking,Insurance and capital market
                          </li>
                          <li> &#128073;Business management and marketing </li>
                        </ol>
                      </div>
                      <div class="modal-footer">
                        <button type="button" data-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p
                style={{
                  fontStyle: `italic`,
                  marginTop: `10px`,
                }}
              >
                Tuition fee: 8000ETB
              </p>
            </div>
          </div>

          <div class="card_item">
            <div class="card_inner">
              <img src={mern} />
              <div class="role_name">Web Development</div>
              <div class="real_name">Regular/Extension class</div>
              <div class="film">
                <div class="film">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#web"
                    id="button"
                  >
                    Course Lists
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    class="modal fade"
                    id="web"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
                            Web Development{" "}
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <ol>
                            <li> &#128073;HTML</li>
                            <li> &#128073;CSS</li>
                            <li> &#128073;JavaScript</li>
                            <li> &#128073;Bootstrap</li>
                            <li> &#128073;ReactJs</li>
                            <li> &#128073;Node.Js-Express.js</li>
                            <li> &#128073;Mongodb</li>
                            <li> &#128073;MySQL</li>
                          </ol>
                        </div>
                        <div class="modal-footer">
                          <button type="button" data-dismiss="modal">
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p style={{ fontStyle: `italic`, marginTop: `10px` }}>
                  Tuition fee: 8000ETB
                </p>
              </div>
            </div>
          </div>
          <div class="card_item">
            <div class="card_inner">
              <img src={design} />
              <div class="role_name">Designing Software</div>
              <div class="real_name">Regular/Extension class</div>
              <div class="film">
                <div class="film">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#design"
                    id="button"
                  >
                    Course Lists
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    class="modal fade"
                    id="design"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
                            Designing Software{" "}
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <ol>
                            <li>
                              &#128073; Graphics design with video editing and
                              digital marketing
                            </li>
                            <li> &#128073;Architectural Software</li>
                            <li> &#128073;Interior design</li>
                            <li>
                              {" "}
                              &#128073; Interior Design is the global,design
                              magazine publication, website and events company
                              serving the architecture and design industry.
                            </li>
                          </ol>
                        </div>
                        <div class="modal-footer">
                          <button type="button" data-dismiss="modal">
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p style={{ fontStyle: `italic`, marginTop: `10px` }}>
                  Tuition fee: 8000ETB
                </p>
              </div>
            </div>
          </div>
          <div class="card_item">
            <div class="card_inner">
              <img src={language} />
              <div class="role_name">Language</div>
              <div class="real_name">Regular/Extension class</div>
              <div class="film">
                <div class="film">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#lan"
                    id="button"
                  >
                    Course Lists
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    class="modal fade"
                    id="lan"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
                            Language{" "}
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <ol>
                            <li> &#128073;France</li>
                            <li> &#128073;English</li>
                            <li> &#128073;Arabic</li>
                            <li> &#128073;Amharic</li>
                            <li> &#128073;Afaan Oromo</li>
                            <li> &#128073;Geez</li>
                            <li> &#128073;Dutch</li>
                            <li> &#128073;Somali</li>
                          </ol>
                        </div>
                        <div class="modal-footer">
                          <button type="button" data-dismiss="modal">
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p style={{ fontStyle: `italic`, marginTop: `10px` }}>
                  Tuition fee: 8000ETB
                </p>
              </div>
            </div>
          </div>
          <div class="card_item">
            <div class="card_inner">
              <img src={journalism} />
              <div class="role_name">Journalism</div>
              <div class="real_name">Regular/Extension class</div>
              <div class="film">
                <div class="film">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#journ"
                    id="button"
                  >
                    Course Lists
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    class="modal fade"
                    id="journ"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
                            Journalism{" "}
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <ol>
                            <li>
                              {" "}
                              &#128073; Journalism is the production and
                              distribution of reports on the interaction of
                              events, facts, ideas, and people that are the
                              "news of the day" and that informs society to at
                              least some degree of accuracy.
                            </li>
                          </ol>
                        </div>
                        <div class="modal-footer">
                          <button type="button" data-dismiss="modal">
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p style={{ fontStyle: `italic`, marginTop: `10px` }}>
                  Tuition fee: 8000ETB
                </p>
              </div>
            </div>
          </div>
          <div class="card_item">
            <div class="card_inner">
              <img src={exam} />
              <div class="role_name">Exam preparation</div>
              <div class="real_name">Regular/Extension class</div>
              <div class="film">
                <div class="film">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#exam"
                    id="button"
                  >
                    Course Lists
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    class="modal fade"
                    id="exam"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
                            Exam preparation{" "}
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <ol>
                            <li>The Exams are:</li>
                            <ul>
                              <li> &#128073;TOEFL</li>
                              <li> &#128073;SAT</li>
                              <li> &#128073;GRE</li>
                              <li> &#128073;ETS</li>
                              <li> &#128073;IELTS</li>
                            </ul>
                          </ol>
                        </div>
                        <div class="modal-footer">
                          <button type="button" data-dismiss="modal">
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p style={{ fontStyle: `italic`, marginTop: `10px` }}>
                  Tuition fee: 8000ETB
                </p>
              </div>
            </div>
          </div>
          <div class="card_item">
            <div class="card_inner">
              <img src={app} />
              <div class="role_name">App Development</div>
              <div class="real_name">Regular/Extension class</div>
              <div class="film">
                <div class="film">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#app"
                    id="button"
                  >
                    Course Lists
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    class="modal fade"
                    id="app"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
                            App Development{" "}
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <ol>
                            <li> &#128073;Java </li>
                            <li> &#128073; Python</li>
                            <li> &#128073;App Type:</li>
                            <ul>
                              <li>Andriod App</li>
                              <li>IOS APP</li>
                              <li>Desktop App</li>
                            </ul>
                          </ol>
                        </div>
                        <div class="modal-footer">
                          <button type="button" data-dismiss="modal">
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p style={{ fontStyle: `italic`, marginTop: `10px` }}>
                  Tuition fee: 8000ETB
                </p>
              </div>
            </div>
          </div>
          <div class="card_item">
            <div class="card_inner">
              <img src={cs} />
              <div class="role_name">CISCO Network and OS</div>
              <div class="real_name">Regular/Extension class</div>
              <div class="film">
                <div class="film">
                  <button
                    type="button"
                    data-toggle="modal"
                    data-target="#cisco"
                    id="button"
                  >
                    Course Lists
                  </button>

                  {/* <!-- Modal --> */}
                  <div
                    class="modal fade"
                    id="cisco"
                    tabindex="-1"
                    role="dialog"
                    aria-labelledby="exampleModalCenterTitle"
                    aria-hidden="true"
                  >
                    <div
                      class="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div class="modal-content">
                        <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLongTitle">
                            CISCO Network and OS{" "}
                          </h5>
                          <button
                            type="button"
                            class="close"
                            data-dismiss="modal"
                            aria-label="Close"
                          >
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div class="modal-body">
                          <ol>
                            <li>
                              &#128073;Cisco Systems, American technology
                              company, operating worldwide, that is best known
                              for its computer networking products.
                            </li>
                            <li>
                              {" "}
                              &#128073;Update and use your malware scan
                              software.
                            </li>
                            <li>
                              &#128073;Update and use your antivirus software
                              regularly.
                            </li>
                          </ol>
                        </div>
                        <div class="modal-footer">
                          <button type="button" data-dismiss="modal">
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p style={{ fontStyle: `italic`, marginTop: `10px` }}>
                  Tuition fee: 8000ETB
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Acadamics;
