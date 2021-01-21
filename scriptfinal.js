var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto',
'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
var dias= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var tbody = document.getElementById("tablita");

var i = 0;
var recorrido = setInterval ( ()=> {

    let tr = document.createElement('tr');
    let tdMeses= document.createElement("td")
    var tdmestx = document.createTextNode (meses[i]);

    tdMeses.appendChild(tdmestx);
    tr.appendChild(tdMeses);

        let tdDia = document.createElement("td");
        var tddiatx= document.createTextNode(dias[i]);

        tdDia.appendChild(tddiatx);
        tr.appendChild(tdDia);


        tbody.appendChild(tr);

        i ++;
    if (i == meses.length) {
        clearInterval (recorrido);
                            }
}, 700);

var titulo = document.getElementsByTagName("h1");
function dibujar (){
    i= 0;
    titulo[0].style.color="cyan"; 
}

    
    