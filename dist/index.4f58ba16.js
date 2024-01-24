// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1HysV":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "aff0ef394f58ba16";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"kRdDP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ChessLightsMain", ()=>ChessLightsMain
);
var _chessBoard = require("./ChessBoard");
var _chessBoardDefault = parcelHelpers.interopDefault(_chessBoard);
var _rowPattern = require("./LightPatterns/RowPattern");
var _sequencePattern = require("./LightPatterns/SequencePattern");
var _snakePattern = require("./LightPatterns/SnakePattern");
class ChessLightsMain {
    constructor(){
        // Waiting for page to be loaded to get the elements on the page and add
        // listeners/setup the game
        window.addEventListener('DOMContentLoaded', ()=>{
            // Listener for the drop down menu
            document.getElementById('mode').addEventListener('change', (event)=>{
                this.changeMode(event);
            });
            setInterval(()=>{
                this.chessBoard.updateDisplay(this.mode);
            }, 100);
            this.chessBoard = new _chessBoardDefault.default('chess-board');
            this.chessBoard.drawInitialBoard();
        // this.mode = new SequencePattern()
        });
    }
    /**
   * Method handles drop down change events and creates the corresponding light
   * pattern/sequence handler.  Used primarily for prototyping LED patterns for
   * LED chess board.
   * 
   * @param event an event from the select/options dropdown, the event.target.value is used to determine which Pattern instance to create
   */ changeMode(event) {
        switch(event.target.value){
            case 'snake':
                this.mode = new _snakePattern.SnakePattern();
                break;
            case 'sequence':
                this.mode = new _sequencePattern.SequencePattern();
                break;
            case 'row':
                this.mode = new _rowPattern.RowPattern();
                break;
            case 'none':
                this.mode = null;
                break;
        }
    }
}
new ChessLightsMain();

},{"./ChessBoard":"euRaP","./LightPatterns/RowPattern":"1VAOD","./LightPatterns/SequencePattern":"hpQSK","./LightPatterns/SnakePattern":"9Y8oI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"euRaP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Builds the board and keeps track of the game state (selected piece, current player etc)
 * 
 * The board is an x/y grid drawn top to bottom left to right
 */ parcelHelpers.export(exports, "default", ()=>ChessBoard
);
var _bishop = require("./ChessPieces/Bishop");
var _bishopDefault = parcelHelpers.interopDefault(_bishop);
var _chessTile = require("./ChessTile");
var _chessTileDefault = parcelHelpers.interopDefault(_chessTile);
var _knight = require("./ChessPieces/Knight");
var _knightDefault = parcelHelpers.interopDefault(_knight);
var _pawn = require("./ChessPieces/Pawn");
var _pawnDefault = parcelHelpers.interopDefault(_pawn);
var _rook = require("./ChessPieces/Rook");
var _rookDefault = parcelHelpers.interopDefault(_rook);
var _queen = require("./ChessPieces/Queen");
var _queenDefault = parcelHelpers.interopDefault(_queen);
var _king = require("./ChessPieces/King");
var _kingDefault = parcelHelpers.interopDefault(_king);
var _player = require("./Player");
var _playerDefault = parcelHelpers.interopDefault(_player);
var _util = require("./ChessPieces/util");
class ChessBoard {
    get currentPlayersTurn() {
        return this.currentPlayer.color;
    }
    get whitePlayer() {
        return this.players[0];
    }
    get blackPlayer() {
        return this.players[1];
    }
    constructor(targetElement, autoSetupPieces = true){
        this.targetElement = targetElement;
        this.redraw = true;
        this.boardTiles = [];
        this.flatTileList = [];
        this.players = [];
        this.counter = 0;
        //FEN helper props below
        this.castlingAvailable = "-";
        // If an enpassant capture is possible the square to move to for the capture or -
        this.enPassantSquare = "-";
        // Halfmove clock:
        // Number of halfmoves since the last capture or pawn move. It's used for the fifty-move rule.
        this.numberOfHalfMoves = 0;
        // Starts at 1 and is incremented after Black's move.
        this.numberOfFullMoves = 1;
        this.setupDataModel();
        if (autoSetupPieces) this.setupPiecesOnBoard();
    }
    /**
   * 
   * @param x Horizontal offset from 0 for tile to get (0-7)
   * @param y Vetical offset from 0 for tile to get (0-7)
   * @returns A ChessTile if one exists at the position or null if the position is out of bounds
   */ getTileAtPosition(x, y) {
        try {
            return this.boardTiles[y][x];
        } catch (e) {
            return null;
        }
    }
    /**
   * 
   * @param x Horizontal offset from 0 for Piece to get (0-7)
   * @param y Vertical offset from 0 for Piece to get (0-7)
   * @returns Piece on tile at given position or null if no piece or invalid tile
   */ getPieceAtPosition(x, y) {
        try {
            return this.boardTiles[y][x].currentPiece;
        } catch (e) {
            return null;
        }
    }
    /**
   * 
   * @param x Horizontal offset from 0 for Piece to select (0-7)
   * @param y Vertical offset from 0 for Piece to select (0-7)
   * @returns The selected piece if a piece existed on the tile at the given position or null if no piece or tile at position
   */ selectPiece(x, y) {
        // Don't return a piece if a tile has a piece, but the piece isn't the same color as the current player
        this.selectedPiece = this.getPieceAtPosition(x, y);
        // console.log(`Selected Piece: ${this.selectedPiece} on board: ${this.targetElement}`)
        return this.selectedPiece;
    }
    isPlayerInCheckAfterClonedBoardMove(fromTile, toTile) {
        let clonedBoardState = this.clone();
        clonedBoardState.movePiecePosition(fromTile, toTile);
        clonedBoardState.redraw = true;
        clonedBoardState.updateDisplay();
        return clonedBoardState.checkIfPlayerIsInCheck();
    }
    /**
   * Method will move a piece from one tile to another so long as the move
   * doesn't put or leave the current player's king in check.
   * 
   * @param fromTile The tile to move the piece from
   * @param toTile The tile to move the piece to
   * @returns [boolean] true if the piece was moved false if it was not
   */ movePiece(fromTile, toTile, withChecking = true) {
        console.log(`moving piece from: ${fromTile}, to: ${toTile} on board: ${this.targetElement}`);
        // Cloning the current board so can simulate the move and see if the
        // current players king is left in check
        if (withChecking) {
            let willMovePutPlayerIntoCheck = this.isPlayerInCheckAfterClonedBoardMove(fromTile, toTile);
            console.log(`will move leave player in check ${willMovePutPlayerIntoCheck}`);
            if (willMovePutPlayerIntoCheck) return false;
        }
        const isPlayerPieceOnTile = (piece)=>piece != toTile.currentPiece
        ;
        if (toTile.currentPiece) {
            if (toTile.currentPiece.color == "white") this.players[0].pieces = this.players[0].pieces.filter(isPlayerPieceOnTile);
            if (toTile.currentPiece.color == "black") this.players[1].pieces = this.players[1].pieces.filter(isPlayerPieceOnTile);
        }
        // Moves the selected pieces from the from to tile to the to tile
        toTile.currentPiece = fromTile.currentPiece;
        toTile.currentPiece.hasMoved = true;
        if (toTile.currentPiece instanceof _pawnDefault.default) {
            if (toTile.y == 0 || toTile.y == 7) {
                let theNewQueen = new _queenDefault.default(this.boardTiles, toTile.y, toTile.x, toTile.currentPiece.color);
                this.currentPlayer.pieces.splice(this.currentPlayer.pieces.indexOf(toTile.currentPiece), 1, theNewQueen);
                toTile.currentPiece = theNewQueen;
            }
        }
        fromTile.currentPiece = null;
        toTile.currentPiece.currentTile = toTile;
        if (toTile.currentPiece instanceof _kingDefault.default) {
            if (toTile.canKingSideCastle) {
                const kingSideRook = this.currentPlayer.kingSideRook;
                this.movePiecePosition(kingSideRook.currentTile, {
                    x: toTile.x - 1,
                    y: toTile.y
                });
                kingSideRook.hasMoved = true;
            }
            if (toTile.canQueenSideCastle) {
                const queenSideRook = this.currentPlayer.queenSideRook;
                this.movePiecePosition(queenSideRook.currentTile, {
                    x: toTile.x + 1,
                    y: toTile.y
                });
                queenSideRook.hasMoved = true;
            }
        }
        return true;
    }
    // This method doesn't depend on being passed the tile itself necessarily it
    // will use the given position to find the 
    movePiecePosition(fromPosition, toPosition) {
        let fromTile = this.getTileAtPosition(fromPosition.x, fromPosition.y);
        let toTile = this.getTileAtPosition(toPosition.x, toPosition.y);
        this.movePiece(fromTile, toTile, false);
    }
    /**
   * Sets the isValidPosition to false for all tiles
   */ markAllInvalid() {
        this.flatTileList.forEach((light)=>light.isValidPosition = false
        );
    }
    /**
   * Sets up the initial data model(s) for the tiles, creates all the rows
   * that make up the grid of tiles and populates each row with tiles
   */ setupDataModel() {
        for(let y = 0; y < 8; y++)this.makeRow(y);
        // setup link list references between objects
        let prevLight;
        for(let i = 0; i < this.flatTileList.length; i++){
            const currentLight = this.flatTileList[i];
            currentLight.prevLight = prevLight;
            if (i < this.flatTileList.length - 1) currentLight.nextLight = this.flatTileList[i + 1];
        }
        this.flatTileList[0].prevLight = this.flatTileList[this.flatTileList.length - 1];
        this.flatTileList[this.flatTileList.length - 1].nextLight = this.flatTileList[0];
    }
    setupPiecesOnBoard() {
        // White back row
        let whiteRook1 = new _rookDefault.default(this.boardTiles, 0, 0);
        let whiteKnight1 = new _knightDefault.default(this.boardTiles, 0, 1);
        let whiteBishop1 = new _bishopDefault.default(this.boardTiles, 0, 2);
        let whiteQueen = new _queenDefault.default(this.boardTiles, 0, 3);
        let whiteKing = new _kingDefault.default(this.boardTiles, 0, 4);
        let whiteBishop2 = new _bishopDefault.default(this.boardTiles, 0, 5);
        let whiteKnight2 = new _knightDefault.default(this.boardTiles, 0, 6);
        let whiteRook2 = new _rookDefault.default(this.boardTiles, 0, 7);
        whiteRook2.kingSideRook = true;
        // Black back row
        let blackRook1 = new _rookDefault.default(this.boardTiles, 7, 0, "black");
        let blackKnight1 = new _knightDefault.default(this.boardTiles, 7, 1, "black");
        let blackBishop1 = new _bishopDefault.default(this.boardTiles, 7, 2, "black");
        let blackQueen = new _queenDefault.default(this.boardTiles, 7, 3, "black");
        let blackKing = new _kingDefault.default(this.boardTiles, 7, 4, "black");
        let blackBishop2 = new _bishopDefault.default(this.boardTiles, 7, 5, "black");
        let blackKnight2 = new _knightDefault.default(this.boardTiles, 7, 6, "black");
        let blackRook2 = new _rookDefault.default(this.boardTiles, 7, 7, "black");
        blackRook2.kingSideRook = true;
        const whitePawns = [];
        const blackPawns = [];
        for(let x = 0; x < 8; x++){
            // White pawns
            const whitePawn = new _pawnDefault.default(this.boardTiles, 1, x);
            whitePawns.push(whitePawn);
            // Black pawns
            const blackPawn = new _pawnDefault.default(this.boardTiles, 6, x, "black");
            blackPawns.push(blackPawn);
        }
        const player1 = new _playerDefault.default("white");
        player1.pieces = [
            whiteRook1,
            whiteRook2,
            whiteKnight1,
            whiteKnight2,
            whiteBishop1,
            whiteBishop2,
            whiteQueen,
            whiteKing,
            ...whitePawns
        ];
        const player2 = new _playerDefault.default("black");
        player2.pieces = [
            blackRook1,
            blackRook2,
            blackKnight1,
            blackKnight2,
            blackBishop1,
            blackBishop2,
            blackQueen,
            blackKing,
            ...blackPawns
        ];
        this.players = [
            player1,
            player2
        ];
        this.currentPlayer = player1;
    }
    changeCurrentPlayer() {
        this.turnOffAllTileLights();
        this.markAllInvalid();
        this.currentPlayer.inCheck = this.checkIfPlayerIsInCheck();
        console.debug(`checked current player is in check while changing players ${this.currentPlayer}`);
        this.currentPlayer = this.currentPlayer === this.players[0] ? this.players[1] : this.players[0];
        console.debug(`Switched players is now ${this.currentPlayer} turn`);
        console.log(this.generateFEN());
        // Checking if the new player is now in check.
        this.currentPlayer.inCheck = this.checkIfPlayerIsInCheck();
        if (this.currentPlayer.inCheck) {
            console.debug(`Checking if ${this.currentPlayer.color} in checkmate`);
            this.currentPlayer.inCheckmate = this.cannotMakeAnyMoveWithoutLeavingKingInCheck();
        } else {
            console.debug(`Checking if ${this.currentPlayer.color} in stalemate`);
            this.currentPlayer.inStalemate = this.cannotMakeAnyMoveWithoutLeavingKingInCheck();
        }
        console.debug(`done with checks:\n${this.currentPlayer}`);
        console.log(`Switched players is now ${this.currentPlayer} turn`);
        if (this.currentPlayer.color === "white") this.numberOfFullMoves++;
        this.numberOfHalfMoves++;
    }
    makeRow(rowNum) {
        this.boardTiles[rowNum] = [];
        for(let x = 0; x < 8; x++){
            const newLightObject = new _chessTileDefault.default(this.counter++, x, rowNum);
            this.boardTiles[rowNum].push(newLightObject);
            this.flatTileList.push(newLightObject);
        }
    }
    checkIfPlayerIsInCheck(targetPlayer = this.currentPlayer) {
        const otherPlayer = this.whitePlayer == targetPlayer ? this.blackPlayer : this.whitePlayer;
        let kingIsInCheck = false;
        otherPlayer.pieces.forEach((piece)=>{
            const validMoves = piece.findValidMoves(this);
            // If king is in check
            if (targetPlayer.king && validMoves.find((val)=>val.x == targetPlayer.king.currentTile.x && val.y == targetPlayer.king.currentTile.y
            )) kingIsInCheck = true;
        });
        return kingIsInCheck;
    }
    /**
   * Will see if moving any of the target player's pieces will result in the
   * player no longer being in check, will be called only if the target players
   * king is already known to be in check currently
   * 
   * @param targetPlayer The player to see if cannot make a move to get out of
   * check mate
   */ cannotMakeAnyMoveWithoutLeavingKingInCheck(targetPlayer = this.currentPlayer) {
        // For each of the target players pieces we'll clone the board, make the valid move and see if the player
        // is in check on the cloned board.
        let anyMoveGetsKingOutofCheck = false;
        targetPlayer.pieces.forEach((piece)=>{
            const clonedBoard = this.clone();
            const validMoves = piece.findValidMoves(clonedBoard);
            validMoves.forEach((move)=>{
                anyMoveGetsKingOutofCheck = anyMoveGetsKingOutofCheck || !clonedBoard.isPlayerInCheckAfterClonedBoardMove(piece.currentTile, move);
            });
        });
        return !anyMoveGetsKingOutofCheck;
    }
    checkIfCastlingPossible(player = this.currentPlayer) {
        console.log("check for castling");
        // setting both false until check if can castle on either side
        player.canKingSideCastle = false;
        player.canQueenSideCastle = false;
        if (!player.kingHasMoved && !player.kingSideRookHasMoved) {
            const { x: kingX , y: kingY  } = player.king.currentTile;
            const tileNextTo = this.getTileAtPosition(kingX + 1, kingY);
            const tileTwoOver = this.getTileAtPosition(kingX + 2, kingY);
            if (tileNextTo?.currentPiece == null && tileTwoOver?.currentPiece == null) {
                player.canKingSideCastle = true;
                console.log("king side castling possible");
            }
        }
        if (!player.kingHasMoved && !player.queenSideRookHasMoved) {
            const { x: kingX , y: kingY  } = player.king.currentTile;
            const tileNextTo = this.getTileAtPosition(kingX - 1, kingY);
            const tileTwoOver = this.getTileAtPosition(kingX - 2, kingY);
            const tileThreeOver = this.getTileAtPosition(kingX - 3, kingY);
            if (tileNextTo?.currentPiece == null && tileTwoOver?.currentPiece == null && tileThreeOver?.currentPiece == null) {
                player.canQueenSideCastle = true;
                console.log("queen side castling possible");
            }
        }
    }
    checkIfEnPassantPossible() {
    }
    clone() {
        const clonedBoard = new ChessBoard('hypothetical-board', false);
        // Cloning players so can maniuplate their pieces in new board states
        clonedBoard.players = this.players.map((player)=>player.clone()
        );
        clonedBoard.currentPlayer = this.currentPlayer.color == "white" ? clonedBoard.whitePlayer : clonedBoard.blackPlayer;
        // Cloning board tiles so can manipulate what piece is on what tile without 
        // effecting the actual game being played.
        clonedBoard.boardTiles = this.boardTiles.map((rowOfTiles)=>{
            const newRowOfTiles = rowOfTiles.map((singleTile)=>{
                const clonedTile = singleTile.clone();
                if (singleTile.currentPiece) {
                    clonedTile.currentPiece = singleTile.currentPiece.clone(clonedBoard.boardTiles);
                    if (clonedTile.currentPiece) {
                        if (clonedTile.currentPiece.color == "black") clonedBoard.blackPlayer.pieces.push(clonedTile.currentPiece);
                        if (clonedTile.currentPiece.color == "white") clonedBoard.whitePlayer.pieces.push(clonedTile.currentPiece);
                    }
                }
                return clonedTile;
            });
            return newRowOfTiles;
        });
        clonedBoard.selectPiece(this.selectedPiece.currentTile.x, this.selectedPiece.currentTile.y);
        clonedBoard.tileClickHandler(clonedBoard.selectedPiece.currentTile);
        clonedBoard.drawInitialBoard();
        clonedBoard.updateDisplay();
        return clonedBoard;
    }
    tileClickHandler(tile) {
        // Spot is marked valid then try to make the move with current selected piece
        if (tile.isValidPosition) // Try to move the piece, if the piece moves successfully then change players
        {
            if (this.movePiece(this.selectedPiece.currentTile, tile)) this.changeCurrentPlayer();
        } else {
            this.markAllInvalid();
            let selectedPiece = this.selectPiece(tile.x, tile.y);
            let wasOn = tile.isOn;
            this.turnOffAllTileLights();
            this.checkIfCastlingPossible();
            if (selectedPiece && selectedPiece.color == this.currentPlayersTurn) {
                tile.isOn = !wasOn;
                if (tile.isOn) {
                    let validMoves = selectedPiece.findValidMoves(this);
                    // King side castling
                    if (selectedPiece instanceof _kingDefault.default && this.currentPlayer.canKingSideCastle) {
                        const { x: kingX , y: kingY  } = this.currentPlayer.king.currentTile;
                        const tileTwoOver = this.getTileAtPosition(kingX + 2, kingY);
                        tileTwoOver.canKingSideCastle = true;
                        validMoves.push(tileTwoOver);
                    }
                    // Queen side castling
                    if (selectedPiece instanceof _kingDefault.default && this.currentPlayer.canQueenSideCastle) {
                        const { x: kingX , y: kingY  } = this.currentPlayer.king.currentTile;
                        const tileTwoOver = this.getTileAtPosition(kingX - 2, kingY);
                        tileTwoOver.canQueenSideCastle = true;
                        validMoves.push(tileTwoOver);
                    }
                    validMoves.forEach((validMove)=>{
                        // Marking all the valid moves for the selected piece on the board
                        let potentialMovePosition = this.getTileAtPosition(validMove.x, validMove.y);
                        if (potentialMovePosition) {
                            potentialMovePosition.isValidPosition = true;
                            potentialMovePosition.isOn = true;
                        }
                    });
                }
            }
        }
        this.redraw = true;
    }
    /**
   * return Array of currently lit positions
   */ findCurrentlyLit() {
        return this.flatTileList.filter((element)=>element.isOn
        );
    }
    /**
   * Sets the isOn property to false for all tiles
   */ turnOffAllTileLights() {
        this.flatTileList.forEach((tile)=>{
            tile.isOn = false;
            tile.canKingSideCastle = false;
            tile.canQueenSideCastle = false;
        });
    }
    /**
   * Called on an interval to update the DOM elements that represent the board
   * visually based on the board model
   */ updateDisplay(lightMode = null) {
        // If using a lighting mode then update the tile light pattern on each display update
        if (lightMode) {
            lightMode.updatePattern(this);
            this.redraw = true;
        }
        // If chessboard marked for redraw (after moves) update all the tile styles and contents
        if (this.redraw) {
            let gameStatusText = "";
            if (this.whitePlayer.inCheck) gameStatusText += "White player is in check. ";
            if (this.blackPlayer.inCheck) gameStatusText += "Black player is in check. ";
            if (this.whitePlayer.inCheckmate) gameStatusText = "White player is in checkmate. GG";
            if (this.blackPlayer.inCheckmate) gameStatusText = "Black player is in checkmate. GG";
            if (this.whitePlayer.inStalemate || this.blackPlayer.inStalemate) gameStatusText = "Game is in stalemate. GG";
            document.getElementById('game-status').innerHTML = gameStatusText;
            this.flatTileList.forEach((tile)=>{
                let curTileElm = document.getElementById(`${this.targetElement}-tile-${tile.id}`);
                const onOrOffTile = tile.isOn ? 'on' : 'off';
                const newClassName = `chess-tile ${onOrOffTile} tile-color-${tile.tileBaseColor}`;
                if (curTileElm.className != newClassName) curTileElm.className = `chess-tile ${onOrOffTile} tile-color-${tile.tileBaseColor}`;
                let curTileSymbolElm = document.getElementById(`${this.targetElement}-tilesymbol-${tile.id}`);
                if (tile.currentPiece) curTileSymbolElm.style.color = tile.currentPiece.color;
                let displayText = "";
                if (tile.currentPiece) displayText = tile.currentPiece.pieceSymbol();
                curTileSymbolElm.innerHTML = `${displayText}`;
            });
            this.redraw = false;
        }
    }
    /**
   * Clears out and rebuilds the DOM elements for the board based on the board model
   * deals with finding valid moves and highlighting cells on the board based on the
   * board model
   */ drawInitialBoard() {
        let chessBoard = document.getElementById(this.targetElement);
        // Emptying out the elements from the board container
        while(chessBoard.firstChild)chessBoard.removeChild(chessBoard.firstChild);
        // Maps all the tiles row by row into DOM elements
        const boardRowDOMElms = this.boardTiles.map((tileRow)=>{
            // Maps all the cells of a given row into DOM elements
            const cells = tileRow.map((tile)=>{
                let tileDiv = document.createElement('div');
                tileDiv.className = `chess-tile ${tile.id % 2 == 0 ? 'even' : 'odd'}  ${tile.isOn ? 'on' : 'off'} tile-color-${tile.tileBaseColor}`;
                tileDiv.id = `${this.targetElement}-tile-${tile.id}`;
                tileDiv.style.position = "relative";
                tileDiv.addEventListener('click', ()=>{
                    this.tileClickHandler(tile);
                });
                let tileNumDiv = document.createElement('div');
                tileNumDiv.style.position = "absolute";
                tileNumDiv.style.top = "4px";
                tileNumDiv.style.left = "4px";
                tileNumDiv.style.fontSize = "1rem";
                tileNumDiv.style.color = "rgba(255,255,255,.5)";
                tileNumDiv.innerHTML = `${_util.getRank(tile.x)}${_util.getFile(tile.y)}`;
                tileDiv.appendChild(tileNumDiv);
                let tileSymbolSpan = document.createElement('span');
                tileSymbolSpan.id = `${this.targetElement}-tilesymbol-${tile.id}`;
                tileDiv.appendChild(tileSymbolSpan);
                return tileDiv;
            });
            let rowDiv = document.createElement('div');
            rowDiv.className = 'row';
            cells.forEach((cell)=>{
                rowDiv.appendChild(cell);
            });
            return rowDiv;
        });
        boardRowDOMElms.forEach((boardRowDOMElm)=>chessBoard.appendChild(boardRowDOMElm)
        );
    }
    generateFEN() {
        let fen = '';
        // Generate piece placement part of FEN
        for(let rank = 7; rank >= 0; rank--){
            let emptySquares = 0;
            for(let file = 0; file < 8; file++){
                const tile = this.boardTiles[rank][file];
                if (tile.currentPiece) {
                    if (emptySquares > 0) {
                        fen += emptySquares;
                        emptySquares = 0;
                    }
                    // Append piece letter (uppercase for White, lowercase for Black)
                    fen += tile.currentPiece.color === "white" ? tile.currentPiece.fenType.toUpperCase() : tile.currentPiece.fenType.toLowerCase();
                } else emptySquares++;
            }
            if (emptySquares > 0) fen += emptySquares;
            if (rank > 0) fen += '/';
        }
        // Add information about active color, castling, en passant, halfmove clock, and fullmove number
        const fenCurPlayerColor = this.currentPlayer.color === "white" ? "w" : "b";
        const { castlingAvailable , enPassantSquare , numberOfFullMoves , numberOfHalfMoves  } = this;
        fen += ` ${fenCurPlayerColor} ${castlingAvailable} ${enPassantSquare} ${numberOfHalfMoves} ${numberOfFullMoves}`; // Assuming default values for these fields
        return fen;
    }
    // Castling availability:
    // 'K' (or 'k') for kingside castling (short).
    // 'Q' (or 'q') for queenside castling (long).
    // '-' if neither side can castle.
    // example KQkq (all castling possible)
    // example Kq (castling on white possible on king side, castling possible for black on queen side only
    getCastlingAvailableFEN() {
    }
}

},{"./ChessPieces/Bishop":"bvFql","./ChessTile":"lm55V","./ChessPieces/Knight":"dMoLL","./ChessPieces/Pawn":"kkl9H","./ChessPieces/Rook":"aeyIp","./ChessPieces/Queen":"4jvJS","./ChessPieces/King":"3pGdD","./Player":"8YLWx","./ChessPieces/util":"cUcyx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bvFql":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Bishop
);
var _chessPiece = require("./ChessPiece");
var _chessPieceDefault = parcelHelpers.interopDefault(_chessPiece);
class Bishop extends _chessPieceDefault.default {
    get fenType() {
        return 'B';
    }
    findValidMoves(boardState) {
        const validPositions = [];
        const { myPos  } = this;
        // All spaces to other "diaganol 1"
        for(let i = myPos.x + 1, j = myPos.y + 1; i < 8 && j < 8; i++, j++){
            let curTile = boardState.getTileAtPosition(i, j);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        // All spaces to other "diaganol 2"
        for(let i1 = myPos.x - 1, j1 = myPos.y - 1; i1 >= 0 && j1 >= 0; i1--, j1--){
            let curTile = boardState.getTileAtPosition(i1, j1);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        // All spaces to other "diaganol 3"
        for(let i2 = myPos.x + 1, j2 = myPos.y - 1; i2 < 8 && j2 >= 0; i2++, j2--){
            let curTile = boardState.getTileAtPosition(i2, j2);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        // All spaces to other "diaganol 4"
        for(let i3 = myPos.x - 1, j3 = myPos.y + 1; i3 >= 0 && j3 < 8; i3--, j3++){
            let curTile = boardState.getTileAtPosition(i3, j3);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        return validPositions;
    }
    clone(boardTiles) {
        return new Bishop(boardTiles, this.currentTile.y, this.currentTile.x, this.color);
    }
    constructor(...args){
        super(...args);
        this.pieceSymbol = ()=>this.color == "black" ? "♝" : "♗"
        ;
    }
}

},{"./ChessPiece":"hs5jK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hs5jK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Abstract Base Class for common properties/methods for all of the pieces
 */ parcelHelpers.export(exports, "default", ()=>ChessPiece
);
class ChessPiece {
    constructor(boardTiles, x, y, color = "white", hasMoved = false){
        this.color = color;
        this.hasMoved = hasMoved;
        this.currentTile = null;
        boardTiles[x][y].currentPiece = this;
        this.currentTile = boardTiles[x][y];
    }
    get direction() {
        return this.color === "white" ? 1 : -1;
    }
    get myPos() {
        return {
            x: this.currentTile.x,
            y: this.currentTile.y
        };
    }
    toString() {
        return `${this.pieceSymbol()}`;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lm55V":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>ChessTile
);
var _util = require("./ChessPieces/util");
class ChessTile {
    get tileBaseColor() {
        return (this.id + this.y % 2) % 2 == 0 ? "black" : "white";
    }
    constructor(id, x, y, isOn = false, hue = 0, saturation = 100, brightness = 50){
        this.isOn = isOn;
        this.hue = hue;
        this.saturation = saturation;
        this.brightness = brightness;
        this.id = id;
        this.x = x;
        this.y = y;
    }
    // Just clones the object with properties needed for checking valid positions
    // for checking hypothetical board states
    clone() {
        return new ChessTile(this.id, this.x, this.y);
    }
    toString() {
        return `${_util.getFile(this.x)}${_util.getRank(this.y)} with Piece ${this.currentPiece}`;
    }
}

},{"./ChessPieces/util":"cUcyx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cUcyx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getRank", ()=>getRank
);
parcelHelpers.export(exports, "getFile", ()=>getFile
);
function getRank(index) {
    return [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h'
    ][index];
}
function getFile(index) {
    return 8 - index;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dMoLL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Knight
);
var _chessPiece = require("./ChessPiece");
var _chessPieceDefault = parcelHelpers.interopDefault(_chessPiece);
class Knight extends _chessPieceDefault.default {
    get fenType() {
        return 'N';
    }
    findValidMoves(boardState) {
        const validPositions = [];
        const { myPos  } = this;
        let tileOne = boardState.getTileAtPosition(myPos.x + 2, myPos.y + 1);
        let tileTwo = boardState.getTileAtPosition(myPos.x + 1, myPos.y + 2);
        let tileThree = boardState.getTileAtPosition(myPos.x - 2, myPos.y + 1);
        let tileFour = boardState.getTileAtPosition(myPos.x - 1, myPos.y + 2);
        let tileFive = boardState.getTileAtPosition(myPos.x - 2, myPos.y - 1);
        let tileSix = boardState.getTileAtPosition(myPos.x - 1, myPos.y - 2);
        let tileSeven = boardState.getTileAtPosition(myPos.x + 2, myPos.y - 1);
        let tileEight = boardState.getTileAtPosition(myPos.x + 1, myPos.y - 2);
        [
            tileOne,
            tileTwo,
            tileThree,
            tileFour,
            tileFive,
            tileSix,
            tileSeven,
            tileEight
        ].forEach((tile)=>{
            // skip if the tile doesn't exist
            if (!tile) return;
            // 
            if (!tile.currentPiece || tile.currentPiece.color != this.color) validPositions.push(tile);
        });
        return validPositions;
    }
    clone(boardTiles) {
        return new Knight(boardTiles, this.currentTile.y, this.currentTile.x, this.color);
    }
    constructor(...args){
        super(...args);
        this.pieceSymbol = ()=>this.color == "black" ? "♞" : "♘"
        ;
    }
}

},{"./ChessPiece":"hs5jK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kkl9H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Pawn
);
var _chessPiece = require("./ChessPiece");
var _chessPieceDefault = parcelHelpers.interopDefault(_chessPiece);
class Pawn extends _chessPieceDefault.default {
    get fenType() {
        return 'P';
    }
    findValidMoves(boardState) {
        const validPositions = [];
        const { myPos , direction  } = this;
        let tileTL = boardState.getTileAtPosition(myPos.x + direction, myPos.y + direction);
        let tileTR = boardState.getTileAtPosition(myPos.x - direction, myPos.y + direction);
        const addTilePositionIfValid = (tile)=>{
            if (tile && tile.currentPiece && tile.currentPiece.color != this.color) validPositions.push({
                x: tile.x,
                y: tile.y
            });
        };
        [
            tileTL,
            tileTR
        ].forEach((tile)=>addTilePositionIfValid(tile)
        );
        let pieceOneAhead = boardState.getPieceAtPosition(myPos.x, myPos.y + direction);
        if (!pieceOneAhead) validPositions.push({
            x: myPos.x,
            y: myPos.y + direction
        });
        // Pawn can move two spots if hasn't moved yet
        if (!this.hasMoved && !pieceOneAhead) {
            let twoPiecesAhead = boardState.getPieceAtPosition(myPos.x, myPos.y + direction * 2);
            if (!twoPiecesAhead) validPositions.push({
                x: myPos.x,
                y: myPos.y + direction * 2
            });
        }
        return validPositions;
    }
    clone(boardTiles) {
        return new Pawn(boardTiles, this.currentTile.y, this.currentTile.x, this.color);
    }
    constructor(...args){
        super(...args);
        this.pieceSymbol = ()=>this.color == "black" ? "♟︎" : "♙"
        ;
    }
}

},{"./ChessPiece":"hs5jK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aeyIp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Rook
);
var _chessPiece = require("./ChessPiece");
var _chessPieceDefault = parcelHelpers.interopDefault(_chessPiece);
class Rook extends _chessPieceDefault.default {
    get fenType() {
        return 'R';
    }
    findValidMoves(boardState) {
        const validPositions = [];
        // Destructuring props of this
        const { myPos  } = this;
        // All spaces to one side "left"
        for(let i = myPos.x - 1; i >= 0; i--){
            let curTile = boardState.getTileAtPosition(i, myPos.y);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        // All spaces to other side "right"
        for(let i1 = myPos.x + 1; i1 < 8; i1++){
            let curTile = boardState.getTileAtPosition(i1, myPos.y);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        // All spaces to one side "top"
        for(let i2 = myPos.y - 1; i2 >= 0; i2--){
            let curTile = boardState.getTileAtPosition(myPos.x, i2);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        // All spaces to other side "bottom"
        for(let i3 = myPos.y + 1; i3 < 8; i3++){
            let curTile = boardState.getTileAtPosition(myPos.x, i3);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        return validPositions;
    }
    clone(boardTiles) {
        return new Rook(boardTiles, this.currentTile.y, this.currentTile.x, this.color);
    }
    constructor(...args){
        super(...args);
        this.kingSideRook = false;
        this.pieceSymbol = ()=>this.color == "black" ? "♜" : "♖"
        ;
    }
}

},{"./ChessPiece":"hs5jK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4jvJS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Queen
);
var _chessPiece = require("./ChessPiece");
var _chessPieceDefault = parcelHelpers.interopDefault(_chessPiece);
class Queen extends _chessPieceDefault.default {
    get fenType() {
        return 'Q';
    }
    findValidMoves(boardState) {
        const validPositions = [];
        const { myPos  } = this;
        // All spaces to one side "left"
        for(let i = myPos.x - 1; i >= 0; i--){
            let curTile = boardState.getTileAtPosition(i, myPos.y);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        // All spaces to other side "right"
        for(let i1 = myPos.x + 1; i1 < 8; i1++){
            let curTile = boardState.getTileAtPosition(i1, myPos.y);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        // All spaces to one side "top"
        for(let i2 = myPos.y - 1; i2 >= 0; i2--){
            let curTile = boardState.getTileAtPosition(myPos.x, i2);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        // All spaces to other side "bottom"
        for(let i3 = myPos.y + 1; i3 < 8; i3++){
            let curTile = boardState.getTileAtPosition(myPos.x, i3);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        // All spaces to other "diaganol 1"
        for(let i4 = myPos.x + 1, j = myPos.y + 1; i4 < 8 && j < 8; i4++, j++){
            let curTile = boardState.getTileAtPosition(i4, j);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        // All spaces to other "diaganol 2"
        for(let i5 = myPos.x - 1, j1 = myPos.y - 1; i5 >= 0 && j1 >= 0; i5--, j1--){
            let curTile = boardState.getTileAtPosition(i5, j1);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        // All spaces to other "diaganol 3"
        for(let i6 = myPos.x + 1, j2 = myPos.y - 1; i6 < 8 && j2 >= 0; i6++, j2--){
            let curTile = boardState.getTileAtPosition(i6, j2);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        // All spaces to other "diaganol 4"
        for(let i7 = myPos.x - 1, j3 = myPos.y + 1; i7 >= 0 && j3 < 8; i7--, j3++){
            let curTile = boardState.getTileAtPosition(i7, j3);
            // If we run into the same color stop
            if (curTile.currentPiece && curTile.currentPiece.color == this.color) break;
            // If we run into a piece with a different color include it and stop
            if (curTile.currentPiece && curTile.currentPiece.color != this.color) {
                validPositions.push(curTile);
                break;
            } else if (curTile) validPositions.push(curTile);
        }
        return validPositions;
    }
    clone(boardTiles) {
        return new Queen(boardTiles, this.currentTile.y, this.currentTile.x, this.color);
    }
    constructor(...args){
        super(...args);
        this.pieceSymbol = ()=>this.color == "black" ? "♛" : "♕"
        ;
    }
}

},{"./ChessPiece":"hs5jK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3pGdD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>King
);
var _chessPiece = require("./ChessPiece");
var _chessPieceDefault = parcelHelpers.interopDefault(_chessPiece);
class King extends _chessPieceDefault.default {
    get fenType() {
        return 'K';
    }
    findValidMoves(boardState) {
        const validPositions = [];
        const { myPos , direction  } = this;
        // Cardinal positions
        let tileOneAbove = boardState.getTileAtPosition(myPos.x, myPos.y + direction);
        let tileOneBelow = boardState.getTileAtPosition(myPos.x, myPos.y - direction);
        let tileOneLeft = boardState.getTileAtPosition(myPos.x - 1, myPos.y);
        let tileOneRight = boardState.getTileAtPosition(myPos.x + 1, myPos.y);
        // Diaganol moves
        let tileTL = boardState.getTileAtPosition(myPos.x + direction, myPos.y + direction);
        let tileBL = boardState.getTileAtPosition(myPos.x + direction, myPos.y - direction);
        let tileTR = boardState.getTileAtPosition(myPos.x - direction, myPos.y + direction);
        let tileBR = boardState.getTileAtPosition(myPos.x - direction, myPos.y - direction);
        const addTilePositionIfValid = (tile)=>{
            if (tile && (!tile.currentPiece || tile.currentPiece && tile.currentPiece.color != this.color)) validPositions.push({
                x: tile.x,
                y: tile.y
            });
        };
        [
            tileOneAbove,
            tileOneBelow,
            tileOneLeft,
            tileOneRight,
            tileTL,
            tileBL,
            tileTR,
            tileBR
        ].forEach((tile)=>{
            addTilePositionIfValid(tile);
        });
        return validPositions;
    }
    clone(boardTiles) {
        return new King(boardTiles, this.currentTile.y, this.currentTile.x, this.color);
    }
    constructor(...args){
        super(...args);
        this.pieceSymbol = ()=>this.color == "black" ? "♚" : "♔"
        ;
    }
}

},{"./ChessPiece":"hs5jK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8YLWx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>Player
);
var _king = require("./ChessPieces/King");
var _kingDefault = parcelHelpers.interopDefault(_king);
var _rook = require("./ChessPieces/Rook");
var _rookDefault = parcelHelpers.interopDefault(_rook);
class Player {
    constructor(color){
        this.color = color;
        this.pieces = [];
        this.inCheck = false;
        this.inCheckmate = false;
        this.inStalemate = false;
        this.canKingSideCastle = false;
        this.canQueenSideCastle = false;
    }
    get king() {
        return this.pieces.find((value, index, obj)=>{
            return value instanceof _kingDefault.default;
        });
    }
    get kingHasMoved() {
        return this.king.hasMoved;
    }
    get kingSideRook() {
        return this.pieces.find((value, index, obj)=>{
            return value instanceof _rookDefault.default && value.kingSideRook;
        });
    }
    get kingSideRookHasMoved() {
        if (!this.kingSideRook) return true;
        return this.kingSideRook.hasMoved;
    }
    get queenSideRook() {
        return this.pieces.find((value, index, obj)=>{
            return value instanceof _rookDefault.default && !value.kingSideRook;
        });
    }
    get queenSideRookHasMoved() {
        if (!this.queenSideRook) return true;
        return this.queenSideRook.hasMoved;
    }
    clone() {
        return new Player(this.color);
    }
    toString() {
        return `${this.color} player, pieces: ${this.pieces}, in check: ${this.inCheck}, in stalemate: ${this.inStalemate}, in checkmate: ${this.inCheckmate}`;
    }
}

},{"./ChessPieces/King":"3pGdD","./ChessPieces/Rook":"aeyIp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1VAOD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RowPattern", ()=>RowPattern
);
class RowPattern {
    updatePattern(currentBoard) {
        currentBoard.turnOffAllTileLights();
        currentBoard.boardTiles[this.currentlyLitLightRow].forEach((lightData)=>lightData.isOn = true
        );
        this.currentlyLitLightRow++;
        if (this.currentlyLitLightRow >= currentBoard.boardTiles.length) this.currentlyLitLightRow = 0;
    }
    constructor(){
        this.currentlyLitLightRow = 0;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hpQSK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SequencePattern", ()=>SequencePattern
);
class SequencePattern {
    constructor(){
        this.firstRun = true;
    }
    updatePattern(currentBoard) {
        if (this.firstRun) {
            currentBoard.turnOffAllTileLights();
            currentBoard.flatTileList[0].isOn = true;
            this.firstRun = false;
        }
        let currentlyLit = currentBoard.findCurrentlyLit();
        if (currentlyLit.length > 0) for(let i = currentlyLit.length - 1; 0 <= i; i--){
            const lightData = currentlyLit[i];
            lightData.isOn = false;
            lightData.nextLight.isOn = true;
        }
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Y8oI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SnakePattern", ()=>SnakePattern
);
class SnakePattern {
    updatePattern(currentBoard) {
        currentBoard.turnOffAllTileLights();
        let snakeHeadElm = currentBoard.flatTileList[this.snakeHead];
        snakeHeadElm.isOn = true;
        let curLight = snakeHeadElm;
        for(let i = 0; i < this.snakeLength; i++){
            curLight = curLight.nextLight;
            curLight.isOn = true;
            if (i == 0) this.snakeHead = curLight.id;
        }
    }
    constructor(){
        this.snakeHead = 0;
        this.snakeLength = 12;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["1HysV","kRdDP"], "kRdDP", "parcelRequire94c2")

//# sourceMappingURL=index.4f58ba16.js.map
