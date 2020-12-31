import React from 'react';
import ReactGA from 'react-ga';

class Home extends React.Component{




    constructor(props){
        super(props);
        
        const typeTextScript = document.createElement("script");
        typeTextScript.src="/js/typeText.js";
        document.head.appendChild(typeTextScript);
       // this.props.doPageview("/")

       this.tractContactButtonClick = this.tractContactButtonClick.bind(this);

    }

    componentDidMount(){
     
    }

    tractContactButtonClick(){
        fetch("/api/analytics",{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            method:"POST"
        });
    }


    render(){


        return(
            <>
                <div id="homeContainer">
              
                    <div>
                        <p className="title" id="logoTitle"></p>
                        <p className="paragraph" id="logoText" style={{fontSize:"35px"}}></p>
                    </div>
                
                    <div id="menuContainer">
                        <div className="menuItem">
                            <a href="/about"><button className="buttonSimple">Σχετικά</button></a>
                        </div>
                        <div className="menuItem">
                            <a href="/services"><button className="buttonSimple">Υπηρεσίες</button></a>
                        </div>
                        <div className="menuItem">
                            <a href="/contact"><button className="buttonSimple">Επικοινωνία</button></a>
                        </div>
                    </div>
        
                </div>
            </>
        );
    }
}

export default Home;