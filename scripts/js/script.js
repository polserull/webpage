var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
    document.getElementById("dotText").textContent='Guten Morgen!';
} else if (curHr < 18) {
    document.getElementById("dotText").textContent='Guten Tag!'
} else {
    document.getElementById("dotText").textContent='Guten Abend!'
}

function openPage(pageName,elmnt) {
    var i, tabcontent, tablinks;
    document.title = pageName;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
} 