const projects = document.querySelectorAll('.project');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
},{ threshold: 0.2 });

const sections=document.querySelectorAll("section");

const obs = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add("show");
   observer.unobserve(entry.target);
}
})
})

sections.forEach(sec=>obs.observe(sec));

projects.forEach(project => observer.observe(project));

projects.forEach(project => {
    project.addEventListener("click", e => {
        if(e.target.tagName.toLowerCase() === "a") return;
        const link = project.querySelector("a");
        if(link) window.open(link.href, "_blank");
    });
});

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {
const sectionTop = section.offsetTop - 120;
const sectionHeight = section.clientHeight;

if(scrollY >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link=>{
link.classList.remove("active");
if(link.getAttribute("href") === "#" + current){
link.classList.add("active");
}
});

});

// Add to script.js
const projectImgs = document.querySelectorAll(".project-img");

// Create overlay
const overlay = document.createElement("div");
overlay.id = "imgOverlay";
overlay.style.cssText = `
    display: none;
    position: fixed;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background: rgba(0,0,0,0.85);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    cursor: zoom-out;
`;

const overlayImg = document.createElement("img");
overlayImg.style.cssText = `
    max-width: 90%;
    max-height: 90%;
    border-radius: 12px;
    border: 2px solid rgba(244,244,205,0.4);
`;

overlay.appendChild(overlayImg);
document.body.appendChild(overlay);

// Open on click
projectImgs.forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", (e) => {
        e.stopPropagation();
        overlayImg.src = img.src;
        overlay.style.display = "flex";
    });
});

// Close on click
overlay.addEventListener("click", () => {
    overlay.style.display = "none";
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") overlay.style.display = "none";
});
