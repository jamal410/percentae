function calculate(){
let a=parseInt(document.getElementById('bookOne').value);
let b=parseInt(document.getElementById('bookTwo').value);
let c=parseInt(document.getElementById('bookThree').value);
let d=parseInt(document.getElementById('bookFour').value);
let e=parseInt(document.getElementById('bookFive').value);
if (a>100 ||b>100 || c>100 ||d>100 ||e>100) {
    
}
else
    {
        let obtain = a+b+c+d+e;
document.getElementById("obtain").innerHTML=obtain;
let per=obtain/500*100;
document.getElementById("per").innerHTML=per;
if (a>40 && b>40 && c>40  && d>40 && e>40) {
    document.getElementById("remarks").innerHTML="<span style ='color:#292Pass>";
}
else
{
document.getElementById("remarks").innerHTML="<span style='color:red'>Fail</span>"
}
if(per>=80){
    document.getElementById("grade").textContent="A";
}
else if (per>=70){
    document.getElementById("grade").textContent="B";
}
else if (per>=60){
    document.getElementById("gtade").textContent="C";
}
else if (per>=50){
    document.getElementById("grade").textContent="D";
}
else if (per>=40){
    document.getElementById("grade").textContent="E";
}
else
{
    document.getElementById("grade").textContent="F";
}

    }

}