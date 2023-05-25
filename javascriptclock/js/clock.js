
let userInput = prompt("Lüten isminizi giriniz!"); //isim fonksiyon

let myName = document.querySelector("#myName");

myName.innerHTML = userInput;

//saat ve gün fonsiyon
function showTime() {
    var date = new Date(); 

    var hours = date.getHours();

    var minutes = date.getMinutes();
    
    var seconds = date.getSeconds();
    
    var days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
    var day = date.getDay();
    
    hours = formatTime(hours);

    minutes = formatTime(minutes);

    seconds = formatTime(seconds);

    var myClock = document.getElementById("myClock");
    myClock.innerHTML = hours + ":" + minutes + ":" + seconds + "  " + days[day];
}
  
  function formatTime(time) {
    
    return time < 10 ? "0" + time : time;
  }
  
  setInterval(showTime, 1000);