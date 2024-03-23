function clickTag() {
    return "https://york.ie"
}  



document.getElementById('text1').style.display = 'none'
document.getElementById('text2').style.display = 'none'
document.getElementById('text4').style.display = 'none'

function main () {

    setTimeout(function one () { 
        document.getElementById('text1').style.display = 'block'
    }, 1000);

    setTimeout(function two () { 
        document.getElementById('text2').style.display = 'block'
    }, 2000);

    setTimeout(function three () { 
        document.getElementById('text4').style.display = 'block'
    }, 3000);

    setTimeout(function animationClassAdd (){
        document.getElementById('text1').style.display = 'none'
        document.getElementById('text2').style.display = 'none'
        document.getElementById('text4').style.display = 'none'
    }, 3500);

    setTimeout(function animationClassAdd (){
        document.getElementById('text1').style.display = 'block'
        document.getElementById('text2').style.display = 'block'
        document.getElementById('text4').style.display = 'block'
    }, 4000);

    setTimeout(function animationClassAdd (){
        document.getElementById('text1').style.display = 'none'
        document.getElementById('text2').style.display = 'none'
        document.getElementById('text4').style.display = 'none'
    }, 4500);

    setTimeout(function animationClassAdd (){
        document.getElementById('text1').style.display = 'block'
        document.getElementById('text2').style.display = 'block'
        document.getElementById('text4').style.display = 'block'
    }, 5000);

    setTimeout(function animationClassAdd (){
        document.getElementById('text1').style.display = 'none'
        document.getElementById('text2').style.display = 'none'
        document.getElementById('text4').style.display = 'none'
    }, 5500);

    setTimeout(function animationClassAdd (){
        document.getElementById('text1').style.display = 'block'
        document.getElementById('text2').style.display = 'block'
        document.getElementById('text4').style.display = 'block'
    }, 6000);
}


main()

setInterval(function() {
    document.getElementById('text1').style.display = 'none'
    document.getElementById('text2').style.display = 'none'
    document.getElementById('text4').style.display = 'none'

    main()

}, 8000);
