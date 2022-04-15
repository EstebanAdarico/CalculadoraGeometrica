//perimetro y area  de un cuadrado dentro de una funcion
console.group("cuadrado")
function perimetroCuadrado(lado){
   return lado * 4
}  
function areaCuadrado(lado){
   return lado**2
} 
console.groupEnd()

//perimetro y area de un triagulo dentro de una funcion
console.group("triangulo")
function perimetroTriangulo (lado,lado2,base){
   return lado * lado2 *base
} 
function areaTriangulo(base,altura){
   return (base*altura)/2
}
console.groupEnd()

//perimetro y area de un paralelogramo
function perimetroParalelo(lado , base){
   return 2*(base + lado)
}
function areaParalelogramo(base,altura){
   return base*altura
}

//perimetro y ara de un rombo 
function perimetroRombo(lado){
   return lado *4
}
function areaRombo(diagonalMayor,diagonalMenor){
   return (diagonalMayor * diagonalMenor)/2
}

//perimetro y area de un trapecio
function perimetroTrapecio(baseMayor,baseMenor,lado1,lado2){
   return baseMayor * baseMenor * lado1 * lado2
} 
function areaTrapecio(baseMayor ,baseMenor , altura){
   return ((baseMayor + baseMenor)* altura)/2
}

//#############################################################################
//funcion que toma como valor los datos que se le envia mediante el input para extraer su valor y transformarlo para html

function calcularPerimetro(){
   const input = document.getElementById("numeroAtransformar")
   const resul = document.getElementById("resultado")
   // obteniendo el valor de numeros a transformar 
   const values = input.value;
   // aqui estoy llamando la funcion perimetroCuadrado
   const resultadoDelPerimetroCuadrado = perimetroCuadrado(values);
//para editar el texto
   resul.innerText= resultadoDelPerimetroCuadrado
}

function calcularArea(){
   // obteniendo los valores de los input  y dandole una variable para representarlo
   const input = document.getElementById("numeroAtransformar")
   // aqui es donde se mostrará el resultado y editará el mensaje 
   const resul = document.getElementById("resultado1")
   const value = input.value;
   const resultadoAreaCuadrado = areaCuadrado(value);

   resul.innerText =resultadoAreaCuadrado

}
let numeros=[1,2,3,7,9]

function find_max(nums) {
   let max_num = Number.NEGATIVE_INFINITY; // smaller than all other numbers
   for (let num of nums) {
      if (num > max_num) {
         console.log(max_num)
         max_num =num
      }
   }
   return max_num;
}
console.log(find_max(numeros));