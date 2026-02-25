use('mi_base_de_datos_RVFM');

db.createCollection('productos');

db.productos.insertOne({
    nombre:"Audifonos",
    precio:1999.99,
    categoria:"Electronica",
    stock:20,
    enOferta:true,
    fechaIngreso: new Date("2026-02-25")
});

db.productos.insertMany([
   {
    nombre:"Mouse inalambrico",
    precio:234.54,
    categoria:"Accesorios",
    stock:156,
    enOferta:false,
    descuento:10,
    especificaciones:{
        conexion:"Bluetooth 5.0",
        bateria:"Recargable",
        dpi:2400,
        botones:6
    },
    colores:["Negro","Rojo","Rosa"],
    provedores:[
        { 
            nombre:"Red Dragon",
            precio:500,
            cuidad:"China"
        }
    ]
   },
   {
    nombre:"Teclado Mecanico",
    precio:2999,
    categoria:"Accesorios",
    stock:150,
    enOferta:false,
    especificaciones:{
        switches:"Cherry MX red",
        retroiluminacion:"RGB",
        teclado:"Español",
        conexion:"USB C",
        teclas:104,
        soporte:{
            windows:true,
            mac:true,
            linux:true
        }
    },
    garantia:{
        duracion:24,
        tipo:"Internacional",
        cobertura:["Defectos de fabricacion","Retroiluminacion"]
    }
   },
   {
    nombre:"Monitor Gamer",
    precio:5499.99,
    categoria:"Electronica",
    stock:45,
    enOferta:true,
    descuento:15
   },
   {
    nombre:"Laptop Lenovo",
    precio:18999.99,
    categoria:"Computadoras",
    stock:30,
    enOferta:false
   },
   {
    nombre:"Bocina Bluetooth",
    precio:1299.50,
    categoria:"Audio",
    stock:80,
    enOferta:true,
    descuento:5
   }
]);