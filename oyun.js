//mobile check

// mobile check
let mobilmi = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) mobilmi = true;})(navigator.userAgent||navigator.vendor||window.opera);


//setup
var cnvs=document.createElement("canvas")
//cnvs.width=window.innerWidth-366
//cnvs.height=window.innerHeight-189
cnvs.width=window.innerWidth
cnvs.height=window.innerHeight
document.body.appendChild(cnvs)
var ctx=cnvs.getContext("2d")



//init

var bgcolor="#F3E99F"
var fgcolor="#98D8AA"
var linecolor="#FF6D60"
var linewidth=5;
var offset=-10;
var yRatio=0.4;
var t=0;
var speed=0;
var playing=true;
var pts=[];
var k={ArrowUp:0,ArrowLeft:0,ArrowRight:0}

var player=new function(){

    //player 

    this.x=cnvs.width/2
    this.y=50
    this.truck=new Image()
    this.truck.src="araba.png"
    this.rotation=0;
    this.ySpeed=0;
    this.rSpeed=0;


    //interface

    this.startBtn=new Image()
    this.startBtn.src="basla.png"

    this.leftBtn=new Image()
    this.leftBtn.src="sol.png"

    this.rightBtn=new Image()
    this.rightBtn.src="sag.png"

    this.gasBtn=new Image()
    this.gasBtn.src="gazpedal.png"

    this.voiceBtn=new Image()
    this.voiceBtn.src="muzikvar.png"

    this.noVoiceBtn=new Image()
    this.noVoiceBtn.src="muzikyok.png"


    this.drawInterface=function(){
        //interface draw
        if(playing){
            if(mobilmi){
                ctx.drawImage(this.leftBtn,25,cnvs.height-90,80,80)
                ctx.drawImage(this.rightBtn,175,cnvs.height-90,80,80)
                ctx.drawImage(this.gasBtn,cnvs.width-200,cnvs.height-90,80,80)
               
            }
            
        }else{
            ctx.textBaseline="middle"
            ctx.font="32px Impact"
            ctx.fillStyle=linecolor
            ctx.fillText("GAME OVER",cnvs.width/2,cnvs.height/3)
            ctx.drawImage(this.startBtn,cnvs.width/2-25,cnvs.height/3+30,50,50)
        }
    }

    this.draw=function(){
        ctx.drawImage(this.voiceBtn,25,30,50,50)
        ctx.drawImage(this.noVoiceBtn,80,30,50,50)
        var p1=(cnvs.height*0.9)-noise(this.x+t)*yRatio
        var p2=(cnvs.height*0.9)-noise(this.x+t+5)*yRatio
        
        var gnd=0;
        var offset=40
        if(p1-offset>this.y){
            this.ySpeed+=0.1;
        }else{
            this.ySpeed-=this.y-(p1-offset)
            this.y=p1-offset
            gnd=1
        }
        
        //fall check
        if(!playing || gnd && Math.abs(this.rotation)>Math.PI*0.5){
            playing=false
            this.rSpeed=5
            k.ArrowUp=1
            this.x-=speed*5
            ctx.textAlign="center"
            
        }

        var angle=Math.atan2((p2-offset)-this.y,(this.x+5)-this.x)
        
        if(gnd && playing){
            this.rotation-=(this.rotation-angle)*0.5;
            this.rSpeed=this.rSpeed-(angle-this.rotation)
        }
        this.rotation+=this.ySpeed*0.01;
        this.rSpeed+=(k.ArrowLeft-k.ArrowRight)*0.05
        this.rSpeed-=this.rSpeed*0.1

        this.rotation-=this.rSpeed*0.1

         if(this.rotation>Math.PI) this.rotation=-Math.PI
         if(this.rotation< -Math.PI) this.rotation=Math.PI

        this.y+=this.ySpeed

        //drawing

        
        //truck draw
        ctx.save();
        ctx.translate(this.x,this.y)
        ctx.rotate(this.rotation)
        ctx.drawImage(this.truck,-40,-40,80,80)
        ctx.restore()
    }
}


var gameTheme=new Audio("gameTheme.mp3")
if(playing){
    gameTheme.play()
    gameTheme.loop;
}
else{
    gameTheme.ended()
}
while(pts.length<254){
    if(pts.includes()!=(val = Math.floor(Math.random()*255))){
        pts.push(val)
    }
}

