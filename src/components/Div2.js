import './css/Div2/Div2.scss';
import './css/Div2/Div2android.scss';
import img from './images/7.png';





import Form from './form.js';

function Div2(){


    return <div id="Div2">
  
    <div className="row">
    <div className="col-md-7 col-sm-12 col-xs-12">
   <div id="div">

   <h1> What is IoT? </h1>
   <div id="divider"></div>

   <br></br>
   <br></br>
   <p> IoT is an amazing way to connect everything with
the internet and let them communicate with each
other and produce wonderful outcomes.</p>

<br></br>
<img src={img} id="img" />





</div>
</div>
<div className="col-sm-12 col-md-5 col-xs-12">
   
</div>
   </div>
    </div>
}



export default Div2;
