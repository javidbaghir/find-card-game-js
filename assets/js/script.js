let playerName = document.getElementById("player");
let cardContent = document.getElementById("card-content");
let result = document.getElementById('result')

let selectIndex = ''
let shuffleItems = []
let selectedPlayer = null; 

const items = [
  {
    name: "Qurban Qurbanov",
    photo:
      "https://qarabagh.com/uploads/cache/catalog/Gurban_Gurbanov-481x620.jpg",
  },

  {
    name: "Fatih Terim",
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk8N6rIs4t47puaJrK_6VhXdOwV-MSUNS_6w&s",
  },

  {
    name: "Felipe Melo",
    photo:
      "https://www.gsgazete.com/images/haberler/2019/11/galatasaray_dan_bomba_hamle_felipe_melo_h35211_e2f68.jpg",
  },

  {
    name: "Snejder",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Wesley_Sneijder_%2714-15.JPG/1200px-Wesley_Sneijder_%2714-15.JPG",
  },

  {
    name: "Drogba",
    photo:
      "https://i0.wp.com/thesefootballtimes.co/wp-content/uploads/2019/04/drogba.jpg?fit=1976%2C1472&ssl=1",
  },

  {
    name: "Burak Yilmaz",
    photo:
      "https://cdnuploads.aa.com.tr/uploads/Contents/2013/07/29/thumbs_b_c_dee4bffa10125a2c9e56fa348bbd3343.jpg",
  },
];

const shuffle = (array) => { 
    for (let i = array.length - 1; i > 0; i--) { 
      const j = Math.floor(Math.random() * (i + 1)); 
      [array[i], array[j]] = [array[j], array[i]]; 
    } 
    return array; 
  }; 

function randomIndex () {
    return Math.floor(Math.random() * 6)
}

function selectPlayer () {
    return items[randomIndex()]
}

function cardTemplate (index) {
    return `<div data-index="${index}" class="cursor-pointer h-[200px] rounded-[10px] overflow-hidden">
          <img
            src="/assets/img/card.png" class="size-[100%] object-cover" alt=""/>
        </div>`
}

function createUI () {
    cardContent.innerHTML = ""
    selectIndex = randomIndex()
    shuffleItems = shuffle(items)
    selectedPlayer = shuffleItems[selectIndex];
    playerName.textContent = selectedPlayer.name

    for(let index in shuffleItems) {
        cardContent.innerHTML += cardTemplate(index)   
    }
}

cardContent.addEventListener('click', function(e) {
    const obj = e.target.closest('[data-index]') ? e.target.closest('[data-index]') : e.target;

    if(obj.dataset.index) {
        const index = obj.dataset.index
        const photo = obj.querySelector('img');
        
        if(parseInt(index) === selectIndex) {
            result.textContent = "Duz tapdiniz"
            result.style.background = "#008000"
            photo.src = selectedPlayer.photo
        } else {
            result.textContent = "Yanlis secim, yeniden cehd edin"
            result.style.background = "#ff0000"
        }
    }
})

createUI()