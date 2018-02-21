document.addEventListener("DOMContentLoaded", function(){

    let drawBoard = () => {

        var canvas = document.getElementById('canvas');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');


            for (let i=0; i<8; i++){ //rows

                for (let j=0; j<8; j++){ //columns

                    if (i%2 === j%2){ //if modulo result is the same draw black square, else draw white
                        ctx.fillStyle = '#000000';
                        ctx.fillRect(100*i, 100*j, 100, 100); //(position in x(row), position in y(column), width, height)
                    } else {
                        ctx.fillStyle = '#ffffff';
                        ctx.fillRect(100*i, 100*j, 100, 100);
                    }

                }
            }

        }

    };

    drawBoard ();
    module.export = drawBoard;
});


