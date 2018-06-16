namespace game091{

    class Game{
        public board: HTMLCanvasElement;
        public ctx: CanvasRenderingContext2D;
        public player:RectPlayer;
        private spaceship: SpaceshipComponent;
        private gameloop: any;
        private isStarted:boolean;
        private keyCode: number;
        private Obstacle: ObstacleComponent;
        constructor(){
            this.board = document.querySelector("#board");
            this.ctx = this.board.getContext('2d');
            this.update = this.update.bind(this);
            this.start = this.start.bind(this);
            this.handleKeyDown = this.handleKeyDown.bind(this);
            this.handleKeyUp = this.handleKeyUp.bind(this);
            this.stop = this.stop.bind(this);

            window.addEventListener('keydown',this.handleKeyDown);
            window.addEventListener('keyup',this.handleKeyUp);
        
            document.querySelector("#btnStart").addEventListener('click',this.start);
            document.querySelector("#btnStop").addEventListener('click' ,this.stop);
        }
        public handleKeyDown(ev: KeyboardEvent){
            this.keyCode = ev.keyCode;
        }
        public handleKeyUp(ev: KeyboardEvent){
            this.keyCode = null;
        }
    

        public start(){
            if (this.isStarted){
                return;
            }
            this.isStarted = true;
            this.player = new RectPlayer(10,40,100,100,"blue",10,10);
            this.spaceship = new SpaceshipComponent(10,100,150,150,1,1);
            this.Obstacle = new ObstacleComponent(990,0,50,-5,"red")
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
            this.spaceship.update(this.keyCode);
            this.spaceship.draw(this.ctx);
            this.Obstacle.update();
            this.spaceship.draw(this.ctx);

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
                this.dx = -5;
                this.dy = 0;
             }
             else if (keyCode == 38){
                this.dx = 0;
                this.dy = -5;
             }
             else if (keyCode == 39){
                this.dx = 5;
                this.dy = 0;
             }
             else if (keyCode == 40){
                 this.dx = 0;
                 this.dy = 5;
             }
             else if(keyCode == null){
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
         
    }
    class SpaceshipComponent{
        private loadedImage: HTMLImageElement;
        constructor(public x,public y,public w, public h, public dx, public dy){
            this.dx = 0;
            this.dy = 0;
            var image = new Image(w,h);
            image.src = "Spaceship.png";
            image.addEventListener('load', () => {this.loadedImage = image})
        }
        public draw(ctx:CanvasRenderingContext2D){
            if (this.loadedImage){
                ctx.save();
                ctx.translate(this.x,this.y);
                ctx.rotate(Math.PI / 2);
                ctx.drawImage(this.loadedImage, this.w/ -2,this.h/ -2,this.w,this.h);
                ctx.restore();
            }
        }
        public update(keyCode:number){
            if (keyCode == 65){
               this.dx = -5;
               this.dy = 0;
            }
            else if (keyCode == 87){
               this.dx = 0;
               this.dy = -5;
            }
            else if (keyCode == 68){
               this.dx = 5;
               this.dy = 0;
            }
            else if (keyCode == 83){
                this.dx = 0;
                this.dy = 5;
            }
            else if (keyCode == null){
                this.dx = 0;
                this.dy = 0;
            }
            if (this.x < 0 || this.x > 900){
               this.dx *=-1;
               //this.dy *= 1;
            }
           this.x += this.dx;
           if (this.y < 0 || this.y > 900){
              this.dy *=-1;
              //this.dx *= 1;
           }
           this.x += this.dx;
           this.y += this.dy;
        }
    }
    class ObstacleComponent{
        // x,dx,color
        // barH, gapH
        private barH;
        private gapH;
        constructor(public x, public y, public w, public dx,public color: string){
            this.barH = Math.floor(Math.random() * 1000);
            this.gapH = Math.floor(Math.random() * 1000);
            
        }
        public draw(ctx:CanvasRenderingContext2D){
            ctx.fillStyle = this.color;
            ctx.fillRect(this.x,this.y, this.w,this.barH);
        }
        public update(){
            this.x -= this.dx;
            if (this.x + this.w < 0){
                this.x = 950;
                this.draw();
            }
        }

    }
    var game = new Game();
}