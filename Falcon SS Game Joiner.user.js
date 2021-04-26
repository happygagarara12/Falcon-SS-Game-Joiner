// ==UserScript==
// @name         Falcon SS Game Joiner
// @namespace    http://tampermonkey.net/
// @version      4.0
// @description  Falcon SS Game Joiner For Falcon SS Users
// @author       ROBLOX: happy_gagarara12 Discord: unstable#8768
// @match        https://*.roblox.com/home*
// @grant        none
// ==/UserScript==

function GetURLParameter(SearchParameter) {
    const PageURL = window.location.search.substring(1);
    const URLVariables = PageURL.split("&");
    for (let index = 0; index < URLVariables.length; index++){
        const ParameterName = URLVariables[index].split("=");
        if (ParameterName[0] == SearchParameter){
            return ParameterName[1];
        };
    };
};

function main(){
    const PlaceId = GetURLParameter("placeid");
    const JobId = GetURLParameter("jobid");
    if (PlaceId && JobId){
        Roblox.GameLauncher.joinGameInstance(PlaceId, JobId);
    }
}

document.body.onload = main();
