import './css/form/form.scss';
import react ,{useState} from 'react';



function Form() {


  return (
    <div className="formdiv" id="form">
<div className="row">
    <div className="col-md-3"></div>
     <div  className="col-sm-12 col-xs-12 col-md-9" >
     <div className="container">

  
   <div className="head">
       <h3> Apply for the program</h3>
   </div>
     <form>
     <div className="form-group">
    <input type="text" placeholder="Name"     className="form-control"  />
  </div>
  <div className="form-group">
    <input type="email" placeholder="Email"    className="form-control" />
  </div>
  <div className="form-group">
    <input type="text" placeholder="Contact No."   className="form-control" />
  </div>
  <div className="form-group">
    <input type="text" placeholder="State"  className="form-control"   />
  </div>
  <div className="form-group">
    <input type="text" placeholder="Organization/College"  className="form-control"  />
  </div>
  <div className="form-group">
    <input type="text" placeholder="Designation"  className="form-control"   />
  </div>
  <div className="form-group">
    <input type="text" placeholder="Experience"  className="form-control" />
  </div>


 <button className="btn"   className="btn btn-outline-primary"
   > Submit Now</button>
     </form>
</div>
     </div>
     </div>
    </div>
  );
}



export default (Form);






