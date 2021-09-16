var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

$(document).ready(function () {
    var sPageURL = window.location.search.substring(1);

    var videoHtml = `
    <div id="ivideo" class="youtube-responsive-container">
    <iframe src="https://www.youtube-nocookie.com/embed/${sPageURL}/" frameborder="0" width="960" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </div>
`
    $("#viewbox").html(videoHtml);
    document.getElementById('ivideo').scrollIntoView();
    
})