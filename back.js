(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {};

// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#FFFFFF",
	webfonts: {},
	manifest: []
};



lib.webfontAvailable = function(family) {
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.BackBackLeg = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BackFrontLeg = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BlueFlowers01 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BlueFlowers02 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BlueFlowers1 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BlueFlowers2 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BodyBtm = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BodyTop = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Branch = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.EarBack = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.EarBack_1 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.EarFront = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.EarFront_1 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Flowers = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.FrontBackLeg = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.FrontFrontLeg = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Head = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Head_1 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Leaf1 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Leaf1_1 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Leaf1_2 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Leaf1_3 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.Leaf1_4 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Leaf2 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Leaf2_1 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Leaf2_2 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.Leaf2_3 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Leaf2_4 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.Leaf3 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.Leaf3_1 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Leaf3_2 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.Leaf3_3 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.Mixed = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.Mixed_1 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.PinkFlowers = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.Rose1 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.Rose2 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.Rose1_1 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.Rose2_1 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.Rose3 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.Rose03 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.SmallFlowers01 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.SmallRoses03 = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.YellowFlowers = function() {
	this.spriteSheet = ss["HPTO_Announcement_VA_V1_Back_Animated_atlas_"];
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.Mixed_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Mixed();
	this.instance.setTransform(0,0,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,146.6,120);


(lib.L3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Leaf3();
	this.instance.setTransform(0,0,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,62.9);


(lib.L2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Leaf2();
	this.instance.setTransform(0,0,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.6,23.5);


(lib.L1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Leaf1();
	this.instance.setTransform(0,0,0.533,0.533);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.1,40.5);


(lib.YF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.YellowFlowers();
	this.instance.setTransform(0,0,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,43.5);


(lib.Mixed_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Mixed_1();
	this.instance_1.setTransform(0,0,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,154.6,283.8);


(lib.L2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Leaf2_1();
	this.instance_1.setTransform(0,0,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.3,15.7);


(lib.L1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Leaf1_1();
	this.instance.setTransform(0,0,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,52.5);


(lib.BF2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BlueFlowers2();
	this.instance.setTransform(0,0,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.6,33.8);


(lib.BF1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BlueFlowers1();
	this.instance.setTransform(0,0,0.604,0.604);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,29.6);


(lib.L3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Leaf2_2();
	this.instance_1.setTransform(0,0,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.4,26);


(lib.L2_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Leaf1_2();
	this.instance_2.setTransform(0,0,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.3,43.8);


(lib.L1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Leaf3_1();
	this.instance_1.setTransform(0,0,0.684,0.684);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.8,68.4);


(lib.Head_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Head_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,110,95);


(lib.EarFront_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.EarFront_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,123,44);


(lib.EarBack_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.EarBack_1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,115,57);


(lib.Head_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.Head();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,112,87);


(lib.FrontFrontLeg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FrontFrontLeg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,82);


(lib.FrontBackLeg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FrontBackLeg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,143,82);


(lib.EarFront_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.EarFront();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({rotation:-3,x:-1.6,y:5.2},0).wait(1).to({rotation:-7,x:-3.3,y:12.2},0).wait(1).to({rotation:-10.2,x:-4.3,y:17.9},0).wait(2).to({rotation:-7,x:-3.3,y:12.2},0).wait(1).to({rotation:-3,x:-1.6,y:5.2},0).wait(1).to({rotation:0,x:0,y:0},0).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,106,40);


(lib.EarBack_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.EarBack();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30).to({rotation:-3.5,x:-4.8,y:5.6},0).wait(1).to({rotation:-7.2,x:-9.7,y:11.9},0).wait(1).to({rotation:-10.1,x:-13.2,y:17.1},0).wait(2).to({rotation:-7.2,x:-9.7,y:11.9},0).wait(1).to({rotation:-3.5,x:-4.8,y:5.6},0).wait(1).to({rotation:0,x:0,y:0},0).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,90,83);


(lib.BodyTop_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BodyTop();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206,137);


(lib.BodyBtm_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BodyBtm();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,194,185);


(lib.BackFrontLeg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BackFrontLeg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,105);


(lib.BackBackLeg_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BackBackLeg();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,137,105);


(lib.R3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Rose3();
	this.instance.setTransform(20.5,46.4,0.351,0.351,-134.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.5,46.4);


(lib.R2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Rose2_1();
	this.instance.setTransform(21.7,47,0.351,0.351,-134.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,47);


(lib.R1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Rose1_1();
	this.instance.setTransform(18.5,44.4,0.351,0.351,-134.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.5,44.4);


(lib.L3_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Leaf2_3();
	this.instance_2.setTransform(15.3,26.4,0.351,0.351,-134.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.3,26.4);


(lib.L2_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Leaf3_2();
	this.instance_3.setTransform(58,73.8,0.351,0.351,-167.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.4,73.8);


(lib.L1_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.Leaf1_3();
	this.instance_2.setTransform(42.5,28.6,0.351,0.351,-171.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.7,28.6);


(lib.Leaf3_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Leaf3_3();
	this.instance.setTransform(0,0,0.68,0.68);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206,204.7);


(lib.L2_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_4 = new lib.Leaf2_4();
	this.instance_4.setTransform(0,0,0.68,0.68);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.2,169.3);


(lib.L1_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.Leaf1_4();
	this.instance_3.setTransform(0,0,0.68,0.68);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.6,166.6);


(lib.Leaf3_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.L3();
	this.instance_1.setTransform(32,1,1,1,0,0,0,32,1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-7.5,x:32.1},29).to({rotation:0,x:32},31).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,62.9);


(lib.Leaf2_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.L2();
	this.instance.setTransform(2.3,17.9,1,1,0,0,0,2.3,17.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:10},29).to({rotation:0},31).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.6,23.5);


(lib.Leaf1_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.L1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({rotation:-9.2},30).to({rotation:0},31).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.1,40.5);


(lib.YellowFlowers_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.YF();
	this.instance.setTransform(27.4,0,1,1,0,0,0,27.4,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-5.7},29).to({rotation:0},31).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55,43.5);


(lib.Leaf2_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.L2_1();
	this.instance_1.setTransform(2.4,3.2,1,1,0,0,0,2.4,3.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({rotation:-7.2},30).to({rotation:0},31).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.3,15.7);


(lib.Leaf1_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.L1_1();
	this.instance_1.setTransform(2,36.1,1,1,0,0,0,2,36.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:5.7},29).to({rotation:0},31).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,60.4,52.5);


(lib.BlueFlowers2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BF2();
	this.instance.setTransform(34.7,32.2,1,1,0,0,0,34.7,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:32.3,rotation:6.7,y:32.3},29).to({regY:32.2,rotation:0,y:32.2},31).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,35.6,33.8);


(lib.BlueFlowers1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.BF1();
	this.instance.setTransform(26.5,27.9,1,1,0,0,0,26.5,27.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({rotation:-6.2},30).to({rotation:0},31).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29,29.6);


(lib.Leaf3_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.L3_1();
	this.instance_2.setTransform(0.9,20.4,1,1,0,0,0,0.9,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(9).to({rotation:-7.2},30).to({rotation:0},31).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.4,26);


(lib.Leaf2_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.L2_2();
	this.instance_2.setTransform(2.2,1.4,1,1,0,0,0,2.2,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({rotation:15,x:2.3},29).to({rotation:0,x:2.2},30).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.3,43.8);


(lib.Leaf1_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_2 = new lib.L1_2();
	this.instance_2.setTransform(34.9,1.7,1,1,0,0,0,34.9,1.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:1.8,rotation:-7,y:1.8},29).to({regY:1.7,rotation:0,y:1.7},31).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.8,68.4);


(lib.BunnyTurningHead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Head Looking Left
	this.instance = new lib.EarFront_2();
	this.instance.setTransform(1050.1,441.1,0.631,1,0,0,0,61.6,22);

	this.instance_1 = new lib.EarBack_2();
	this.instance_1.setTransform(1045,415.6,0.631,1,0,0,0,57.6,28.5);

	this.instance_2 = new lib.Head_2();
	this.instance_2.setTransform(992.9,463.6,0.631,1,0,0,0,55,47.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2,p:{scaleX:0.631,x:992.9}},{t:this.instance_1,p:{regX:57.6,scaleX:0.631,x:1045}},{t:this.instance,p:{regX:61.6,scaleX:0.631,x:1050.1}}]},31).to({state:[{t:this.instance_2,p:{scaleX:1,x:985.2}},{t:this.instance_1,p:{regX:57.5,scaleX:1,x:1067.7}},{t:this.instance,p:{regX:61.5,scaleX:1,x:1075.7}}]},1).to({state:[{t:this.instance_2,p:{scaleX:0.805,x:984.5}},{t:this.instance_1,p:{regX:57.6,scaleX:0.805,x:1051}},{t:this.instance,p:{regX:61.6,scaleX:0.805,x:1057.3}}]},97).to({state:[]},1).wait(99));

	// Head Looking Right
	this.instance_3 = new lib.EarBack_3();
	this.instance_3.setTransform(967.2,414.6,1,1,0,0,0,45,41.5);

	this.instance_4 = new lib.EarFront_3();
	this.instance_4.setTransform(949.2,453.1,1,1,0,0,0,53,20);

	this.instance_5 = new lib.Head_3();
	this.instance_5.setTransform(1013.2,476.6,1,1,0,0,0,56,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{scaleX:1,x:1013.2}},{t:this.instance_4,p:{scaleX:1,x:949.2}},{t:this.instance_3,p:{scaleX:1,x:967.2}}]}).to({state:[{t:this.instance_5,p:{scaleX:1,x:1013.2}},{t:this.instance_4,p:{scaleX:1,x:949.2}},{t:this.instance_3,p:{scaleX:1,x:967.2}}]},15).to({state:[{t:this.instance_5,p:{scaleX:0.653,x:1007.6}},{t:this.instance_4,p:{scaleX:0.653,x:965.9}},{t:this.instance_3,p:{scaleX:0.653,x:977.6}}]},15).to({state:[]},1).to({state:[{t:this.instance_5,p:{scaleX:0.653,x:1007.6}},{t:this.instance_4,p:{scaleX:0.653,x:965.9}},{t:this.instance_3,p:{scaleX:0.653,x:977.6}}]},99).to({state:[{t:this.instance_5,p:{scaleX:1,x:1013.2}},{t:this.instance_4,p:{scaleX:1,x:949.2}},{t:this.instance_3,p:{scaleX:1,x:967.2}}]},1).wait(98));

	// Bunny Body
	this.instance_6 = new lib.FrontFrontLeg_1();
	this.instance_6.setTransform(994.7,559.1,1,1,0,0,0,71.5,41);

	this.instance_7 = new lib.BackFrontLeg_1();
	this.instance_7.setTransform(852.7,634.6,1,1,0,0,0,68.5,52.5);

	this.instance_8 = new lib.BodyTop_1();
	this.instance_8.setTransform(918.2,537.6,1,1,0,0,0,103,68.5);

	this.instance_9 = new lib.BodyBtm_1();
	this.instance_9.setTransform(854.2,570.6,1,1,0,0,0,97,92.5);

	this.instance_10 = new lib.FrontBackLeg_1();
	this.instance_10.setTransform(994.7,559.1,1,1,0,0,0,71.5,41);

	this.instance_11 = new lib.BackBackLeg_1();
	this.instance_11.setTransform(852.7,594.6,1,1,0,0,0,68.5,52.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},15).wait(214));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(757.2,373.1,312,314);


(lib.Rose3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.R3();
	this.instance.setTransform(27.9,2.8,1,1,0,0,0,27.9,2.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.2},29).to({rotation:0},31).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46.5,46.4);


(lib.Rose1_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.R1();
	this.instance.setTransform(37.2,14,1,1,0,0,0,37.2,14);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-3.2},29).to({rotation:0},31).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,44.5,44.4);


(lib.Rose = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.R2();
	this.instance.setTransform(33.5,10.6,1,1,0,0,0,33.5,10.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:4.2},40).to({rotation:0},40).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47,47);


(lib.Leaf3_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.L3_2();
	this.instance.setTransform(10.2,2.6,1,1,0,0,0,10.2,2.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-9.7},29).to({rotation:0},31).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.3,26.4);


