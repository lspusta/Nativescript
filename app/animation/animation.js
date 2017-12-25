var animation = require("ui/animation");
var enums = require("ui/enums");
var frameModule = require("tns-core-modules/ui/frame");
var gestures = require("ui/gestures");

var page;
var lblChristimas1;
var lblChristimas2;
var lblChristimas3;
var lblChristimas4;
var lblChristimas5;
var lblChristimas6;
var lblChristimas7;
var lblChristimas8;
var lblChristimas9;
var lblChristimas10;
var lblChristimas11;
var lblChristimas12;
var lblChristimas13;
var lblChristimas14;
var btnStart;




function onNavigatingTo(args){

}

exports.onPageLoaded = onPageLoaded;

exports.gotoGestures = gotoGestures;

function gotoGestures(args){
    // console.log("got here");
    var navigatioEntry ={
        moduleName: "gestures/gestures",
        animated: true,
        transition: {
            name: "slide",
            duration: 500,
            curve: "spring"
        }
    }
   frameModule.topmost().navigate(navigatioEntry);

 //simple navigation
 //  frameModule.topmost().navigate("gestures/gestures");

 //to go back
 //frameModule.topmost().goBack();
}

exports.showhello = function(args){


    var animations;
    btnStart = page.getViewById("btnStart");
    btnStart.visibility = "collapsed";
if (lblChristimas1.translateY == 455){
    animations = [
        {target: lblChristimas1, scale: {x: 1, y:1}, translate: { x: 0, y: 10 },duration: 6000, delay: 0, curve: enums.AnimationCurve.spring },
        {target: lblChristimas2, scale: {x: 1, y:1}, translate: { x: 10, y: 10 },duration: 6000, delay: 200, curve: enums.AnimationCurve.spring },
        {target: lblChristimas3, scale: {x: 1, y:1}, translate: { x: 20, y: 10 },duration: 6000, delay: 400, curve: enums.AnimationCurve.spring },
        {target: lblChristimas4, scale: {x: 1, y:1}, translate: { x: 30, y: 10 },duration: 6000, delay: 600, curve: enums.AnimationCurve.spring },
        {target: lblChristimas5, scale: {x: 1, y:1},  translate: { x: 40, y: 10 },duration: 6000, delay: 800, curve: enums.AnimationCurve.spring },
        {target: lblChristimas6, scale: {x: 1, y:1}, translate: { x: 50, y: 10 },duration: 6000, delay: 900, curve: enums.AnimationCurve.spring },
        {target: lblChristimas7, scale: {x: 1, y:1}, translate: { x: 60, y: 10 },duration: 6000, delay: 1000, curve: enums.AnimationCurve.spring },
        {target: lblChristimas8, scale: {x: 1, y:1}, translate: { x: 70, y: 10 },duration: 6000, delay: 1100, curve: enums.AnimationCurve.spring },
        {target: lblChristimas9, scale: {x: 1, y:1}, translate: { x: 80, y: 10 },duration: 6000, delay: 1200, curve: enums.AnimationCurve.spring },
        {target: lblChristimas10, scale: {x: 1, y:1},  translate: { x: 90, y: 10 },duration: 6000, delay: 1300, curve: enums.AnimationCurve.spring },
        {target: lblChristimas11, scale: {x: 1, y:1}, translate: { x: 100, y: 10 },duration: 6000, delay: 1400, curve: enums.AnimationCurve.spring },
        {target: lblChristimas12, scale: {x: 1, y:1}, translate: { x: 110, y: 10 },duration: 6000, delay: 1500, curve: enums.AnimationCurve.spring },
        {target: lblChristimas13, scale: {x: 1, y:1}, translate: { x: 120, y: 10 },duration: 6000, delay: 1600, curve: enums.AnimationCurve.spring },
        {target: lblChristimas14, scale: {x: 1, y:1}, translate: { x: 130, y: 10 },duration: 6000, delay: 1700, curve: enums.AnimationCurve.spring },
    ];

}else{
    animations = [
        {target: lblChristimas1, translate: { x: 0, y: 455 },duration: 6000, delay: 0, curve: enums.AnimationCurve.spring },
        {target: lblChristimas2, translate: { x: 0, y: 455 },duration: 6000, delay: 200, curve: enums.AnimationCurve.spring },
        {target: lblChristimas3, translate: { x: 0, y: 455 },duration: 6000, delay: 400, curve: enums.AnimationCurve.spring },
        {target: lblChristimas4, translate: { x: 0, y: 455 },duration: 6000, delay: 600, curve: enums.AnimationCurve.spring },
        {target: lblChristimas5, translate: { x: 0, y: 455 },duration: 6000, delay: 800, curve: enums.AnimationCurve.spring },
        {target: lblChristimas6, translate: { x: 0, y: 455 },duration: 6000, delay: 900, curve: enums.AnimationCurve.spring, },
        {target: lblChristimas7, translate: { x: 0, y: 455 },duration: 6000, delay: 1000, curve: enums.AnimationCurve.spring },
        {target: lblChristimas8, translate: { x: 0, y: 455 },duration: 6000, delay: 1100, curve: enums.AnimationCurve.spring },
        {target: lblChristimas9, translate: { x: 0, y: 455 },duration: 6000, delay: 1200, curve: enums.AnimationCurve.spring },
        {target: lblChristimas10, translate: { x: 0, y: 455 },duration: 6000, delay: 1300, curve: enums.AnimationCurve.spring },
        {target: lblChristimas11, translate: { x: 0, y: 455 },duration: 6000, delay: 1400, curve: enums.AnimationCurve.spring, },
        {target: lblChristimas12, translate: { x: 0, y: 455 },duration: 6000, delay: 1500, curve: enums.AnimationCurve.spring },
        {target: lblChristimas13, translate: { x: 0, y: 455 },duration: 6000, delay: 1600, curve: enums.AnimationCurve.spring },
        {target: lblChristimas14, translate: { x: 0, y: 455 },duration: 6000, delay: 1700, curve: enums.AnimationCurve.spring },
        
    ];

}
    
    var a = new animation.Animation(animations);
    a.play().then(function (){
        btnStart.visibility = "visible";
    });
}

