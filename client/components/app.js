import React,{useState} from 'react';
import "../styles/main.style.less";
import "../styles/main.style.css";
import {Grid,Row,Col,Panel,Icon,Input,Button,Alert} from 'rsuite';

function App() {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [message,setMessage] = useState("");
    return (
        <>
        <video autoPlay>
        <source src="/assets/video.mp4" type="video/mp4"/>
        </video>
        <div id="mainContainer">
    
        <Grid fluid>
            <Row>
                <Col xs={24}>
                    <h1>Topcode</h1>
                    <h2>Information Technology Made Simple.</h2>
                </Col>
            </Row>
        </Grid>
        </div>

        <div id="mainContainer" className="aboutContainer">
            <Grid fluid>
                <Row>
                    <Col xs={24}>
                        <h1>Σχετικά με μας</h1>
                        <h4 className="aboutText">
                            Στην Topcode φέρνουμε την πληροφορική στα μέτρα του κάθε πελάτη.
                            Κατανοούμε τις ανησυχίες και τα προβλήματα των επιχειρηματιών στην σύγχρονη αγορά.
                            Οδηγούμε τις επιχειρήσεις στον σωστό δρόμο
                            με την βοήθεια των πλέον σύγχρονων τεχνολογιών.
                            Είναι η ώρα να τον ακολουθήσετε και σεις
                            να αυξήσετε το κέρδος και να μειώσετε το κόστος
                            με τον καλύτερο συνεργάτη.
                        </h4>
                    </Col>
                </Row>
            </Grid>
        </div>
    
        <div id="mainContainer" className="servicesContainer">
        <Grid fluid>
            <Row className="serviceRow">
                <Col xs={24} >
                    <Icon icon="briefcase" className="mainIcon"/>
                    <h2>Διαχείριση εταιρικών δεδομένων</h2>
                    <p>
                    Οι επιχειρήσεις λειτουργούν σαν ζωντανοί οργανισμοί, και παράγουν
                    δεδομένα σε κάθε διαδικασία τους. Οι επιχειρηματίες καλούνται
                    να τα οργανώσουν, να διαχειριστούν την ασφάλεια και την αποθήκευσή τους
                    και να εξορύξουν γνώση από αυτά.
                    Η Topcode βρίσκεται εδώ για να αναλάβει εξ' ολοκλήρου όλες τις πτυχές
                    της διαχείρισης. Συνεργαστείτε μαζί μας και αποκτήστε μια καθαρή εικόνα
                    της επιχείρησής σας με σκοπό την λήψη βέβαιων και αποδοτικών αποφάσεων.
                    </p>
                </Col>
            </Row>
            <Row className="serviceRow">
                <Col xs={24} >
                    <Icon icon="terminal" className="mainIcon"/>
                    <h2>Ανάπτυξη λογισμικού</h2>
                    <p>
                    Αναλαμβάνουμε έργα λογισμικού, ακολουθώντας αυστηρά μια διαδικασία
                    agile development, εκτελώντας την ανάλυση, την ανάπτυξη και την παραγωγή.
                    Υιοθετούμε τα διεθνή πρότυπα ποιότητας και προσαρμόζουμε τις
                    τεχνολογίες που χρησιμοποιούμε για να καλύψουμε όλες τις ανάγκες,
                    παρέχοντας πλήρη τεχνική υποστήριξη.
                    Εάν χρειάζεστε μια cloud λύση, εξειδικευμένο λογισμικό για την
                    επιχείρησή σας, ή έχετε απλά μια ιδέα, είμαστε εδώ για να
                    μελετήσουμε μαζί όλες τις παραμέτρους.
                    </p>
                </Col>
            </Row>
            <Row className="serviceRow">
                <Col xs={24} >
                    <Icon icon="line-chart" className="mainIcon"/>
                    <h2>Ανασχεδιασμός επιχειρηματικών διαδικασιών</h2>
                    <p>
                    Ένας σταθερός στόχος για κάθε επιχειρηματία
                    είναι η ελλάτωση των λειτουργικών εξόδων της επιχείρισής του.
                    Για να καταστεί εφικτό αυτό χρειάζεται ο ανασχεδιασμός των πάγιων διαδικασιών που
                    εκτελεί αυτή, έτσι ώστε να γίνουν πιο αποδοτικές.
                    Η Topcode αναλαμβάνει την διακπαιρέωση μελέτης της τεχνολογικής
                    θέσης της επιχείρησής σας. Εντοπίζουμε τις προβληματικές διαδικασίες
                    και σχεδιάζουμε μαζί λύσεις που θα μεγιστοποιήσουν τα κέρδη σας.
                    </p>
                </Col>
            </Row>
        </Grid>
        </div>
        <div id="mainContainer" className="solutionsContainer">
            <Grid fluid>
                <Row className="projectRow">
                    <Col xs={24}>
                        <h1>Λύσεις</h1>
                    </Col>
                </Row>
                <Row className="projectRow">
                    <Col xs={24} md={8} className="projectContainer" onClick={()=>window.open("http://www.asreporter.com","_blank")}>
                        <Panel className="projectContainer" bordered>
                            <h3>Agricultural Sprayer Reporter</h3>
                            <p>
                                Ολοκληρωμένο σύστημα διεκπαιρέωσης ΚΤΕΟ Εξοπλισμού Γεωργικών Φαρμάκων
                            </p>
                        </Panel>
                    </Col>
                    <Col xs={24} md={8} className="projectContainer" onClick={()=>window.open("https://top-energy.gr","_blank")}>
                        <Panel className="projectContainer" bordered>
                            <h3>Topenergy</h3>
                            <p>
                                Εφαρμογή αυτοματοποίσης της διαδικασίας δημιουργίας δηλώσεων απόδοσης για διπλούς και τριπλούς υαλοπίνακες
                            </p>
                        </Panel>
                    </Col>
                    <Col xs={24} md={8} className="projectContainer" onClick={()=>window.open("https://topcode.gr","_blank")}>
                        <Panel className="projectContainer" bordered>
                            <h3>Progressio</h3>
                            <p>
                                Ολοκληρωμένο πακέτο ανασχεδιασμού επιχειρησιακών διαδικασιών και βελτιστοποίησης κατανομής πόρων
                            </p>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        </div>
        <div id="mainContainer">
            
            <Grid fluid>
                <Row>
                    <Col xs={24}>
                        <h1>Επικοινωνία</h1>
                        <p>Ονοματεπώνυμο</p>
                        <Input type="text" onChange={(value)=>setName(value)}/>
                        <p>Email</p>
                        <Input type="email" onChange={(value)=>setEmail(value)}/>
                        <p>Τηλέφωνο</p>
                        <Input type="text" onChange={(value)=>setPhone(value)}/>
                        <p>Μήνυμα</p>
                        <Input componentClass="textarea" rows={3} onChange={(value)=>setMessage(value)}/>
                        <Button appearance="primary" className="mainButton" onClick={()=>sendContactFormMail(name,email,phone,message)}>Αποστολή</Button>
                    </Col>
                </Row>
            </Grid>
        </div>
        </>
    );
}

export default App;


function sendContactFormMail(name,email,phone,message){
    fetch("/api/mail/contactForm",{
        method:"post",
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            name:name,
            email:email,
            phone:phone,
            message:message
        })
    })
    .then(res=>res.json())
    .then(res=>{
        if(res.error){
            Alert.error("Υπήρξε ένα πρόβλημα")
            return;
        }
        location.reload();
    })
}