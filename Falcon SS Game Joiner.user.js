// ==UserScript==
// @name         Falcon SS Game Joiner
// @namespace    name?
// @version      0.1
// @description  For Falcon SS Users
// @author       unstable#8768
// @match        https://web.roblox.com/home
// @grant        none
// ==/UserScript==

function GetURLParameter(sParam){
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for (const index = 0; index < sURLVariables.length; index++){
        var sParameterName = sURLVariables[index].split("=");
        if (sParameterName[0] == sParam){
            return sParameterName[1];
        }
    }
}

function main(){
    var PlaceId = GetURLParameter("placeid");
    var JobId = GetURLParameter("jobid");
    if (PlaceId && JobId){
        Roblox.GameLauncher.joinGameInstance(PlaceId, JobId);
    }
}

document.body.onload = main();
