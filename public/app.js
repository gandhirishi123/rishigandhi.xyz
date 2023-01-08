let person = {
    name: "Rishi Gandhi",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    bio: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio id ratione similique. Voluptatemarchitecto, voluptates vero est mollitia non....",
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
    skills: ["HTML:5", "CSS:3", "JAVASCRIPT", "EMBEDDED C", "MySQL", "DATA STRUCTURES", "C++", "JAVA"]

}

// Print Hero Section
document.getElementById('hero').innerHTML = `
    <div class="col-md-12">
        <img src="${person.image_url}" class="rounded-circle mb-3" alt="" srcset="">
        <h1>${person.name}</h1>
        <p>${person.city}, ${person.state}, ${person.country}</p>
        <p>${person.bio}</p>
        <div id="social" class="my-4"></div>
        <a href="mailto:${person.email}" target="_blank"><button type="button"
            class="btn btn-primary contact">Contact Me</button></a>
    </div>
`

person.skills.forEach(skill => document.getElementById('skills').innerHTML += `
    <span class="badge bg-warning rounded-pill" >${skill}</span>
`)

document.getElementById('social').innerHTML += `
<a class="mx-2" href="${person.social_links.linkedin}" style="color: black;font-size:20px"><i class="bi bi-linkedin"></i></a>
<a class="mx-2" href="${person.social_links.twitter}" style="color: black;font-size:20px"><i class="bi bi-twitter"></i></a>
<a class="mx-2" href="${person.social_links.facebook}" style="color: black;font-size:20px"><i class="bi bi-facebook"></i></a>
<a class="mx-2" href="${person.social_links.instagram}" style="color: black;font-size:20px"><i class="bi bi-instagram"></i></a>
<a class="mx-2" href="${person.social_links.youtube}" style="color: black;font-size:20px"><i class="bi bi-youtube"></i></a>
<a class="mx-2" href="${person.social_links.github}" style="color: black;font-size:20px"><i class="bi bi-github"></i></a>   
`

// Print Email
document.getElementById('email').innerHTML = `
    <p>You can also contact me on  
        <a href="mailto:${person.email}">${person.email}</a>
    </p>
`

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
                        <a href="${p.link}" target="_blank" class="card-link">TRY NOW</a>
                    </div>
                </div>
            </div>
            `)
    }).catch(err => console.log(err))
}

getProjects()








