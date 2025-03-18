$(document).ready(function () {
    console.log("Page Loaded/Ready");

    let facts = [
        "someone's favorite color is purple",
        "someone has two brothers",
        "someone likes to swim",
        "someone has broken a finger before",
        "someone is ambidextrous",
        "someone can say the alphabet backwards",
        "someone is not famous",
        "someone was born in Louisiana",
        "someone has never tried a PB&J Sandwich",
        "someone is allergic to cats",
        "someone likes trains",
        "someone knows the secret identity of beastcarp1",
        "someone has a dog",
        "someone hates the parking at UNA",
        "someone has three dogs",
        "someone is adopted from China",
        "someone used to have a Hummer H3",
        "someone plays on the rugby team",
        "someone thinks UNA Basketball 'sold the bag'",
        "someone advises the Great Wall of China is 13,000 miles long",
        "someone hates jS",
        "someone loves Romans 5:8",
        "someone loves to run",
        "someone says 🦭🦭",
        "someone has eaten a whole pound of beef every day for the last 6 months",
        "someone comments on how little parking UNA has on campus."
    ];

    let index = 0;
    let likedFacts = [];

    // Display message when page loads...finally works 
    $("#textBubble").text("Shelly knows some secrets about your classmates...");

    function showFact() {
        $("#textBubble")
          .fadeIn(500)
          .delay(3000)
          .fadeOut(500, function () {
              index = (index + 1) % facts.length;
              $(this).text("Shelly found out that " + facts[index] + "!");
          });
    }

    setInterval(showFact, 3000);

    const likeBtn = document.querySelector('#like-btn');
    const likeAmount = document.querySelector('#like-amount');
    const likedFactsDisplay = document.querySelector('#liked-facts');

    // Function to update liked facts display...some inline styling buttttt...it works
    function updateLikedFactsDisplay() {
        if (likedFacts.length === 0) {
            likedFactsDisplay.innerHTML = "<strong>Liked Facts:</strong><ul><li>No liked facts yet.</li></ul>";
        } else {
            likedFactsDisplay.innerHTML = "<strong>Liked Facts:</strong><ul>";
            likedFacts.forEach(fact => {
                likedFactsDisplay.innerHTML += `<li>${fact}</li>`;
            });
            likedFactsDisplay.innerHTML += "</ul>";
        }
        likeAmount.textContent = likedFacts.length;
    }

    // Display "No liked facts yet" by default on page load...was not working before
    updateLikedFactsDisplay();

    // Like button 
    likeBtn.addEventListener('click', function () {
        likedFacts.push(facts[index]);
        updateLikedFactsDisplay();
    });

    // Reset button
    const resetBtn = document.querySelector('#reset-btn');
    resetBtn.addEventListener('click', function () {
        likedFacts = [];
        updateLikedFactsDisplay();
    });

    // Flip Shelly!
    $('#shellySeal').on('click', function () {
    $(this).toggleClass('flipped');
});

    // Function - sort liked facts
function sortLikedFacts(order = 'asc') {
    likedFacts.sort((a, b) => {
        if (order === 'asc') {
            return a.localeCompare(b);  // Alphabetical order
        } else {
            return b.localeCompare(a);  // Reverse alphabetical order
        }
    });
    updateLikedFactsDisplay();
}


$('#sort-asc-btn').on('click', () => sortLikedFacts('asc'));
$('#sort-desc-btn').on('click', () => sortLikedFacts('desc'));


});
