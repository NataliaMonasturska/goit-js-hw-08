import Player from '@vimeo/player';
import Thrrottle from "lodash.throttle";



const iframe = document.querySelector('iframe');
let i = 0;



const player = new Player(iframe);
player.on('timeupdate', Thrrottle(setCurrentTimeonPlayer,1000) );
player.setCurrentTime(JSON.parse((localStorage.getItem("videoplayer-current-time"))));



    function setCurrentTimeonPlayer(data) {
         i = data.seconds;
        localStorage.setItem("videoplayer-current-time", i);
     
   
    }
