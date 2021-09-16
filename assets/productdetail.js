$(document).ready(function() {
    $(".thumbnail > img").click(function () {
        $(".primarypic > img").width("auto").height("auto").attr("src",$(this).attr("src"));
    });   
    $(".qlink_cat").hide();
    $(".qlink_item").hide();
    $(".quicklinkarea").hover(
        function (){
            $(this).addClass("quicklinkarea_expand");
            $(this).css({
                "position": "absolute", 
                "top": $(this).attr("top"),
                "left": $(this).attr("left"),
                "width": $(".rest").width(),
            });
            $(".qlink_label").hide();
            $(".qlink_cat").show();
            $(".qlink_item").show();
        }, 
        function() {
            $(this).removeClass("quicklinkarea_expand");
            $(this).css("position","");  
            $(".qlink_label").show();
            $(".qlink_cat").hide();
            $(".qlink_item").hide();  
        });
});