
$(document).ready(function () {
    console.log("Page Loaded/Ready");

    let facts = [];
    facts[0] = "someone's favorite color is purple";
    facts[1] = "someone has two brothers";
    facts[2] = "someone likes to swim";
    facts[3] = "someone has broken a finger before";
    facts[4] = "someone is ambidextrous";
    facts[5] = "someone can say the alphabet backwards";
    facts[6] = "someone is not famous";
    facts[7] = "someone was born in Lousiana";
    facts[8] = "someone has never tried a PB&J Sandwich";
    facts[9] = "someone is allergic to cats";
    facts[10] = "someone likes trains";
    facts[11] = "someone knows the secret identity of beastcarp1";
    facts[12] = "someone has a dog";
    facts[13] = "someone hates the parking at UNA";
    facts[14] = "someone has three dogs";
    facts[15] = "someone is adopted from China";
    facts[16] = "someone used to have a Hummer H3";
    facts[17] = "someone plays on the rugby team";
    facts[18] = "someone thinks UNA Basketball 'sold the bag'";
    facts[19] = "someone advises the Great Wall of China is 13,000 miles long";
    facts[20] = "someone hates jS";
    facts[21] = "someone loves Romans 5:8";
    facts[22] = "someone loves to run";
    facts[23] = "someone says 🦭🦭";
    facts[24] = "someone has eaten a whole pound of beef every day for the last 6 months";
    facts[25] = "someone comments on how little parking UNA has on campus.";

    let index = 0;
    let likedFacts = [];

    //display when page loads
    $("#textBubble").text("Shelly knows some secrets about your classmates...");

    function showFact() {
        $("#textBubble")
          .fadeIn(500)  //fade in timer
          .delay(3000)  // 4-second timer for the fact, x000 with x being the seconds
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
