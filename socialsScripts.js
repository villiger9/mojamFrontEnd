const app = document.getElementById('root3');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

let full = [
    {
        "name": "Github",
        "description": "Check out our github",
        "link": "https://github.com/"
    },
    {
        "name": "Reddit",
        "description": "Check out our Reddit",
        "link": "https://www.reddit.com/"
    },
    {
        "name": "Instagram",
        "description": "Check out our Instagram",
        "link": "https://www.instagram.com/"
    },
    {
        "name": "Twitter",
        "description": "Check out our Twitter",
        "link": "https://twitter.com/explore"
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
        window.open(l1.textContent)
    }
    };
