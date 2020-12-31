jQuery(document).ready( () =>{
    typeText("logoTitle","Topcode.",250);
    typeText("logoText","Information Technology made simple",100);
})


function typeText(textElementID,text,speed){

    var textElement = jQuery("#" + textElementID);
    var i=0;
    setInterval( () =>{
 
        if(i<text.length){
            var currText = textElement.text();
        
            console.log(currText)
            
            i==text.length-1?textElement.text(currText.replace("|","") + text.charAt(i)):textElement.text(currText.replace("|","") + text.charAt(i) +"|");
            i++;
        }
     
    },speed);
}