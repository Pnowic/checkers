import c3po from '../icons/c3po.svg';
import chewbacca from '../icons/chewbacca.svg';
import darth from '../icons/darth-maul.svg';
import storm from '../icons/stormtrooper.svg';

document.addEventListener("DOMContentLoaded", function(){
    function drawTopPlayer() {
        var ctx = document.getElementById('canvas').getContext('2d');
        var img = new Image();
        img.src = c3po;
        img.onload = function() {
            for (let i=0; i<8; i++){ //rows

                for (let j=0; j<3; j++){ //columns

                    if (i%2 === j%2){
                        ctx.drawImage(img, (100*i) + 15, (100*j) + 15, 70, 70);
                    }

                }
            }
        };
    }

    drawTopPlayer();
    module.export = drawTopPlayer;

    function drawBottomPlayer() {
        var ctx = document.getElementById('canvas').getContext('2d');
        var img2 = new Image();
        img2.src = storm;
        img2.onload = function() {
            for (let i=0; i<8; i++){ //rows

                for (let j=5; j<8; j++){ //columns

                    if (i%2 === j%2){
                        ctx.drawImage(img2, (100*i) + 15, (100*j) + 15, 70, 70);
                    }

                }
            }
        };
    }

    drawBottomPlayer();
    module.export = drawBottomPlayer;

});