import React from 'react';

import MenuToggle from './MenuToggle'

class Menu extends React.Component{




    constructor(props){
        super(props);
        


    }

    componentDidMount(){
     
    }


    render(){


        return(
            <>
                 <div id="menu">
                    <div>
                        <p class="paragraph menuBarItem"><a href="/">Αρχική</a></p>
                        <p class="paragraph menuBarItem"><a href="/about">Σχετικά με μας</a></p>
                        <p class="paragraph menuBarItem"><a href="/services">Υπηρεσίες</a></p>
                        <p class="paragraph menuBarItem"><a href="/contact">Επικοινωνία</a></p>
                    </div>
                </div>
            </>
        );
    }
}

export default Menu;