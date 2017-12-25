var gestures = require("ui/gestures");
var platform = require("tns-core-modules/platform");
var Vibrate = require("nativescript-vibrate").Vibrate;


var page;
var lbl;
var astroid1, astroid2, astroid3, astroid4, astroid5 ;
var myActionBar;
var lastXposition = 0;
var lastXpositionRotate =0;
var  lastYposition = 0;
var numTimesCalled = 0;
exports.onLoaded = onLoaded;
exports.onNavigatedTo = onNavigatedTo;
var lblNumOfLives;
var gamescore;
var dropingtime;
var astroidtopincreament;
var numOfLives;
function onNavigatedTo(myvariable){
 
}

var stopGame = false;
var timerGame;
function dropastroid(astroid, Xposition){
    gamescore = gamescore + 1;
    lblgamescore = page.getViewById("lblgamescore"); 
    lblgamescore.text = gamescore;
    dropingtime = 10;

   var astroidInterval = setInterval(function() {
            if (stopGame == true){
                clearInterval(astroidInterval);
            }

            if(astroid.top >= platform.screen.mainScreen.heightDIPs){
                clearInterval(astroidInterval);
            }
            astroid.top = astroid.top + astroidtopincreament;
            console.log("astroid1.top" + astroid1.top);
         }, dropingtime);
         if(gamescore >= 10){
            // dropingtime = dropingtime - 9;
             astroidtopincreament = gamescore / 10;
             console.log("dropingtime" + dropingtime);
         }
         astroid.left = Xposition;
}

function collision()
{
    sounds["explode"].play();
    //var vibrator = new Vibrate();
    //vibrator.vibrate(1000);
    stopGame = true;
    clearInterval(timerGame);
    lblNumOfLives = page.getViewById("lblNumOfLives"); 
    numOfLives = numOfLives - 1;   
    lblNumOfLives.text = numOfLives; 
   
    alert("You colided with Astroid").then(function() {
        if(numOfLives == 0 ){
            lblNumOfLives.text = 3;
            numOfLives = 3;
            gamescore = 0;
            console.log("lblNumOfLives" + lblNumOfLives);
        } 
        console.log("Dialog closed!");
        astroid1.top = -75;
        astroid2.top = -75;
        astroid3.top = -75;
        astroid4.top = -75;
        astroid5.top = -75;
        stopGame = false;
        runGameTimer();
        setTimeout(function(){ dropastroid(astroid1, astroid1.left) }, 1000);
        setTimeout(function(){ dropastroid(astroid2, astroid2.left) }, 3000);
        setTimeout(function(){ dropastroid(astroid3, astroid3.left) }, 7000);
        setTimeout(function(){ dropastroid(astroid4, astroid4.left) }, 10000);
        setTimeout(function(){ dropastroid(astroid5, astroid5.left) }, 20000);
        });
    

    //take live away

}


function runGameTimer(){
    timerGame = setInterval(function() {
        // check for collision
        if (isCollide(astroid1,lbl)){
            //collission occured
            console.log("collison with Astroid 1 at positiox x=" + astroid1.left + " and y= " + astroid1.top);
             collision();
        }
        if (isCollide(astroid2,lbl)){
            //collission occured
            console.log("collison with Astroid2");
             collision();
        }
        if (isCollide(astroid3,lbl)){
            //collission occured
            console.log("collison with Astroid3");
             collision();
        }
        if (isCollide(astroid4,lbl)){
            //collission occured
            console.log("collison with Astroid4");
             collision();
        }
        if (isCollide(astroid5,lbl)){
            //collission occured
            console.log("collison with Astroid2");
             collision();
        }
       
        //console.log("astroid1.top" + astroid1.top);
            if(astroid1.top >= platform.screen.mainScreen.heightDIPs){
                astroid1.top = 0;
                dropastroid(astroid1, Math.floor((Math.random() * 300 + 1)));

            }
            if(astroid2.top >= platform.screen.mainScreen.heightDIPs){
                astroid2.top = 0;
                dropastroid(astroid2, Math.floor((Math.random() * 300 + 1)));
            }
            if(astroid3.top >= platform.screen.mainScreen.heightDIPs){
                astroid3.top = 0;
                dropastroid(astroid3, Math.floor((Math.random() * 300 + 1)));
            }
            if(astroid4.top >= platform.screen.mainScreen.heightDIPs){
                astroid4.top = 0;
                dropastroid(astroid4, Math.floor((Math.random() * 300 + 1)));
            }
            if(astroid5.top >= platform.screen.mainScreen.heightDIPs){
                astroid5.top = 0;
                dropastroid(astroid5, Math.floor((Math.random() * 300 + 1)));
            }
     }, 100);
}

