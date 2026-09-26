const ROWS = 32
const COLS = 64
const Scale = 15


class Monitor {
    constructor(canvas) {
        this.canvas = canvas
        this.cols = COLS
        this.rows = ROWS
        this.Scale = Scale

        this.display = new Array(this.rows * this.cols)

        this.canvas.width = this.cols * this.Scale
        this.canvas.height = this.rows * this.Scale

        this.canvasCtx = this.canvas.getContext("2d");
    }

    setPixel(x, y){
        if (x > this.cols) {
            x -= this.cols;
        }else if (x < 0){
            x += this.cols;
        }

        if(y >  this.rows){
            y -= this.rows;
        }else if (y < 0){
            y += this.rows;
        }


        this.display[x + (y * this.cols)] ^= 1;
        return this.display[x + (y *this.cols)] != 1;
    }

    paint(){
        this.canvasCtx.fillStyle = '#000'
        this.canvasCtx.fillRect(0, 0, this.canvas.width, this.canvas.height)


        for (let i = 0; i < this.display.length; i++) {
            let x = (i % this.cols) * this.Scale;
            let y = Math.floor(i / this.cols) * this.Scale;

            if (this.display[i] == 1) {
                this.canvasCtx.fillStyle = '#FFF';
                this.canvasCtx.fillRect(x, y, this.Scale, this.Scale)
            }
        }
    }

    testRender() {
        this.setPixel(0, 0);
        this.setPixel(5, 2);
        this.paint();
    }

    clear(){
        this.display = new Array(this.cols * this.rows)
    }
}

export default Monitor;