namespace game093{
    class MyGame{
        public board: HTMLCanvasElement;
        public ctx: CanvasRenderingContext2D;
        public player:RectPlayer;
        public isStarted: boolean;
        public keyCode: number;
        public gameloop: any;
        
        constructor(){
            this.isStarted = false;
            this.update = this.update.bind(this);
            this.start = this.start.bind(this);
            this.stop = this.stop.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
            

            document.querySelector("#btnStart").addEventListener('click',this.start);
            document.querySelector("#btnStop").addEventListener('click',this.stop);
            window.addEventListener('keydown',this.handleKeyDown);

            this.board = document.querySelector("#board");
            this.ctx = board.getContext("2d");
        }
        public handleKeyDown(ev:KeyboardEvent){
            this.keyCode = ev.keyCode;
        }
        public start(){
            if (this.isStarted){
                return;
            }
            this.isStarted = true;
            this.player = new RectPlayer(10,10,100,100,"red",3,3);
            this.gameloop = window.setInterval(() => {this.update();},20);
        }
        public stop(){
            if (this.isStarted == false){
                return;
            }
            this.isStarted = false;
            window.clearInterval(this.gameloop);
        }
        public update(){
            this.ctx.clearRect(0,0,1000,1000);
            this.player.update(this.keyCode);
            this.player.draw(this.ctx);
        }
        
    }
    class RectPlayer{
        constructor(public x: number,
                    public y:number,
                    public w: number,
                    public h:number,
                    public color: string,
                    public dx: number,
                    public dy: number){

        }
        public update(keyCode:number){
            if (keyCode == 37){
                this.dx = -1;
                this.dy = 0;
             }
             else if (keyCode == 38){
                this.dx = 0;
                this.dy = -1;
             }
             else if (keyCode == 39){
                this.dx = 1;
                this.dy = 0;
             }
             else if (keyCode == 40){
                 this.dx = 0;
                 this.dy = 1;
             }
             else {
                 this.dx = 0;
                 this.dy = 0;
             }
             if (this.x < 0 || this.x > 900){
                this.dx *=-1;
                this.dy *= 1;
             }
            this.x += this.dx;
            if (this.y < 0 || this.y > 900){
               this.dy *=-1;
               this.dx *= 1;
            }
          
             this.y += this.dy;
        }
        public draw(ctx:CanvasRenderingContext2D){
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y, this.w, this.h);
        }


    }
    var mygame = new MyGame;
    mygame.start();
}