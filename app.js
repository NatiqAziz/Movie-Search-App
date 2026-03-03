// Get your free API key from: https://www.omdbapi.com/apikey.aspx
// Replace YOUR_API_KEY_HERE below with your actual key

const API_KEY = "YOUR_API_KEY_HERE";

const input = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const img = document.querySelector(".belowSearch img");
const title = document.querySelector("#title");
const rating = document.querySelector("#rating");
const lang = document.querySelector("#lang");
const year = document.querySelector("#year");
const runTime = document.querySelector("#runTime");
const plot = document.querySelector("#plot");
const cast = document.querySelector("#cast");

const getData = async (movie) => {
  try {
    let data = await fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&t=${movie}`,
    );

    let rep = await data.json();
    if (rep.Response === "False") {
      alert("movie not found");
      return;
    }

    // for poster
    let poster = rep.Poster;
    img.src = poster;

    // for title
    let titleName = rep.Title;
    title.innerText = titleName;

    // for rating
    let rate = rep.imdbRating;
    rating.innerText = "⭐" + rate;

    // for language
    let language = rep.Language;
    lang.innerText = language;
    // for year
    let yearCount = rep.Year;
    year.innerText = yearCount;

    //for Runtime
    let time = rep.Runtime;
    runTime.innerText = time;

    // for plot
    let desc = rep.Plot;
    plot.innerText = desc;

    // for Cast
    let actors = rep.Actors;
    cast.innerText = actors;

    // showing Information
    document.querySelector(".belowSearch").style.visibility = "visible";
    document.querySelector(".desc").style.visibility = "visible";
    document.querySelector(".cast").style.visibility = "visible";
  } catch (error) {
    alert("error occured");
    console.log(error);
  }
};

btn.addEventListener("click", () => {
  if (input.value === "") {
    return;
  }

  let movie = input.value.trim();
  input.value = "";
  getData(movie);
});

input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    if (input.value === "") {
      return;
    }

    let movie = input.value.trim();
    input.value = "";
    getData(movie);
  }
});
