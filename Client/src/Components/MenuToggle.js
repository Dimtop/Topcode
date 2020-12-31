import React from 'react';


class MenuToggle extends React.Component{




    constructor(props){
        super(props);
        


    }

    componentDidMount(){
     
    }


    render(){


        return(
            <>
            <div id="menuBarContainer">
                <div class="menuBarItemContainer">
                    <p class="paragraph" id="menuToggle">+</p>
                </div>
            </div>
            </>
        );
    }
}

export default MenuToggle;