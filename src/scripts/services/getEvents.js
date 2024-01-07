import { baseUrl, eventsPerPage } from "/src/scripts/variables.js";

async function getEvents(userName) {
    const response = await fetch(`${baseUrl}/${userName}/events?per_page=${eventsPerPage}`);
    return await response.json();
}

export { getEvents }
