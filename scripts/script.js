$(document).ready(function () {
    console.log("Page Loaded/Ready"); 


//TODO: Make it sortable 
//TODO: Random
    // const facts = [];
    // facts[0] = "Richie's favorite color is purple";
    // facts[1] = "Reed has two brothers";
    // facts[2] = "BeastCarp1 likes to swim";
    // facts[3] = "Jaxon has broken a finger before";
    // facts[4] = "Victor is ambidextrous";
    // facts[5] = "Olivia can say her alphabet backwards";
    // facts[6] = "Corey is not famous";
    // facts[7] = "Tatum was born in Lousiana";
    // facts[8] = "Kaden has never tried a PB&J Sandwhich";
    // facts[9] = "Dylan is allergic to cats";
    // facts[10] = "SSenecalI01 likes trains";
    // facts[11] = "Daniel knows the secret identity of beastcarp1";
    // facts[12] = "Matthew has a dog";
    // facts[13] = "Jacob hates the parking at UNA";
    // facts[14] = "mandrews3 has three dogs";
    // facts[15] = "Carly is adopted from China";
    // facts[16] = "ccantrell2 used to have a Hummer H3";
    // facts[17] = "carsonkerr plays on the rugby team";
    // facts[18] = "Gage thinks UNA Basketball 'sold the bag'";
    // facts[19] = "Corbin advises the Great Wall of China is 13,000 miles long";
    // facts[20] = "hnguyen1995 hates jS";
    // facts[21] = "llemoine1230 loves Romans 5:8";
    // facts[22] = "ehb2004 loves to run";
    // facts[23] = "Jinxler says 🦭🦭";
    // facts[24] = "gshew24 says he has eaten a whole pound of beef every day for the last 6 months";
    // facts[25] = "ArunArdor comments on how little parking UNA has on campus.";
    
        //tester 
        document.getElementById("Facts").innerHTML = facts.toString();

        const likeBtn = document.querySelector('#like-btn')
        const likeAmount = document.querySelector('#like-amount')

        //TODO: Make it likeable
        //LIKE BUTTON---
        likeBtn.addEventListener('click', function() {
            function() {
                likeAmount.textContent = parseInt(like-Amount.textContent) + 1;
        }
});
