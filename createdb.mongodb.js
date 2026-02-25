use('mi_base_de_datos_RVFM');

db.usuarios.insertOne({
    nombre:"Reyna Flores",
    edad:17,
    email:"reyna.vero@gmail.com",
    isActive:false,
    saldo:12345.34,
    fechaRegistro: new Date(),
    genero:"Femenino",
    ciudad:"Monterrey",
    indiomas:["Español","Ingles"],
    numerosTelefono:["8136025597","1422625"]
    
});