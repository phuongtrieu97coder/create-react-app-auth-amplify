import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import "./test1.scss";
import {Slideshow_block1} from "./slideshow1.js";



function Navtop(){
    return (
        <>
           <nav id="navtop1" className="navtop">
                <span id="navtop1_1">
                    <a id="home_butt" className="home_butt btn text-white"
                     title="home button" name="home_butt"
                    type="button" href="https://master.d2mwryxqtlelks.amplifyapp.com" target="_self"
                    data-home-butt="home button data1 hbtdtzxccxvbcvnvcnknnklln">
                        <i className="fa fa-home text-info"></i> HOME
                    </a>
                    <a id="menu_butt" className="menu_butt btn text-white"
                     title="menu button" name="menu_butt"
                    type="button" href="#" target="_self"
                    data-menu-butt="menu button data1 hbtdtzxccxvbcveyrteuur">
                        <i className="fa fa-bars text-primary"></i> Menu
                    </a>
                    <a id="contact_butt" className="contact_butt btn text-white"
                     title="contact button" name="contact_butt"
                    type="button" href="#" target="_self"
                    data-contact-butt="contact button data1 hbtdtzxccxvbcgshdkvmmvoouyu">
                        <i className="fa fa-phone text-success"></i> Contact
                    </a>
                </span>



                <span id="navtop1_2" className="w3-right">
                     <a id="about_butt" className="about_butt btn text-white"
                     title="about button" name="about_butt"
                    type="button" href="#" target="_self"
                    data-about-butt="about button data1 hbtdtzxccxvbcvuioowreqesdfghjgj">
                        <i className="fa fa-info-circle text-info"></i> About
                    </a>
                    <a id="login_butt" className="login_butt btn text-white"
                     title="login button" name="login_butt"
                    type="button" href="#" target="_self"
                    data-login-butt="login button data1 hbtdtzxccxvbcvcmmnfhgrtuytuwer">
                        <i className="fa fa-sign-in text-success"></i> Login
                    </a>
                    <a id="logout_butt" className="logout_butt btn text-white"
                     title="logout button" name="logout_butt"
                    type="button" href="#" target="_self"
                    data-logout-butt="logout button data1 hbtdtzxccxvbcvnhklksadfwretyo">
                        <i className="fa fa-sign-out text-danger"></i> Logout
                    </a>
                </span>
           </nav>

        </>
    )
}

ReactDOM.render(<Navtop/>,document.getElementById("block1"));
ReactDOM.render(<Slideshow_block1/>,document.querySelectorAll("#block2")[0]);


function Navbottom(){
    return (
        
              <nav id="navbottom_block" className="w3-bar w3-bottom w3-black"
               data-navbottom_block="navbottom_block">

                 <span id="navbottom_block_1" style={{float:"right"}} 
                 data-navbottom_block_1="navbottom_block_1">


                     <a id="navbottom_account_button" 
                     className="navbottom_account_button text-white w3-hover-green"
                     title="navbottom_account_button" name="navbottom_account_button"
                     type="button" href="#" target="_self" 
                     data-navbottom-button1="navbottom_account_button">ACCOUNT</a>


                     <a id="navbottom_about_button" 
                     className="navbottom_about_button text-white w3-hover-green"
                     title="navbottom_about_button" name="navbottom_about_button"
                     type="button" href="#" target="_self" 
                     data-navbottom-button2="navbottom_about_button">ABOUT</a>




                     <a id="navbottom_cookie_button" 
                     className="navbottom_cookie_button  text-white w3-hover-green"
                     title="navbottom_cookie_button" name="navbottom_cookie_button"
                     type="button" href="#" target="_self" 
                     data-navbottom-button3="navbottom_cookie_button">COOKIES</a>


                     <a id="navbuttom_policy_button" 
                     className="navbottom_policy_button  text-white w3-hover-green"
                     title="navbottom_policy_button" name="navbottom_policy_button"
                     type="button" href="#" target="_self" 
                     data-navbottom-button4="navbottom_policy_button">POLICY</a>


                     <a id="navbottom_copyright_button" 
                     className="navbottom_copyright_button  text-white w3-hover-green"
                     title="navbottom_copyright_button" name="navbottom_copyright_button"
                     type="button" href="#" target="_self" 
                     data-navbottom-button5="navbottom_copyright_button">COPYRIGHT</a>


                     <a id="navbuttom_privacy_security_button" 
                     className="navbottom_privacy_security_button  text-white w3-hover-green"
                     title="navbottom_privacy_security_button" name="navbottom_privacy_security_button"
                     type="button" href="#" target="_self" 
                     data-navbottom-button6="navbottom_privacy_security_button">PRIVACY | SECURITY</a>


                     <a id="navbottom_jobs_careers_button" 
                     className="navbottom_jobs_careers_button  text-white w3-hover-green"
                     title="navbottom_jobs_careers_button" name="navbottom_jobs_careers_button"
                     type="button" href="#" target="_self" 
                     data-navbottom-button7="navbottom_jobs_careers_button">JOBS | CAREERS</a>


                     <a id="navbottom_partnerships_button" 
                     className="navbottom_partnerships_button  text-white w3-hover-green"
                     title="navbottom_partnerships_button" name="navbottom_partnerships_button"
                     type="button" href="#" target="_self" 
                     data-navbottom-button8="navbottom_partnerships_button">PARTNERSHIPS</a>


                     <a id="navbuttom_term_of_use_button" 
                     className="navbottom_term_of_use_button  text-white w3-hover-green"
                     title="navbottom_term_of_use_button" name="navbottom_term_of_use_button"
                     type="button" href="#" target="_self" 
                     data-navbottom-button9="navbottom_term_of_use_button">TERM OF USE</a>


                     <a id="navbuttom_help_button" 
                     className="navbottom_help_button  text-white w3-hover-green"
                     title="navbottom_help_button" name="navbottom_help_button"
                     type="button" href="#" target="_self" 
                     data-navbottom-button10="navbottom_help_button">HELP</a>


                     <a id="navbottom_faqs_button" 
                     className="navbottom_faqs_button  text-white w3-hover-green"
                     title="navbottom_faqs_button" name="navbottom_faqs_button"
                     type="button" href="#" target="_self" 
                     data-navbottom-button11="navbottom_faqs_button">FAQs</a>



                  </span>

              </nav>
      
       
    )
}



ReactDOM.render(<Navbottom/>,document.getElementById("footer_block"));










// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
