import React from 'react';

class Error extends React.Component{




    constructor(props){
        super(props);
        


    }

    componentDidMount(){
        
    }


    render(){


        return(
            <>
                <div id="notFoundContainer">
                    <div >
                        <p class="title">There page you were looking for does not exist.</p>
                        <a href="/index.html" style="text-align: center;">Go to home page</a>
                    </div>

                </div>
            </>
        );
    }
}

export default Error;