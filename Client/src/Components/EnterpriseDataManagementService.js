import React from 'react';

import MenuToggle from './MenuToggle'
import Menu from './Menu';
import ReactGA from 'react-ga';

class EnterpsiseDataManagementService extends React.Component{




    constructor(props){
        super(props);
        
        document.title= "Enterprise data management service";
       // this.props.doPageview("/services/enterpriseDataManagement")
    }

    componentDidMount(){
        const menuToggleScript = document.createElement("script");
        menuToggleScript.src="/js/menuToggle.js";
        document.head.appendChild(menuToggleScript);

      
    }


    render(){


        return(
            <>
                <MenuToggle />
                <Menu/>
                <div id="servicesContainer">
                    <div>
                        <p class="title">Διαχείριση εταιρικών δεδομένων</p>
                    </div>
                    <div>
                    
                        <div id="servicesListContainer">

                            <p className="paragraph aboutText">
                                Η διαχείριση εταιρικών δεδομένων είναι μια διαδικασία απαραίτητη για όλες τις<br></br>
                                επιχειρήσεις. Παρ' όλα αυτά το 90% εξ' αυτών δεν γνωρίζει ή δεν την κάνει σωστά.<br></br>
                                <br></br>
                                <br></br>
                                Χρησιμοποιώντας τεχνολογίες αιχμής, αναλαμβάνουμε να οργανώσουμε, να επεξεργαστούμε<br></br>
                                και να διαχειριστούμε τα δεδομένα που παράγει η επιχείρησή σας, παρέχοντας και αναλυτική<br></br>
                                καθοδήγηση για την εκμετάλ λευσή τους, η οποία επιφέρει μεγαλύτερα κέρδη και μείωση των<br></br>
                                λειτουργικών εξόδων.<br></br>
                                <br></br>
                                <br></br>
                                Επικοινωνήστε μαζί μας και ξεκινήστε σήμερα την πορεία προς την επιχειρηματική αριστεία.
                            </p>
          
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default EnterpsiseDataManagementService;