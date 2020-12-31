import React from 'react';

import MenuToggle from './MenuToggle'
import Menu from './Menu';
import ReactGA from 'react-ga';

import axios from 'axios';

class Contest extends React.Component{




    constructor(props){
        super(props);
        

          
        document.title= "Contest";
        
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
                <div id="contestContainer">
                    <div>
                        <p class="title">Διαγωνισμός</p>
                        <p class="paragraph">Κερδίστε μια ιστοσελίδα εταιρικής παρουσίασης εντελώς δωρεάν!</p>
                        <p class="paragraph">Ο διαγωνισμός λήγει στις 01-02-2021 και ο νικητής θα ανακοινωθεί στην σελίδα μας στο Facebook και στο Instagram</p>
                    </div>
           

                    <form id="contactForm" method="POST" action="/api/contest">
          

                        
                        <label for="name">Όνομα</label>
                        <input type="text" name="name" id="name" required/>
                        
                        
                        <label for="email">Αντικείμενο επιχείρισης</label>
                        <input type="text" name="field" id="field" required/>

                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required/>

                        <label for="phone">Τηλέφωνο</label>
                
                        <input type="tel"  name="phone" id="phone" required/>
                        
                    
                        
                        <input type="submit" class="simpleButton" value="Συμμετοχή"/>
                        <p style={{fontSize:"0.75rem",color:"white",fontFamily:"Segoe UI"}}>Υποβάλλοντας αυτήν την φόρμα επιτρέπετε στην Topcode να χρησιμοποιήσει τα στοιχεία που καταχωρείτε στο πλαίσιο του διαγωνισμού, αλλά και για λόγους προώθησης των υπηρεσιών της. Σε περίπτωση που θέλετε να διαγραφούν τα στοιχεία σας από την βάση δεδομένων μας, παρακαλώ επικοινωνήστε στο info@topcode.gr</p>
                    </form>
                 
                </div>
            </>
        );
    }
}

export default Contest;