import React from 'react';

import MenuToggle from './MenuToggle'
import Menu from './Menu';
import ReactGA from 'react-ga';

import axios from 'axios';

class Contact extends React.Component{




    constructor(props){
        super(props);
        

          
        document.title= "Contact";
        
        this.tractContactButtonClick = this.tractContactButtonClick.bind(this);
    }

    componentDidMount(){
        const menuToggleScript = document.createElement("script");
        menuToggleScript.src="/js/menuToggle.js";
        document.head.appendChild(menuToggleScript);
      //  this.props.doPageview("/contact")
        this.tractContactButtonClick();
    }

    
    tractContactButtonClick(){

        axios.post("/api/analytics");
        
 
    }


    render(){


        return(
            <>
                <MenuToggle />
                <Menu/>
                <div id="contactFormContainer">
                    <p class="title">Επικοινωνία</p>

                    <form id="contactForm" method="POST" action="/api/contacts">
                        <label for="service">Υπηρεσίες</label>
                        <select name="service" id="service" required>
                            <option id="test">Ανάπτυξη λογισμικού</option>
                            <option id="test">Συμβουλευτικές IT υπηρεσίες</option>
                            <option id="test">Διαχείριση εταιρικών δεδομένων</option>
                        </select>
                        
                        <label for="name">Όνομα</label>
                        <input type="text" name="name" id="name" required/>
                        

                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required/>

                        <label for="phone">Τηλέφωνο</label>
                        <div id="phoneContainer">
                            <div>
                                <select  name="phoneCode" id="phoneCode">
                                    <option value="+30">+30</option>
                                </select>

                            </div>
                            <div>
                                <input type="tel"  name="phone" id="phone" required/>
                            </div>
                        </div>
                    
                    

                        <label for="message">Μήνυμα</label>
                        <textarea name="message" id="message" cols="1" rows="3" ></textarea>
                        
                        <input type="submit" class="simpleButton" value="Αποστολή"/>
                        <p style={{fontSize:"0.75rem",color:"white",fontFamily:"Segoe UI"}}>Τα δεδομένα που υποβάλλονται μέσω της φόρμας παραμένουν στην βάση δεδομένων μας και ενδέχεται να χρησιμοποιηθούν για σκοπούς marketing.</p>
                    </form>
                 
                </div>
            </>
        );
    }
}

export default Contact;