
// Imports
import { getAsyncData } from "./Utils/getData.js";
import {get} from "./Utils/getElement.js"

const jokes = get('.joke');
const btn = get('.btn');
const chuckImg = get('.container img');
const chuckAPI = 'https://api.chucknorris.io/jokes/random?category=dev';
const category = [
"animal",
"career",
"celebrity",
"dev",
"explicit",
"fashion",
"food",
"history",
"money",
"movie",
"music",
"political",
"religion",
"science",
"sport",
"travel"
]

btn.addEventListener('click', async ()=> {
    shakeImg(chuckImg);
    getAsyncData(chuckAPI, displayJoke);
})

function displayJoke(data){
    jokes.textContent = data.value;
}

function shakeImg(img) {
  img.classList.add("shakeIt");
  const random = Math.random() * 1000;
  setTimeout(() => {
    img.classList.remove("shakeIt");
  }, random);
}