var noise=x=>{
    x=x*0.01%254
    return lerp(pts[Math.floor(x)],pts[Math.ceil(x)],x-Math.floor(x))
}

pts.push(pts[0])



//draw
var lerp=(a,b,t) => a+(b-a) * (1-Math.cos(t*Math.PI))/2;

var score=0;
function draw(){
    if(playing==true){
        speed-=(speed-k.ArrowUp)*0.01;
        t+=7 * speed
    }


    //bg
    ctx.fillStyle=bgcolor
    ctx.fillRect(0,0,cnvs.width,cnvs.height)


    //player
    player.draw()

    //score
    ctx.font="32px Impact"
    ctx.fillStyle=linecolor
    ctx.fillText("SCORE: "+t,cnvs.width-400,30)

    //ground
    ctx.fillStyle=fgcolor
    ctx.strokeStyle=linecolor
    ctx.lineWidth=linewidth
    ctx.beginPath()
    ctx.moveTo(offset,cnvs.height-offset)
  

    for(let i=offset;i<cnvs.width-offset;i++){
        ctx.lineTo(i,(cnvs.height*0.9)-noise(i+t)*yRatio)  
    }


    ctx.lineTo(cnvs.width-offset,cnvs.height-offset)

    ctx.closePath()
    ctx.fill()
    ctx.stroke()
    player.drawInterface()
   
    console.log(k)
    requestAnimationFrame(draw)
}

draw()
if(mobilmi){
    cnvs.addEventListener("touchstart",handleStart,false)
    cnvs.addEventListener("touchend",handleEnd,false)

    function handleStart(evt){
        evt.preventDefault();
        var touches=evt.changedTouches
        for(let i=0;i<touches.length;i++){
            var touch=touches[i];
            //console.log(touch.pageX+ " : "+ touch.pageY)
            checkBtnPress(touch.pageX,touch.pageY)
        }
    }
    
    function handleEnd(evt){
        evt.preventDefault();
        var touches=evt.changedTouches
        for(let i=0;i<touches.length;i++){
            var touch=touches[i];
           // console.log(touch.pageX+ " : "+ touch.pageY)
           checkBtnRelease(touch.pageX,touch.pageY)
        }
    }
    
}else{
   
 //desktop controls

cnvs.addEventListener("click",handleClick,false)
function handleClick(evt){
    console.log(evt)
    //console.log(evt.clientX+ " : "+ evt.clientY)
    checkBtnPress(evt.clientX,evt.clientY)
    }   
    onkeydown= d=> k[d.key]=1;
    onkeyup= d=> k[d.key]=0;

}

window.onresize=function(){
    window.location.reload()
}



function checkBtnPress(x,y){
    if(x>(cnvs.width/2-25)  && x<(cnvs.width/2+25) && y >cnvs.height/3+30 && y<cnvs.height/3+80 &&  playing==false){
        window.location.reload()
    }
    if(x>(25)  && x<(25+80) &&y>cnvs.height-90 && y<cnvs.height-90+80 && playing ){
       k.ArrowLeft=1;
    }
    if(x>(175)  && x<(175+80) &&  y>cnvs.height-90 && y<cnvs.height-90+80 && playing){
       k.ArrowRight=1
    }
    if(x>(cnvs.width-200)  && x<(cnvs.width-200+80) && y >cnvs.height-90 && y<cnvs.height-90+80 && playing){
       k.ArrowUp=1;
    }
    if(x>25 && x<75 && y >30 && y<80){
        gameTheme.play();
        gameTheme.loop();
    }
    if(x>80  && x<130 && y >30 && y<80){
        gameTheme.pause();
        gameTheme.currentTime=0
    }
}

function checkBtnRelease(x,y){
    // if(x>(cnvs.width/2-25)  && x<(cnvs.width/2+25) && y >cnvs.height/3+30 && y<cnvs.height/3+80 &&  playing==false){
    //     window.location.reload()
    // }
    if(x>(25)  && x<(25+80) &&y>cnvs.height-90 && y<cnvs.height-90+80 && playing ){
       k.ArrowLeft=1;
    }
    if(x>(175)  && x<(175+80) &&  y>cnvs.height-90 && y<cnvs.height-90+80 && playing){
       k.ArrowRight=1
    }
    if(x>(cnvs.width-200)  && x<(cnvs.width-200+80) && y >cnvs.height-90 && y<cnvs.height-90+80 && playing){
       k.ArrowUp=1;
    }
}