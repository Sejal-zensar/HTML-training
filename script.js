function seeDate(){
    document.getElementById("demo").innerHTML=Date()
    document.getElementById("demo").style.color="red"
    document.getElementById("demo").style.fontSize="2rem"
}

function seeReport(){
    
    document.getElementById("india").style.display="block"
    document.getElementById("america").style.display="none"
    document.getElementById("europe").style.display="none"
}
function seeReport2(){
    
    document.getElementById("america").style.display="block"
    document.getElementById("india").style.display="none"
    document.getElementById("europe").style.display="none"
}
function seeReport3(){
    
    document.getElementById("europe").style.display="block"
    document.getElementById("india").style.display="none"
    document.getElementById("america").style.display="none"
}

function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }