let person = {
    name: "Rishi Gandhi",
    city: "Pune",
    state: "Maharashtra",
    country: "India",
    bio: " A strong communicator, able to address all client questions and concerns. Experienced in working collaboratively with a team of veterinary professionals. Equipped with a diverse and promising skill-set. Proficient in an assortment of technologies Accustomed to working well with others and committed to meeting deadlines and adhering to project guidelines. Willing to touch new heights and transform this new age of tech.",
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

let projects = [{
    title: "Search Github User",
    decsription: "Enter Github username and see the magic.",
    link: "https://gandhirishi123.github.io/searchgithubuser/"
}, {
    title: "Github Users",
    decsription: "Fetching Github API's,navbar and implementing loaders and using bootstrap.",
    link: "https://gandhirishi123.github.io/bootstrapgithubapi/"
},
{
    title: "School Marklist display",
    decsription: "Enter student's marks and display in a table form.",
    link: "https://gandhirishi123.github.io/Takemarksanddisplay/"
}]

document.getElementById('hero').innerHTML = `<div class="col">
<img src="${person.image_url}"
class="rounded-circle mb-3" alt="" width="15%" srcset="">
<h1>${person.name}</h1>
<p>${person.city}, ${person.state}, ${person.country}</p>
<p>${person.bio}</p>
<div id="social" class="my-4"></div>
<a href="mailto:${person.email}" target="_blank"><button type="button"
        class="btn btn-primary">Contact Me</button></a>
</div>`
projects.forEach(p => document.getElementById('projectsdata').innerHTML += `<div class="col-md-4" class="mb-3">
<div class="card" style="width: 100%;">
    <div class="card-body">
        <h5 class="card-title">${p.title}</h5>
        <p class="card-text">${p.decsription}</p>
        <a href="${p.link}" target="_blank"
            class="card-link">TRY NOW</a>
    </div>
</div>
</div>`)
person.skills.forEach(skill => document.getElementById('skills').innerHTML += `
<span class="badge bg-warning">${skill}</span>`)

document.getElementById('social').innerHTML += `
<a class="mx-2 bi bi-linkedin" style="color: black;" href="${person.social_links.linkedin}"></a>
<a class="mx-2 bi bi-twitter" style="color: black;" href="${person.social_links.twitter}"></a>
<a class="mx-2 bi bi-github" style="color: black;" href="${person.social_links.github}"></a>
`
document.getElementById('email').innerHTML=`<p>You can also contact me <a href="mailto:${person.email}">here</a></p>`









