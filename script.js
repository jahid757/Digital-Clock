function clock() {
    const time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    if(hour == 13){
        hour = 1;
    }else if(hour == 14){
        hour = 2;
    }else if(hour ==15){
        hour = 3;
    }else if(hour == 16){
        hour = 4
    }else if(hour == 17){
        hour = 5
    }else if(hour == 18){
        hour = 6
    }else if(hour == 19){
        hour = 7
    }else if(hour == 20){
        hour = 8;
    }else if(hour ==21){
        hour = 9;
    }else if(hour == 22){
        hour = 10
    }else if(hour == 23){
        hour = 11
    }else if(hour == 24){
        hour = 12
    }
    
    if(hour <= 9){
        hour = "0"+hour
    }if(minute <= 9){
        minute = "0"+minute
    }if(second <= 9){
        second = "0"+second
    }
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('second').innerText = second;
    
}

setInterval(clock,1000)

