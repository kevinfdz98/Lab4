let x;
let equation = [];
let equationToPrint; 
let auxValue = 0;
let auxValue2 = 0; 
let auxEqu; 
let auxOperation = 0; 
let indexAux = 0; 
let indexAux2 = 0; 
let newValue; 
let newString; 

document.getElementById("addButton").addEventListener("click",function(){guardaValor(1);}); 
document.getElementById("substractButton").addEventListener("click", function(){guardaValor(2);});
document.getElementById("multiplicationButton").addEventListener("click", function(){guardaValor(3);}); 
document.getElementById("divisionButton").addEventListener("click", function(){guardaValor(4);});

function guardaValor(y){
x = document.getElementById("inputN").value;
console.log(x);
document.getElementById("inputN").value = "";
equation += x; 
switch (y)
{
  case 1:
      equation += "+"; 
      break; 
  case 2: 
      equation += "-"; 
      break; 
  case 3:
      equation += "*"; 
      break; 
  case 4:
      equation += "/"; 
      break;
}
console.log(equation); 
}

document.getElementById("equalSign").addEventListener("click", equalFunction); 

function equalFunction() {
x = document.getElementById("inputN").value;
console.log(x);
document.getElementById("inputN").value = "";
equation += x; 
equation += "=";
console.log("Aqui agrego valor despues de igual")
equationToPrint = equation; 
// Hacer operación 
/*
for(let z = 0; z < equation.length; z++)
{
  if(equation[z] == "*")
  {
    auxValue = Number(equation[z - 1]); 
    auxValue2 = Number(equation[z + 1]); 
    auxOperation = auxValue * auxValue2; 
    //equation = equation.splice(z - 1, 3, auxOperation); 
    console.log("Ya hice la operación"); 
  }
}
*/
console.log("Aqui estan las pruebas"); 
console.log(equation[1]); 
for(let z = 0; z < equation.length; z++)
{
  if(equation[z] == '*')
  {
    indexAux2 = z; 
    auxEqu = equation.substring(indexAux, indexAux2); 
    auxValue = Number(auxEqu);
    console.log(auxValue); 
      for(let w = z + 1 ; w <= equation.length; w++)
      {
        if(equation[w] == '*' || equation[w] == '/' || equation[w] == '+' || equation[w] == '-'|| equation[w] == '=')
        {
          indexAux = w; 
          auxEqu = equation.substring(indexAux2 + 1, indexAux);
          auxValue2 =  Number(auxEqu); 
          console.log("segundo valor");
          console.log(auxEqu); 
          break; 
        }
      }
      auxOperation = auxValue * auxValue2; 
      console.log(auxOperation); 
      newValue = auxOperation.toString();
      newString = equation.substring(indexAux, equation.length); 
      console.log(newString); 
      equation = auxOperation + newString; 
      console.log("resultado final")
      console.log(equation); 
      z = 0; 
      indexAux = 0; 
  }

  if(equation[z] == '/')
  {
    indexAux2 = z; 
    auxEqu = equation.substring(indexAux, indexAux2); 
    auxValue = Number(auxEqu);
    console.log(auxValue); 
      for(let w = z + 1 ; w <= equation.length; w++)
      {
        if(equation[w] == '*' || equation[w] == '/' || equation[w] == '+' || equation[w] == '-'|| equation[w] == '=')
        {
          indexAux = w; 
          auxEqu = equation.substring(indexAux2 + 1, indexAux);
          auxValue2 =  Number(auxEqu); 
          console.log("segundo valor");
          console.log(auxEqu); 
          break; 
        }
      }
      auxOperation = auxValue / auxValue2; 
      console.log(auxOperation); 
      newValue = auxOperation.toString();
      newString = equation.substring(indexAux, equation.length); 
      console.log(newString); 
      equation = auxOperation + newString; 
      console.log("resultado final")
      console.log(equation); 
      z = 0; 
      indexAux = 0; 
  }

  if(equation[z] == '+')
  {
    indexAux2 = z; 
    auxEqu = equation.substring(indexAux, indexAux2); 
    auxValue = Number(auxEqu);
    console.log(auxValue); 
      for(let w = z + 1 ; w <= equation.length; w++)
      {
        if(equation[w] == '*' || equation[w] == '/' || equation[w] == '+' || equation[w] == '-'|| equation[w] == '=')
        {
          indexAux = w; 
          auxEqu = equation.substring(indexAux2 + 1, indexAux);
          auxValue2 =  Number(auxEqu); 
          console.log("segundo valor");
          console.log(auxEqu); 
          break; 
        }
      }
      auxOperation = auxValue + auxValue2; 
      console.log(auxOperation); 
      newValue = auxOperation.toString();
      newString = equation.substring(indexAux, equation.length); 
      console.log(newString); 
      equation = auxOperation + newString; 
      console.log("resultado final")
      console.log(equation); 
      z = 0; 
      indexAux = 0; 
  }

  if(equation[z] == '-')
  {
    indexAux2 = z; 
    auxEqu = equation.substring(indexAux, indexAux2); 
    auxValue = Number(auxEqu);
    console.log(auxValue); 
      for(let w = z + 1 ; w <= equation.length; w++)
      {
        if(equation[w] == '*' || equation[w] == '/' || equation[w] == '+' || equation[w] == '-'|| equation[w] == '=')
        {
          indexAux = w; 
          auxEqu = equation.substring(indexAux2 + 1, indexAux);
          auxValue2 =  Number(auxEqu); 
          console.log("segundo valor");
          console.log(auxEqu); 
          break; 
        }
      }
      auxOperation = auxValue - auxValue2; 
      console.log(auxOperation); 
      newValue = auxOperation.toString();
      newString = equation.substring(indexAux, equation.length); 
      console.log(newString); 
      equation = auxOperation + newString; 
      console.log("resultado final")
      console.log(equation); 
      z = 0; 
      indexAux = 0; 
  }
}

equation = equation.substring(0,(equation.length - 1)); 
// despliega resultado 
console.log(equation);
console.log("Esta es una prueba"); 
document.getElementById("resultValue").value = Number(equation); 

//despliega ecuación con resultado


document.getElementById("logInformation").value = equationToPrint + equation; 


}


document.getElementById("resBt").addEventListener("click", reset);

function reset(){
  x = 0; 
  equation = ""; 
  console.log("theres nothing here");
  document.getElementById("logInformation").value = "";
   document.getElementById("resultValue").value = ""; 
   document.getElementById("inputN").value = "";
 
}

