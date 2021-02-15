$(window).on("load",()=>{
    if($(".loader").length){
        setTimeout(function(){


            console.log("test")
            $(".loader").css("display","none");
            $("#titleContainer").css("display","grid")
            $("#homeServicesContainer").css("display","grid")

        },1000)
    }
    else{
        $("#titleContainer").css("display","grid")
        $("#homeServicesContainer").css("display","grid")
    }
})
