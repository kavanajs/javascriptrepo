function Clock() {
    setInterval(function () {
        var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hour >= 12? 'PM' : 'AM';
    
    var time = `<h1>
    ${hour}:${minutes}:${seconds} ${ampm}

    </h1>`;
    document.getElementById("template").innerHTML = time;
    },1000);//1 second

}
Clock();

//time delay is important in java script---convert synchronous to asynchronous
//[1]setTimeout---used only one time
//[2]setInterval---updating every second
