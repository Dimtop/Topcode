import React from 'react';
import MenuToggle from './MenuToggle'
import Menu from './Menu';
import ReactGA from 'react-ga';

class About extends React.Component{




    constructor(props){
        super(props);
        
        document.title= "About";
    
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
                 <div id="aboutContainer" style={{textAlign:"center"}}>
                    <p className="title">Σχετικά με μας</p>
                    <p className="paragraph aboutText">
                        Ο κόσμος στον οποίον ζούμε, αποτελείται από δεδομένα και πληροφορία.<br></br>
                        Οι νέες τεχνολογίες έχουν δημιουργήσει την ανάγκη να τα διαχειριστούμε<br></br>
                        και να κερδίσουμε από αυτά.
                        <br></br>
                        <br></br>
                        Επιπλέον η εξέλιξη του Διαδικτύου συνεχώς ωθεί την αγορά σε<br></br>
                        αναδιοργάνωση.
                        <br></br>
                        <br></br>
                        Στόχος μας είναι να βοηθήσουμε μικρές και μεγάλες επιχειρήσεις,<br></br>
                        ανεξαρτήτως του αν προέρχονται από τον πρωτογενή, το δευτερογενή<br></br>
                        ή τον τριτογενή τομέα, να προσαρμοστούν και να κάνουν ένα βήμα μπροστά.
                        <br></br>
                        <br></br>
                        Με πάθος για την επιστήμη μας, μια εξαιρετικά ευφυή ομάδα <br></br>
                        και τους καλύτερους συνεργάτες η συνεργασία μαζί μας θα είναι<br></br>
                        η πιο κερδοφόρος επιλογή.
                        <br></br>
                        <br></br>
                    </p>
                </div>
            </>
        );
    }
}

export default About;