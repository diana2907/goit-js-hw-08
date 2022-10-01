import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function setTime(data) {
  console.log(data);
  localStorage.setItem('videoplayer-current-time', data.seconds);
}

player.on('timeupdate', throttle(setTime, 1000));

function onPlay(data) {
  let savedTime = localStorage.getItem('videoplayer-current-time');
  if (data.seconds !== savedTime) {
    player.setCurrentTime(savedTime);
  }
}

player.on('play', onPlay);
