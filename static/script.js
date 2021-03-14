function raditDatus() {
  var tabheaddrsar = ["Vārds","Uzvārds","Telefona numurs"]
  let t=document.getElementById('dati-draugi')
  const url = '/gdraugi';
 

  var request = new Request (url, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
  fetch(request)
    .then((resp)=>resp.json())
    .then((data)=>{
console.log(data);
var count = data.draugi.length;

console.log(count);

      for (let i = 0; i < count; i++)

    {
  t.innerHTML += `
   <tr>
     <td>${data.draugi[i].Name}</td>
     <td>${data.draugi[i].Surname}</td>
     <td>${data.draugi[i].Phone_nr}</td>
   </tr>
   `
                  } 

 
//      this.textblock.appendChild(table);
   });;

}


raditDatus();



/*Add */
function myFunction1() {
  let regdata = new Object();
  regdata.reguname = document.getElementById('myInput').value;
  regdata.regsurname =  document.getElementById('myInput1').value;
  regdata.regphone =  document.getElementById('myInput2').value;
  a=regdata.reguname+" "+regdata.regsurname+" "+regdata.regphone;
  alert("Everything is  good ! "+a);
  const xhrr = new XMLHttpRequest(),
    method = 'POST',
    url = '/add';
      xhrr.open(method, url, true);
      xhrr.onreadystatechange = function () {
      if(xhrr.readyState == 4 && xhrr.status == 200) {
        if (xhrr.responseText == 'IZDEVAS'){
          alert("Addition is successful! \n Added "+" "+regdata.reguname);
          return raditDatus();
         }
  /*Viss ir slikti!!! \n Jānospiež */
         return alert("Everything is not good ! \ n Must be pressed  F5")
       }
    }
xhrr.setRequestHeader("Access-Control-Allow-Origin", "*");
xhrr.setRequestHeader("Content-type", "application/json, charset=utf-8");
xhrr.send(JSON.stringify(regdata));
}


function Clear(){

document.getElementById("myInput").value = "";	
document.getElementById("myInput1").value = "";	
document.getElementById("myInput2").value = "";	

  }
  

  function ieiet_visiem(){
    this.leftBox = document.getElementById("left-sidebar");
    this.leftBox.innerHTML = "";
    this.divUzruna = document.createElement("div");
    this.divUzruna.setAttribute("id","uzruna");
    this.leftBox.appendChild(this.divUzruna);
    this.h2 = document.createElement("h2");
    this.h2.setAttribute("id","h2");
    this.leftBox.appendChild(this.h2);
  
    this.jauna_spele = document.createElement("BUTTON");
    this.jauna_spele.setAttribute("class", "poga");
    this.jauna_spele.innerHTML = "My Routes";
    this.jauna_spele.onclick =  () => jaunaSpele();
    this.leftBox.appendChild(this.jauna_spele);
  
    this.mani_top10 = document.createElement("BUTTON");
    this.mani_top10.setAttribute("class", "poga");
    this.mani_top10.innerHTML = "My Companions";
    this.mani_top10.onclick = () => maniTop10();
    this.leftBox.appendChild(this.mani_top10);
  
    this.top10 = document.createElement("BUTTON");
    this.top10.setAttribute("class", "poga");
    this.top10.innerHTML = "TOP Companions";
    this.top10.onclick = () => Top10();
    this.leftBox.appendChild(this.top10);
  
    this.beigt = document.createElement("BUTTON");
    this.beigt.setAttribute("class", "poga");
    this.beigt.innerHTML = "End";
    this.beigt.onclick = () => location.reload();
    this.leftBox.appendChild(this.beigt);
    
    jaunaSpele();
  }
  
  function neregistrejoties(){
    var LietotajaVards = "Viesis";
    ieiet_visiem();
    h2.innerHTML = LietotajaVards;
  }
  
  function ieiet(){
    var LietotajaVards = document.getElementById("uname").value;
    ieiet_visiem();
    h2.innerHTML = LietotajaVards;
  }
  
  function ieiet2(){
    var LietotajaVards = document.getElementById("runame").value;
    ieiet_visiem();
    h2.innerHTML = LietotajaVards;
  }
  
  function login(){
    let lgndata = new Object();
    lgndata.uname = document.getElementById('uname').value;
    lgndata.pwd =  document.getElementById('psw').value ;
      const xhr = new XMLHttpRequest(),
      method = 'POST',
      url = '/yn';
        xhr.open(method, url, true);
        xhr.onreadystatechange = function () {
        if(xhr.readyState == 4 && xhr.status == 200) {
          if (xhr.responseText == 'JAA'){
           return ieiet();
           }
  /*  Jūsu lietotājvārds/parole nederīgi */
           return alert("Your username/password is incorrect!")
        }
      }
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhr.setRequestHeader("Content-type", "application/json, charset=utf-8");
  xhr.send(JSON.stringify(lgndata));
  }
  
  function lgnpsscheck(){
    let parole1 = document.getElementById("rpsw").value;
    let parole2 = document.getElementById("rpsw2").value;
    if(parole1!==parole2){
    /* Paroles nesakrīt  */
      alert("Passwords do not match:");
    }     
    else{
      //Pārbauda, vai tāds Lietotāja vārds ir brīvs...
        let regchkdata = new Object();
        regchkdata.runame = document.getElementById('runame').value;
        const xhr = new XMLHttpRequest(),
        method = 'POST',
        url = '/lgnchk';
          xhr.open(method, url, true);
          xhr.onreadystatechange = function () {
          if(xhr.readyState == 4 && xhr.status == 200) {
            if (xhr.responseText == 'NESAKRIIT'){
             return registracija();
             }
  /* Jūsu lietotājvārds jau lieto cits spēlētājs */
             return alert("Your username is already in use by another person!")
          }
        }
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.setRequestHeader("Content-type", "application/json, charset=utf-8");
    xhr.send(JSON.stringify(regchkdata));
      }
    }
  
  function registracija(){
    let regdata = new Object();
    regdata.reguname = document.getElementById('runame').value;
    regdata.regpwd =  document.getElementById('rpsw').value;
    const xhrr = new XMLHttpRequest(),
      method = 'POST',
      url = '/rgstr';
        xhrr.open(method, url, true);
        xhrr.onreadystatechange = function () {
        if(xhrr.readyState == 4 && xhrr.status == 200) {
          if (xhrr.responseText == 'IZDEVAS'){
            alert("Registration is successful! \n Your username is "+ regdata.reguname);
            return ieiet2();
           }
    /*Viss ir slikti!!! \n Jānospiež */
           return alert("Everything is not good ! \ n Must be pressed  F5")
         }
      }
  xhrr.setRequestHeader("Access-Control-Allow-Origin", "*");
  xhrr.setRequestHeader("Content-type", "application/json, charset=utf-8");
  xhrr.send(JSON.stringify(regdata));
  }
  