jQuery(document).ready(()=>{

    var containersArray = ["contactFormContainer","aboutContainer","servicesContainer"]
    handleMenuToggleClick(containersArray);
});



function handleMenuToggleClick(containersArray){
    jQuery("#menuToggle").click(function(){
        if(jQuery(this).text() == "+"){
            jQuery(this).text("-");
        }else{
            jQuery(this).text("+")
        }

        if(jQuery("#menu").css("display")=="none"){

            containersArray.map(container=>{
                if( jQuery("#" + container)){
                    jQuery("#" + container).css("display","none");
                }

            })
            jQuery("#menu").css("display","grid");
            jQuery("#menu").css("grid-template-columns","1fr");
        }
        else{
            containersArray.map(container=>{
                if( jQuery("#" + container)){
                    jQuery("#" + container).css("display","grid");
                }
             
            })
            jQuery("#menu").attr("hidden",true);
            jQuery("#menu").css("display","none");
         
        }
    });
}