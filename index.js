(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.all = function() {
	this.initialize(img.all);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.allIn = function() {
	this.initialize(img.allIn);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,834,693);


(lib.go = function() {
	this.initialize(img.go);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.hl1 = function() {
	this.initialize(img.hl1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.hl2 = function() {
	this.initialize(img.hl2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.hl3 = function() {
	this.initialize(img.hl3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib._in = function() {
	this.initialize(img._in);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.legal = function() {
	this.initialize(img.legal);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.man = function() {
	this.initialize(img.man);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.price = function() {
	this.initialize(img.price);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.product = function() {
	this.initialize(img.product);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.woman = function() {
	this.initialize(img.woman);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.woman_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.woman();
	this.instance.setTransform(0,0,0.4999,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.woman_1, new cjs.Rectangle(0,0,300,250), null);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.logo();
	this.instance.setTransform(-150,-125,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-125,300,250);


(lib.offerRight = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.price();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.offerRight, new cjs.Rectangle(0,0,300,250), null);


(lib.offerLeft = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.product();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.offerLeft, new cjs.Rectangle(0,0,300,250), null);


(lib.man_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.man();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.man_1, new cjs.Rectangle(0,0,300,250), null);


(lib.legal_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.legal();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.legal_1, new cjs.Rectangle(0,0,300,250), null);


(lib._in_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib._in();
	this.instance.setTransform(5,-6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib._in_1, new cjs.Rectangle(5,-6,300,250), null);


(lib.HL1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hl1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HL1, new cjs.Rectangle(0,0,300,250), null);


(lib.h3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hl3();
	this.instance.setTransform(-10,4,0.5,0.502);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.h3, new cjs.Rectangle(-10,4,300,251), null);


(lib.h2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.hl2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.h2, new cjs.Rectangle(0,0,300,250), null);


(lib.go_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.go();
	this.instance.setTransform(0,-30,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.go_1, new cjs.Rectangle(0,-30,300,250), null);


(lib.clickTag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FFFF").s().p("Eg43AHCIAAuDMBxvAAAIAAODg");
	this.shape.setTransform(364,45);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,728,90);


(lib.button = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjzECQgHgEAAgIIAAnqQAAgMAKgCQAGgDAGAEIHYD1QAHAEAAAIQAAAKgHADInYD2QgDABgEAAQgEAAgEgCg");
	this.shape.setTransform(32.8172,29.8804,0.7059,0.7059);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#020303").s().p("AmUGkQgGAAgFgEQgEgFAAgGIAAspQAAgFAEgGIAAAAIABAAQAEgEAGAAIMpAAQAGAAAFAEQAEAFAAAGIAAMpQAAAGgEAFQgFAEgGAAgAjGkCQgLACAAALIAAHrQAAAIAIAEQAIAFAHgFIHXj1QAIgEAAgJQAAgIgIgEInXj1QgEgDgDAAIgFACg");
	this.shape_1.setTransform(29.6199,29.636,0.7059,0.7059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.button, new cjs.Rectangle(0,0,59.3,59.3), null);


(lib.black = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(150,124.975);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.black, new cjs.Rectangle(0,0,300,250), null);


(lib.all_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.all();
	this.instance.setTransform(1,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.all_1, new cjs.Rectangle(1,0,300,250), null);


(lib.screen = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.black();
	this.instance.setTransform(149.95,125,1,1,0,0,0,150,125);
	this.instance.alpha = 0.5;
	this.instance.compositeOperation = "multiply";

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.instance_1 = new lib.allIn();
	this.instance_1.setTransform(0,0,0.3597,0.3597);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.screen, new cjs.Rectangle(0,0,300,250), null);


// stage content:
(lib.DIS24602252AllInTotalValue_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,50,127,179,270];
	// timeline functions:
	this.frame_0 = function() {
		// GOOGLE STUDIO CLICKTAG //
		
		this.clickTag.on("click", bgClick.bind(this));
		function bgClick() {
			Enabler.exit('Clickthrough');
		}
		
		
		this.stop();
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
	}
	this.frame_1 = function() {
		var _this = this;
		/*
		Clicking on the specified symbol instance executes a function.
		*/
		_this.button.on('click', function(){
		/*
		Play a Movie Clip/Video or the current timeline.
		Plays the specified movie clip or video.
		*/
		_this.play();
		});
	}
	this.frame_50 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 1500);
	}
	this.frame_127 = function() {
		//// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 1500);
	}
	this.frame_179 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 1500);
	}
	this.frame_270 = function() {
		// PAUSE ANIMATION IN MILLISECONDS //
		
		this.stop();
		setTimeout(this.play.bind(this), 1500);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(49).call(this.frame_50).wait(77).call(this.frame_127).wait(52).call(this.frame_179).wait(91).call(this.frame_270).wait(130));

	// Layer_1
	this.button = new lib.button();
	this.button.name = "button";
	this.button.setTransform(149.05,130.95,1,1,0,0,0,28.7,35.6);

	this.timeline.addTween(cjs.Tween.get(this.button).to({_off:true},1).wait(399));

	// Layer_1
	this.instance = new lib.screen();
	this.instance.setTransform(149.9,124.9,1,1,0,0,0,149.9,124.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(399));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(2,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(400));

	// clickTag
	this.clickTag = new lib.clickTag();
	this.clickTag.name = "clickTag";
	this.clickTag.setTransform(150,125,0.4121,2.7778,0,0,0,364,45);
	new cjs.ButtonHelper(this.clickTag, 0, 1, 2, false, new lib.clickTag(), 3);

	this.timeline.addTween(cjs.Tween.get(this.clickTag).wait(400));

	// legal
	this.instance_1 = new lib.legal_1();
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(313).to({_off:false},0).to({alpha:1},17).wait(70));

	// offer right
	this.instance_2 = new lib.offerRight();
	this.instance_2.setTransform(289,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(300).to({_off:false},0).to({x:150},13,cjs.Ease.cubicOut).wait(87));

	// offer left
	this.instance_3 = new lib.offerLeft();
	this.instance_3.setTransform(9,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(300).to({_off:false},0).to({x:153},13,cjs.Ease.cubicOut).wait(87));

	// go
	this.instance_4 = new lib.go_1();
	this.instance_4.setTransform(61,128,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(225).to({_off:false},0).to({x:151},11,cjs.Ease.cubicOut).wait(36).to({alpha:0},7).wait(121));

	// in
	this.instance_5 = new lib._in_1();
	this.instance_5.setTransform(243,128,1,1,0,0,0,150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(225).to({_off:false},0).to({x:156},11,cjs.Ease.cubicOut).wait(36).to({alpha:0},7).wait(121));

	// man
	this.instance_6 = new lib.man_1();
	this.instance_6.setTransform(151,123,1,1,0,0,0,150,125);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(168).to({_off:false},0).to({alpha:1},8).wait(5).to({y:-7},10,cjs.Ease.cubicOut).wait(209));

	// h3
	this.instance_7 = new lib.h3();
	this.instance_7.setTransform(300,110.5,1,1,0,0,0,150,125.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(168).to({_off:false},0).to({x:148},8,cjs.Ease.cubicOut).wait(5).to({x:304},10,cjs.Ease.cubicOut).to({_off:true},1).wait(208));

	// woman
	this.instance_8 = new lib.woman_1();
	this.instance_8.setTransform(443,118,1,1,0,0,0,150,125);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(100).to({_off:false},0).to({x:149},16,cjs.Ease.cubicOut).wait(12).to({x:150,alpha:0},6).wait(266));

	// h2
	this.instance_9 = new lib.h2();
	this.instance_9.setTransform(310,122,1,1,0,0,0,150,125);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(91).to({_off:false},0).to({x:150},10,cjs.Ease.cubicOut).wait(27).to({alpha:0},6).wait(266));

	// all
	this.instance_10 = new lib.all_1();
	this.instance_10.setTransform(151,124,1,1,0,0,0,150,125);
	this.instance_10.alpha = 0;
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(32).to({_off:false},0).to({alpha:1},18).wait(4).to({alpha:0},7).wait(15).to({x:17,y:52},0).to({alpha:1},9).wait(43).to({alpha:0},6).wait(25).to({x:16,y:160},0).to({y:159,alpha:1},8).wait(14).to({x:-124},10,cjs.Ease.cubicOut).wait(26).to({x:92,y:96,alpha:0},0).to({alpha:1},8).wait(47).to({alpha:0},7).wait(121));

	// blue box
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00AAF4").s().p("A2cDjIAAnBQAAhQBPAAMAqagAEQBRAAAABQIAAHBQAABQhRAAMgqaAAEQhPAAAAhQg");
	this.shape_1.setTransform(130.75,123.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00AAF4").s().p("A0uDjIAAnBQAAhQBQAAMAm8gAEQBRAAAABQIAAHBQAABQhRAAMgm8AAEQhQAAAAhQg");
	this.shape_2.setTransform(141.85,123.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00AAF4").s().p("AzJDjIAAnBQAAhQBQAAMAjzgAEQBQAAAABQIAAHBQAABQhQAAMgjzAAEQhQAAAAhQg");
	this.shape_3.setTransform(151.875,123.25);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00AAF4").s().p("AxvDjIAAnBQAAhQBQAAMAg/gAEQBQAAAABQIAAHBQAABQhQAAMgg/AAEQhQAAAAhQg");
	this.shape_4.setTransform(160.925,123.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#00AAF4").s().p("AweDjIAAnBQAAhQBQAAIedgEQBQAAAABQIAAHBQAABQhQAAI+dAEQhQAAAAhQg");
	this.shape_5.setTransform(169.025,123.25);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00AAF4").s().p("AvWDjIAAnBQAAhQBQAAIcNgEQBQAAAABQIAAHBQAABQhQAAI8NAEQhQAAAAhQg");
	this.shape_6.setTransform(176.2,123.25);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#00AAF4").s().p("AuWDjIAAnBQAAhQBQAAIaNgEQBRAAgBBQIAAHBQABBQhRAAI6NAEQhQAAAAhQg");
	this.shape_7.setTransform(182.55,123.25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#00AAF4").s().p("AtfDjIAAnBQAAhQBQAAIYfgEQBQAAAABQIAAHBQAABQhQAAI4fAEQhQAAAAhQg");
	this.shape_8.setTransform(188.1,123.25);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#00AAF4").s().p("AsvDjIAAnBQAAhQBQAAIW/gEQBQAAAABQIAAHBQAABQhQAAI2/AEQhQAAAAhQg");
	this.shape_9.setTransform(192.925,123.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#00AAF4").s().p("AsFDjIAAnBQAAhQBQAAIVrgEQBRAAgBBQIAAHBQABBQhRAAI1rAEQhQAAAAhQg");
	this.shape_10.setTransform(197.05,123.25);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#00AAF4").s().p("ArjDjIAAnBQAAhQBQAAIUngEQBQAAAABQIAAHBQAABQhQAAI0nAEQhQAAAAhQg");
	this.shape_11.setTransform(200.525,123.25);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#00AAF4").s().p("ArGDjIAAnBQAAhQBRAAITrgEQBRAAAABQIAAHBQAABQhRAAIzrAEQhRAAAAhQg");
	this.shape_12.setTransform(203.45,123.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#00AAF4").s().p("AquDjIAAnBQAAhQBQAAIS9gEQBQAAAABQIAAHBQAABQhQAAIy9AEQhQAAAAhQg");
	this.shape_13.setTransform(205.825,123.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#00AAF4").s().p("AqaDjIAAnBQAAhQBQAAISVgEQBRAAAABQIAAHBQAABQhRAAIyVAEQhQAAAAhQg");
	this.shape_14.setTransform(207.75,123.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00AAF4").s().p("AqMDjIAAnBQAAhQBQAAIR5gEQBQAAAABQIAAHBQAABQhQAAIx5AEQhQAAAAhQg");
	this.shape_15.setTransform(209.225,123.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00AAF4").s().p("AqBDjIAAnBQAAhQBQAAIRigEQBRAAAABQIAAHBQAABQhRAAIxiAEQhQAAAAhQg");
	this.shape_16.setTransform(210.35,123.25);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00AAF4").s().p("Ap5DjIAAnBQAAhQBQAAIRSgEQBRAAAABQIAAHBQAABQhRAAIxSAEQhQAAAAhQg");
	this.shape_17.setTransform(211.15,123.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00AAF4").s().p("ApzDjIAAnBQAAhQBQAAIRHgEQBQAAAABQIAAHBQAABQhQAAIxHAEQhQAAAAhQg");
	this.shape_18.setTransform(211.675,123.25);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00AAF4").s().p("ApwDjIAAnBQAAhQBQAAIRBgEQBQAAAABQIAAHBQAABQhQAAIxBAEQhQAAAAhQg");
	this.shape_19.setTransform(212,123.25);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00AAF4").s().p("ApuDjIAAnBQAAhQBQAAIQ9gEQBQAAAABQIAAHBQAABQhQAAIw9AEQhQAAAAhQg");
	this.shape_20.setTransform(212.175,123.25);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00AAF4").s().p("AptDjIAAnBQAAhQBQAAIQ7gEQBRAAAABQIAAHBQAABQhRAAIw7AEQhQAAAAhQg");
	this.shape_21.setTransform(212.25,123.25);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00AAF4").s().p("AsYE7IAApxQAAhQBQAAIWRgEQBQAAAABQIAAJxQAABQhQAAI2RAEQhQAAAAhQg");
	this.shape_22.setTransform(196.025,114.475);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00AAF4").s().p("AulGDIAAsCQAAhQBQAAIargDQBQAAAABQIAAMCQAABQhQAAI6rADQhQAAAAhQg");
	this.shape_23.setTransform(182.75,107.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00AAF4").s().p("AwUG8IAAt1QAAhQBPAAIeKgCQBRAAAABPIAAN3QAABQhRAAI+KABQhPAAAAhQg");
	this.shape_24.setTransform(172.1,101.55);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00AAF4").s().p("AxsHpIAAvQQAAhQBQAAMAg5gABQBQAAAABQIAAPQQAABQhQAAMgg5AABQhQAAAAhQg");
	this.shape_25.setTransform(163.825,97.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00AAF4").s().p("AyuILIAAwUQAAhQBQAAMAi9gABQBQAAAABQIAAQUQAABQhQAAMgi9AABQhQAAAAhQg");
	this.shape_26.setTransform(157.6,93.725);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00AAF4").s().p("AzcIjIAAxFQAAhQBQAAMAkZAAAQBQAAAABQIAARFQAABQhQAAMgkZAAAQhQAAAAhQg");
	this.shape_27.setTransform(153.125,91.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00AAF4").s().p("AysKDQhQAAAAhQIAAxlQAAhQBQAAMAlZAAAQBQAAAABQIAARlQAABQhQAAg");
	this.shape_28.setTransform(150.15,89.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00AAF4").s().p("Ay/KNQhQAAAAhQIAAx5QAAhQBQAAMAl/AAAQBQAAAABQIAAR5QAABQhQAAg");
	this.shape_29.setTransform(148.325,88.725);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00AAF4").s().p("AzJKSQhQAAAAhQIAAyDQAAhQBQAAMAmTAAAQBQAAAABQIAASDQAABQhQAAg");
	this.shape_30.setTransform(147.4,88.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00AAF4").s().p("AzMKUQhQAAAAhQIAAyHQAAhQBQAAMAmaAAAQBQAAAABQIAASHQAABQhQAAg");
	this.shape_31.setTransform(147.05,88.025);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00AAF4").s().p("AzNKUQhQAAAAhQIAAyHQAAhQBQAAMAmbAAAQBQAAAABQIAASHQAABQhQAAg");
	this.shape_32.setTransform(147,88);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00AAF4").s().p("Ax/JrQhQAAAAhQIAAw1QAAhQBQAAMAj/AAAQBQAAAABQIAAQ1QAABQhQAAg");
	this.shape_33.setTransform(139.225,83.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00AAF4").s().p("AwxJCQhQAAAAhQIAAvjQAAhQBQAAMAhjAAAQBQAAAABQIAAPjQAABQhQAAg");
	this.shape_34.setTransform(131.45,79.775);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00AAF4").s().p("AvkIZQhQAAAAhQIAAuRQAAhQBQAAIfJAAQBQAAAABQIAAORQAABQhQAAg");
	this.shape_35.setTransform(123.675,75.675);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00AAF4").s().p("AuWHwQhQAAAAhQIAAs/QAAhQBQAAIctAAQBQAAAABQIAAM/QAABQhQAAg");
	this.shape_36.setTransform(115.9,71.55);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00AAF4").s().p("AtIHGQhQAAAAhPIAArtQAAhQBQAAIaRAAQBQAAAABQIAALtQAABPhQAAg");
	this.shape_37.setTransform(108.1,67.45);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00AAF4").s().p("Ar6GdQhQAAAAhQIAAqZQAAhQBQAAIX1AAQBQAAAABQIAAKZQAABQhQAAg");
	this.shape_38.setTransform(100.325,63.325);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00AAF4").s().p("AqsF0QhQAAAAhQIAApHQAAhQBQAAIVaAAQBQAAAABQIAAJHQAABQhQAAg");
	this.shape_39.setTransform(92.55,59.225);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#00AAF4").s().p("ApfFLQhQAAAAhQIAAn1QAAhQBQAAIS/AAQBQAAAABQIAAH1QAABQhQAAg");
	this.shape_40.setTransform(84.775,55.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00AAF4").s().p("AoREiQhQAAAAhQIAAmjQAAhQBQAAIQjAAQBQAAAABQIAAGjQAABQhQAAg");
	this.shape_41.setTransform(77,51);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#00AAF4").s().p("AoRGvQhQAAAAhQIAAq9QAAhQBQAAIQjAAQBQAAAABQIAAK9QAABQhQAAg");
	this.shape_42.setTransform(77,65.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#00AAF4").s().p("AoRIgQhQAAAAhQIAAufQAAhQBQAAIQjAAQBQAAAABQIAAOfQAABQhQAAg");
	this.shape_43.setTransform(77,76.375);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#00AAF4").s().p("AoRJ4QhQAAAAhQIAAxPQAAhQBQAAIQjAAQBQAAAABQIAARPQAABQhQAAg");
	this.shape_44.setTransform(77,85.175);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#00AAF4").s().p("AoRK6QhQAAAAhQIAAzTQAAhQBQAAIQjAAQBQAAAABQIAATTQAABQhQAAg");
	this.shape_45.setTransform(77,91.775);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#00AAF4").s().p("AoRLpQhQAAAAhQIAA0xQAAhQBQAAIQjAAQBQAAAABQIAAUxQAABQhQAAg");
	this.shape_46.setTransform(77,96.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#00AAF4").s().p("AoRMJQhQAAAAhQIAA1xQAAhQBQAAIQjAAQBQAAAABQIAAVxQAABQhQAAg");
	this.shape_47.setTransform(77,99.675);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#00AAF4").s().p("AoRMcQhQAAAAhQIAA2XQAAhQBQAAIQjAAQBQAAAABQIAAWXQAABQhQAAg");
	this.shape_48.setTransform(77,101.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#00AAF4").s().p("AoRMmQhQAAAAhQIAA2rQAAhQBQAAIQjAAQBQAAAABQIAAWrQAABQhQAAg");
	this.shape_49.setTransform(77,102.575);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#00AAF4").s().p("AoRMpQhQAAAAhQIAA2yQAAhQBQAAIQjAAQBQAAAABQIAAWyQAABQhQAAg");
	this.shape_50.setTransform(77,102.95);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#00AAF4").s().p("AoRMqQhQAAAAhQIAA2zQAAhQBQAAIQjAAQBQAAAABQIAAWzQAABQhQAAg");
	this.shape_51.setTransform(77,103);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#00AAF4").s().p("AoMKJQhQAAAAhQIAAxxQAAhQBQAAIQZAAQBQAAAABQIAARxQAABQhQAAg");
	this.shape_52.setTransform(76.55,119.375);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#00AAF4").s().p("AoJIMQhQAAAAhQIAAt3QAAhQBQAAIQTAAQBQAAAABQIAAN3QAABQhQAAg");
	this.shape_53.setTransform(76.2,132.125);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#00AAF4").s().p("AoGGuQhQAAAAhQIAAq7QAAhQBQAAIQNAAQBRAAAABQIAAK7QAABQhRAAg");
	this.shape_54.setTransform(75.95,141.7);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#00AAF4").s().p("AoEFrQhQAAAAhQIAAo1QAAhQBQAAIQKAAQBQAAAABQIAAI1QAABQhQAAg");
	this.shape_55.setTransform(75.75,148.575);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#00AAF4").s().p("AoDE9QhQAAAAhQIAAnZQAAhQBQAAIQHAAQBQAAAABQIAAHZQAABQhQAAg");
	this.shape_56.setTransform(75.625,153.175);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#00AAF4").s().p("AoCEiQhQAAAAhQIAAmjQAAhQBQAAIQFAAQBQAAAABQIAAGjQAABQhQAAg");
	this.shape_57.setTransform(75.55,155.95);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#00AAF4").s().p("AoCEUQhQAAAAhQIAAmHQAAhQBQAAIQFAAQBQAAAABQIAAGHQAABQhQAAg");
	this.shape_58.setTransform(75.525,157.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#00AAF4").s().p("AoCEPQhQAAAAhQIAAl9QAAhQBQAAIQFAAQBQAAAABQIAAF9QAABQhQAAg");
	this.shape_59.setTransform(75.5,157.925);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#00AAF4").s().p("AoCEOQhQAAAAhQIAAl7QAAhQBQAAIQFAAQBQAAAABQIAAF7QAABQhQAAg");
	this.shape_60.setTransform(75.5,158);
	this.shape_60._off = true;

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#00AAF4").s().p("AoCM0QhQAAAAhQIAA3HQAAhQBQAAIQFAAQBQAAAABQIAAXHQAABQhQAAg");
	this.shape_61.setTransform(153.5,-90);
	this.shape_61._off = true;

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#00AAF4").s().p("AoCKrQhQAAAAhQIAAy1QAAhQBQAAIQFAAQBQAAAABQIAAS1QAABQhQAAg");
	this.shape_62.setTransform(153.5,53.675);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#00AAF4").s().p("AoCI7QhQAAAAhQIAAvVQAAhQBQAAIQFAAQBQAAAABQIAAPVQAABQhQAAg");
	this.shape_63.setTransform(153.5,64.875);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#00AAF4").s().p("AoCHiQhQAAAAhQIAAsjQAAhPBQAAIQFAAQBQAAAABPIAAMjQAABQhQAAg");
	this.shape_64.setTransform(153.5,73.85);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#00AAF4").s().p("AoCGcQhQAAAAhQIAAqXQAAhQBQAAIQFAAQBQAAAABQIAAKXQAABQhQAAg");
	this.shape_65.setTransform(153.5,80.825);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#00AAF4").s().p("AoCFnQhQAAAAhQIAAotQAAhQBQAAIQFAAQBQAAAABQIAAItQAABQhQAAg");
	this.shape_66.setTransform(153.5,86.075);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#00AAF4").s().p("AoCFCQhQAAAAhQIAAnjQAAhQBQAAIQFAAQBQAAAABQIAAHjQAABQhQAAg");
	this.shape_67.setTransform(153.5,89.825);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#00AAF4").s().p("AoCEpQhQAAAAhQIAAmwQAAhQBQAAIQFAAQBQAAAABQIAAGwQAABQhQAAg");
	this.shape_68.setTransform(153.5,92.35);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#00AAF4").s().p("AoCEZQhQAAAAhQIAAmRQAAhQBQAAIQFAAQBQAAAABQIAAGRQAABQhQAAg");
	this.shape_69.setTransform(153.5,93.875);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#00AAF4").s().p("AoCERQhQAAAAhQIAAmBQAAhQBQAAIQFAAQBQAAAABQIAAGBQAABQhQAAg");
	this.shape_70.setTransform(153.5,94.675);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#00AAF4").s().p("AowEfQhQAAAAhQIAAmdQAAhQBQAAIRiAAQBQAAAABQIAAGdQAABQhQAAg");
	this.shape_71.setTransform(152.35,121.575);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#00AAF4").s().p("ApfEwQhQAAAAhQIAAm/QAAhQBQAAIS/AAQBQAAAABQIAAG/QAABQhQAAg");
	this.shape_72.setTransform(152.2,118.125);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#00AAF4").s().p("AqOFBQhQAAAAhQIAAnhQAAhQBQAAIUdAAQBQAAAABQIAAHhQAABQhQAAg");
	this.shape_73.setTransform(152.025,114.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#00AAF4").s().p("Aq8FRQhQAAAAhQIAAoCQAAhQBQAAIV5AAQBQAAAABQIAAICQAABQhQAAg");
	this.shape_74.setTransform(151.875,111.25);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#00AAF4").s().p("ArrFiQhQAAAAhQIAAojQAAhQBQAAIXXAAQBQAAAABQIAAIjQAABQhQAAg");
	this.shape_75.setTransform(151.725,107.825);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#00AAF4").s().p("AsZFzQhQAAAAhQIAApFQAAhQBQAAIYzAAQBQAAAABQIAAJFQAABQhQAAg");
	this.shape_76.setTransform(151.575,104.375);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#00AAF4").s().p("AtIGEQhQAAAAhQIAApnQAAhQBQAAIaRAAQBQAAAABQIAAJnQAABQhQAAg");
	this.shape_77.setTransform(151.4,100.95);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#00AAF4").s().p("At3GVQhPAAAAhQIAAqJQAAhQBPAAIbvAAQBQAAAABQIAAKJQAABQhQAAg");
	this.shape_78.setTransform(151.25,97.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#00AAF4").s().p("AulGmQhQAAAAhQIAAqrQAAhQBQAAIdLAAQBQAAAABQIAAKrQAABQhQAAg");
	this.shape_79.setTransform(151.1,94.075);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#00AAF4").s().p("AvTG3QhQAAAAhQIAArNQAAhQBQAAIeoAAQBQAAAABQIAALNQAABQhQAAg");
	this.shape_80.setTransform(150.95,90.625);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#00AAF4").s().p("AwCHIQhQgBAAhQIAArtQAAhQBQAAMAgFAAAQBQAAAABQIAALtQAABQhQABg");
	this.shape_81.setTransform(150.775,87.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#00AAF4").s().p("AwxHZQhQAAAAhQIAAsRQAAhPBQAAMAhjAAAQBQAAAABPIAAMRQAABQhQAAg");
	this.shape_82.setTransform(150.625,83.75);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#00AAF4").s().p("AxfHpQhQAAAAhQIAAsxQAAhQBQAAMAi/AAAQBQAAAABQIAAMxQAABQhQAAg");
	this.shape_83.setTransform(150.475,80.325);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#00AAF4").s().p("AyOH6QhQAAAAhQIAAtTQAAhQBQAAMAkdAAAQBQAAAABQIAANTQAABQhQAAg");
	this.shape_84.setTransform(150.325,76.875);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#00AAF4").s().p("Ay8ILQhRAAAAhQIAAt1QAAhQBRAAMAl6AAAQBQAAAABQIAAN1QAABQhQAAg");
	this.shape_85.setTransform(150.15,73.45);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#00AAF4").s().p("AzrIcQhQAAAAhQIAAuXQAAhQBQAAMAnXAAAQBQAAAABQIAAOXQAABQhQAAg");
	this.shape_86.setTransform(150,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1}]},11).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_21}]},22).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_32}]},5).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_41}]},55).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_51}]},6).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59,p:{x:75.5,y:157.925}}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},22).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},5).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_59,p:{x:153.5,y:94.95}}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_60}]},62).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).wait(105));
	this.timeline.addTween(cjs.Tween.get(this.shape_60).wait(159).to({_off:false},0).wait(23).to({x:38.35},0).wait(1).to({x:8.65},0).wait(1).to({x:-14.5},0).wait(1).to({x:-31.9},0).wait(1).to({x:-44.35},0).wait(1).to({x:-52.75},0).wait(1).to({x:-57.8},0).wait(1).to({x:-60.4},0).wait(1).to({x:-61.35},0).wait(1).to({x:-61.5},0).to({_off:true},5).wait(21).to({_off:false,x:153.5,y:95},0).wait(62).to({x:152.5,y:125},0).to({_off:true},1).wait(120));
	this.timeline.addTween(cjs.Tween.get(this.shape_61).wait(196).to({_off:false},0).wait(1).to({y:-54.75},0).wait(1).to({y:-26.55},0).wait(1).to({y:-4.6},0).wait(1).to({y:11.9},0).wait(1).to({y:23.75},0).wait(1).to({y:31.7},0).wait(1).to({y:36.5},0).wait(1).to({y:38.95},0).wait(1).to({y:39.85},0).wait(1).to({y:40},0).to({_off:true},1).wait(193));

	// HL1
	this.instance_11 = new lib.HL1();
	this.instance_11.setTransform(-15,125,1,1,0,0,0,150,125);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(11).to({_off:false},0).to({x:154},21,cjs.Ease.cubicOut).wait(22).to({x:150,alpha:0},7).wait(339));

	// logo
	this.instance_12 = new lib.logo();
	this.instance_12.setTransform(0,0,0.5,0.5);

	this.instance_13 = new lib.Tween1("synched",0);
	this.instance_13.setTransform(150,125);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_13}]},313).to({state:[{t:this.instance_13}]},17).wait(70));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(313).to({_off:false},0).to({x:253},17,cjs.Ease.cubicOut).wait(70));

	// stageBackground
	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("rgba(0,0,0,0)").ss(1,1,1,3,true).p("A4/1FMAx/AAAMAAAAqLMgx/AAAg");
	this.shape_87.setTransform(150,125);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("A4/VGMAAAgqLMAx/AAAMAAAAqLg");
	this.shape_88.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_88},{t:this.shape_87}]}).wait(400));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-123,-47,716,332);
// library properties:
lib.properties = {
	id: '90CE9A07CC2147BDA6C7E08CF861CD67',
	width: 300,
	height: 250,
	fps: 60,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/all.png?1788540621826", id:"all"},
		{src:"images/allIn.jpg?1788540621826", id:"allIn"},
		{src:"images/go.png?1788540621826", id:"go"},
		{src:"images/hl1.png?1788540621826", id:"hl1"},
		{src:"images/hl2.png?1788540621826", id:"hl2"},
		{src:"images/hl3.png?1788540621826", id:"hl3"},
		{src:"images/_in.png?1788540621826", id:"_in"},
		{src:"images/legal.png?1788540621826", id:"legal"},
		{src:"images/logo.png?1788540621826", id:"logo"},
		{src:"images/man.png?1788540621826", id:"man"},
		{src:"images/price.png?1788540621826", id:"price"},
		{src:"images/product.png?1788540621826", id:"product"},
		{src:"images/woman.png?1788540621826", id:"woman"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['90CE9A07CC2147BDA6C7E08CF861CD67'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;