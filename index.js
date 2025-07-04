
  // for home section
document.getElementById("nav-home").addEventListener("click", function () {
  document.getElementById("home-id").scrollIntoView({ behavior: "smooth" });
});


// for project section
document.getElementById("nav-project").addEventListener("click", function () {
  document.getElementById("project-id").scrollIntoView({ behavior: "smooth" });
});

//  for skills section :
document.getElementById("nav-skill").addEventListener("click", function () {
 document.getElementById("skill-id").scrollIntoView({ behavior: "smooth" });
});



// for linkdin
document.getElementById("nav-linkedin").addEventListener("click",function(){
  document.getElementById("Linkedin-id").scrollIntoView({behavior:"smooth"})
})

// for github
document.getElementById("nav-github").addEventListener("click",function(){
  document.getElementById("Github-id").scrollIntoView({behavior:"smooth"})
})


//for contect
document.getElementById("nav-contect").addEventListener("click",function(){
  document.getElementById("Contect-id").scrollIntoView({behavior:"smooth"})
})




// effects in contect


// Attach event listeners to all nav icons
document.getElementById('nav-home').addEventListener('click', () => highlightSection('home-id'));
document.getElementById('nav-project').addEventListener('click', () => highlightSection('project-id'));
document.getElementById('nav-skill').addEventListener('click', () => highlightSection('skill-id'));
document.getElementById('nav-linkedin').addEventListener('click', () => highlightSection('Linkedin-id'));
document.getElementById('nav-github').addEventListener('click', () => highlightSection('Github-id'));
document.getElementById('nav-contect').addEventListener('click', () => highlightSection('Contect-id'));

function highlightSection(id) {
  // Remove active class from all sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });

  // Add active to the clicked one
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');

    // Optionally scroll to that section
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}
