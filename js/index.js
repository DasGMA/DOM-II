const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png",
    "whatever-img-src": "https://i.redd.it/pdu52bbc92201.jpg"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

middleImg.addEventListener("mousewheel", (e) => {
  document.getElementById("middle-img").setAttribute("class", "shaker");
})


let nav = document.querySelectorAll("nav a");
nav[0].innerHTML = siteContent["nav"]["nav-item-1"];
nav[0].addEventListener("mouseover", (e) => {
  e.target.style.fontSize = "25px";
});
nav[0].addEventListener("mouseout", (e) => {
  e.target.style.fontSize = "20px";
});

nav[1].innerHTML = siteContent["nav"]["nav-item-2"];
nav[1].addEventListener("mouseover", (e) => {
  e.target.style.fontSize = "25px";
});
nav[1].addEventListener("mouseout", (e) => {
  e.target.style.fontSize = "20px";
});

nav[2].innerHTML = siteContent["nav"]["nav-item-3"];
nav[2].addEventListener("mouseover", (e) => {
  e.target.style.fontSize = "25px";
});
nav[2].addEventListener("mouseout", (e) => {
  e.target.style.fontSize = "20px";
});

nav[3].innerHTML = siteContent["nav"]["nav-item-4"];
nav[3].addEventListener("mouseover", (e) => {
  e.target.style.fontSize = "25px";
});
nav[3].addEventListener("mouseout", (e) => {
  e.target.style.fontSize = "20px";
});

nav[4].innerHTML = siteContent["nav"]["nav-item-5"];
nav[4].addEventListener("mouseover", (e) => {
  e.target.style.fontSize = "25px";
});
nav[4].addEventListener("mouseout", (e) => {
  e.target.style.fontSize = "20px";
});

nav[5].innerHTML = siteContent["nav"]["nav-item-6"];
nav[5].addEventListener("mouseover", (e) => {
  e.target.style.fontSize = "25px";
});
nav[5].addEventListener("mouseout", (e) => {
  e.target.style.fontSize = "20px";
});




let whateverA = document.createElement('a');
let whateverText = document.createTextNode('Whatever');
whateverA.appendChild(whateverText);
document.querySelector('nav').appendChild(whateverA);

whateverA.addEventListener("mouseover", (e) => {
  e.target.style.fontSize = "25px";
});
whateverA.addEventListener("mouseout", (e) => {
  e.target.style.fontSize = "20px";
});-+

whateverA.addEventListener("click", (e) => {
  document.getElementById("cta-img").setAttribute("src", siteContent["cta"]["whatever-img-src"]);
});

let homeA = document.createElement('a');
let homeText = document.createTextNode('Home');
homeA.appendChild(homeText);
document.querySelector('nav').prepend(homeA);

homeA.addEventListener("mouseover", (e) => {
  e.target.style.fontSize = "25px";
});
homeA.addEventListener("mouseout", (e) => {
  e.target.style.fontSize = "20px";
});

let navigation = document.querySelectorAll('nav a');

navigation.forEach(element => element.style.color = 'green');

let callToAction = document.querySelector(".cta .cta-text h1");
callToAction.innerHTML = "dom<br>is<br>awesome";

callToAction.addEventListener("mouseover", (e) => {
  e.target.innerHTML = "dom<br>is<br>dominating!!!";
});
callToAction.addEventListener("mouseout", (e) => {
  e.target.innerHTML = "dom<br>is<br>awesome";
});

let button = document.querySelector(".cta button");
button.innerHTML = siteContent["cta"]["button"];

button.addEventListener("click", (e) => {
  document.getElementById("cta-img").setAttribute("class", "rotated-image");
  e.target.innerHTML = "STOP SPIN";

  button.addEventListener("dblclick", (e) => {
    document.getElementById("cta-img").setAttribute("class", "cta-img");
    e.target.innerHTML = "Get Started";
  })
  });



let headerContent = document.querySelectorAll(".text-content h4");

headerContent[0].innerHTML = siteContent["main-content"]["features-h4"];
headerContent[1].innerHTML = siteContent["main-content"]["about-h4"];
headerContent[2].innerHTML = siteContent["main-content"]["services-h4"];
headerContent[3].innerHTML = siteContent["main-content"]["product-h4"]
headerContent[4].innerHTML = siteContent["main-content"]["vision-h4"]

let pContent = document.querySelectorAll(".text-content p");

pContent[0].innerHTML = siteContent["main-content"]["features-content"];
pContent[1].innerHTML = siteContent["main-content"]["about-content"];
pContent[2].innerHTML = siteContent["main-content"]["services-content"];
pContent[3].innerHTML = siteContent["main-content"]["product-content"];
pContent[4].innerHTML = siteContent["main-content"]["vision-content"]





let myHeader = document.querySelector(".contact h4");
myHeader.innerHTML = siteContent["contact"]["contact-h4"];

let contact = document.querySelectorAll(".contact p");

contact[0].innerHTML = siteContent["contact"]["address"];
contact[1].innerHTML = siteContent["contact"]["phone"];
contact[2].innerHTML = siteContent["contact"]["email"];

let footer = document.querySelector("footer");
footer.innerHTML = siteContent["footer"]["copyright"];