function onPageLoaded(args) {
    console.log("i got here")
    page = args.object;

    lblChristimas1 = page.getViewById("lblChristimas1");
    lblChristimas2 = page.getViewById("lblChristimas2");
    lblChristimas3 = page.getViewById("lblChristimas3");
    lblChristimas4 = page.getViewById("lblChristimas4");
    lblChristimas5 = page.getViewById("lblChristimas5");
    lblChristimas6 = page.getViewById("lblChristimas6");
    lblChristimas7 = page.getViewById("lblChristimas7");
    lblChristimas8 = page.getViewById("lblChristimas8");
    lblChristimas9 = page.getViewById("lblChristimas9");
    lblChristimas10 = page.getViewById("lblChristimas10");
    lblChristimas11 = page.getViewById("lblChristimas11");
    lblChristimas12 = page.getViewById("lblChristimas12");
    lblChristimas13 = page.getViewById("lblChristimas13");
    lblChristimas14 = page.getViewById("lblChristimas14");
    lblChristimas5.translateX = -10;

    lblChristimas1.animate({translate: {x : 0, y:10},duration: 3000});
    lblChristimas2.animate({translate: {x : 10, y:10},duration: 3000});
    lblChristimas3.animate({translate: {x : 20, y:10},duration: 3000});
    lblChristimas4.animate({translate: {x : 30, y:10},duration: 3000}); 
    lblChristimas5.animate({translate : {x : 40, y:10},duration: 3000});
    lblChristimas6.animate({translate: {x : 50, y:10},duration: 3000});
    lblChristimas7.animate({translate: {x : 60, y:10},duration: 3000});
    lblChristimas8.animate({translate: {x : 70, y:10},duration: 3000});
    lblChristimas9.animate({translate: {x : 80, y:10},duration: 3000}); 
    lblChristimas10.animate({translate : {x : 90, y:10},duration: 3000});
    lblChristimas11.animate({translate: {x : 100, y:10},duration: 3000});
    lblChristimas12.animate({translate: {x : 110, y:10},duration: 3000});
    lblChristimas13.animate({translate: {x : 120, y:10},duration: 3000});
    lblChristimas14.animate({translate: {x : 130, y:10},duration: 3000}); 
    
    
}
exports.toggle = function() {
	
}