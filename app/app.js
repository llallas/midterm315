import { changePage } from "../model/model.js";

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#", "");
    changePage(hashTag, pageID);
}
 
function initListeners() {
    console.log("Test");

    let navShow = false;
    $(window).on("resize", (e) => {
        if ($(window).width() > 768) {
        $(".links").css("display", "flex");
        } else {
        $(".links").css("display", "none");    
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
}

function initUrlListeners() {
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function () {
    initListeners();
    initUrlListeners();
})