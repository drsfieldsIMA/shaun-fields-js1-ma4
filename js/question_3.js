// Question 3 
// Make a call to https://api.rawg.io/api/games/4200 and pass the JSON object it returns to a function called createGameDetails.
// Inside createGameDetails replace the placeholder values in the HTML above with properties from the object returned from the API call.
// Use either the background_image or background_image_additional property as the background image of the <div class="image"> element.

const creatorsUrl = "https://api.rawg.io/api/games";
const corsEnabledUrl = "https://cors-anywhere.herokuapp.com/" + creatorsUrl;

fetch("https://api.rawg.io/api/games/4200")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGameDetails(json);
    })
    .catch(function(error) {
        console.log(error);
    });


function createGameDetails(json) {
    const results = json.results;
    console.dir(json);

    const resultsContainer = document.querySelector(".container");

    const image = document.querySelector(".image");
    
    if (json.image) {
        image.style = json.image;
    } else if (json.background_image) {
        image.style.background = `url("${json.background_image}")`;
    } else {
        image.style = "https://via.placeholder.com/1000";
    }
     
    image.alt = json.name;

    const name = document.querySelector(".name");
    name.innerHTML = json.name;
    

    const description = document.querySelector(".description");
    description.innerHTML = json.description;
}
// Answer 3
// Portal 2
// {


///// IMAGE

// }
// Portal 2 is a first-person puzzle game developed by Valve Corporation and released on April 19, 2011 on Steam, PS3 and Xbox 360. It was published by Valve Corporation in digital form and by Electronic Arts in physical form.

// Its plot directly follows the first game's, taking place in the Half-Life universe. You play as Chell, a test subject in a research facility formerly ran by the company Aperture Science, but taken over by an evil AI that turned upon its creators, GladOS. After defeating GladOS at the end of the first game but failing to escape the facility, Chell is woken up from a stasis chamber by an AI personality core, Wheatley, as the unkempt complex is falling apart. As the two attempt to navigate through the ruins and escape, they stumble upon GladOS, and accidentally re-activate her...

// Portal 2's core mechanics are very similar to the first game's ; the player must make their way through several test chambers which involve puzzles. For this purpose, they possess a Portal Gun, a weapon capable of creating teleportation portals on white surfaces. This seemingly simple mechanic and its subtleties coupled with the many different puzzle elements that can appear in puzzles allows the game to be easy to start playing, yet still feature profound gameplay. The sequel adds several new puzzle elements, such as gel that can render surfaces bouncy or allow you to accelerate when running on them.

// The game is often praised for its gameplay, its memorable dialogue and writing and its aesthetic. Both games in the series are responsible for inspiring most puzzle games succeeding them, particularly first-person puzzle games. The series, its characters and even its items such as the portal gun and the companion cube have become a cultural icon within gaming communities.

// Portal 2 also features a co-op mode where two players take on the roles of robots being led through tests by GladOS, as well as an in-depth level editor. 

