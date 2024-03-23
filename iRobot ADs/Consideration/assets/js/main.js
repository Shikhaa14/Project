function clickTag() {
    return "https://www.irobot.in/"
}  


document.getElementById('frame1').style.opacity = '0'

document.getElementById('container').style.opacity = '0'
document.getElementById('logo').style.opacity = '0'

document.getElementById('frame2_1').style.opacity = '0'
document.getElementById('frame2_2').style.opacity = '0'
document.getElementById('frame2_3').style.opacity = '0'

if (document.getElementById('irobot')) {
    document.getElementById('irobot').style.right = '-190%'
}
if(document.getElementById('lirobot2')){
    document.getElementById('lirobot2').style.left = '-120%'
}
if(document.getElementById('rirobot2')){
    document.getElementById('rirobot2').style.right = '-100%'
}
if(document.getElementById('irobot320x50')){
    document.getElementById('irobot320x50').style.right = '-100%'
}
if(document.getElementById('rirobot2_320x50')){
    document.getElementById('rirobot2_320x50').style.right = '-100%'
}

function main () {

    setTimeout(function one () { 
        document.getElementById('container').style.opacity = '1'
        document.getElementById('container').style.transition = '1s'
    }, 500);

    setTimeout(function two () { 
        document.getElementById('logo').style.opacity = '1'
        document.getElementById('logo').style.transition = '1s'
    }, 1000);
    
    setTimeout(function three () { 
        document.getElementById('frame1').style.opacity = '1'
        document.getElementById('frame1').style.transition = '1s'
        if (document.getElementById('irobot')){
            document.getElementById('irobot').style.right = '0'
            document.getElementById('irobot').style.zIndex = '99'
            document.getElementById('irobot').style.transition = '2s'
        }
        if(document.getElementById('irobot320x50'))
        {
            document.getElementById('irobot320x50').style.right = '31%'
            document.getElementById('irobot320x50').style.zIndex = '99'
            document.getElementById('irobot320x50').style.transition = '2s'
        }
    }, 2000);

    setTimeout(function four () { 
        document.getElementById('frame1').style.opacity = '0'
        if(document.getElementById('irobot')) document.getElementById('irobot').style.right = '-190%'
        if(document.getElementById('irobot320x50')) document.getElementById('irobot320x50').style.right = '-100%'
    }, 5000);

    setTimeout(function five () { 
        document.getElementById('frame2_1').style.opacity = '1'
        document.getElementById('frame2_1').style.transition = '1s'
    }, 6000);

    setTimeout(function six (){
        if (document.getElementById('lirobot2')) document.getElementById('lirobot2').style.left = '25%'
        if (document.getElementById('lirobot2')) document.getElementById('lirobot2').style.transition = '4s'
        if (document.getElementById('rirobot2')) document.getElementById('rirobot2').style.right = '-15%'
        if (document.getElementById('rirobot2')) document.getElementById('rirobot2').style.transition = '4s'
        if (document.getElementById('rirobot2_320x50')) document.getElementById('rirobot2_320x50').style.right = '0%'
        if (document.getElementById('rirobot2_320x50')) document.getElementById('rirobot2_320x50').style.transition = '3s'
    },6500)

    setTimeout(function six () { 
        document.getElementById('frame2_1').style.opacity = '0'
        document.getElementById('frame2_2').style.opacity = '1'
        document.getElementById('frame2_2').style.transition = '1s'
        document.getElementById('frame2_3').style.opacity = '1'
        document.getElementById('frame2_3').style.transition = '1s'
    }, 8500);

}

main()

setInterval(function() {
    
    document.getElementById('frame1').style.opacity = '0'

    document.getElementById('container').style.opacity = '0'
    document.getElementById('logo').style.opacity = '0'

    document.getElementById('frame2_1').style.opacity = '0'
    document.getElementById('frame2_2').style.opacity = '0'
    document.getElementById('frame2_3').style.opacity = '0'

    if (document.getElementById('irobot')) document.getElementById('irobot').style.right = '-190%'
    if (document.getElementById('rirobot2')) document.getElementById('rirobot2').style.right = '-100%'
    if (document.getElementById('lirobot2')) document.getElementById('lirobot2').style.left = '-120%'
    if(document.getElementById('irobot320x50')) document.getElementById('irobot320x50').style.right = '-100%'
    if(document.getElementById('rirobot2_320x50')) document.getElementById('rirobot2_320x50').style.right = '-100%'

    main()

}, 13000);