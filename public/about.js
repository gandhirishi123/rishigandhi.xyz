console.log('a')
let person1 = {
    skillset: ["HTML:5", "CSS:3", "JavaScript", "Embedded C", "MySQL", "Data Structures", "C++", "Java"]
}



person1.skillset.forEach(skill => document.getElementById('skillset').innerHTML += `
<span class="badge bg-warning rounded-pill">${skill}</span>`)

let experience =[{
    title: "Google DSC LEAD", 
    desc:"Google",
    period:"AUG 2022 - present",

},
{
    title: "Cloud Facilitator", 
    desc:"Google Cloud",
    period:"DEC 2022 - JAN 2023",

}]

getVolunteerexperience=()=> {
    fetch('https://raw.githubusercontent.com/gandhirishi123/volunteerdata/main/volunteerdata.json')
    .then(data => data.json())
    .then(res => {
        // Print about
        res.forEach(p => document.getElementById('about').innerHTML += `
        <div class="card mb-3" style="max-width: 400px;">
        <div class="row g-0">
          <div class="col-md-4">
          <img src="${p.image}" class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${p.title}</h5>
              <p class="card-text">${p.desc}</p>
              <p class="card-text"><small class="text-muted">${p.period}</small></p>
            </div>
          </div>
        </div>
      </div>`)
    }).catch(err => console.log(err))
}
// display volunteer experience by calling its function
getVolunteerexperience()