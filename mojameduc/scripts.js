const app = document.getElementById('root3');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

let full = [
    {
        "name": "ADA",
        "description": " a temp description of ADA",
        "link": "https://cardano.org/"
    },
    {
        "name": "BNB",
        "description": " a temp description of BNB",
        "link": "https://www.binance.com/en"
    },
    {
        "name": "BTC",
        "description": " a temp description of BTC",
        "link": "https://bitcoin.org/en/"
    },
    {
        "name": "ETH",
        "description": " a temp description of ETH",
        "link": "https://ethereum.org/en/"
    },
    {
        "name": "LINK",
        "description": " a temp description of LINK",
        "link": "https://chain.link/"
    },
    {
        "name": "LTC",
        "description": " a temp description of LTC",
        "link": "https://litecoin.com/en/"
    },
    {
        "name": "USDT",
        "description": " a temp description of USDT",
        "link": "https://tether.to/en/"
    },
    {
        "name": "XRP",
        "description": " a temp description of XRP",
        "link": "https://ripple.com/xrp/"
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
      full[i].link = full[i].link.substring(0, 30);
      l1.textContent = `${full[i].link}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p1);
      card.appendChild(l1);
      card.addEventListener("click", myFunc);

      function myFunc(){
        window.open(l1.textContent);
    }
    };
