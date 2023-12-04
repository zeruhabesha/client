import './modal.css';

const RegisterModal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button type="button" class="x-button" onClick={handleClose}>X
        </button>
        
        <div class="card-body p-4 p-md-5">
            <form class="card-form">

              <div class="row">
              <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <input type="text" class="input" placeholder="First Name" />
              </div>
            </div>
            <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <input type="text" class="input" placeholder="Middle Name" />
              </div>
            </div>
            <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <input type="text" class="input" placeholder="Last Name" />
              </div>
            </div>
              </div>

              <div class="row">
              <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <input type="text" class="input" placeholder="Username" />
              </div>
            </div>
                <div class="col-md-6 mb-4">

                  <h5 class="mb-2 pb-1" >Gender: &nbsp;&nbsp;&nbsp;&nbsp;

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" checked />
                    <label class="form-check-label" for="femaleGender">Female</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">Male</label>
                  </div></h5>

                </div>
                <div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                <input type="date" class="input" placeholder="Date of" />
              </div>
            </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 pb-2">

                <div class="input-div one">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                {/* <h5>Username</h5> */}
                <input type="password" class="input" placeholder="Password" />
              </div>
            </div>

                </div>
                <div class="col-md-6 mb-4 pb-2">

                <div class="input-div one">
              <div class="i">
                <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                <input type="password" class="input" placeholder="Re-Password" />
              </div>
            </div>

                </div>
              </div>

              <div class="row">
                {/* <div class="col-12">

                  <select placeholder="Choose option" class="select form-control-lg">
                    <option value="1" disabled>Choose option</option>
                    <option value="2">Subject 1</option>
                    <option value="3">Subject 2</option>
                    <option value="4">Subject 3</option>
                  </select>
                  <label class="form-label select-label">Choose option</label>

                </div> */}
              </div>

              <div class="mt-4 pt-2">
                <input class="btn btn-primary btn-lg" type="submit" value="Submit" />
              </div>

            </form>
          </div>

      </section>
    </div>
  );
};

export default RegisterModal;