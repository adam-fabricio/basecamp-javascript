// Exercício de map
console.log("*".repeat(40));


lista = [1,2,3,4,5,6,7,8,9,10];
lista.push(11);

console.log(`lista: ${lista}`);

console.log("*".repeat(40));
console.log("\nUsando array.map sem this\n");

lista_x_2 = lista.map((x) => x * 2);

console.log(`lista2: ${lista_x_2}`);

console.log("*".repeat(40));
console.log("Usando array.map com this");

const this_object = {
    cm: 10,
    pol: 11.2,
}

for (valor of ["cm", "pol"]){
    arr = lista.map(function(x) {return x * this[valor];}, this_object);
    console.log(`lista em ${valor}: ${arr}`);
    console.log("*".repeat(40));
}

console.log("*".repeat(40));

// array.filter
console.log("Usando array.filter");
multiplos_de_3 = lista.filter((x) => x%3 === 0);
console.log("multiplos de 3:", multiplos_de_3);
console.log("*".repeat(40));

// usar o array.reduce
console.log("Usando map reduce");

console.log("calcula 100 - valor da lista")
resultado = lista.reduce((x, item) => x - item, 100);
console.log("resultado:", resultado);
