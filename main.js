const form = document.forms.entrada;
form.addEventListener('submit', multiplicar);
form.limpar.addEventListener('click', remove);
var multiplica =[];



function multiplicar(evento){
    console.log("incionou calculo");
    evento.preventDefault();
    var vl1 = document.getElementById("a").value;
    var vl2 = document.getElementById("b").value;
    var vl3 = document.getElementById("c").value;
    var cal = parseFloat(vl1) * parseFloat(vl2) * parseFloat(vl3);
    adicionar(cal);
    imprimeLista();
    
    a.value="";
    b.value="";
    c.value="";
 
}

function imprimeLista(){
   var ul = document.querySelector("ul");
   ul.innerHTML="";
    
    for(var i=0; i<multiplica.length;i++){
        var lista = document.getElementById("listaElementos");
        var li = document.createElement("li");
        li.textContent = multiplica[i];
        lista.appendChild(li);
        console.log(multiplica[i]);
    }
}

function adicionar(cal){
    multiplica.push(cal);
}

function remove(){
    multiplica.pop();
    imprimeLista();
}
