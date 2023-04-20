var valorPantalla = 0;
var numero1,numero2,operacion;


function boton(apretado) {
    var aux = document.getElementById("pantalla").value; // aux recibe el valor
    document.getElementById("pantalla").value = aux + apretado; 


    valorPantalla = document.getElementById("pantalla").value = aux + apretado;
   
    
}


function btn_sumar(caracter){
    numero1 = valorPantalla;
    operacion = "+";
    
    limpiar();
 
}

function btn_restar(caracter){
  numero1 = valorPantalla;
  operacion = "-";
  
  limpiar();
}

function btn_multi(caracter){
  numero1 = valorPantalla;
  operacion = "*";
  
  limpiar();
}

function btn_div(caracter){
  numero1 = valorPantalla;
  operacion = "/";
  
  limpiar();
}

function reset() {
    // limpiar pantalla con C
    document.getElementById('pantalla').value = '';
    valorPantalla = 0;
    operacion = "";
}

function limpiar(){
    document.getElementById('pantalla').value = '';
    
}

function btn_igual(){
    numero2 = valorPantalla;
    calcular();
}

function calcular() {
    
    var total = 0;
    var ultimoTotal = 0;
      switch(operacion){
        case "+":
          total = parseFloat(numero1) + parseFloat(numero2);
          break;
        case "-":
            total = parseFloat(numero1) - parseFloat(numero2);
            break;
        case "*":
          total = parseFloat(numero1) * parseFloat(numero2);
          break;
        case "/":
          total = parseFloat(numero1) / parseFloat(numero2);
          break;
      }
      ultimoTotal = total;
      reset();
      document.getElementById('pantalla').value = total;
      valorVisor = ultimoTotal;

}