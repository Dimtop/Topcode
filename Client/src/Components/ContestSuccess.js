import React from 'react';
import ReactGA from 'react-ga';

class ConstestSuccess extends React.Component{




    constructor(props){
        super(props);
        
        document.title= "ConstestSuccess";

       // this.props.doPageview("/error")
    }

    componentDidMount(){
     
    }


    render(){


        return(
            <>
                <div id="errorContainer">
                    <div >
                        <p class="title">Η συμμετοχή σας καταχωρήθηκε με επιτυχία!</p>
                        <a href="/" style={{textAlign: "center"}}>Επιστροφή στην αρχική</a>
                    </div>

                </div>
            </>
        );
    }
}

export default ConstestSuccess;