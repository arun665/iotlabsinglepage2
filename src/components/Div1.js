import './css/Div1/Div1.scss';
import './css/Div1/Div1android.scss';
import quotation from './images/quotation-mark.png';
import notebook from './images/notebook.png';
import toolbox from './images/tool-box.png';
import presentation from './images/presentation.png';
import information from './images/information.png';




import Form from './form.js';

function Div1(){


    return <div id="Div1">
  
    <div className="row">
    <div className="col-md-7 col-sm-12 col-xs-12">
   <div id="div">
<div className="row">
    <div className="col-md-6 col-sm-12 col-xs-12">
    <div >
    <fieldset className="border border-dark p-2" id="insidediv">
    <legend align="left"  className="scheduler-border"><img src={quotation} id="quotation" /></legend> 
        <div id="fieldset-text">
<p> Global IoT market is projected to reach
US $1.3 Trillion by 2026</p>
<h2>FORTUNE</h2>
        </div>
        </fieldset>
    </div>
    </div>
    <div className="col-md-6 col-sm-12 col-xs-12">
    <div >
    <fieldset className="border border-dark p-2" id="insidediv">
    <legend align="left"  className="scheduler-border"><img src={quotation} id="quotation" /></legend> 
        <div id="fieldset-text">
<p>India is estimated to have 15 Million
new jobs created in IoT alone</p>
<h4>THE ECONOMIC TIMES</h4>

        </div>
        </fieldset>
    </div>



    </div>
    <div className="col-md-12 col-sm-12 col-xs-12">
      
      <div id="iitrpr">
          <h1> IIT Ropar presents an IoT lab 
which is a complete package including</h1>
      </div>
     
    </div>

    <div id="divider">
          </div>

<div className="col-md-12 col-sm-12 col-xs-12">

<div className="row" id="row2">

    <div className="col-sm-12 col-md-6 col-xs-12">
        <table id="table">
            <tr>
                <td>
                    <img src={notebook} id="kit"/>
                </td>
                <td id="tabletext">
                    <h3> Lab Curriculum</h3>
                </td>
            </tr>
        </table>
    </div>


    <div className="col-sm-12 col-md-6 col-xs-12">
        <table id="table">
            <tr>
                <td>
                    <img src={presentation} id="kit"/>
                </td>
                <td>
                    <h3> Lectures</h3>
                </td>
            </tr>
        </table>
    </div>


    
    <div className="col-sm-12 col-md-6 col-xs-12">
        <table id="table">
            <tr>
                <td>
                    <img src={toolbox} id="kit"/>
                </td>
                <td>
                    <h3> Hardware Kit</h3>
                </td>
            </tr>
        </table>
    </div>



    
    <div className="col-sm-12 col-md-6 col-xs-12">
        <table id="table">
            <tr>
                <td>
                    <img src={information} id="kit"/>
                </td>
                <td>
                    <h3> Projects</h3>
                </td>
            </tr>
        </table>
    </div>


</div>


</div>
    

</div>
</div>
</div>
<div className="col-sm-12 col-md-5 col-xs-12">
    <Form id="form"/>
</div>
   </div>
    </div>
}



export default Div1;
