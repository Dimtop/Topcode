import resolveHost from "./hostResolver.js";

jQuery(document).ready(()=>{



    jQuery("#contactForm").submit(function(e){
        e.preventDefault();

        var formData = $(this).serialize();

        jQuery.ajax({
            type:"post",
            url:resolveHost() + "postContact.php",
            data:formData,
            success:((data)=>{
                //location.reload();
            })
        })


    })

})