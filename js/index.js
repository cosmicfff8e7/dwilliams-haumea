document.addEventListener("DOMContentLoaded", function() {
    const today = new Date();
    const thisYear = today.getFullYear();

    const footer = document.querySelector("footer");

    const copyright = document.createElement("p");
    copyright.innerHTML = `&copy; ${thisYear} DaiGianna Williams`;

    footer.appendChild(copyright);


    const skills = ["Python", "JavaScript", "HTML", "CSS", "R/Stata"];
    const skillsSection = document.getElementById("Skills");
    const skillsList = skillsSection.querySelector("ul");
    
    for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}

const messageForm = document.forms["leave_message"]
messageForm.addEventListener("submit", function(event){
    event.preventDefault();
    const getUsername = event.target.username.value;
    const getEmail = event.target.usersEmail.value;
    const getMessage = event.target.usersMessage.value;

    console.log("Username:", getUsername);
    console.log("Email:", getEmail);
    console.log("Username:", getMessage);

    const messageSection = document.getElementById("message");
    const messageList = messageSection.querySelector("ul");
    const newMessage = document.createElement("li");

    newMessage.innerHTML = `
    <a href="mailto:${getEmail}">${getUsername}</a>: 
    <span>${getMessage}</span> `;

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.type = "button";

    removeButton.addEventListener("click", function(event){
        const entry = event.target.parentNode;
        entry.remove();
        
    });

    
    messageList.appendChild(newMessage);
    newMessage.appendChild(removeButton);
    




    event.target.reset();

}


    
});
