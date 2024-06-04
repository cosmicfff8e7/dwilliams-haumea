document.addEventListener("DOMContentLoaded", function() {
    // Step 1: Create a new Date object and get the current year
    const today = new Date();
    const thisYear = today.getFullYear();

    // Step 2: Select the footer element
    const footer = document.querySelector("footer");

    // Step 3: Create a new paragraph element
    const copyright = document.createElement("p");

    // Step 4: Set the inner HTML of the paragraph to include your name and the current year
    copyright.innerHTML = `&copy; ${thisYear} DaiGianna Williams`;

    // Step 5: Append the paragraph to the footer
    footer.appendChild(copyright);


    const skills = ["Python", "JavaScript", "HTML", "CSS", "R/Stata"];
    const skillsSection = document.getElementById("Skills");
    const skillsList = skillsSection.querySelector("ul");
    
    for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}




    
});
