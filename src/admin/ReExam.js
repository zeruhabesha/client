import React from "react";
// import React, { useState } from "react";
// import SidebarAdmin from "./components/SidebarAdmin";
// import HomeAdmin from "./components/HomeAdmin";
import "./OtherFormtable.css";
// import "./table.js";
import AdminNav from "../AdminNav";

function ReExam() {
  // const [student, setStudent] = useState({});
  // const handleInput = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;

  //   setStudent((values) => ({ ...values, [name]: value }));
  // };
  // const handleExpandRow = (row) => {
  //   row.expanded = !row.expanded;
  // };
  return (
    <div>
      <AdminNav />

      <h1 style={{ textAlign: `center`, color: `brown` }}>
        Re-Exam Clearance Form
      </h1>
      <details
        style={{
          textAlign: `center`,
          color: `peru`,
          textTransform: `capitalize`,
        }}
      >
        <summary>
          Before Insert the data in the Re-Exam clearnace form read the policy.
        </summary>
        <p
          style={{
            textAlign: `justify`,
            padding: `40px`,
            textTransform: `capitalize`,
            color: `black`,
          }}
        >
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
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
      </details>
      <div class="main-container">
        <div class="xs-pd-20-10 pd-ltr-20"></div>
        <button
          type="button"
          data-toggle="modal"
          data-target="#addemployee"
          className="otherbuttonform"
        >
          Clearance Form
        </button>

        <div class="card-box mb-30">
          <div class="pd-20">
            <h4
              style={{
                textAlign: `center`,
                textTransform: `capitalize`,
                color: `brown`,
              }}
              class="text-blue h4"
            >
              Sage Members Re-Exam data
            </h4>
          </div>
          <div class="pb-20">
            <table class="table hover  data-table-export nowrap">
              <thead>
                <tr>
                  <th class="table-plus datatable-nosort">Name</th>
                  <th>Age</th>
                  <th>Department</th>
                  <th>Address</th>
                  <th>Start Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="table-plus">Gloria F. Mead</td>
                  <td>25</td>
                  <td>Student</td>
                  <td>2829 Trainer Avenue Peoria, IL 61602</td>
                  <td>29-03-2018</td>
                  <td>
                    <button
                      id="tablebuttons"
                      type="button"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="table-plus">Andrea J. Cagle</td>
                  <td>30</td>
                  <td>Gemini</td>
                  <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                  <td>29-03-2018</td>
                  <td>
                    <button
                      type="button"
                      id="tablebuttons"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="table-plus">Andrea J. Cagle</td>
                  <td>20</td>
                  <td>Gemini</td>
                  <td>2829 Trainer Avenue Peoria, IL 61602</td>
                  <td>29-03-2018</td>
                  <td>
                    <button
                      type="button"
                      id="tablebuttons"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="table-plus">Andrea J. Cagle</td>
                  <td>30</td>
                  <td>Sagittarius</td>
                  <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                  <td>29-03-2018</td>
                  <td>
                    <button
                      type="button"
                      id="tablebuttons"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="table-plus">Andrea J. Cagle</td>
                  <td>25</td>
                  <td>Gemini</td>
                  <td>2829 Trainer Avenue Peoria, IL 61602</td>
                  <td>29-03-2018</td>
                  <td>
                    <button
                      type="button"
                      id="tablebuttons"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="table-plus">Andrea J. Cagle</td>
                  <td>20</td>
                  <td>Sagittarius</td>
                  <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                  <td>29-03-2018</td>
                  <td>
                    <button
                      type="button"
                      id="tablebuttons"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="table-plus">Andrea J. Cagle</td>
                  <td>18</td>
                  <td>Gemini</td>
                  <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                  <td>29-03-2018</td>
                  <td>
                    <button
                      type="button"
                      id="tablebuttons"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="table-plus">Andrea J. Cagle</td>
                  <td>30</td>
                  <td>Sagittarius</td>
                  <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                  <td>29-03-2018</td>
                  <td>
                    <button
                      type="button"
                      id="tablebuttons"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="table-plus">Andrea J. Cagle</td>
                  <td>30</td>
                  <td>Sagittarius</td>
                  <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                  <td>29-03-2018</td>
                  <td>
                    <button
                      type="button"
                      id="tablebuttons"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      <i class="fa fa-plus"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="table-plus">Andrea J. Cagle</td>
                  <td>30</td>
                  <td>Gemini</td>
                  <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                  <td>29-03-2018</td>
                  <td>
                    <button
                      type="button"
                      id="tablebuttons"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="table-plus">Andrea J. Cagle</td>
                  <td>30</td>
                  <td>Gemini</td>
                  <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                  <td>29-03-2018</td>
                  <td>
                    <button
                      type="button"
                      id="tablebuttons"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </td>
                </tr>
                <tr>
                  <td class="table-plus">Andrea J. Cagle</td>
                  <td>30</td>
                  <td>Gemini</td>
                  <td>1280 Prospect Valley Road Long Beach, CA 90802</td>
                  <td>29-03-2018</td>
                  <td>
                    <button
                      type="button"
                      id="tablebuttons"
                      data-toggle="modal"
                      data-target="#exampleModalLong"
                    >
                      <i className="fa fa-plus"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Clearance form */}
        <div
          class="modal fade"
          id="addemployee"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Re-Exam Form
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
                <div class="pd-ltr-20 xs-pd-20-10">
                  <div class="min-height-200px">
                    <form>
                      <div class="form-group">
                        <label for="EID">SID</label>
                        <input
                          type="text"
                          class="form-control"
                          id="EID"
                          placeholder="SID"
                        />
                      </div>
                      <div class="form-group">
                        <label for="FullName">Full Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="FullName"
                          placeholder="Enter Full Name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="FullName">Tel</label>
                        <input
                          type="text"
                          class="form-control"
                          id="FullName"
                          placeholder="Enter Phone number"
                        />
                      </div>

                      <div class="form-group">
                        <label for="FullName">Acadamic Year</label>
                        <input
                          type="text"
                          class="form-control"
                          id="FullName"
                          placeholder="Enter Acadamic Year"
                        />
                      </div>

                      <div class="form-group">
                        <label for="Gender">Section</label>
                        <input
                          type="email"
                          class="form-control"
                          id="Gender"
                          placeholder="Enter Gender"
                        />
                      </div>
                      <div class="form-group">
                        <label for="Role">Department</label>
                        <input
                          type="text"
                          class="form-control"
                          id="Role"
                          placeholder="Enter Department"
                        />
                      </div>
                      <div class="form-group">
                        <label for="Role">Enrollment</label>
                        <input
                          type="text"
                          class="form-control"
                          id="Role"
                          placeholder="Enrollment"
                        />
                      </div>
                      <div class="form-group">
                        <label for="Role">Dean Office Seal</label>
                        <input
                          type="text"
                          class="form-control"
                          id="Role"
                          placeholder="Enrollment"
                        />
                      </div>

                      <h3>Request a make-up exam for</h3>
                      <div class="form-group">
                        <label for="FullName">Unit of competence</label>
                        <input
                          type="text"
                          class="form-control"
                          id="FullName"
                          placeholder="Unit of competence"
                        />
                      </div>
                      <div class="form-group">
                        <label for="Phone">Unit Code</label>
                        <input
                          type="text"
                          class="form-control"
                          id="Phone"
                          placeholder="Unit Code"
                        />
                      </div>
                      <div class="form-group">
                        <label for="User">Exam Date</label>
                        <input
                          type="date"
                          class="form-control"
                          id="User"
                          placeholder="Exam Date"
                        />
                      </div>

                      <div class="form-group">
                        <label for="User">Name of instructors</label>
                        <input
                          type="text"
                          class="form-control"
                          id="User"
                          placeholder="Registrar Sign"
                        />
                      </div>
                      <label>Reason for missing the exam</label>
                      <textarea
                        style={{ width: `100%`, minHeight: `100px` }}
                      ></textarea>

                      <div class="modal-footer">
                        <button
                          type="button"
                          data-dismiss="modal"
                          className="otherbuttonform"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* table button from */}
        <div
          class="modal fade"
          id="exampleModalLong"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  More
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
                <br />
                <br />
                <button
                  type="button"
                  id="tablebuttons"
                  data-toggle="modal"
                  data-target="#editemployee"
                >
                  <i className="fas fa-edit"></i>
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                  type="button"
                  id="tablebuttons"
                  data-toggle="modal"
                  data-target="#deleteemployee"
                >
                  <i className="fas fa-trash"></i>
                </button>
                &nbsp;&nbsp;&nbsp;
              </div>
              <div class="modal-footer">
                <button type="button" id="tablebuttons" data-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* update/edit form */}
        <div
          class="modal fade"
          id="editemployee"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Edit data
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
                <div class="pd-ltr-20 xs-pd-20-10">
                  <div class="min-height-200px">
                    <form>
                      <div class="form-group">
                        <label for="EID">SID</label>
                        <input
                          type="text"
                          class="form-control"
                          id="EID"
                          placeholder="SID"
                        />
                      </div>
                      <div class="form-group">
                        <label for="FullName">Full Name</label>
                        <input
                          type="text"
                          class="form-control"
                          id="FullName"
                          placeholder="Enter Full Name"
                        />
                      </div>
                      <div class="form-group">
                        <label for="FullName">Tel</label>
                        <input
                          type="text"
                          class="form-control"
                          id="FullName"
                          placeholder="Enter Phone number"
                        />
                      </div>

                      <div class="form-group">
                        <label for="FullName">Acadamic Year</label>
                        <input
                          type="text"
                          class="form-control"
                          id="FullName"
                          placeholder="Enter Acadamic Year"
                        />
                      </div>

                      <div class="form-group">
                        <label for="Gender">Section</label>
                        <input
                          type="email"
                          class="form-control"
                          id="Gender"
                          placeholder="Enter Gender"
                        />
                      </div>
                      <div class="form-group">
                        <label for="Role">Department</label>
                        <input
                          type="text"
                          class="form-control"
                          id="Role"
                          placeholder="Enter Department"
                        />
                      </div>
                      <div class="form-group">
                        <label for="Role">Enrollment</label>
                        <input
                          type="text"
                          class="form-control"
                          id="Role"
                          placeholder="Enrollment"
                        />
                      </div>
                      <div class="form-group">
                        <label for="Role">Dean Office Seal</label>
                        <input
                          type="text"
                          class="form-control"
                          id="Role"
                          placeholder="Enrollment"
                        />
                      </div>

                      <h3>Request a make-up exam for</h3>
                      <div class="form-group">
                        <label for="FullName">Unit of competence</label>
                        <input
                          type="text"
                          class="form-control"
                          id="FullName"
                          placeholder="Unit of competence"
                        />
                      </div>
                      <div class="form-group">
                        <label for="Phone">Unit Code</label>
                        <input
                          type="text"
                          class="form-control"
                          id="Phone"
                          placeholder="Unit Code"
                        />
                      </div>
                      <div class="form-group">
                        <label for="User">Exam Date</label>
                        <input
                          type="date"
                          class="form-control"
                          id="User"
                          placeholder="Exam Date"
                        />
                      </div>

                      <div class="form-group">
                        <label for="User">Name of instructors</label>
                        <input
                          type="text"
                          class="form-control"
                          id="User"
                          placeholder="Registrar Sign"
                        />
                      </div>
                      <label>Reason for missing the exam</label>
                      <textarea
                        style={{ width: `100%`, minHeight: `100px` }}
                      ></textarea>

                      <div class="modal-footer">
                        <button
                          type="button"
                          data-dismiss="modal"
                          className="otherbuttonform"
                        >
                          Close
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReExam;
