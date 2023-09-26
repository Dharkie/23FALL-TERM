const areaOfTriangle=(base, height) => area=(base*height)/2;
console.log(areaOfTriangle(3,4).toFixed(0));
console.log(areaOfTriangle(5,7).toFixed(0));

function volumeOfSphere(radius){
    volume=(4/3)*(Math.PI)*Math.pow(radius,3);
    return volume;
}
console.log(volumeOfSphere(3).toFixed(0));
console.log(volumeOfSphere(5).toFixed(0));
function distConverter(distance, unit){
    if(distance==0 || unit=='m')
    {
        return distance;
    }
    switch(unit)
    {
        case 'km':
                distance*=0.001;
    
                break;
        case 'y':
                distance*=1.09361;
                break;
        case 'mi':
            distance/=0.000621371;
            break;
        default:
            console.log('ERROR');
            break;     
        
    }
    return distance;
}
console.log(distConverter(50,"m").toFixed(2)+ 'm');
console.log(distConverter(100, "y").toFixed(2)+ 'yards');
console.log(distConverter(1, "mi").toFixed(2)+ 'miles');
console.log(distConverter(1234, "km").toFixed(2)+ 'km');

function timeToString(time){
    saveTime=time.split(':');
    if(saveTime.length==1)
    {
        second=parseInt(saveTime[0]);
        return second;   
    }
    else if(saveTime.length==2)
    {
        second=parseInt(saveTime[1]);
        minute=parseInt(saveTime[0]);
        result= (minute*60)+second;
        return result;
    }
    else if(saveTime.length==3)
    {
        second=parseInt(saveTime[2]);
        minute=parseInt(saveTime[1]);
        hour=parseInt(saveTime[0]);
        result= (hour*(3600))+(minute*(60))+second;
        return result;
    }
}
console.log(timeToString('02:33:21'));
console.log(timeToString('00:04:51'));
console.log(timeToString('04:51'));
console.log(timeToString('00:13'));
console.log(timeToString('13'));