function isCollide(a, b) {
    
    var ay1, ay2;
    var by1, by2;
    ay1 = a.top;
    ay2 = a.top + 50;
    by1 = b.top + lbl.translateY;
    by2 = b.top + lbl.translateY + 75;

    var ax1, ax2;
    var bx1, bx2;
    ax1 = a.left;
    ax2 = a.left + 50;
    bx1 = b.left + lbl.translateX +17;
    bx2 = b.left + lbl.translateX + 57;
  
    if 
    (
    ((ay2 > by1)&&(ay2<by2)) 
    && 
    ((ax2>bx1 && ax2 < bx2) || (ax2>bx1 && ax1<bx2) )
    )
    {
        console.log("AY1 = " + ay1 + " AY2=" +  ay2);
        console.log("BY1 = " + by1 + " BY2=" +  by2);
        console.log("AX1 = " + ax1 + " AX2=" +  ax2);
        console.log("BX1 = " + bx1 + " BX2=" +  bx2);
        return true;
        
    }else{
        return false;
    }

 }

function onLoaded(args){
    var sound  = require("nativescript-sound");
    var sounds = {
        "bg": sound.create("~/music/bg.wav"),
        "explode": sound.create("http://soundbible.com/mp3/Grenade-SoundBible.com-1777900486.mp3")
    }

    var bg = sound.create("~/music/bg.wav");
    bg.play();

    page = args.object; 
    lblNumOfLives = page.getViewById("lblNumOfLives");  
    lblNumOfLives.text =  3;
    numOfLives = 3;
    gamescore = 0;
    astroidtopincreament = 1;
    myActionBar = page.getViewById('myActionBar');
    lbl = page.getViewById('lblBlock');
    astroid1 = page.getViewById('astroid1');
    astroid2 = page.getViewById('astroid2');
    astroid3 = page.getViewById('astroid3');
    astroid4 = page.getViewById('astroid4');
    astroid5 = page.getViewById('astroid5');
    lbl.top = platform.screen.mainScreen.heightDIPs - lbl.height - 150 - myActionBar.height - 25;
    lbl.left = 10;
    console.log("lbl.top" + lbl.top)
    astroid1.top = -75;
    astroid2.top = -75;
    astroid3.top = -75;
    astroid4.top = -75;
    astroid5.top = -75;
    console.log("astroid1" + astroid1.left);
    console.log("astroid2" + astroid2.left);
    console.log("astroid2translateY" + astroid2.translateY);
    console.log("astroid2heightDIPs" + astroid2.height);
     console.log("myActionBar" + myActionBar.height);
    console.log("screen width: " + platform.screen.mainScreen.widthPixels);
    console.log("screen height: " + platform.screen.mainScreen.heightPixels);
    console.log("screen width inDIPS: " + platform.screen.mainScreen.widthDIPs);
    console.log("screen height in DIPS: " + platform.screen.mainScreen.heightDIPs);
    setTimeout(function(){ dropastroid(astroid1, astroid1.left) }, 1000);
    setTimeout(function(){ dropastroid(astroid2, astroid2.left) }, 3000);
    setTimeout(function(){ dropastroid(astroid3, astroid3.left) }, 7000);
    setTimeout(function(){ dropastroid(astroid4, astroid4.left) }, 10000);
    setTimeout(function(){ dropastroid(astroid5, astroid5.left) }, 20000);



    runGameTimer();
    page.on(gestures.GestureTypes.pan, function(args){
       console.log("Pan  X: " + args.deltaX + " .... Y: " + args.deltaY + " ..... state = " + args.state);
     //console.log("lbl.translateX  = " + lbl.translateX + " and left = " + lbl.left);
        console.log("lastXpositionRotate =" + lastXpositionRotate);
        console.log("lbl.rotate  =" + lbl.rotate );
        
        if(args.deltaX > lastXpositionRotate) {
            //moving to right initially
            lbl.rotate = args.deltaX;
            lastXpositionRotate = args.deltaX;
            if(lbl.rotate >= 90){
                lbl.rotate = 90;
             }
        }
        else{
            lbl.rotate = 90 - (lastXpositionRotate - args.deltaX);
            console.log("lbl.rotate  =" + lbl.rotate );
            if((lbl.rotate <= -90) && ((lastXpositionRotate - args.deltaX)>= 180))
            {
                lbl.rotate = -90;
             }
             
        }


     
        if (args.state == 1){
            lbl.translateX = lbl.translateX + args.deltaX;
            lbl.translateY = lbl.translateY + args.deltaY;
            lastXpositionRotate = 0;
        }else if(args.state == 3){
            lastXposition = lbl.translateX;
            lastYposition = lbl.translateY;
            lbl.rotate = 0;
        }       
        else{
         
           lbl.translateX = lastXposition + args.deltaX;
           lbl.translateY =  lastYposition + args.deltaY;

            if(lbl.translateX > 300){
                lbl.translateX =  300;
            }
            if(lbl.translateX < 10){
                lbl.translateX =  10;
            }
            if(lbl.translateY > 150){
                lbl.translateY =  150;
            }
            if(lbl.translateY < -100){
                lbl.translateY =  -100;
            }


        }

        
    
    })



    

}