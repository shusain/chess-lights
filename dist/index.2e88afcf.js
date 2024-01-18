class e{constructor(e,t,i,r="white"){this.color=r,this.currentTile=null,e[t][i].currentPiece=this,this.currentTile=e[t][i]}get direction(){return"white"===this.color?1:-1}get myPos(){return{x:this.currentTile.x,y:this.currentTile.y}}toString(){return`${this.pieceSymbol()}`}}class t extends e{findValidMoves(e){const t=[],{myPos:i}=this;for(let r=i.x+1,s=i.y+1;r<8&&s<8;r++,s++){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}for(let r=i.x-1,s=i.y-1;r>=0&&s>=0;r--,s--){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}for(let r=i.x+1,s=i.y-1;r<8&&s>=0;r++,s--){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}for(let r=i.x-1,s=i.y+1;r>=0&&s<8;r--,s++){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}return t}clone(e){return new t(e,this.currentTile.y,this.currentTile.x,this.color)}constructor(...e){super(...e),this.pieceSymbol=()=>"black"==this.color?"♝":"♗"}}class i{get tileBaseColor(){return(this.id+this.y%2)%2==0?"black":"white"}constructor(e,t,i,r=!1,s=0,c=100,l=50){this.isOn=r,this.hue=s,this.saturation=c,this.brightness=l,this.id=e,this.x=t,this.y=i}clone(){return new i(this.id,this.x,this.y)}toString(){return`${e=this.x,e+1}${function(e){return["a","b","c","d","e","f","g","h"][e]}(this.y)} with Piece ${this.currentPiece}`;var e}}class r extends e{findValidMoves(e){const t=[],{myPos:i}=this;return[e.getTileAtPosition(i.x+2,i.y+1),e.getTileAtPosition(i.x+1,i.y+2),e.getTileAtPosition(i.x-2,i.y+1),e.getTileAtPosition(i.x-1,i.y+2),e.getTileAtPosition(i.x-2,i.y-1),e.getTileAtPosition(i.x-1,i.y-2),e.getTileAtPosition(i.x+2,i.y-1),e.getTileAtPosition(i.x+1,i.y-2)].forEach((e=>{e&&(e.currentPiece&&e.currentPiece.color==this.color||t.push(e))})),t}clone(e){return new r(e,this.currentTile.y,this.currentTile.x,this.color)}constructor(...e){super(...e),this.pieceSymbol=()=>"black"==this.color?"♞":"♘"}}class s extends e{findValidMoves(e){const t=[],{myPos:i,direction:r}=this;let s=e.getTileAtPosition(i.x+r,i.y+r),c=e.getTileAtPosition(i.x-r,i.y+r);const l=e=>{e&&e.currentPiece&&e.currentPiece.color!=this.color&&t.push({x:e.x,y:e.y})};[s,c].forEach((e=>l(e)));let o=e.getPieceAtPosition(i.x,i.y+r);if(o||t.push({x:i.x,y:i.y+r}),!this.hasMoved&&!o){e.getPieceAtPosition(i.x,i.y+2*r)||t.push({x:i.x,y:i.y+2*r})}return t}clone(e){return new s(e,this.currentTile.y,this.currentTile.x,this.color)}constructor(...e){super(...e),this.pieceSymbol=()=>"black"==this.color?"♟︎":"♙"}}class c extends e{findValidMoves(e){const t=[],{myPos:i}=this;for(let r=i.x-1;r>=0;r--){let s=e.getTileAtPosition(r,i.y);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}for(let r=i.x+1;r<8;r++){let s=e.getTileAtPosition(r,i.y);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}for(let r=i.y-1;r>=0;r--){let s=e.getTileAtPosition(i.x,r);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}for(let r=i.y+1;r<8;r++){let s=e.getTileAtPosition(i.x,r);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}return t}clone(e){return new c(e,this.currentTile.y,this.currentTile.x,this.color)}constructor(...e){super(...e),this.pieceSymbol=()=>"black"==this.color?"♜":"♖"}}class l extends e{findValidMoves(e){const t=[],{myPos:i}=this;for(let r=i.x-1;r>=0;r--){let s=e.getTileAtPosition(r,i.y);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}for(let r=i.x+1;r<8;r++){let s=e.getTileAtPosition(r,i.y);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}for(let r=i.y-1;r>=0;r--){let s=e.getTileAtPosition(i.x,r);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}for(let r=i.y+1;r<8;r++){let s=e.getTileAtPosition(i.x,r);if(s.currentPiece&&s.currentPiece.color==this.color)break;if(s.currentPiece&&s.currentPiece.color!=this.color){t.push(s);break}s&&t.push(s)}for(let r=i.x+1,s=i.y+1;r<8&&s<8;r++,s++){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}for(let r=i.x-1,s=i.y-1;r>=0&&s>=0;r--,s--){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}for(let r=i.x+1,s=i.y-1;r<8&&s>=0;r++,s--){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}for(let r=i.x-1,s=i.y+1;r>=0&&s<8;r--,s++){let i=e.getTileAtPosition(r,s);if(i.currentPiece&&i.currentPiece.color==this.color)break;if(i.currentPiece&&i.currentPiece.color!=this.color){t.push(i);break}i&&t.push(i)}return t}clone(e){return new l(e,this.currentTile.y,this.currentTile.x,this.color)}constructor(...e){super(...e),this.pieceSymbol=()=>"black"==this.color?"♛":"♕"}}class o extends e{findValidMoves(e){const t=[],{myPos:i,direction:r}=this;let s=e.getTileAtPosition(i.x,i.y+r),c=e.getTileAtPosition(i.x,i.y-r),l=e.getTileAtPosition(i.x-1,i.y),o=e.getTileAtPosition(i.x+1,i.y),n=e.getTileAtPosition(i.x+r,i.y+r),h=e.getTileAtPosition(i.x+r,i.y-r),a=e.getTileAtPosition(i.x-r,i.y+r),u=e.getTileAtPosition(i.x-r,i.y-r);const P=e=>{e&&(!e.currentPiece||e.currentPiece&&e.currentPiece.color!=this.color)&&t.push({x:e.x,y:e.y})};return[s,c,l,o,n,h,a,u].forEach((e=>{P(e)})),t}clone(e){return new o(e,this.currentTile.y,this.currentTile.x,this.color)}constructor(...e){super(...e),this.pieceSymbol=()=>"black"==this.color?"♚":"♔"}}class n{constructor(e){this.color=e,this.pieces=[]}get king(){return this.pieces.find(((e,t,i)=>e instanceof o))}clone(){return new n(this.color)}toString(){return`${this.color} player, pieces: ${this.pieces}`}}class h{get currentPlayersTurn(){return this.currentPlayer.color}get whitePlayer(){return this.players[0]}get blackPlayer(){return this.players[1]}constructor(e,t=!0){this.targetElement=e,this.redraw=!0,this.boardTiles=[],this.flatTileList=[],this.players=[],this.counter=0,this.setupDataModel(),t&&this.setupPiecesOnBoard()}getTileAtPosition(e,t){try{return this.boardTiles[t][e]}catch(e){return null}}getPieceAtPosition(e,t){try{return this.boardTiles[t][e].currentPiece}catch(e){return null}}selectPiece(e,t){return this.selectedPiece=this.getPieceAtPosition(e,t),this.selectedPiece}isPlayerInCheckAfterClonedBoardMove(e,t){let i=this.clone();return i.movePiecePosition(e,t),i.redraw=!0,i.updateDisplay(),i.checkIfPlayerIsInCheck()}movePiece(e,t,i=!0){if(console.log(`moving piece from: ${e}, to: ${t} on board: ${this.targetElement}`),i){let i=this.isPlayerInCheckAfterClonedBoardMove(e,t);if(console.log(`will move leave player in check ${i}`),i)return!1}if(t.currentPiece&&("white"==t.currentPiece.color&&(this.players[0].pieces=this.players[0].pieces.filter((e=>e!=t.currentPiece))),"black"==t.currentPiece.color&&(this.players[1].pieces=this.players[1].pieces.filter((e=>e!=t.currentPiece)))),t.currentPiece=e.currentPiece,t.currentPiece instanceof s&&(t.currentPiece.hasMoved=!0,0==t.y||7==t.y)){let e=new l(this.boardTiles,t.y,t.x,t.currentPiece.color);this.currentPlayer.pieces.splice(this.currentPlayer.pieces.indexOf(t.currentPiece),1,e),t.currentPiece=e}return e.currentPiece=null,t.currentPiece.currentTile=t,!0}movePiecePosition(e,t){let i=this.getTileAtPosition(e.x,e.y),r=this.getTileAtPosition(t.x,t.y);this.movePiece(i,r,!1)}markAllInvalid(){this.flatTileList.forEach((e=>e.isValidPosition=!1))}setupDataModel(){for(let e=0;e<8;e++)this.makeRow(e);for(let e=0;e<this.flatTileList.length;e++){const t=this.flatTileList[e];t.prevLight=undefined,e<this.flatTileList.length-1&&(t.nextLight=this.flatTileList[e+1])}this.flatTileList[0].prevLight=this.flatTileList[this.flatTileList.length-1],this.flatTileList[this.flatTileList.length-1].nextLight=this.flatTileList[0]}setupPiecesOnBoard(){let e=new c(this.boardTiles,0,0),i=new c(this.boardTiles,0,7),h=new r(this.boardTiles,0,1),a=new r(this.boardTiles,0,6),u=new t(this.boardTiles,0,2),P=new t(this.boardTiles,0,5),y=new l(this.boardTiles,0,3),d=new o(this.boardTiles,0,4),f=new c(this.boardTiles,7,0,"black"),p=new c(this.boardTiles,7,7,"black"),T=new r(this.boardTiles,7,1,"black"),k=new r(this.boardTiles,7,6,"black"),g=new t(this.boardTiles,7,2,"black"),b=new t(this.boardTiles,7,5,"black"),w=new l(this.boardTiles,7,3,"black"),x=new o(this.boardTiles,7,4,"black");const m=[],A=[];for(let e=0;e<8;e++){const t=new s(this.boardTiles,1,e);m.push(t);const i=new s(this.boardTiles,6,e,"black");A.push(i)}const L=new n("white");L.pieces=[e,i,h,a,u,P,y,d,...m];const v=new n("black");v.pieces=[f,p,T,k,g,b,w,x,...A],this.players=[L,v],this.currentPlayer=L}changeCurrentPlayer(){this.currentPlayer=this.currentPlayer===this.players[0]?this.players[1]:this.players[0],console.log(`Switched players is now ${this.currentPlayer} turn`)}makeRow(e){this.boardTiles[e]=[];for(let t=0;t<8;t++){const r=new i(this.counter++,t,e);this.boardTiles[e].push(r),this.flatTileList.push(r)}}checkIfPlayerIsInCheck(e=this.currentPlayer){const t=this.whitePlayer==e?this.blackPlayer:this.whitePlayer;let i=!1;return t.pieces.forEach((t=>{const r=t.findValidMoves(this);e.king&&r.find((t=>t.x==e.king.currentTile.x&&t.y==e.king.currentTile.y))&&(i=!0)})),i}cannotMakeAnyMoveWithoutLeavingKingInCheck(e=this.currentPlayer){let t=!1;return e.pieces.forEach((e=>{const i=this.clone();e.findValidMoves(i).forEach((r=>{t=t||!i.isPlayerInCheckAfterClonedBoardMove(e.currentTile,r)}))})),!t}clone(){const e=new h("hypothetical-board",!1);return e.players=this.players.map((e=>e.clone())),e.currentPlayer="white"==this.currentPlayer.color?e.whitePlayer:e.blackPlayer,e.boardTiles=this.boardTiles.map((t=>t.map((t=>{const i=t.clone();return t.currentPiece&&(i.currentPiece=t.currentPiece.clone(e.boardTiles),i.currentPiece&&("black"==i.currentPiece.color&&e.blackPlayer.pieces.push(i.currentPiece),"white"==i.currentPiece.color&&e.whitePlayer.pieces.push(i.currentPiece))),i})))),e.selectPiece(this.selectedPiece.currentTile.x,this.selectedPiece.currentTile.y),e.tileClickHandler(e.selectedPiece.currentTile),e.drawInitialBoard(),e.updateDisplay(),e}tileClickHandler(e){if(e.isValidPosition)this.movePiece(this.selectedPiece.currentTile,e)&&(this.turnOffAllTileLights(),this.markAllInvalid(),this.currentPlayer.inCheck=this.checkIfPlayerIsInCheck(),console.log(`checking if current player ${this.currentPlayer} is in check`),this.changeCurrentPlayer(),console.log(`checking if current player ${this.currentPlayer} is in check`),this.currentPlayer.inCheck=this.checkIfPlayerIsInCheck(),this.currentPlayer.inCheck?this.currentPlayer.inCheckmate=this.cannotMakeAnyMoveWithoutLeavingKingInCheck():this.currentPlayer.inStalemate=this.cannotMakeAnyMoveWithoutLeavingKingInCheck());else{this.markAllInvalid();let t=this.selectPiece(e.x,e.y),i=e.isOn;if(this.turnOffAllTileLights(),t&&t.color==this.currentPlayersTurn&&(e.isOn=!i,e.isOn)){t.findValidMoves(this).forEach((e=>{let t=this.getTileAtPosition(e.x,e.y);t&&(t.isValidPosition=!0,t.isOn=!0)}))}}this.redraw=!0}findCurrentlyLit(){return this.flatTileList.filter((e=>e.isOn))}turnOffAllTileLights(){this.flatTileList.forEach((e=>e.isOn=!1))}updateDisplay(e=null){if(e&&(e.updatePattern(this),this.redraw=!0),this.redraw){let e="";this.whitePlayer.inCheck&&(e+="White player is in check. "),this.blackPlayer.inCheck&&(e+="Black player is in check. "),this.whitePlayer.inCheckmate&&(e="White player is in checkmate. GG"),this.blackPlayer.inCheckmate&&(e="Black player is in checkmate. GG"),(this.whitePlayer.inStalemate||this.blackPlayer.inStalemate)&&(e="Game is in stalemate. GG"),document.getElementById("game-status").innerHTML=e,this.flatTileList.forEach((e=>{let t=document.getElementById(`${this.targetElement}-tile-${e.id}`);const i=e.isOn?"on":"off",r=`chess-tile ${i} tile-color-${e.tileBaseColor}`;t.className!=r&&(t.className=`chess-tile ${i} tile-color-${e.tileBaseColor}`),e.currentPiece&&(t.style.color=e.currentPiece.color);let s="";e.currentPiece&&(s=e.currentPiece.pieceSymbol()),t.innerHTML=`${s}`})),this.redraw=!1}}drawInitialBoard(){let e=document.getElementById(this.targetElement);for(;e.firstChild;)e.removeChild(e.firstChild);this.boardTiles.map((e=>{const t=e.map((e=>{let t=document.createElement("div");return t.className=`chess-tile ${e.id%2==0?"even":"odd"}  ${e.isOn?"on":"off"} tile-color-${e.tileBaseColor}`,t.id=`${this.targetElement}-tile-${e.id}`,t.addEventListener("click",(()=>{this.tileClickHandler(e)})),t}));let i=document.createElement("div");return i.className="row",t.forEach((e=>{i.appendChild(e)})),i})).forEach((t=>e.appendChild(t)))}}class a{updatePattern(e){e.turnOffAllTileLights(),e.boardTiles[this.currentlyLitLightRow].forEach((e=>e.isOn=!0)),this.currentlyLitLightRow++,this.currentlyLitLightRow>=e.boardTiles.length&&(this.currentlyLitLightRow=0)}constructor(){this.currentlyLitLightRow=0}}class u{constructor(){this.firstRun=!0}updatePattern(e){this.firstRun&&(e.turnOffAllTileLights(),e.flatTileList[0].isOn=!0,this.firstRun=!1);let t=e.findCurrentlyLit();if(t.length>0)for(let e=t.length-1;0<=e;e--){const i=t[e];i.isOn=!1,i.nextLight.isOn=!0}}}class P{updatePattern(e){e.turnOffAllTileLights();let t=e.flatTileList[this.snakeHead];t.isOn=!0;let i=t;for(let e=0;e<this.snakeLength;e++)i=i.nextLight,i.isOn=!0,0==e&&(this.snakeHead=i.id)}constructor(){this.snakeHead=0,this.snakeLength=12}}new class{constructor(){window.addEventListener("DOMContentLoaded",(()=>{document.getElementById("mode").addEventListener("change",(e=>{this.changeMode(e)})),setInterval((()=>{this.chessBoard.updateDisplay(this.mode)}),100),this.chessBoard=new h("chess-board"),this.chessBoard.drawInitialBoard()}))}changeMode(e){switch(e.target.value){case"snake":this.mode=new P;break;case"sequence":this.mode=new u;break;case"row":this.mode=new a;break;case"none":this.mode=null}}};
//# sourceMappingURL=index.2e88afcf.js.map