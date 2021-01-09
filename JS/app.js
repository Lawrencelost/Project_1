document.querySelector(".navbar-nav").addEventListener("click", (e) => {
    const contents = [{ nav: "home", page: "homepage" }, { nav: "resume", page: "resumepage" }];

    let activePage = document.querySelectorAll(".active")
    if (e.target.tagName === "A") {
        console.log(e.target);
        activePage.forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        contents.forEach(ele => {
            if (ele.nav === e.target.id) {
                document.getElementById(ele.page).classList.add("active");
            }
        });
    }


    e.preventDefault();
})

window.addEventListener("load", () => {
    let skills = document.querySelectorAll(".skill-percentage")
    console.log(skills[0]);
    for (let i = 0; i < skills.length; i++) {
        skills[i].classList.add(`skill-${i+1}`);
    }
})