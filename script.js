const player = document.querySelectorAll('.audio');
const play = document.querySelectorAll('.play');
const duration = document.querySelectorAll('.display');
const background = document.querySelectorAll('.box');

function fmtMSS(s) { return (s - (s %= 60)) / 60 + (9 < s ? ':' : ':0') + s };


play.forEach(function(el) {
    el.addEventListener('click', function(e) {
        el.parentElement.classList.toggle('ply');
        if (el.parentElement.classList.contains('ply')) {
            player.forEach(function(aud) {
                aud.pause();
                aud.parentElement.classList.remove('ply');
                aud.nextElementSibling.classList.remove('fa-pause');
                aud.nextElementSibling.classList.add('fa-play');
            });
            el.parentElement.classList.toggle('ply');
            e.target.previousElementSibling.currentTime = 0;
            e.target.previousElementSibling.play();
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
        } else {
            e.target.previousElementSibling.pause();
            e.target.classList.remove('fa-pause');
            e.target.classList.add('fa-play');
        }
        setInterval(function() {
            if (e.target.previousElementSibling.currentTime == e.target.previousElementSibling.duration) {
                e.target.classList.remove('fa-pause');
                e.target.classList.add('fa-play');
            }
        }, 1000);
    });
});
var backgroundAsset = ['lemon.gif', 'goodbye.gif', 'ripped.gif', 'death.gif', 'moon.gif', 'haha.gif'];
for (let i = 0; i < background.length; i++) {
    background[i].style.background = "url(media/" + backgroundAsset[i] + ")";
    background[i].style.backgroundSize = "cover";
}