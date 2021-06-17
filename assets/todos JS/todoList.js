var e=false;
var f=true
$("ul").on("click","li",function () { 
    $(this).toggleClass("done");

});
$("input").keypress(function(event){
    if(event.which===13)
    {
        if(e===true)
        e=false
        else
        e=true
        var todoText=$(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt delete'></i></span>"+todoText+"</li>")
        $("li").last().addClass("li");
     
        if(e===true)
        {
            $("li").last().addClass("faded");
        }
    }
    });

    $("ul").on("click", "span", function(event){
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
        });
        event.stopPropagation();
    });
   $("h1 i").on("click",function()
   {
       if(f===true)
       {
       $("input").css("display","none");
       f=false}
       else{
        $("input").css("display","block");
        f=true
       }
   })