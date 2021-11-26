$(document).ready(function() {
    $(".filter_cat").on("click", function () {
        $(".itembox").hide();
        $("."+$(this).attr("f_key")).show();
        $(".filter_cat").removeClass("c_cat");
        $(this).addClass("c_cat");
        $("#itemcategory").html($(this).html());
    });
    $(".itembox").hide();
    $(".f_CTP").show();
});
