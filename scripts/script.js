
$(document).ready(function () {
    console.log("Page Loaded/Ready");

    let facts = [];
    facts[0] = "Richie's favorite color is purple";
    facts[1] = "Reed has two brothers";
    facts[2] = "BeastCarp1 likes to swim";
    facts[3] = "Jaxon has broken a finger before";
    facts[4] = "Victor is ambidextrous";
    facts[5] = "Olivia can say her alphabet backwards";
    facts[6] = "Corey is not famous";
    facts[7] = "Tatum was born in Lousiana";
    facts[8] = "Kaden has never tried a PB&J Sandwich";
    facts[9] = "Dylan is allergic to cats";
    facts[10] = "SSenecalI01 likes trains";
    facts[11] = "Daniel knows the secret identity of beastcarp1";
    facts[12] = "Matthew has a dog";
    facts[13] = "Jacob hates the parking at UNA";
    facts[14] = "mandrews3 has three dogs";
    facts[15] = "Carly is adopted from China";
    facts[16] = "ccantrell2 used to have a Hummer H3";
    facts[17] = "carsonkerr plays on the rugby team";
    facts[18] = "Gage thinks UNA Basketball 'sold the bag'";
    facts[19] = "Corbin advises the Great Wall of China is 13,000 miles long";
    facts[20] = "hnguyen1995 hates jS";
    facts[21] = "llemoine1230 loves Romans 5:8";
    facts[22] = "ehb2004 loves to run";
    facts[23] = "Jinxler says 🦭🦭";
    facts[24] = "gshew24 says he has eaten a whole pound of beef every day for the last 6 months";
    facts[25] = "ArunArdor comments on how little parking UNA has on campus.";

    let index = 0;
    let likedFacts = [];

    //display when page loads
    $("#textBubble").text("Shelly knows some secrets about your classmates...");

    function showFact() {
        $("#textBubble")
          .fadeIn(500)  //fade in timer
          .delay(4000)  // 4-second timer for the fact, x000 with x being the seconds
          .fadeOut(500, function () {  //current fades ou t
              index = (index + 1) % facts.length; //looping thru the facts
              $(this).text("Shelly found out that " + facts[index] + "!");  
          });
    }

    
    setInterval(showFact, 3000);  // Change every 3 seconds

    const likeBtn = document.querySelector('#like-btn');
    const likeAmount = document.querySelector('#like-amount');
    const likedFactsDisplay = document.querySelector('#liked-facts');

    // Like Button functionality 
    likeBtn.addEventListener('click', function () {
        // Add the current fact to the liked facts array...TODO: need to make it prettier furrrshorreeeeee
        likedFacts.push(facts[index]);

        // Updates like count
        likeAmount.textContent = likedFacts.length;

        //displays the liked fact
        likedFactsDisplay.innerHTML = "<strong>Liked Facts:</strong><ul>";
        likedFacts.forEach(fact => {
            likedFactsDisplay.innerHTML += `<li>${fact}</li>`;
        });
        likedFactsDisplay.innerHTML += "</ul>";
    });

    // Reset Button stuff
    const resetBtn = document.querySelector('#reset-btn');
    resetBtn.addEventListener('click', function () {
        // Clear the liked facts array
        likedFacts = [];

        // Reset count to 0 
        likeAmount.textContent = 0;

        // Clear the liked facts display
        likedFactsDisplay.innerHTML = "<strong>Liked Facts:</strong><ul><li>No liked facts yet.</li></ul>";
    });
});
