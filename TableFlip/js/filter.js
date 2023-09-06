var arrGame =[
    {
      title: '7 Wonders Duel',
      image: 'img/7_wonders_duel.jpg',
      tags: ['Best for 2', 'Historical', 'Cards'],
      link: '7_Wonder_Duel.html'
    },
    {
      title: 'Agricola',
      image: 'img/agricola.jpg',
      tags: ['Building'],
      link: 'Agricola.html'
    },
    {
      title: 'Azul',
      image: 'img/azul.png',
      tags: ['Family', 'Tile placement'],
      link: 'Azul.html'
    },
    {
      title: 'Bandido',
      image: 'img/bandido.png',
      tags: ['Cards', 'Cooperative', 'Tile placement'],
      link: 'Bandido.html'
    },
    {
      title: 'Bubblee Pop',
      image: 'img/bubblee_pop.png',
      tags: ['Best for 2', 'Family', 'Fantasy'],
      link: 'Bubblee_Pop.html'
    },
    {
      title: 'Carcassonne',
      image: 'img/carcassonne.jpg',
      tags: ['Tile placement', 'Historical']
    },
    {
      title: 'Castles of Burgundy',
      image: 'img/castles_of_burgundy.jpg',
      tags: ['Historical', 'Tile placement', 'Dice']
    },
    {
      title: 'Catan',
      image: 'img/catan.jpg',
      tags: ['Exploration', 'Hand management', 'Conquest']
    },
    {
      title: 'Chromino',
      image: 'img/chromino.png',
      tags: ['Tile placement', 'Family']
    },
    {
      title: 'Coup',
      image: 'img/coup.png',
      tags: ['Bluffing', 'Roles', 'Cards', 'Party games']
    },
    {
      title: 'Its A Wonderful World',
      image: 'img/its_a_wonderful_world.jpg',
      tags: ['Cards']
    },
    {
      title: 'Lost Ruins of Arnak',
      image: 'img/lost_ruins_of_arnak.jpg',
      tags: ['Deck Building', 'Worker placement', 'Exploration']
    },
    {
      title: 'Love Letter',
      image: 'img/love_letter.png',
      tags: ['Roles', 'Cards', 'Historical']
    },
    {
      title: 'Lucky Number',
      image: 'img/lucky_number.png',
      tags: ['Tile placement']
    },
    {
      title: 'Splendor',
      image: 'img/splendor.jpg',
      tags: ['Cards', 'Best for 2']
    },
    {
      title: 'Martian Dice',
      image: 'img/martian_dice.png',
      tags: ['Dice', 'Science fiction']
    },
    {
      title: 'Oh Hell!',
      image: 'img/oh_hell.png',
      tags: ['Cards']
    },
    {
      title: 'Papayoo',
      image: 'img/papayoo.png',
      tags: ['Cards', 'Party games']
    },
    {
      title: 'Skull',
      image: 'img/skull.png',
      tags: ['Bluffing', 'Party games']
    },
    {
      title: 'Solo',
      image: 'img/solo.png',
      tags: ['Cards', 'Party games', 'Hand management']
    },
    {
      title: 'Space Base',
      image: 'img/space_base.jpg',
      tags: ['Science fiction', 'Best for 2', 'Dice']
    },
    {
      title: 'Ticket to Ride',
      image: 'img/ticket_to_ride.jpg',
      tags: ['Hand management']
    },
    {
      title: 'Wingspan',
      image: 'img/wingspan.jpg',
      tags: ['Cards']
    },
    {
      title: 'Yahtzee',
      image: 'img/yahtzee.png',
      tags: ['Dice']
    }
]

function ShowGame(tagfiler_arr=[]){
    var list1 = document.getElementById("list1");
    list1.innerHTML= '';
    for(i=0; i<arrGame.length; i++){
        title=arrGame[i].title;
        image=arrGame[i].image;
        tags=arrGame[i].tags;
        link=arrGame[i].link;
        if (tagfiler_arr.length>0){
            const found = tagfiler_arr.some(r=> tags.includes(r))
            if (!found) continue;
        }
        list1.innerHTML+=`
            <div class="game">
                <a href='${link}'>
                  <img src="${image}">
                  <h3>${title}</h3>
                </a>
            </div>
        `;
    }
}
ShowGame();

function FilterGame() {
    var arr2 = document.getElementsByClassName("tags");
    var tagfiler_arr=[];
    for (i=0; i<arr2.length; i++){
        if (arr2[i].checked == true) tagfiler_arr.push(arr2[i].value);
    }
    ShowGame(tagfiler_arr);
}
FilterGame();
