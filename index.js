// index.js

import ContactForm from "./Contact.js";

// var number = 5;
// let name = "Shawn";

// number = 12;
// name = "Pluralsight ";

// // Writing to the document
// document.writeln(name + number);
// alert("Hello World");

const formInfo = document.getElementById("formInfo");

let hasJob = false;
if (hasJob) {
  // I have a job
  showMessage("Thanks for visiting, I'm currently employed.");
} else {
  // I need a job
  showMessage("Please look around, I'm currently looking for a position.");
} 

let today = new Date();
let dayOfWeek = today.getDay();
if (dayOfWeek === 0 || dayOfWeek === 6) {
  showMessage("Since it is the weekend, please be patient with my returning your email.");
}

function showMessage(message) {
  formInfo.innerHTML = "<p>" + message + "</p>";
}

function clearMessage() {
  formInfo.innerHTML = "";
}

const first = "first";

const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const contact = new ContactForm(contactForm);
  contact.send();
});

const experiences = document.getElementsByClassName("experience");
for (let x = 0; x < experiences.length; x++) {
  const item = experiences[x];
  item.addEventListener("mouseenter", function (event) {
    event.target.style = "background-color: #999999;";
  });
  item.addEventListener("mouseleave", function (event) {
    event.target.style = "";
  });
}

gsap.set('.main', {position:'fixed', background:'#fff', width:'100%', maxWidth:'1200px', height:'100%', top:0, left:'50%', x:'-50%'})
gsap.set('.scrollDist', {width:'100%', height:'200%'})
gsap.timeline({scrollTrigger:{trigger:'.scrollDist', start:'top top', end:'bottom bottom', scrub:1}})
    .fromTo('.sky', {y:0},{y:-200}, 0)
    .fromTo('.cloud1', {y:100},{y:-800}, 0)
    .fromTo('.cloud2', {y:-150},{y:-500}, 0)
    .fromTo('.cloud3', {y:-50},{y:-650}, 0)
    .fromTo('.mountBg', {y:-10},{y:-100}, 0)
    .fromTo('.mountMg', {y:-30},{y:-250}, 0)
    .fromTo('.mountFg', {y:-50},{y:-600}, 0)

$('#arrowBtn').on('mouseenter', (e)=>{ gsap.to('.arrow', {y:10, duration:0.8, ease:'back.inOut(3)', overwrite:'auto'}); })
$('#arrowBtn').on('mouseleave', (e)=>{ gsap.to('.arrow', {y:0, duration:0.5, ease:'power3.out', overwrite:'auto'}); })
$('#arrowBtn').on('click', (e)=>{ gsap.to(window, {scrollTo:innerHeight, duration:1.5, ease:'power1.inOut'}); }) // scrollTo requires the ScrollTo plugin (not to be confused w/ ScrollTrigger)
