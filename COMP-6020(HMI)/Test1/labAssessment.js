const areaOfCircle = (radius)=> area= Math.PI*Math.pow(radius,2);
radius =document.getElementById('radius');
displayArea=document.getElementById('displayArea');
radius.addEventListener('change',(e)=> {
    let radiusValue= e.target.value;
displayArea.value=areaOfCircle(radiusValue).toFixed(2);}

)