const submitButton = document.getElementById("submit-button")


const age = () => {
    var d1 = document.getElementById("Date").value;
    var m1 = document.getElementById("Month").value;
    var y1 = document.getElementById("Year").value;
  
  
   var date = new Date();
   var d2 = date.getDate();
   var m2 = 1 + date.getMonth();
   var y2 = date.getFullYear();
   var month =[31,28,31,30,31,30,31,31,30,31,30,31];
    
   if (d1 > d2){
        d2 = d2 + month[m2-1];
        m2 = m2-1;
    }
    
    if (m1 > m2){
        m2 = m2 + 12;
        y2 = y2 - 1;
    }

    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

 
 var ageValue = document.getElementById('age');
 ageValue.innerHTML = 'Your Age is '+ y +' Years '+ m +' Months ' + d + ' Days' ;
}

submitButton.addEventListener('click', age);

