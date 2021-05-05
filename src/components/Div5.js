import './css/Div5/Div5.scss';
import './css/Div5/Div5android.scss';
 import rating from './images/rating.png';
 import distance from './images/distance-learning.png';
 import sharing from './images/sharing.png';
 import book from './images/book.png';
 import presentation from './images/presentation 2.png';
 import certificate from './images/certificate.png';
 import recruitment from './images/recruitment.png';
 import funding from './images/funding.png';
 
 
 
 
 


import Form from './form.js';

function Div5(){


    return <div id="Div5">
  
    <div className="row">
    <div className="col-md-7 col-sm-12 col-xs-12">
   <div id="div">

   <h1> Benefits Of The Course </h1>
<br></br>
   <div className="row" id="row1">

<div className="col-md-3 col-sm-5 col-xs-4">

<div id="insidediv">
<img src={rating}  id="img"/>
<br></br>
<p>Chance
of learning
from 
IoT experts.</p>
</div>

</div>



<div className="col-md-3 col-sm-5 col-xs-4">

<div id="insidediv">
<img src={distance}  id="img"/>
<br></br>
<p>Access to
world class 
content on 
IoT..</p>
</div>

</div>


<div className="col-md-3 col-sm-5 col-xs-4">

<div id="insidediv">
<img src={sharing}  id="img"/>
<br></br>
<p>Hand on
experience on
IoT using our
Hardware Kit</p>
</div>

</div>


<div className="col-md-3 col-sm-5 col-xs-5">

<div id="insidediv">
<img src={book}  id="img"/>
<br></br>
<p>You will learn
how to make
product rather
than just
projects.</p>
</div>

</div>




<div className="col-md-3 col-sm-5 col-xs-5">

<div id="insidediv">
<img src={presentation}  id="img"/>
<br></br>
<p>Also get
chance to
interact with
best experts
from industry
and academia.</p>
</div>

</div>




<div className="col-md-3 col-sm-6 col-xs-6">

<div id="insidediv">
<img src={certificate}  id="img"/>
<br></br>
<p>IIT
Certificate</p>
</div>

</div>



<div className="col-md-3 col-sm-6 col-xs-6">

<div id="insidediv">
<img src={recruitment}  id="img"/>
<br></br>
<p>Chance of
internship and
placement.</p>
</div>

</div>



<div className="col-md-3 col-sm-6 col-xs-6">

<div id="insidediv">
<img src={funding}  id="img"/>
<br></br>
<p>Opportunity of
seed funding
to your
startup ideas.</p>
</div>

</div>







   </div>
   
</div>
</div>
<div className="col-sm-12 col-md-5 col-xs-12">

  
</div>
   </div>
    </div>
}



export default Div5;
