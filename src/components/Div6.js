import './css/Div6/Div6.scss';
import './css/Div6/Div6android.scss';
import account from './images/user.png';





import Form from './form.js';

function Div6(){


    return <div id="Div6">
  
    <div className="row">
    <div className="col-md-7 col-sm-12 col-xs-12">
   <div id="div">


   <h1> Learn from Leaders</h1>
   <div id="divider"></div>

   <br></br>
   <br></br>
   <p> IIT Ropar  brings an impressive faculty group bearing academic 
accreditation from premier institutions around the world</p>

<div className="row" id="insiderow">

    <div className="col-md-6 col-sm-3 col-xs-3">
           <table id="table">
               <tr>
                   <td> <img src={account} img="img" /></td>
                   <td> <h3>Name</h3> <h4>Designation</h4><h4> About</h4></td>
               </tr>
           </table>


    </div>



    
    <div className="col-md-6 col-sm-3 col-xs-3">
           <table id="table">
               <tr>
                   <td> <img src={account} img="img" /></td>
                   <td> <h3>Name</h3> <h4>Designation</h4><h4> About</h4></td>
               </tr>
           </table>


    </div>

    
    <div className="col-md-6 col-sm-3 col-xs-3">
           <table id="table">
               <tr>
                   <td> <img src={account} img="img" /></td>
                   <td> <h3>Name</h3> <h4>Designation</h4><h4> About</h4></td>
               </tr>
           </table>


    </div>

    
    <div className="col-md-6 col-sm-3 col-xs-3">
           <table id="table">
               <tr>
                   <td> <img src={account} img="img" /></td>
                   <td> <h3>Name</h3> <h4>Designation</h4><h4> About</h4></td>
               </tr>
           </table>


    </div>
</div>



   
</div>
</div>
<div className="col-sm-12 col-md-5 col-xs-12">
  
</div>
   </div>
    </div>
}



export default Div6;
