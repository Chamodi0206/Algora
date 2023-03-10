// hide data
const btn = document.getElementById("btn");
let humadity;
// number of plants
let n;
// value from the server side
let value;

// plant image directory
const plantImages = ["01", "02", "03", "04"];

// plant names

const plantNames01 = [
  "Agave",
  "Cactus",
  "Sedum",
  "Yarrow",
  "Yucca",
  "Potentilla",
  "Rugosa_rose",
];

const plantNames02 = [
  "Agave",
  "Aster",
  "Big_blue_stem",
  "Butterfly_weed",
  "Cactus",
  "Catmint",
  "Christmas_fern",
  "Coneflower",
  "Daffodil",
  "Dalia",
  "Daylilly",
  "Gailardila",
  "Heaths",
  "Hosta",
  "Hyssop",
  "Iris",
  "Lavendar",
  "Lemon_balm",
  "Lily",
  "Marigold",
  "Monarda",
  "Ornamental_grass",
  "Penstemon",
  "Penoy",
  "Petunia",
  "Poppy",
  "Purple_coneflower",
  "Sedges",
  "Sedum",
  "Pensy",
  "Tulip",
  "Violet",
  "Yarrow",
  "Yucca",
  "Zinnia",
  "Apple",
  "Grapes",
  "Fig",
  "Peach",
  "Pear",
  "Plum",
  "Raspberry",
  "Strawberry",
  "Blackberry",
  "Alpine_currant",
  "American_filbert",
  "American_holly",
  "Amur_privet",
  "Arborvitae",
  "Azalea",
  "Bald_cypress",
  "Barberry",
  "Black_tupelo",
  "Chinese_juniper",
  "Clematis",
  "Common_boxwood",
  "Common_lilac",
  "Crab_apple",
  "Crape_myrtle",
  "Eastern_red_cedar",
  "Elderberry",
  "Elm",
  "Frazier_fir",
  "Gardenia",
  "Ginkgo",
  "Hawthorn",
  "Holly",
  "Honey_locust",
  "Horse_chestnut",
  "Juniper",
  "Lilac",
  "Maple",
  "Mockorange",
  "New_jersey_tea",
  "Oaks",
  "Ohio_buckeye",
  "Potentilla",
  "Roses",
  "Rugosa_rose",
  "Saucer_magnolia",
  "Serviceberry",
  "Silver_maple",
  "Spirea",
  "Spruce",
  "Sugar_maple",
  "Sweetshrub",
  "White_fir",
];
const plantNames03 = [
  "Apple",
  "Grapes",
  "Fig",
  "Peach",
  "Pear",
  "Plum",
  "Raspberry",
  "Strawberry",
  "Blackberry",
  "Blueberry",
  "Astilbe",
  "Bleeding_heart",
  "Daffodil",
  "Dalia",
  "Daylilly",
  "Hellebores",
  "Hosta",
  "Iris",
  "Ironweed",
  "Jack_in_pulpit",
  "Joe_pye_weed",
  "Lily",
  "Lobelia",
  "Lupine",
  "May_apple",
  "Meadow_rue",
  "Peony",
  "Queen_of_the_prairie",
  "Red_milkweed",
  "Sedges",
  "Pansy",
  "Tulip",
  "Violet",
  "American_Filbert",
  "Azealeas",
  "Bald_cypress",
  "Birch",
  "Clematis",
  "Common_elderberry",
  "Crape_myrtle",
  "Dawn_redwood",
  "Dogwood",
  "Elderberry",
  "Elm",
  "Hydragea",
  "Red_cedar",
  "Red_twig_dogwood",
  "Rhodendron",
  "Serviceberry",
  "Silver_maple",
  "Sweetshrub",
  "Tamarac",
  "White_pine",
  "Willow",
];

const plantNames04 = [
  "Bald_Cypress",
  "Dawn_Redwood",
  "Dogwood",
  "Elderberry",
  "Swamp_white_oak",
  "Tamarack",
  "Willow",
  "Lobellia",
  "Marsh_marigold",
  "Meadow_rue",
  "Sedges",
  "Cranberry",
];

// set the date and time
function realTime() {
  let dt = new Date();
  document.getElementById("date-time").innerHTML = dt.toLocaleString();
}
setInterval(realTime, 1000);

// button action
btn.addEventListener("click", () => {
  const box = document.getElementById("mainContainer");
  const details = document.getElementById("container");

  humadity = document.getElementById("humidity").value;

  // Validate the input data
  if (!isNaN(humadity)) {
    if (humadity > 0 && humadity <= 80) {
      box.style.display = "none";
      details.style.display = "block";
      sencondFun();
    } else {
      alert("Humidity need to be lower than 80 and Higher than 0");
    }
  } else {
    alert("Please Enter the right Value");
  }
});

function sencondFun() {
  // set the value according to the humadity
  if (humadity > 0 && humadity <= 20) value = 1;

  if (humadity >= 21 && humadity <= 40) value = 2;

  if (humadity >= 41 && humadity <= 60) value = 3;

  if (humadity >= 61 && humadity <= 80) value = 4;

  // set the number of plants
  if (value == 1) n = plantNames01.length;

  if (value == 2) n = plantNames02.length;

  if (value == 3) n = plantNames03.length;

  if (value == 4) n = plantNames04.length;

  // create the plants

  const fragment = document.createDocumentFragment();

  for (let i = 0; i < n; i++) {
    // create the divs and set the id and class
    var mainDiv = document.createElement("div");
    var image = document.createElement("img");
    var plantText = document.createElement("div");
    mainDiv.className = "plant";
    mainDiv.id = "plant" + i;
    image.className = "plant-image";
    image.width = "200";
    plantText.className = "plant-text";

    // set the image and text
    if (value == 1) {
      image.src = "IMG/plants/" + plantNames01[i] + ".jpg";
      plantText.textContent = plantNames01[i];
    }
    if (value == 2) {
      image.src = "IMG/plants/" + plantNames02[i] + ".jpg";
      plantText.textContent = plantNames02[i];
    }
    if (value == 3) {
      image.src = "IMG/plants/" + plantNames03[i] + ".jpg";
      plantText.textContent = plantNames03[i];
    }
    if (value == 4) {
      image.src = "IMG/plants/" + plantNames04[i] + ".jpg";
      plantText.textContent = plantNames04[i];
    }

    // append the divs to the fragment
    fragment.appendChild(mainDiv).appendChild(image);
    fragment.appendChild(mainDiv).appendChild(plantText);

    // append the fragment to the div
    document.getElementById("inside").appendChild(fragment);
  }
}
