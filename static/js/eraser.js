 function resetForm(){
   
  var input, filter, table, tr, td, i, txtValue;
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
        tr[i].style.display = "";
      } 
    } 
document.getElementById("message").innerHTML = "";	
document.getElementById("myInput").value = "";	
document.getElementById("myInput1").value = "";	

  }