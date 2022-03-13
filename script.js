"use strict";

var anchors = document.getElementsByTagName("a");
var burger = document.getElementById("burger");

for(var x of anchors){
    x.addEventListener("click", function(){
        for(var x of anchors){
            x.classList.remove("selected");
        }
        this.classList.add("selected");
    });
}

burger.addEventListener("click", function(){
    this.classList.toggle("rotate");
})

