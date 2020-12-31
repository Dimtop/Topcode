import React from 'react';

import MenuToggle from './MenuToggle'
import Menu from './Menu';
class Services extends React.Component{




    constructor(props){
        super(props);
        


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
                        <p class="title">Υπηρεσίες</p>
                    </div>
                    <div>
                    
                        <div id="servicesListContainer">
                            <div>
                                <a href="/services/softwareDevelopment"><button class="buttonSimple">Ανάπτυξη λογισμικού</button></a>
                            </div>
                            <div>
                                <a href="/services/ITConsultancy"><button class="buttonSimple">Συμβουλευτικές IT υπηρεσίες</button></a>
                            </div>
                            <div>
                                <a href="/services/enterpriseDataManagement"><button class="buttonSimple">Διαχείριση εταιρικών δεδομένων</button></a>
                            </div>
                        </div>

                    </div>
                </div>
            </>
        );
    }
}

export default Services;