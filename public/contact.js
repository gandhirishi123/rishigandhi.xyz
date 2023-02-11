let contact={
    email: "rishigandhi021@gmail.com",
    image_url: "https://media.licdn.com/dms/image/D4D03AQGHfsyop4BX0g/profile-displayphoto-shrink_800_800/0/1672858513526?e=1678320000&v=beta&t=JzObfyi-4q7vJIPUxYPM0XqVAe29-ajjpA_BXZt4ymA",
    social_links: {
        linkedin: "https://www.linkedin.com/in/rishi-gandhi-5b4a1b234/",
        twitter: "https://twitter.com/_gandhigiri_",
        facebook: "https://www.facebook.com/roguerevengeburn/",
        instagram: "https://www.instagram.com/_gandhi.giri_/",
        youtube: "https://www.youtube.com/channel/UCyoPzejI2Ls8-zokHdsQ-Qg",
        github: "https://github.com/gandhirishi123"
    }
}
document.getElementById('socials').innerHTML += `
<a class="mx-2 bi bi-linkedin" href="${person.social_links.linkedin}"></a>
<a class="mx-2 bi bi-twitter" href="${person.social_links.twitter}"></a>
<a class="mx-2 bi bi-github" href="${person.social_links.github}"></a>
<a class="bi bi-mailbox" href="mailto:${person.email}"></a>`