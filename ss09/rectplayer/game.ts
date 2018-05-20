namespace game091{
    class Game{
        public board: HTMLCanvasElement;
        public ctx: CanvasRenderingContext2D;
        public player:RectPlayer;
        constructor(){
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext('2d');
        }
        public start(){
            this.player = new RectPlayer(10,10,10,10,"blue",1,1);
            window.setInterval(()=> {this.update();},20);
        }
        public update(){
            this.ctx.clearRect(0,0,1000,1000);
            this.player.update();
            this.player.draw(this.ctx);

        }

    }
    class RectPlayer{
         constructor(public x:number, public y:number,public w:number,public h:number,public color:string,public dx:number,public dy:number){
         }
         public draw(ctx:CanvasRenderingContext2D){
            ctx.fillRect(10,10,10,10);
         }
         public update(){
             if (this.x < 0 || this.x > 990){
                 this.dx *=-1;
             }
             this.x += this.dx;
             if (this.y < 0 || this.y > 990){
                this.dy *=-1;
            }
            this.y += this.dy;

         }
    }
    
    var game = new Game();
    game.start();
}