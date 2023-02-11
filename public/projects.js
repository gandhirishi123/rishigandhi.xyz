function getProjects() {
    fetch('https://raw.githubusercontent.com/gandhirishi123/projectdata/main/projects.json')
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



