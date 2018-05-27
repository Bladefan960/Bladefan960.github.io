namespace game091{

    class Game{
        public board: HTMLCanvasElement;
        public ctx: CanvasRenderingContext2D;
        public player:RectPlayer;
        private gameloop: any;
        private isStarted:boolean;

        constructor(){
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext('2d');
            this.update = this.update.bind(this);
            this.start = this.start.bind(this);
            this.stop = this.stop.bind(this);
            document.querySelector("#btnStart").addEventListener('click',this.start);
            document.querySelector("#btnStop").addEventListener('click' ,this.stop);
        }
        public start(){
            if (this.isStarted){
                return;
            }
            this.isStarted = true;
            this.player = new RectPlayer(10,40,100,100,"blue",10,10);
            this.gameloop = window.setInterval(this.update,20);
        }
        public stop(){
            if (this.isStarted == false){
                return;
            }
            this.isStarted = false;
            window.clearInterval(this.gameloop);
           
        }
        public update(){
            this.ctx.clearRect(0,0,this.board.width,this.board.height);
            this.player.update();
            this.player.draw(this.ctx);

        }

    }
    class RectPlayer{
         constructor(public x:number, public y:number,public w:number,public h:number,public color:string,public dx:number,public dy:number){
         }
         public draw(ctx:CanvasRenderingContext2D){
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y,this.w,this.h);
         }
         public update(){
             if (this.x < 0 || this.x > 900){
                 this.dx *=-1;
             }
             this.x += this.dx;
             if (this.y < 0 || this.y > 900){
                this.dy *=-1;
            }
            this.y += this.dy;

         }
    }
    
    var game = new Game();
}