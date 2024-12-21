var temp1=100;
var temp2=50;
var temp3=200;

function changeBackgroundColor() {

    getRandomColor()

}

function getRandomColor(){
    let body = document.querySelector("body");
    body.style.background=`rgb(${temp1},${temp2},${temp3})`
    temp1=(temp1+100)%255
    temp2=(temp2+70)%255
    temp3=(temp3+50)%255
}