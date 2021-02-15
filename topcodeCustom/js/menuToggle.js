$(document).ready(()=>{
    $("#menuIcon").click(function(){

        if($("#fullScreenMenu").css("display") == "none") {
            $("#fullScreenMenu").css("display", "grid");
            $("#fullScreenMenu").css("grid-template-columns", "1fr");
            $("#fullScreenMenu").css("align-items", "center");
            $("#fullScreenMenu").css("justify-items", "center");

            $(this).text("-")
        }
        else{
            $("#fullScreenMenu").css("display", "none");
            $(this).text("+")
        }


    })
})
