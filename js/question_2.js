//****************************************************************************************
// Question 2
// Make a call to https://api.rawg.io/api/games and pass the JSON object it returns to a function called createGames.
// For each game object in the results, the createGames function should create the following HTML in a loop. Replace the placeholder values with the relevant properties from each object:
//After the loop, all the HTML that was created should be assigned as the innerHTML value to the element above.
///////////////////////////////////////////////////////////////////////////////////////////
const creatorsUrl = "https://api.rawg.io/api/games";
const corsEnabledUrl = "https://cors-anywhere.herokuapp.com/" + creatorsUrl;

fetch(creatorsUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createGames(json);
    })
    .catch(function(error) {
        console.log(error);
    });

function createGames(json) {
    const results = json.results;
    console.dir(results);

    const resultsContainer = document.querySelector(".results");

    let html = "";

    results.forEach(function(result) {
        let imageUrl = "https://via.placeholder.com/250";

        if (result.background_image) {
            imageUrl = result.background_image;
        } else if (result.image) {
            imageUrl = result.image;
        }

                html+=`<div class="game">
                <h2>${result.name}</h2>
                <img src="${imageUrl}" alt=${result.name} height=250px width=1000px>
                  </div>`;
    });
    console.log(html)
    resultsContainer.innerHTML = html;
}

// 2nd Answer         
//  
//<div class="game">
/* <h2>Grand Theft Auto V</h2>
<img src="https://media.rawg.io/media/games/b11/b115b2bc6a5957a917bc7601f4abdda2.jpg" alt=Grand Theft Auto V height=250px width=1000px>
  </div><div class="game">
<h2>Portal 2</h2>
<img src="https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg" alt=Portal 2 height=250px width=1000px>
  </div><div class="game">
<h2>The Witcher 3: Wild Hunt</h2>
<img src="https://media.rawg.io/media/games/088/088b41ca3f9d22163e43be07acf42304.jpg" alt=The Witcher 3: Wild Hunt height=250px width=1000px>
  </div><div class="game">
<h2>The Elder Scrolls V: Skyrim</h2>
<img src="https://media.rawg.io/media/games/e9c/e9cbc91e2090638ddab6ae0b3d334f90.jpg" alt=The Elder Scrolls V: Skyrim height=250px width=1000px>
  </div><div class="game">
<h2>Left 4 Dead 2</h2>
<img src="https://media.rawg.io/media/games/c25/c25ebb8eb08790277ae2e2dce0d62174.jpg" alt=Left 4 Dead 2 height=250px width=1000px>
  </div><div class="game">
<h2>Borderlands 2</h2>
<img src="https://media.rawg.io/media/games/588/588c6bdff3d4baf66ec36b1c05b793bf.jpg" alt=Borderlands 2 height=250px width=1000px>
  </div><div class="game">
<h2>Portal</h2>
<img src="https://media.rawg.io/media/screenshots/19d/19d3effb85e8f40d0b5b004fb5ab5c76.jpg" alt=Portal height=250px width=1000px>
  </div><div class="game">
<h2>BioShock Infinite</h2>
<img src="https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg" alt=BioShock Infinite height=250px width=1000px>
  </div><div class="game">
<h2>Life is Strange</h2>
<img src="https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg" alt=Life is Strange height=250px width=1000px>
  </div><div class="game">
<h2>Counter-Strike: Global Offensive</h2>
<img src="https://media.rawg.io/media/games/64b/64bb90ca6b1df8a36d710f6542111142.jpg" alt=Counter-Strike: Global Offensive height=250px width=1000px>
  </div><div class="game">
<h2>Limbo</h2>
<img src="https://media.rawg.io/media/games/929/9295e55ce69cf5337c567983cf8b4137.jpeg" alt=Limbo height=250px width=1000px>
  </div><div class="game">
<h2>Tomb Raider (2013)</h2>
<img src="https://media.rawg.io/media/games/81b/81b138691f027ed1f8720758daa0d895.jpg" alt=Tomb Raider (2013) height=250px width=1000px>
  </div><div class="game">
<h2>Half-Life 2</h2>
<img src="https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg" alt=Half-Life 2 height=250px width=1000px>
  </div><div class="game">
<h2>BioShock</h2>
<img src="https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg" alt=BioShock height=250px width=1000px>
  </div><div class="game">
<h2>Team Fortress 2</h2>
<img src="https://media.rawg.io/media/games/8e0/8e032ac4faf1136e7d708bb3ac61af23.jpg" alt=Team Fortress 2 height=250px width=1000px>
  </div><div class="game">
<h2>PAYDAY 2</h2>
<img src="https://media.rawg.io/media/games/73e/73eecb8909e0c39fb246f457b5d6cbbe.jpg" alt=PAYDAY 2 height=250px width=1000px>
  </div><div class="game">
<h2>Fallout 4</h2>
<img src="https://media.rawg.io/media/games/c88/c885ae6a24bbce21df93b6c4e1c78899.jpg" alt=Fallout 4 height=250px width=1000px>
  </div><div class="game">
<h2>Dota 2</h2>
<img src="https://media.rawg.io/media/games/83f/83f6f70a7c1b86cd2637b029d8b42caa.jpg" alt=Dota 2 height=250px width=1000px>
  </div><div class="game">
<h2>Grand Theft Auto IV</h2>
<img src="https://media.rawg.io/media/games/4a0/4a0a1316102366260e6f38fd2a9cfdce.jpg" alt=Grand Theft Auto IV height=250px width=1000px>
  </div><div class="game">
<h2>DOOM (2016)</h2>
<img src="https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg" alt=DOOM (2016) height=250px width=1000px>
  </div> */}