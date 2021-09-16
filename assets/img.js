$(document).ready(function () {
    $(".scroll_horizontal").on("wheel", function (e) {
        var maxScrollLeft = e.currentTarget.scrollWidth - e.currentTarget.clientWidth;
        var step = 50;
        if (maxScrollLeft > 0) {
            if (e.originalEvent.deltaY > 0) {
                if (step > maxScrollLeft) {
                    step = maxScrollLeft;
                }
                e.currentTarget.scrollLeft += step;
            } else if ( e.currentTarget.scrollLeft > 0 ) {
                if( step > e.currentTarget.scrollLeft ) {
                    step = e.currentTarget.scrollLeft;
                }                
                e.currentTarget.scrollLeft -= step;
            }
            e.preventDefault();
        }
    });
    $(".scroll_horizontal_next").on("click", function () {
        container = $(this).closest(".scroll_horizontal_container");
        target = container.find(".scroll_horizontal");
        target.scrollLeft(target.scrollLeft() + 100);
    });
    $(".scroll_horizontal_prev").on("click", function () {
        container = $(this).closest(".scroll_horizontal_container");
        target = container.find(".scroll_horizontal");
        target.scrollLeft(target.scrollLeft() - 100);
    });
    $(".scroll_horizontal_container").hover(
        function () {
            // enter
            horizontal = $(this).find(".scroll_horizontal");
            if (horizontal) {
                horizontal.addClass("scroll_horizontal_cursor");
            }
            if (horizontal[0].scrollWidth > horizontal[0].clientWidth) {
                $(this).addClass("scroll_horizontal_cursor");
                prev = $(this).find(".scroll_horizontal_prev");
                next = $(this).find(".scroll_horizontal_next");
                prev.show();
                next.show();
            }
        },
        function () {
            // leave
            horizontal = $(this).find(".scroll_horizontal");
            if (horizontal) {
                horizontal.removeClass("scroll_horizontal_cursor");
            }
            container = $(this).closest(".scroll_horizontal_container");
            prev = $(this).find(".scroll_horizontal_prev");
            next = $(this).find(".scroll_horizontal_next");
            prev.hide();
            next.hide();
        });
    $("img.iotimg-background").on("error", function () {
        console.log(this);
        w1 = $(this).closest(".iotimg").width();
        h1 = $(this).closest(".iotimg").height();
        $(this).width("100vw");
        $(this).height("100vh");
        w2 = $(this).closest(".iotimg").width();
        h2 = $(this).closest(".iotimg").height();
        $(this).width(w1 > w2 ? w1 : w2);
        $(this).height(h1 > h2 ? h1 : h2);
    });
});