import React, { Component } from 'react';

class Form extends Component {


    render() {
        return (
           <div>
 <div class="container contact">
 <div class="row">
		<div class="col-md-3">
			<div class="contact-info" >
				<h2>Form</h2>
			</div>
		</div>
   
   
    <div class="col-md-9">
			<div class="contact-form">
				<div class="form-group">
    <label for="inputEmail" class="control-label col-sm-2" >Email</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" id="inputEmail" placeholder="Email"/>
      </div></div>
      <div class="form-group">
    <label for="inputPassword" class="control-label col-sm-2" >Password</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" id="inputinputPassword" placeholder="Password"/>
      </div></div><br></br>
      <div class="form-group">
      <div class="col-lg-10 col-lg-offset-2">
        <button type="reset" class="btn btn-default">Cancel</button>
        <button type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div> </div>
    </div>
     
    
    </div>
    </div>
    <br></br><br></br><br></br><br></br><br></br><br></br>

           </div>
        );
    }
}

export default Form;