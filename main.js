let screenHeight=screen.height;
let screenWidth=screen.width;

let windowHeight=window.innerHeight;
let windowWidth=window.innerWidth;
if(windowWidth<=600 || windowHeight<=600)
{
    document.querySelector('body').style.backgroundColor='black';
    document.querySelector('body').style.color='white';
    
}
else{
    document.querySelector('body').style.backgroundColor='rgb(192, 183, 51);';
    document.querySelector('body').style.color='black';
}

let html1;
html1="<h3>your screen dimensions are: width="+screenWidth+ ", height=" +screenHeight+"</h3> ";
let html2;
html2="<h3>your window dimensions are: width="+windowWidth+ ", height=" +windowHeight+"</h3> ";

document.querySelector('.homescreen .d').innerHTML=html1+'\n'+html2;




