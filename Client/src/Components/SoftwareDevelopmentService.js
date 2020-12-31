import React from 'react';

import MenuToggle from './MenuToggle'
import Menu from './Menu';
import ReactGA from 'react-ga';

class SoftwareDevelopmentService extends React.Component{




    constructor(props){
        super(props);
        
          
        document.title= "Software Develpoment Service";
       // this.props.doPageview("/services/softwareDevelopment")

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
                        <p class="title">Ανάπτυξη λογισμικού</p>
                    </div>
                    <div>
                    
                        <div id="servicesListContainer">

                            <p className="paragraph aboutText">
                                Αναλαμβάνουμε έργα ανάπτυξης εξατομικευμένου λογισμικού για επιχειρίσεις<br></br>
                                και όχι μόνο.
                                <br></br>
                                <br></br>
                                Ειδικευόμαστε σε cloud λύσεις πληροφοριακών συστήματων, και κατασκευάζουμε<br></br>
                                επίσης εφαρμογές κινητών τηλεφών αλλά και λογισμικό για οποιαδήποτε πλατφόρμα<br></br>
                                εάν αυτό ζητηθεί.
                                <br></br>
                                <br></br>
                                Προσεγγίζουμε την διαδικασία της ανάπτυξης σφαιρικά, αναλαμβάνοντας ένα έργο<br></br>
                                σε όλα τα στάδια. Δίνουμε προσφορές που συμπεριλαμβάνουν τις αρχικές τεχνικές αναλύσεις,<br></br>
                                τον χρόνο υλοποίησης αλλά και το testing. Προσέχουμε την επεκτασιμότητα και παρέχουμε<br></br>
                                πλήρη υποστήριξη μετά την περάτωση.
                                <br></br>
                                <br></br>
                                Εάν έχεις λοιπόν μια ιδέα ή μια ανάγκη για την επιχείρησή σου, επικοινώνησε<br></br>
                                <br></br>
                                τώρα μαζί μας και θα σε κατευθύνουμε με τον σωστό τρόπο.
                                <br></br>
                                <br></br>
                            </p>
          
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default SoftwareDevelopmentService;