import React from 'react';

import {
    Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

//STYLES
import './styles/style.css'
import './styles/responsive.css'
import './styles/animations.css'

//COMPONENTS
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from "./Services"
import Error from './Error';
import NotFound from './NotFound';
import SoftwareDevelopmentService from './SoftwareDevelopmentService';
import ITConsultancyService from './ITConsultancyService';
import EnterpriseDataManagementService from './EnterpriseDataManagementService';
import Contest from './Contest';

import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';
import ConstestSuccess from './ContestSuccess';

const createHistory = require('history').createBrowserHistory;

const history = createHistory();
ReactGA.initialize('G-HEKDHZ5YD1');
history.listen((location,action)=>{
    ReactGA.pageview(location.pathname + location.search);
    console.log(location.pathname)
})



class App extends React.Component{




    constructor(props){
        super(props);
        this.state={
            rgaInit:false
        }

        this.doPageview = this.doPageview.bind(this);
        this.initRGA = this.initRGA.bind(this);
   
     

    }

    componentDidMount(){
        this.initRGA();
    }

    initRGA(){
    
        ReactGA.initialize('G-HEKDHZ5YD1');
        this.setState({rgaInit:true});
    }

    doPageview(title){
   
    }


    render(){


        return(
       
            <>
                <Router history={history}>
                    <Switch>
                        <Route exact path="/">
                            <Home   />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                        <Route exact path="/contact">
                            <Contact/>
                        </Route>
                        <Route exact path="/services">
                            <Services />
                        </Route>
                        <Route exact path="/services/softwareDevelopment">
                            <SoftwareDevelopmentService  />
                        </Route>
                        <Route exact path="/services/ITConsultancy">
                            <ITConsultancyService  />
                        </Route>
                        <Route exact path="/services/enterpriseDataManagement">
                            <EnterpriseDataManagementService  />
                        </Route>
                        <Route exact path="/error">
                            <Error   />
                        </Route>
                        <Route exact path="/contest">
                            <Contest   />
                        </Route>
                        <Route exact path="/contest/success">
                            <ConstestSuccess   />
                        </Route>
                    </Switch>

                </Router>
            </>
          
        );
    }
}

export default App;