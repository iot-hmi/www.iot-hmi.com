$(document).ready(function () {

    $('#gform').on('submit', function (e) {
        $('#gsubmit').hide();
        $('#gform *').fadeOut(2000);
        $('#gform').prepend('<div class="processed">Your submission has been processed...</div>');
    });

    $('#gsubmit').click(function (e) {
        if ($('#gform').valid()) {
            $('#gform').submit();
        }
    });

});