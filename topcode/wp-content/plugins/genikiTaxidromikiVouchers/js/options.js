jQuery(document).ready(()=>{

    jQuery("#gtvOptionsForm").submit((e)=>{
        e.preventDefault();
        var formData =  jQuery("#gtvOptionsForm").serialize();
        var hostUnparsed = jQuery(location).attr("href");
        var indexOfHostDelimiter = hostUnparsed.indexOf("/wp-admin");
        var hostParsed = hostUnparsed.substr(0,indexOfHostDelimiter);

        console.log(hostParsed)


        jQuery.ajax({
            url:hostParsed + "/wp-content/plugins/genikiTaxidromikiVouchers/src/options/options.php",
            method:"post",
            data:formData,
            success: ()=>{
                location.reload();
            }

        })
    })
})

