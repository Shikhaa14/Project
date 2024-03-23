function clickTag() {
    return "https://www.irobot.in/"
}  


document.getElementById('frame1').style.opacity = '0'

document.getElementById('container').style.opacity = '0'
document.getElementById('logo').style.opacity = '0'

document.getElementById('frame2_1').style.opacity = '0'
document.getElementById('frame2_2').style.opacity = '0'

if (document.getElementById('irobot')) {
    document.getElementById('irobot').style.right = '-200%'
}
if(document.getElementById('irobot2')){
    document.getElementById('irobot2').style.opacity = '0'
    document.getElementById('irobot2').style.transform = 'scale(.5, .5)'
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
        
    }, 2000);

    setTimeout(function four () { 
        document.getElementById('frame1').style.opacity = '0'

    }, 3500);

    setTimeout(function five () { 
        document.getElementById('frame2_1').style.opacity = '1'
        document.getElementById('frame2_1').style.transition = '1s'

        if (document.getElementById('irobot')) {
            document.getElementById('irobot').style.right = '0%'
            document.getElementById('irobot').style.opacity = '1'
            document.getElementById('irobot').style.transition = '1s'
        }
        
    }, 4500);

    setTimeout(function six (){
        document.getElementById('frame2_1').style.opacity = '0'
        if (document.getElementById('irobot')) {
            document.getElementById('irobot').style.transform = 'scale(.5 , .5)'
            document.getElementById('irobot').style.opacity = '0'
            document.getElementById('irobot').style.transition = '1s'
        }

    },6000)

    setTimeout(function six () { 
        document.getElementById('frame2_2').style.opacity = '1'
        document.getElementById('frame2_2').style.transition = '1s'

        if (document.getElementById('irobot2')) {
            document.getElementById('irobot2').style.transform = 'scale(1,1)'
            document.getElementById('irobot2').style.opacity = '1'
            document.getElementById('irobot2').style.transition = '1s'
        }
    }, 7000);

}

main()

setInterval(function() {
    
    document.getElementById('frame1').style.opacity = '0'

    document.getElementById('container').style.opacity = '0'
    document.getElementById('logo').style.opacity = '0'

    document.getElementById('frame2_1').style.opacity = '0'
    document.getElementById('frame2_2').style.opacity = '0'

    if (document.getElementById('irobot')) {
        document.getElementById('irobot').style.right = '-200%'
        document.getElementById('irobot').style.transform = 'none'
    }

    if (document.getElementById('irobot2')) {
        document.getElementById('irobot2').style.transform = 'scale(.5,.5)'
        document.getElementById('irobot2').style.opacity = '0'
        document.getElementById('irobot2').style.transition = '1s'
    }

    main()

}, 11000);