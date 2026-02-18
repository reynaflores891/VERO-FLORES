//variables de referencia//

const Tabla_General= {

"1": "America",
"2": "Chivas",
"3":"Cruz azul",
"4":"Toluca",
"6": "Tigres",
};
console.log(Tabla_General); //imprimir//

const Copas= {
"A": "16",
"C": "12",
"CA": "12",
"TO": "9",
"T": "8",
};
console.log(Copas); //imprimir//

//tabla//
console.log('El equipo con mas copas de liga mx es'+ Tabla_General[1] + 'con:' + Copas.A + copas);
console.log('El 2do lugar es + Tabla_General [2]'+ 'con:' + Copas.C + copas);
console.log('El 3er lugar es + Tabla_General[3]'+'con:' + Copas.CA + copas);
console.log('El 4to lugar es + Tabla_General[4]'+' con: '+ Copas. TO + copas);
console.log('El 6to lugar es+ Tabla_General[6]'+'con:' + Copas.T + copas);

console.table(Tabla_General);
console.table(Copas);
