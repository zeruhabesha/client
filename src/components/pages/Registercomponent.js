import React, { Component } from 'react'

class Registercomponent extends Component {


    render() {
       
            return (
                <div>

<form class="form-horizontal">
    <fieldset>
    <div class="form-group">
    <label for="inputEmail" class="col-lg-2 control-label">Email</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" id="inputEmail" placeholder="Email"/>
      </div></div>
      <div class="form-group">
    <label for="inputPassword" class="col-lg-2 control-label">Password</label>
      <div class="col-lg-10">
        <input type="text" class="form-control" id="inputinputPassword" placeholder="Password"/>
      </div></div>
      <div class="form-group">
      <div class="col-lg-10 col-lg-offset-2">
        <button type="reset" class="btn btn-default">Cancel</button>
        <button type="submit" class="btn btn-primary">Register</button>
      </div>
    </div>
      </fieldset>
    </form>

            
                       </div>
            );
       
    }
}

export default Registercomponent;