(lib.Leaf2_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.L2_3();
	this.instance.setTransform(39.2,6.8,1,1,0,0,0,39.2,6.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:-6.7},29).to({rotation:0},31).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,71.4,73.8);


(lib.Leaf1_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.L1_3();
	this.instance.setTransform(44.1,7.5,1,1,0,0,0,44.1,7.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({regX:44,rotation:-6.7},30).to({regX:44.1,rotation:0},31).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.7,28.6);


(lib.Leaf2_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.L2_4();
	this.instance_3.setTransform(55,163.8,1,1,0,0,0,55,163.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({rotation:-8.2},50).to({rotation:0},50).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,97.2,169.3);


(lib.Leaf1_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_3 = new lib.L1_4();
	this.instance_3.setTransform(16.2,157.2,1,1,0,0,0,16.2,157.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(10).to({regY:157.3,rotation:7,x:16.3,y:157.3},50).to({regY:157.2,rotation:0,x:16.2,y:157.2},51).wait(5));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.6,166.6);


// stage content:



(lib.HPTO_Announcement_VA_V1_Back_Animated = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Non Animated L
	this.instance = new lib.Rose1();
	this.instance.setTransform(517.8,280.7,0.581,0.581,-21.4);

	this.instance_1 = new lib.Rose2();
	this.instance_1.setTransform(397.8,311.9,0.633,0.633,-25.2);

	this.instance_2 = new lib.SmallRoses03();
	this.instance_2.setTransform(477.1,277.7,0.433,0.433,-39.3);

	this.instance_3 = new lib.BlueFlowers01();
	this.instance_3.setTransform(565.8,288.2,0.16,0.16,105);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EiV7BUXMAAAiSuMEr5AAAMAAACSug");
	mask.setTransform(959.9,540);

	// A: Bunny
	this.instance_4 = new lib.BunnyTurningHead();
	this.instance_4.setTransform(1421.9,277.1,0.122,0.122,0,-15,165,913,530.5);

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1));

	// Non Animated R
	this.instance_5 = new lib.BlueFlowers01();
	this.instance_5.setTransform(1726.7,213,0.191,0.191,-128.7);

	this.instance_6 = new lib.SmallRoses03();
	this.instance_6.setTransform(1788.2,158.6,0.451,0.451,111.7);

	this.instance_7 = new lib.SmallFlowers01();
	this.instance_7.setTransform(1622.8,260.6,0.31,0.31,-135);

	this.instance_8 = new lib.Rose1();
	this.instance_8.setTransform(1583.7,252.3,0.689,0.689,152.3);

	this.instance_9 = new lib.Rose03();
	this.instance_9.setTransform(1390.4,221.2,0.503,0.503,-139.3);

	this.instance_10 = new lib.BlueFlowers02();
	this.instance_10.setTransform(1427.2,219.1,0.365,0.365,23.5);

	this.instance_11 = new lib.PinkFlowers();
	this.instance_11.setTransform(1751.4,140.8,0.191,0.19,120);

	this.instance_12 = new lib.PinkFlowers();
	this.instance_12.setTransform(1546,343.1,0.22,0.219,-180);

	this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// A: Small Roses R
	this.instance_13 = new lib.Leaf1_8();
	this.instance_13.setTransform(1697.4,193.2,1.13,1.13,0,104.8,-75.2,22.9,14.2);

	this.instance_14 = new lib.Leaf1_8();
	this.instance_14.setTransform(1553.5,220.3,1.13,1.13,-44.8,0,0,22.8,14.2);

	this.instance_15 = new lib.Leaf2_8();
	this.instance_15.setTransform(1545.5,157,1.13,1.13,0,44.8,-135.2,35.7,36.9);

	this.instance_16 = new lib.Leaf3_7();
	this.instance_16.setTransform(1576.7,194.1,1.13,1.13,-44.8,0,0,13.1,13.2);

	this.instance_17 = new lib.Rose3_1();
	this.instance_17.setTransform(1608.4,273.2,1.13,1.13,-44.8,0,0,23.2,23.2);

	this.instance_18 = new lib.Rose();
	this.instance_18.setTransform(1583.7,298.2,1.13,1.13,-44.8,0,0,23.5,23.6);

	this.instance_19 = new lib.Rose1_2();
	this.instance_19.setTransform(1552.9,286.4,1.13,1.13,-44.8,0,0,22.3,22.2);

	this.instance_20 = new lib.Branch();
	this.instance_20.setTransform(1599,283.3,0.397,0.397,-179.5);

	this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]}).wait(1));

	// A: Small Roses R
	this.instance_21 = new lib.Leaf1_8();
	this.instance_21.setTransform(1448.8,149.8,1,1,0,0,0,22.8,14.3);

	this.instance_22 = new lib.Leaf2_8();
	this.instance_22.setTransform(1456.2,184.3,1,1,0,0,0,35.7,36.9);

	this.instance_23 = new lib.Leaf3_7();
	this.instance_23.setTransform(1472.7,155.4,1,1,0,0,0,13.2,13.2);

	this.instance_24 = new lib.Rose3_1();
	this.instance_24.setTransform(1423.1,244.4,1,1,0,0,0,23.2,23.2);

	this.instance_25 = new lib.Rose();
	this.instance_25.setTransform(1392,244.6,1,1,0,0,0,23.4,23.4);

	this.instance_26 = new lib.Rose1_2();
	this.instance_26.setTransform(1380,218,1,1,0,0,0,22.2,22.2);

	this.instance_27 = new lib.Branch();
	this.instance_27.setTransform(1411,245,0.351,0.351,-134.6);

	this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21}]}).wait(1));

	// A: Mixed 3 L
	this.instance_28 = new lib.Leaf3_5();
	this.instance_28.setTransform(380.1,164.3,1,1,0,0,0,20.2,31.4);

	this.instance_29 = new lib.Leaf1_5();
	this.instance_29.setTransform(460.1,182.3,1,1,0,0,0,17.1,20.2);

	this.instance_30 = new lib.Leaf2_5();
	this.instance_30.setTransform(469.7,152.4,1,1,0,0,0,24.8,11.7);

	this.instance_31 = new lib.Mixed_2();
	this.instance_31.setTransform(418.7,143.2,1,1,0,0,0,73.3,60);

	this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28}]}).wait(1));

	// A: Mixed 2 L
	this.instance_32 = new lib.Mixed_3();
	this.instance_32.setTransform(320.4,181.9,1,1,0,0,0,77.2,141.8);

	this.instance_33 = new lib.BlueFlowers2_1();
	this.instance_33.setTransform(244.5,249.6,1,1,0,0,0,17.8,16.9);

	this.instance_34 = new lib.BlueFlowers1_1();
	this.instance_34.setTransform(270.3,217.9,1,1,0,0,0,14.5,14.8);

	this.instance_35 = new lib.Leaf2_6();
	this.instance_35.setTransform(406.2,280.5,1,1,0,0,0,22.7,7.9);

	this.instance_36 = new lib.Leaf1_6();
	this.instance_36.setTransform(390.6,241.2,1,1,0,0,0,30.2,26.2);

	this.instance_37 = new lib.YellowFlowers_1();
	this.instance_37.setTransform(331.8,324.3,1,1,0,0,0,27.4,21.7);

	this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32}]}).wait(1));

	// A: Leaf Small
	this.instance_38 = new lib.Leaf2_9();
	this.instance_38.setTransform(1629.1,220.1,0.596,0.596,180,0,0,48.6,84.7);

	this.instance_39 = new lib.Leaf1_9();
	this.instance_39.setTransform(1604.9,223,0.596,0.596,180,0,0,22.8,83.2);

	this.instance_40 = new lib.Leaf3_4();
	this.instance_40.setTransform(1607.5,186,0.596,0.596,180,0,0,103,102.3);

	this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_38}]}).wait(1));

	// A: Mixed 1 L
	this.instance_41 = new lib.Flowers();
	this.instance_41.setTransform(-3,65,0.684,0.684);

	this.instance_42 = new lib.Leaf3_6();
	this.instance_42.setTransform(206.3,204,1,1,0,0,0,26.7,13);

	this.instance_43 = new lib.Leaf2_7();
	this.instance_43.setTransform(197.7,234.9,1,1,0,0,0,18.1,21.9);

	this.instance_44 = new lib.Leaf1_7();
	this.instance_44.setTransform(117.6,215.7,1,1,0,0,0,21.9,34.2);

	this.instance_41.mask = this.instance_42.mask = this.instance_43.mask = this.instance_44.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960.3,680.8,1801,370.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
