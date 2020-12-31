import React from 'react';
import ReactGA from 'react-ga';

class Error extends React.Component{




    constructor(props){
        super(props);
        
        document.title= "Error";

       // this.props.doPageview("/error")
    }

    componentDidMount(){
     
    }


    render(){


        return(
            <>
                <div id="errorContainer">
                    <div >
                        <p class="title">There was an error.</p>
                        <a href="/index.html" style="text-align: center;">Go to home page</a>
                    </div>

                </div>
            </>
        );
    }
}

export default Error;