function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
document.getElementById('show-portfolio-button').addEventListener('click', function() {
  // Hide the main section and show the portfolio section
  document.getElementById('portfolio-section').style.display = 'block'; 
  document.getElementById('main-section').style.display = 'none'; 
  
  // Change the background image only when in the portfolio section
  document.body.style.backgroundImage = "url('assets/background.jpg')";
  document.body.style.backgroundSize = 'cover';
});

document.getElementById("show-portfolio-button").addEventListener("click", () => {
  // Show portfolio section when button is clicked
  document.getElementById("portfolio-section").style.display = "block";
  document.getElementById("main-section").style.display = "none";
  
  // Inject dynamic content
  injectPortfolioContent();
});

function injectPortfolioContent() {
  // Set the content for Name, Title, and other placeholders
  document.getElementById("name-placeholder").innerText = "Genesis Lloyd L. Manuevo";
  document.getElementById("title-placeholder").innerText = "Frontend Developer";
  document.getElementById("experience-placeholder").innerText = "Still learning in School";
  document.getElementById("education-placeholder").innerText = "Currently pursuing a Bachelor's Degree in Information Technology";
  document.getElementById("bio-placeholder").innerText = "Hi! I'm Genesis Lloyd L. Manuevo, a passionate and aspiring technologist currently pursuing a Bachelor of Science in Information Technology at Marinduque State University. I thrive on exploring innovative solutions, learning new technologies, and honing my skills in software development, systems design, and IT-related fields. My goal is to contribute to impactful projects that make a difference in people's lives and help drive digital transformation. In my journey as an IT student, I am committed to continuous growth, collaboration, and building a future where technology empowers everyone.";

  
  // Example: Dynamically inject skills in the Experience Section
  const skills = [
    { name: "HTML", level: "Basic" },
    { name: "CSS", level: "Basic" },
    { name: "JavaScript", level: "Basic" },
    { name: "Git", level: "Basic" }
  ];

  const skillsContainer = document.getElementById("skills-container");
  skills.forEach(skill => {
    const article = document.createElement("article");
    article.innerHTML = `
      <img src="./assets/checkmark.png" alt="Checkmark" class="icon" />
      <div>
        <h3>${skill.name}</h3>
        <p>${skill.level}</p>
      </div>
    `;
    skillsContainer.appendChild(article);
  });
}
