let person = {
    name: "Rishi Gandhi",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    bio: `As a new frontend developer, I am eager to start my career in the exciting field of web development. I have a passion for creating user-friendly and visually appealing websites, and I am eager to continue learning and growing my skills.Although I do not have any professional experience in frontend development, I have been learning the necessary tools and technologies on my own. I have a strong foundation in HTML, CSS, and JavaScript, and I am constantly exploring new frameworks and libraries to expand my knowledge.I am a quick learner and am always looking for new challenges to tackle. I believe that my passion for frontend development and my eagerness to learn will help me make a valuable contribution to any development team. I am excited to start my career and look forward to the opportunity to bring my ideas to life.`,
    email: "rishigandhi021@gmail.com",
    image_url: "https://media.licdn.com/dms/image/D4D03AQGHfsyop4BX0g/profile-displayphoto-shrink_800_800/0/1672858513526?e=1678320000&v=beta&t=JzObfyi-4q7vJIPUxYPM0XqVAe29-ajjpA_BXZt4ymA",
    social_links: {
        linkedin: "https://www.linkedin.com/in/rishi-gandhi-5b4a1b234/",
        twitter: "https://twitter.com/_gandhigiri_",
        facebook: "https://www.facebook.com/roguerevengeburn/",
        instagram: "https://www.instagram.com/_gandhi.giri_/",
        youtube: "https://www.youtube.com/channel/UCyoPzejI2Ls8-zokHdsQ-Qg",
        github: "https://github.com/gandhirishi123"
    },
    skills: ["HTML:5", "CSS:3", "JavaScript", "Embedded C", "MySQL", "Data Structures", "C++", "Java"]
}


// Printing Hero Section dynamically
document.getElementById('hero').innerHTML=`<div class="col">
    <img src="${person.image_url}"class="rounded-circle mb-3" alt="" width="15%" srcset="">
    <h1>${person.name}</h1>
    <p>${person.city}, 
    ${person.state}, 
    ${person.country}
    </p>
    <p>${person.bio}</p>
    <div id="social" class="my-4">
    </div>
    <a href="mailto:${person.email}" target="_blank"><button type="button"class="btn btn-primary contact">
    Contact Me
    </button>
    </a>
</div>
`
// Printing Hero Section dynamically

// Printing Skills Section dynamically

person.skills.forEach(skill => document.getElementById('skills').innerHTML += `
<span class="badge bg-warning rounded-pill">${skill}</span>`)
// Printing skills Section dynamically

// Printing Social Section dynamically

document.getElementById('social').innerHTML += `
<a class="mx-2 bi bi-linkedin" style="color: black;" href="${person.social_links.linkedin}"></a>
<a class="mx-2 bi bi-twitter" style="color: black;" href="${person.social_links.twitter}"></a>
<a class="mx-2 bi bi-github" style="color: black;" href="${person.social_links.github}"></a>
`
// Printing social Section dynamically

// Printing email Section dynamically
document.getElementById('email').innerHTML=`<p>You can also contact me <a href="mailto:${person.email}">here</a></p>`

// fetch projects through api,create its json,function  & display projects 
function getProjects() {
    fetch('https://raw.githubusercontent.com/gandhirishi123/webapp-data/main/projects.json')
    .then(data => data.json())
    .then(res => {
        // Print Projects
        res.forEach(p => document.getElementById('projectsdata').innerHTML += `
            <div class="col-md-4 mb-2">
                <div class="card" style="width: 100%;">
                    <div class="card-body">
                        <h5 class="card-title">${p.title}</h5>
                        <p class="card-text">${p.decsription}</p>
                        <a href="${p.link}" target="_blank" class="card-link">Visit</a>
                    </div>
                </div>
            </div>
            `)
    }).catch(err => console.log(err))
}
// display projects by calling its function
getProjects()








