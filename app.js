const music = new Audio('1.mp3');
//music.play();//

const songs = [
    {
        Id: 1,
        songName: `On My Way <br> 
        <div class="subtitle">Alan Walker</div>`,
        poster : "1.jpg"
    }, 
    {
        Id: 2,
        songName: `Alan Walker-Fade <br> 
        <div class="subtitle">Alan Walker</div>`,
        poster : "2.jpg"
    }, 
    {
        Id: 3,
        songName: `Cartoon - On & On <br> 
        <div class="subtitle">Daniel Levi/div>`,
        poster : "3.jpg"
    }, 
    {
        Id: 4,
        songName: `Warriiyo - Mortals <br> 
        <div class="subtitle">Mortal</div>`,
        poster : "4.jpg"
    }, 
    {
        Id: 5,
        songName: `Ertugal Gazi <br> 
        <div class="subtitle">Ertugal</div>`,
        poster : "5.jpg"
    }, 
    {
        Id: 6,
        songName: `Electronic music <br> 
        <div class="subtitle">Electro</div>`,
        poster : "6.jpg"
    }, 
    {
        Id: 7,
        songName: `Agar Tum Sath ho <br> 
        <div class="subtitle">Tamashaa</div>`,
        poster : "7.jpg"
    }, 
    {
        Id: 8,
        songName: `Suna hai <br> 
        <div class="subtitle">Neha kakkar</div>`,
        poster : "8.jpg"
    }, 
    {
        Id: 9,
        songName: `Dilbar <br> 
        <div class="subtitle">Satyameva Jayate</div>`,
        poster : "9.jpg"
    }, 
    {
        Id: 10,
        songName: `Duniya <br> 
        <div class="subtitle">Luka Chupi</div>`,
        poster : "10.jpg"
    },
    {
        Id: 11,
        songName: `Lagdi Lahore Di <br> 
        <div class="subtitle">Street Dancer</div>`,
        poster : "11.jpg"
    }, 
    {
        Id: 12,
        songName: `Putt Jatt Da <br> 
        <div class="subtitle">Putt Jatt</div>`,
        poster : "12.jpg"
    }, 
    {
        Id: 13,
        songName: `Barishe <br> 
        <div class="subtitle">Atif Aslam</div>`,
        poster : "13.jpg"
    }, 
    {
        Id: 14,
        songName: `Vaste <br> 
        <div class="subtitle">Dhavni Bhanushali</div>`,
        poster : "14.jpg"
    }, 
    {
        Id: 15,
        songName: `Lut gaye <br> 
        <div class="subtitle">Jubin Nautiyal </div>`,
        poster : "15.jpg"
    }, 
    {
        Id: 16,
        songName: `Tu meri Zindagi hai tu <br> 
        <div class="subtitle">Jubin Nautiyal</div>`,
        poster : "16.jpg"
    }, 
    {
        Id: 17,
        songName: `Batao Yaad Hai <br> 
        <div class="subtitle">Rahat fateh Ali khan</div>`,
        poster : "17.jpg"
    }, 
    {
        Id: 18,
        songName: `Mere Dhol  <br> 
        <div class="subtitle">Ali sethi</div>`,
        poster : "18.jpg"
    }, 
    {
        Id: 19,
        songName: `eh Munde pagal ne saare <br> 
        <div class="subtitle">ap dhillon</div>`,
        poster : "19.jpg"
    }, 
    {
        Id: 20,
        songName: `Danny 82k <br> 
        <div class="subtitle">Gurinder gill</div>`,
        poster : "20.jpg"
    } 
]
 

Array.from(document.getElementsByClassName('song-item')).forEach((e, i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
     
});


 //search data start//
  let  search_results = document.getElementsByClassName('search_results')[0];
   
  songs.forEach(element => {
    const{id, songName , poster} = element;
    let card = document.createElement('a')
    card.classList.add('card');
    card.href = "#" + id;

    card.innerHTML = `
    <img src="${poster}" alt="">
                         <div class="content">
                         ${songName}

                         </div>
    `;
    search_results.appendChild(card);
  });

  let input = document.getElementsByTagName('input')[0];
  
  input.addEventListener('keyup' , () =>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a');

    for (let index = 0; index < items.length; index++){
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if(text_value.toUpperCase().indexOf(input_value) > -1){
           items[index].style.display = "flex";


        }else {
            items[index].style.display = "none"; 
        }
        if(input.value == 0){
            search_results.style.display = "none"
        }else{
            search_results.style.display = ""
        }
    }
  })
  
  //search data end//

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
 masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
         music.play();
         wave.classList.add('active1');
         masterPlay.classList.remove('bi-pause-fill');
         masterPlay.classList.add('bi-play-fill');
    }else{
      music.pause();
      wave.classList.remove('active1');
      masterPlay.classList.add('bi-pause-fill');
      masterPlay.classList.remove('bi-play-fill');
    }
});


const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) =>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    });
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('song-item')).forEach((el) =>{
     el.style.background = 'rgb(105,105,105, .0)';
    });
}







let index = 0;
let poster = document.getElementById('poster');
let title = document.getElementById('title');

Array.from(document.getElementsByClassName('playlistPlay')).forEach((e)=>{
   e.addEventListener('click', (el)=>{
    index = el.target.id;
     music.src = `${index}.mp3`;
     poster.src = `${index}.jpg`;
     music.play();
     masterPlay.classList.remove('bi-play-fill');
     masterPlay.classList.add('bi-pause-fill');
     download_music.href = `${index}.mp3`;

      let songTitles = songs.filter((els) => {
        return els.id == index;
      });

       songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('song-item'))[index-1].style.background =  "rgb(105,105,105, .1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
   });

})


