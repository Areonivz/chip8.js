const MEMORY_SIZE = 4096;
const NUM_REGSITERS = 16;

class chip8 {
    constructor(monitor) {
        this.memory = Uint8Array(MEMORY_SIZE);

        this.v = Uint8Array(NUM_REGSITERS)

        this.stack = [];

        this.index = 0;

        this.sp = 0;

        this.pc = 0x200;

        this.delayTimer = 0;
        this.soundTimer = 0;

        //keyboard goes here


        this.paused = false;
        this.speed = 10;

        this.monitor = monitor;
    }
}

export default chip8