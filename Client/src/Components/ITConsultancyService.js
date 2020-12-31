import React from 'react';

import MenuToggle from './MenuToggle'
import Menu from './Menu';
import ReactGA from 'react-ga';

class ITConsultancyService extends React.Component{




    constructor(props){
        super(props);
        
               
        document.title= "IT Consultancy Service";
      //  this.props.doPageview("/services/ITConsultancy")

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
                        <p class="title">Συμβουλευτικές IT υπηρεσίες</p>
                    </div>
                    <div>
                    
                        <div id="servicesListContainer">

                            <p className="paragraph aboutText">
                                Η υπηρεσία αυτή αφορά μικρές επιχειρήσεις, για τις οποίες είναι δύσκολο να<br></br>
                                δημιουργήσουν ένα εσωτερικό IT Department, αλλά και για μεγαλύτερες που<br></br>
                                χρειάζονται καθοδηγηση για θέματα τεχνολογίας και πληροφορικής.
                                <br></br>
                                <br></br>
                                Επικοινώνησε μαζί μας για να συζητήσουμε τα προβλήματα που μπορεί να έχεις,<br></br>
                                να σε συμβουλέψουμε και να σε καθοδηγήσουμε.<br></br>
                                <br></br>
                                <br></br>
                                Η συνεργασία μαζί μας, αποτελεί σημαντική επένδυση που θα βοηθήσει στην εσωτερική<br></br>
                                αναδιοργάνωση της επιχείρησής σου και θα παρέχει τα εφόδια για την ομαλή ένταξη στον χώρο<br></br>
                                της τεχνολογίας.<br></br>
                            </p>
          
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default ITConsultancyService;