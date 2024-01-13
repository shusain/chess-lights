class e{constructor(e,t,i,r="white"){this.color=r,this.currentTile=null,e[t][i].currentPiece=this,this.currentTile=e[t][i]}get direction(){return"white"===this.color?1:-1}get myPos(){return{x:this.currentTile.x,y:this.currentTile.y}}}class t extends e{findValidMoves(e){const t=[],{myPos:i}=this;for(let r=i.x+1,s=i.y+1;r<8&&s<8;r++,s++){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}for(let r=i.x-1,s=i.y-1;r>=0&&s>=0;r--,s--){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}for(let r=i.x+1,s=i.y-1;r<8&&s>=0;r++,s--){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}for(let r=i.x-1,s=i.y+1;r>=0&&s<8;r--,s++){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}return t}clone(e){return new t(e,this.currentTile.x,this.currentTile.y)}constructor(...e){super(...e),this.pieceSymbol=()=>"black"==this.color?"♝":"♗"}}class i{get tileBaseColor(){return(this.id+this.y%2)%2==0?"black":"white"}constructor(e,t,i,r=!1,s=0,c=100,o=50){this.isOn=r,this.hue=s,this.saturation=c,this.brightness=o,this.id=e,this.x=t,this.y=i}clone(){return new i(this.id,this.x,this.y)}}class r extends e{findValidMoves(e){const t=[],{myPos:i}=this;return[e.getTileAtPosition(i.x+2,i.y+1),e.getTileAtPosition(i.x+1,i.y+2),e.getTileAtPosition(i.x-2,i.y+1),e.getTileAtPosition(i.x-1,i.y+2),e.getTileAtPosition(i.x-2,i.y-1),e.getTileAtPosition(i.x-1,i.y-2),e.getTileAtPosition(i.x+2,i.y-1),e.getTileAtPosition(i.x+1,i.y-2)].forEach((e=>{e&&(e.currentPiece&&e.currentPiece.color==this.color||t.push(e))})),t}clone(e){return new r(e,this.currentTile.x,this.currentTile.y)}constructor(...e){super(...e),this.pieceSymbol=()=>"black"==this.color?"♞":"♘"}}class s extends e{findValidMoves(e){const t=[],{myPos:i,direction:r}=this;let s=e.getTileAtPosition(i.x+r,i.y+r),c=e.getTileAtPosition(i.x-r,i.y+r);const o=e=>{e&&e.currentPiece&&e.currentPiece.color!=this.color&&t.push({x:e.x,y:e.y})};[s,c].forEach((e=>o(e)));let l=e.getPieceAtPosition(i.x,i.y+r);if(l||t.push({x:i.x,y:i.y+r}),!this.hasMoved&&!l){e.getPieceAtPosition(i.x,i.y+2*r)||t.push({x:i.x,y:i.y+2*r})}return t}clone(e){return new s(e,this.currentTile.x,this.currentTile.y)}constructor(...e){super(...e),this.pieceSymbol=()=>"black"==this.color?"♟︎":"♙"}}class c extends e{findValidMoves(e){const t=[],{myPos:i}=this;for(let r=i.x-1;r>=0;r--){let s=e.getTileAtPosition(r,i.y);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}for(let r=i.x+1;r<8;r++){let s=e.getTileAtPosition(r,i.y);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}for(let r=i.y-1;r>=0;r--){let s=e.getTileAtPosition(i.x,r);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}for(let r=i.y+1;r<8;r++){let s=e.getTileAtPosition(i.x,r);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}return t}clone(e){return new c(e,this.currentTile.x,this.currentTile.y)}constructor(...e){super(...e),this.pieceSymbol=()=>"black"==this.color?"♜":"♖"}}class o extends e{findValidMoves(e){const t=[],{myPos:i}=this;for(let r=i.x-1;r>=0;r--){let s=e.getTileAtPosition(r,i.y);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}for(let r=i.x+1;r<8;r++){let s=e.getTileAtPosition(r,i.y);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}for(let r=i.y-1;r>=0;r--){let s=e.getTileAtPosition(i.x,r);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}for(let r=i.y+1;r<8;r++){let s=e.getTileAtPosition(i.x,r);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}for(let r=i.x+1,s=i.y+1;r<8&&s<8;r++,s++){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}for(let r=i.x-1,s=i.y-1;r>=0&&s>=0;r--,s--){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}for(let r=i.x+1,s=i.y-1;r<8&&s>=0;r++,s--){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}for(let r=i.x-1,s=i.y+1;r>=0&&s<8;r--,s++){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}return t}clone(e){return new o(e,this.currentTile.x,this.currentTile.y)}constructor(...e){super(...e),this.pieceSymbol=()=>"black"==this.color?"♛":"♕"}}class l extends e{findValidMoves(e){const t=[],{myPos:i,direction:r}=this;let s=e.getTileAtPosition(i.x,i.y+r),c=e.getTileAtPosition(i.x,i.y-r),o=e.getTileAtPosition(i.x-1,i.y),l=e.getTileAtPosition(i.x+1,i.y),n=e.getTileAtPosition(i.x+r,i.y+r),h=e.getTileAtPosition(i.x+r,i.y-r),a=e.getTileAtPosition(i.x-r,i.y+r),u=e.getTileAtPosition(i.x-r,i.y-r);const P=e=>{e&&(!e.currentPiece||e.currentPiece&&e.currentPiece.color!=this.color)&&t.push({x:e.x,y:e.y})};return[s,c,o,l,n,h,a,u].forEach((e=>{P(e)})),t}clone(e){return new l(e,this.currentTile.x,this.currentTile.y)}constructor(...e){super(...e),this.pieceSymbol=()=>"black"==this.color?"♚":"♔"}}class n{constructor(e){this.color=e}get king(){return this.pieces.find(((e,t,i)=>e instanceof l))}}class h{get currentPlayersTurn(){return this.currentPlayer.color}get whitePlayer(){return this.players[0]}get blackPlayer(){return this.players[1]}constructor(){this.redraw=!0,this.boardTiles=[],this.flatTileList=[],this.players=[],this.counter=0,this.setupDataModel(),this.setupPiecesOnBoard()}getTileAtPosition(e,t){try{return this.boardTiles[t][e]}catch(e){return null}}getPieceAtPosition(e,t){try{return this.boardTiles[t][e].currentPiece}catch(e){return null}}selectPiece(e,t){return this.selectedPiece=this.getPieceAtPosition(e,t),console.log(this.selectedPiece),this.selectedPiece}movePiece(e,t){return console.log("moving piece",e,t),t.currentPiece=e.currentPiece,t.currentPiece instanceof s&&(t.currentPiece.hasMoved=!0),e.currentPiece=null,t.currentPiece.currentTile=t,!0}findCurrentlyLit(){return this.flatTileList.filter((e=>e.isOn))}turnOffAllTileLights(){this.flatTileList.forEach((e=>e.isOn=!1))}markAllInvalid(){this.flatTileList.forEach((e=>e.isValidPosition=!1))}setupDataModel(){for(let e=0;e<8;e++)this.makeRow(e);for(let e=0;e<this.flatTileList.length;e++){const t=this.flatTileList[e];t.prevLight=undefined,e<this.flatTileList.length-1&&(t.nextLight=this.flatTileList[e+1])}this.flatTileList[0].prevLight=this.flatTileList[this.flatTileList.length-1],this.flatTileList[this.flatTileList.length-1].nextLight=this.flatTileList[0]}setupPiecesOnBoard(){let e=new c(this.boardTiles,0,0),i=new c(this.boardTiles,0,7),h=new r(this.boardTiles,0,1),a=new r(this.boardTiles,0,6),u=new t(this.boardTiles,0,2),P=new t(this.boardTiles,0,5),d=new o(this.boardTiles,0,3),f=new l(this.boardTiles,0,4),y=new c(this.boardTiles,7,0,"black"),T=new c(this.boardTiles,7,7,"black"),g=new r(this.boardTiles,7,1,"black"),b=new r(this.boardTiles,7,6,"black"),k=new t(this.boardTiles,7,2,"black"),p=new t(this.boardTiles,7,5,"black"),x=new o(this.boardTiles,7,3,"black"),w=new l(this.boardTiles,7,4,"black");const A=[],L=[];for(let e=0;e<8;e++){const t=new s(this.boardTiles,1,e);A.push(t);const i=new s(this.boardTiles,6,e,"black");L.push(i)}const m=new n("white");m.pieces=[e,i,h,a,u,P,d,f,...A];const v=new n("black");v.pieces=[y,T,g,b,k,p,x,w,...L],this.players=[m,v],this.currentPlayer=m}changeCurrentPlayer(){this.currentPlayer=this.currentPlayer===this.players[0]?this.players[1]:this.players[0]}makeRow(e){this.boardTiles[e]=[];for(let t=0;t<8;t++){const r=new i(this.counter++,t,e);this.boardTiles[e].push(r),this.flatTileList.push(r)}}checkIfCurrentPlayerIsInCheck(){this.checkIfPlayerIsInCheck(this.currentPlayer)}checkIfPlayerIsInCheck(e){(this.whitePlayer==e?this.blackPlayer:this.whitePlayer).pieces.forEach((t=>{const i=t.findValidMoves(this);e.king&&i.find((t=>t.x==e.king.currentTile.x&&t.y==e.king.currentTile.y))&&alert("king in check")}))}checkIfPlayerIsInCheckmate(e){const t=this.whitePlayer==e?this.blackPlayer:this.whitePlayer;this.clone();t.pieces.forEach((t=>{const i=t.findValidMoves(this);e.king&&i.find((t=>t.x==e.king.currentTile.x&&t.y==e.king.currentTile.y))&&alert("king in check")}))}clone(){let e=new h;return e.players=this.players,e}tileClickHandler(e){if(e.isValidPosition)this.movePiece(this.selectedPiece.currentTile,e),this.turnOffAllTileLights(),this.markAllInvalid(),this.changeCurrentPlayer(),this.checkIfCurrentPlayerIsInCheck();else{this.markAllInvalid();let t=this.selectPiece(e.x,e.y),i=e.isOn;if(this.turnOffAllTileLights(),t&&t.color==this.currentPlayersTurn&&(e.isOn=!i,e.isOn)){t.findValidMoves(this).forEach((e=>{this.getTileAtPosition(e.x,e.y).isValidPosition=!0,this.getTileAtPosition(e.x,e.y).isOn=!0}))}}this.redraw=!0}}class a{updatePattern(e){return e.turnOffAllTileLights(),e.boardTiles[this.currentlyLitLightRow].forEach((e=>e.isOn=!0)),this.currentlyLitLightRow++,this.currentlyLitLightRow>=e.boardTiles.length&&(this.currentlyLitLightRow=0),e}constructor(){this.currentlyLitLightRow=0}}class u{constructor(){this.firstRun=!0}updatePattern(e){this.firstRun&&(e.turnOffAllTileLights(),e.flatTileList[0].isOn=!0,this.firstRun=!1);let t=e.findCurrentlyLit();if(t.length>0)for(let e=t.length-1;0<=e;e--){const i=t[e];i.isOn=!1,i.nextLight.isOn=!0}return e}}class P{updatePattern(e){e.turnOffAllTileLights();let t=e.flatTileList[this.snakeHead];t.isOn=!0;let i=t;for(let e=0;e<this.snakeLength;e++)i=i.nextLight,i.isOn=!0,0==e&&(this.snakeHead=i.id);return e}constructor(){this.snakeHead=0,this.snakeLength=12}}new class{constructor(){window.addEventListener("DOMContentLoaded",(()=>{document.getElementById("mode").addEventListener("change",(e=>{this.changeMode(e)})),setInterval((()=>{this.updateDisplay()}),100),this.chessBoard=new h,this.drawInitialBoard()}))}updateDisplay(){this.mode&&(this.chessBoard=this.mode.updatePattern(this.chessBoard)),this.chessBoard.redraw&&(this.chessBoard.flatTileList.forEach((e=>{let t=document.getElementById(`tile-${e.id}`);const i=e.isOn?"on":"off",r=`chess-tile ${i} tile-color-${e.tileBaseColor}`;t.className!=r&&(t.className=`chess-tile ${i} tile-color-${e.tileBaseColor}`),e.currentPiece&&(t.style.color=e.currentPiece.color);let s="";e.currentPiece&&(s=e.currentPiece.pieceSymbol()),t.innerHTML=`${s}`})),this.chessBoard.redraw=!1)}changeMode(e){switch(e.target.value){case"snake":this.mode=new P;break;case"sequence":this.mode=new u;break;case"row":this.mode=new a;break;case"none":this.mode=null}}drawInitialBoard(){let e=document.getElementById("chess-board");for(;e.firstChild;)e.removeChild(e.firstChild);this.chessBoard.boardTiles.map((e=>{const t=e.map((e=>{let t=document.createElement("div");return t.className=`chess-tile ${e.id%2==0?"even":"odd"}  ${e.isOn?"on":"off"} tile-color-${e.tileBaseColor}`,t.id=`tile-${e.id}`,t.addEventListener("click",(()=>{this.chessBoard.tileClickHandler(e)})),t}));let i=document.createElement("div");return i.className="row",t.forEach((e=>{i.appendChild(e)})),i})).forEach((t=>e.appendChild(t)))}};
//# sourceMappingURL=index.50aa212d.js.map
