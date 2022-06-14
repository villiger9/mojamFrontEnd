const app = document.getElementById('root3');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

let full = [
    {
        "name": "Profile",
        "description": "Check your profile here",
        "link": "/profile.html"
    },
    {
        "name": "Settings",
        "description": "Customize your app settings",
        "link": "/settings.html"
    },
    {
        "name": "Socials",
        "description": "Connect with MOJAMs Socials",
        "link": "/socials.html"
    },
    {
        "name": "About",
        "description": "Learn more about MOJAM",
        "link": "/about.html"
    }
]

    for(var i=0; i< full.length; i++) {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = full[i].name;

      const p1 = document.createElement('p1');
      full[i].description = full[i].description.substring(0, 300);
      p1.textContent = `${full[i].description}...`;

      const l1 = document.createElement('l1');
      l1.textContent = `${full[i].link}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p1);
      card.addEventListener("click", myFunc);

      function myFunc(){
        window.open(l1.textContent,"_self")
    }
    };
