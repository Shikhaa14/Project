function clickTag() {
    return "https://yorkathleticsmfg.com/"
}  



document.getElementById('text1').style.display = 'none'
document.getElementById('text2').style.display = 'none'
document.getElementById('text3').style.display = 'none'
document.getElementById('text4').style.display = 'none'

function main () {

    setTimeout(function one () { 
        document.getElementById('text1').style.display = 'block'
        document.getElementById('text2').style.display = 'none'
        document.getElementById('text3').style.display = 'none'
        document.getElementById('text4').style.display = 'none'
    }, 500);

    setTimeout(function two () { 
        document.getElementById('text1').style.display = 'none'
        document.getElementById('text2').style.display = 'block'
        document.getElementById('text3').style.display = 'none'
        document.getElementById('text4').style.display = 'none'
    }, 2000);

    setTimeout(function three () { 
        document.getElementById('text1').style.display = 'none'
        document.getElementById('text2').style.display = 'none'
        document.getElementById('text3').style.display = 'block'
        document.getElementById('text4').style.display = 'none'
    }, 3500);

    setTimeout(function three () { 
        document.getElementById('text1').style.display = 'none'
        document.getElementById('text2').style.display = 'none'
        document.getElementById('text3').style.display = 'none'
        document.getElementById('text4').style.display = 'block'
    }, 5000);
}


main()

setInterval(function() {
    main()

}, 6000);
