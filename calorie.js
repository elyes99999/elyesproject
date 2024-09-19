function calorie(){
    a=document.getElementById('age').value;
    h=document.getElementById("H").value;
    w=document.getElementById("W").value;
    act=document.getElementById("act").value;
    if(document.getElementById("m").checked){
        bmr=10*w+6.25*h-5*a+5;
    }
    else{
        bmr=10*w+6.25*h-5*a-161;
    }
    if(act==1){
        bmr=bmr*1.55;
    }
    if(act==2){
        bmr=bmr*1.725;
    }
    if(act==3){
        bmr=bmr*1.9;
    }
    document.getElementById('here').value=bmr;

}