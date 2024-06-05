document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    const thisYear = today.getFullYear();

    const footer = document.querySelector("footer");

    const copyright = document.createElement("p");
    copyright.innerHTML = `&copy; ${thisYear} AB Williams`;

    footer.appendChild(copyright);

    const skillsSection = document.getElementById("Skills");
    console.log("skillsSection:", skillsSection); // Check if skillsSection is correctly referencing the <section> element

    const skillsList = skillsSection.querySelector("ul");
    console.log("skillsList:", skillsList); // Check if skillsList is correctly referencing the <ul> element

    const skills = ["Python", "JavaScript", "HTML", "CSS", "R/Stata"];
    
    for (let i = 0; i < skills.length; i++) {
        const skill = document.createElement("li");
        skill.innerText = skills[i];
        skillsList.appendChild(skill);
        console.log("Added skill:", skills[i]);
    }

    const messageForm = document.forms["leave_message"];
    messageForm.addEventListener("submit", function(event){
        event.preventDefault();
        const getUsername = event.target.usersName.value;
        const getEmail = event.target.usersEmail.value;
        const getMessage = event.target.usersMessage.value;

        console.log("Username:", getUsername);
        console.log("Email:", getEmail);
        console.log("Message:", getMessage);

        const messageSection = document.getElementById("Messages");
        const messageList = messageSection.querySelector("ul");
        const newMessage = document.createElement("li");

        newMessage.innerHTML = `
            <a href="mailto:${getEmail}">${getUsername}</a>: 
            <span>${getMessage}</span>`;

        const removeButton = document.createElement("button");
        removeButton.innerText = "Remove";
        removeButton.type = "button";

        removeButton.addEventListener("click", function(event){
            const entry = event.target.parentNode;
            entry.remove();
        });

        newMessage.appendChild(removeButton);
        messageList.appendChild(newMessage);

        event.target.reset();
    });


    
    const GITHUB_USERNAME = "cosmicfff8e7";

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos`)
    .then(response => {
        if (!response.ok) {
            throw new Error("ERROR");
        }
        return response.json();
    })
    .then(repositories => {
        for (let i = 0; i < repositories.length; i++) {
            const projectName = repositories[i].name;
            const project = document.createElement("li");
            project.innerHTML = `<a href="${repositories[i].html_url}" target="_blank">${projectName}</a>`;
            projectList.appendChild(project);
        }
    })
    .catch(error => {
        console.error("ERROR", error);
    });


        const projectSection = document.getElementById("Projects");
        const projectList = projectSection.querySelector();

        
    for (let i = 0; i < repositories.length; i++) {
        const project = document.createElement("li");
        project.innerText = repositories[i].name;
        projectList.appendChild(project);
    }




/const API_BASE_URL = 'https://api.artic.edu/api/v1';
const IIIF_BASE_URL = 'https://www.artic.edu/iiif/2';

// Function to fetch artworks from the API
async function fetchArtworks() {
    try {
        const response = await fetch(`${API_BASE_URL}/artworks/search?query[term][is_public_domain]=true&limit=10&fields=id,title,image_id`);
        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('ERROR:', error);
        return [];
    }
}

// Function to construct IIIF URLs for artworks' images
function constructIIIFUrl(imageId) {
    return `${IIIF_BASE_URL}/${imageId}/full/843,/0/default.jpg`;
}








});
