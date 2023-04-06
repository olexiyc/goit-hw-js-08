import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const Key = "videoplayer-current-time";

const frame = document.querySelector('iframe');
const player = new Player(frame);
const onPress = function (data) {
    localStorage.setItem(Key, data.seconds);
    
};
player.on('timeupdate', throttle(onPress, 1000));

    player.setCurrentTime(JSON.parse(localStorage.getItem(Key)) || 0);
    