let currentStart = document.getElementById('currentstart');
let currentEnd = document.getElementById('currentend');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
      if(sec1 < 10){
          sec1 = `0${sec1}`;
      }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`

      let progressBar = parseInt((music_curr / music_dur) * 100);
      seek.value = progressBar;
      let seekbar = seek.value;
      bar2.style.width =`${seekbar}%`;
      dot.style.left = `${seekbar}%`;

});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});


let vol_icon = document.getElementById('vol-icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol-bar');
let vol_dot = document.getElementById('vol-dot');


vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');

    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');


     }
     if(vol.value < 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');


     }

     let vol_a = vol.value;
     vol_bar.style.width = `${vol_a}%`;
     vol_dot.style.left = `${vol_a}%`;
     music.volume = vol_a / 100;
});


let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click', ()=>{
    index -= 1;
    if(index < 1){
      index = Array.from(document.getElementsByClassName('song-item')).length;
    }
    music.src = `${index}.mp3`;
     poster.src = `${index}.jpg`;
     music.play();
     masterPlay.classList.remove('bi-pause-fill');
     masterPlay.classList.add('bi-play-fill');

      let songTitles = songs.filter((els) => {
        return els.id == index;
      });

       songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        
       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('song-item'))[index-1].style.background =  "rgb(105,105,105, .1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
})

 next.addEventListener('click', ()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName('song-item')).length){
       index = 1
    }
    music.src = `${index}.mp3`;
     poster.src = `${index}.jpg`;
     music.play();
     masterPlay.classList.remove('bi-pause-fill');
     masterPlay.classList.add('bi-play-fill');

      let songTitles = songs.filter((els) => {
        return els.id == index;
      });

       songTitles.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName
       });

       makeAllBackground();
       Array.from(document.getElementsByClassName('song-item'))[index-1].style.background =  "rgb(105,105,105, .1)";
       makeAllplays();
       el.target.classList.remove('bi-play-circle-fill');
       el.target.classList.add('bi-pause-circle-fill');
       wave.classList.add('active1');
 })



























let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop-song')[0];

pop_song_right.addEventListener('click' ,()=> {
    pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener('click' ,()=> {
    pop_song.scrollLeft -= 330;
});

let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let item = document.getElementsByClassName('item')[0];

pop_art_right.addEventListener('click' ,()=> {
    item.scrollLeft += 330;
});
pop_art_left.addEventListener('click' ,()=> {
    item.scrollLeft -= 330;
});



let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch(a){
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';

        break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';


            break;
            case "random":
                shuffle.classList.remove('bi-arrow-repeat');
                shuffle.classList.add('bi-music-note-beamed');
                shuffle.classList.remove('bi-shuffle');
                shuffle.innerHTML = 'next';
    
    
                break;

    }
});




const next_music  = () => {
    if(index == songs.length){
        index = 1
   } else{
     index++;
   }
    
    music.src = `${index}.mp3`;
    poster.src = `${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `${index}.mp3`;

     let songTitles = songs.filter((els) => {
       return els.id == index;
     });

      songTitles.forEach(elss =>{
       let {songName} = elss;
       title.innerHTML = songName;
       download_music.setAttribute('download', songName);
      });

      makeAllBackground();
      Array.from(document.getElementsByClassName('song-item'))[index-1].style.background =  "rgb(105,105,105, .1)";
      makeAllplays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');

}

const repeat_music  = () => {
  index;
    
    music.src = `${index}.mp3`;
    poster.src = `${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `${index}.mp3`;

     let songTitles = songs.filter((els) => {
       return els.id == index;
     });

      songTitles.forEach(elss =>{
       let {songName} = elss;
       title.innerHTML = songName;
       download_music.setAttribute('download', songName);
      });

      makeAllBackground();
      Array.from(document.getElementsByClassName('song-item'))[index-1].style.background =  "rgb(105,105,105, .1)";
      makeAllplays();
      el.target.classList.remove('bi-play-circle-fill');
      el.target.classList.add('bi-pause-circle-fill');
      wave.classList.add('active1');

}

const random_music  = () => {
      if(index == songs.length){
        index = 1
      } else{
        index = Math.floor((Math.random() * songs.length) + 1);
      }
      
      music.src = `${index}.mp3`;
      poster.src = `${index}.jpg`;
      music.play();
      masterPlay.classList.remove('bi-play-fill');
      masterPlay.classList.add('bi-pause-fill');
      download_music.href = `${index}.mp3`;
  
       let songTitles = songs.filter((els) => {
         return els.id == index;
       });
  
        songTitles.forEach(elss =>{
         let {songName} = elss;
         title.innerHTML = songName;
         download_music.setAttribute('download', songName);
        });
  
        makeAllBackground();
        Array.from(document.getElementsByClassName('song-item'))[index-1].style.background =  "rgb(105,105,105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
  
  }

  
music.addEventListener('ended', ()=>{
   let b = shuffle.innerHTML;

   switch (b) {
    case 'repeat':
        repeat_music();
        break;
   
    case 'next':
        next_music();
        break;

        case 'random':
            random_music();
            break;
   }
     
});






