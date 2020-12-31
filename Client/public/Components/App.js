import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class App extends React.Component{




    constructor(props){
        super(props);

    }



    render(){


        return(
            <>
                <Router>
                    
                    <Route path="/about">
                        <About />
                    </Route>

                </Router>
            </>
        );
    }
}

export default App;