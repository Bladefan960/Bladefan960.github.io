namespace game092{

    class Game{
        public board: HTMLCanvasElement;
        public ctx: CanvasRenderingContext2D;
        public player:RectPlayer;
        private gameloop: any;
        private isStarted:boolean;
        private keyCode: number;
        constructor(){
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext('2d');
            this.update = this.update.bind(this);
            this.start = this.start.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
            this.stop = this.stop.bind(this);
            window.addEventListener('keydown',this.handleKeyDown);
            document.querySelector("#btnStart").addEventListener('click',this.start);
            document.querySelector("#btnStop").addEventListener('click' ,this.stop);
        }
        public handleKeyDown(ev: KeyboardEvent){
            this.keyCode = ev.keyCode;
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
            this.player.update(this.keyCode);
            this.player.draw(this.ctx);

        }

    }
    class RectPlayer{
         constructor(public x:number, public y:number,public w:number,public h:number,public color:string,public dx:number,public dy:number){
             this.dx = 0;
             this.dy = 0;
         }
         public draw(ctx:CanvasRenderingContext2D){
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y,this.w,this.h);
         }
         public update(keyCode:number){
             if (keyCode == 37){
                if (this.x < 0){
                    this.dx = 1;
                    this.dy = 0;
                    
                }
                else{
                    this.dx = -1;
                    this.dy = 0;
                }
             }
             else if (keyCode == 38){
                this.dx = 0;
                this.dy = -1;
             }
             else if (keyCode == 39){
                if (this.x > 990){
                    this.dx = -1;
                    this.dy = 0;
                    
                }
                else{
                    this.dx = 1;
                    this.dy = 0;
                }
                
             }
             else if (keyCode == 40){
                 this.dx = 0;
                 this.dy = 1;
             }
            
            this.x += this.dx;
            if (this.y < 0 || this.y > 900){
               this.dy *=-1;
               this.dx *= 1;
            }
             this.x += this.dx;
             this.y += this.dy;
         }
         
    }
    
    var game = new Game();
}