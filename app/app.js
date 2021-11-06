function changeRoute() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");

    MODEL.updateView(pageID)
}

function initURLListener(){
    $(window).on("hashchange", changeRoute);
    changeRoute();
}

function initListeners() {
    $(".bars").click(function (e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });

    $(".links a").click(function (e) {
        $(".bars").toggleClass("active");
        $(".links").toggleClass("active");
    });
}

$(document).ready(function () {
    initURLListener();
    initListeners();
}); 