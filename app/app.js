import { changePage } from "../model/model.js";

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    changePage(hashTag, pageID);
}
 
function initListeners() {
    console.log("Test");
<<<<<<< HEAD
=======
    let navShow = false;
    $(window).on("resize", (e) => {
        if ($(window).width() > 768) {
        $(".links").removeClass("hide");
        } else {
        $(".links").addClass("hide");    
        }
    });
$(".hamburger").on("click", (e) => {
    if (navShow) {
        $(".links").removeClass("m-links");
        $(".links").css("display", "none");
        navShow = false;
    } else {
        $(".links").addClass("m-links");
        $(".links").css("display", "flex");
        navShow = true;
    }
    })
>>>>>>> 602f2ecd79b4449b0ec894c9ca1aae59938933d7
}

function initUrlListeners() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    initListeners();
    initUrlListeners();
})