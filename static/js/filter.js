function myFunction() {
  var input, filter,input1, filter1, table, tr,td,td1,i,txtValue,txtValue1,n;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  input1 = document.getElementById("myInput1");
  filter1 = input1.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  n=0;
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
	 td1 = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
	  txtValue1 = td1.textContent || td1.innerText;
	  
      if ((txtValue.toUpperCase().indexOf(filter) > -1)&&(txtValue1.toUpperCase().indexOf(filter1) > -1)) {
        tr[i].style.display = "";
		n=1;
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
  if (n<1){ document.getElementById("message").innerHTML = "The Direction is not found";}
}

function myFunction1() {
  var input, filter,input1, input2;
  input = document.getElementById("myInput");
  input1 = document.getElementById("myInput1");
  input2 = document.getElementById("myInput2");
  var fs = require('fs');

fs.readFile('./draugi.json',{encoding: 'utf8'},function(err,data) {
     var users = JSON.parse(data);
      users.new = { Name: input, Surname: input1, Phone_nr:input2};
     var string = JSON.stringify(users,null,'\t');

     fs.writeFile('./draugi.json',string,function(err) {
       if(err) return console.error(err);
       console.log('done');
     })  
})

 
}

