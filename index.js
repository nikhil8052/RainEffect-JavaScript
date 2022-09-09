let canvasX = 800;
let canvasY = 600;
// let rainThickness = 2;
// let rainHeight = 35;
let colorName="red";

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

class Drop {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    show() {
        let canvas = document.getElementById("rain_canvas")
        var ctx = canvas.getContext('2d');
        let rainHeight=getRandomArbitrary(15,45)
        let rainThickness=getRandomArbitrary(2,3)
        ctx.fillRect(this.x, this.y, rainThickness, rainHeight);
        ctx.fillStyle = colorName;
        var move = () => {
            ctx.clearRect(this.x, this.y, rainThickness, rainHeight);
            this.y += Math.floor(Math.random() * canvasY)
            if (this.y > canvasY) {
                this.x= Math.floor(Math.random() * canvasX);
                this.y = Math.floor(Math.random() * canvasY);
            }
            ctx.fillRect(this.x, this.y, rainThickness, rainHeight);
        }
        setInterval(move, 1);
    }

}


setInterval(() => {
    var x = Math.floor(Math.random() * canvasX)
    var y = -Math.floor(Math.random() * canvasY)
    let d = new Drop(x, y);
    let c1=getRandomArbitrary(0,255)
    let c2=getRandomArbitrary(0,255)
    let c3=getRandomArbitrary(0,255)
    colorName=`rgb(${c1},${c2},${c3})`
    d.show();
}, 1);