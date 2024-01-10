const input = document.getElementById("input-search");
const button = document.getElementById("btn-search");

import { getUser } from "/src/scripts/services/getUser.js";
import { getRepositories } from "/src/scripts/services/getRepositories.js";
import { getEvents } from "/src/scripts/services/getEvents.js";

import { user } from "/src/scripts/objects/user.js";
import { screen } from "/src/scripts/objects/screen.js";

async function getUserData(userName) {
    const userResponse = await getUser(userName);
    const repositoriesResponse = await getRepositories(userName);
    const eventsResponse = await getEvents(userName)

    if (userResponse.message === "Not Found") {
        screen.renderNotFound(user);
        return
        }
        
    console.log(repositoriesResponse);
    
    user.setInfo(userResponse);
    user.setRepositories(repositoriesResponse);
    user.setEvents(eventsResponse);

    screen.renderUser(user);
}

button.addEventListener("click", () => {
    validateInput();
})

input.addEventListener("keyup", (e) => {
    const enterKeyIsPressed = e.key === "Enter"
    if (enterKeyIsPressed) {
        validateInput();
    }
})

function validateInput() {
    const userName = input.value;
    userName === "" ? alert("Escreva o nome do usuário do GitHub na barra de pesquisa.") : getUserData(userName);
}