var SelectCat = function (f_key) {
    $(".itembox").hide();
    $("." + f_key).show();
    $(".filter_cat").removeClass("c_cat");
    $("#id_" + f_key).addClass("c_cat");
    $("#itemcategory").html($("#id_" + f_key).html());
    history.replaceState(null, null, "#" + f_key);
}

$(document).ready(function () {
    $(".filter_cat").on("click", function () {
        var f_key = $(this).attr("f_key");
        SelectCat(f_key);
    });
    if (document.location.hash) {
        var f_key = document.location.hash.substring(1);
        if ($("#id_" + f_key).length) {
            SelectCat(f_key);
        } else {
            SelectCat("f_CTP");
        }
    } else {
        $(".itembox").hide();
        $(".f_CTP").show();
    }
});