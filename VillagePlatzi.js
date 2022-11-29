vp = document.getElementById("VillagePlatziP");
lienzo = vp.getContext("2d");
var cantidad = aleatorio(0,60);

var teclas = {
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40
};

var fondo = {
  url: "tile.png",
  cargaOK: false,
  x:[],
  y:[]
};

var vaca = {
  url: "vaca.png",
  cargaOK: false,
  x: [],
  y: []
};

var pollo = {
  url: "pollo.png",
  cargaOK: false,
  x: 0,
  y: 0
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
  x: [],
  y: []
};

fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

vaca.objeto = new Image();
vaca.objeto.src = vaca.url;
vaca.objeto.addEventListener("load", cargarVacas);

pollo.objeto = new Image();
pollo.objeto.src = pollo.url;
pollo.objeto.addEventListener("load", cargarPollos);

cerdo.objeto = new Image();
cerdo.objeto.src = cerdo.url;
cerdo.objeto.addEventListener("load", cargarCerdos);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVacas()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarPollos()
{
  pollo.cargaOK = true;
  dibujar();
}

function cargarCerdos()
{
  cerdo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if(fondo.cargaOK == true)
  {
    lienzo.drawImage(fondo.objeto, 0, 0);
  }
  if(vaca.cargaOK == true)
  {
    for(v=0; v < cantidad; v++)
    {
      var x = (aleatorio(0, 7) * 60);
      var y = (aleatorio(0, 7) * 60);
      vaca.x[v] = x;
      vaca.y[v] = y;
      lienzo.drawImage(vaca.objeto, x , y);
      console.log(cantidad);
    }
  }
  if(pollo.cargaOK == true)
  {
    var x = (aleatorio(0, 7) * 60);
    var y = (aleatorio(0, 7) * 60);
    pollo.x = x;
    pollo.y = y;
    lienzo.drawImage(pollo.objeto, x, y);
    console.log(cantidad);
  }
  if(cerdo.cargaOK == true)
  {
    for(c=0; c < cantidad; c++)
    {
      var x = (aleatorio(0, 7) * 60);
      var y = (aleatorio(0, 7) * 60);
      cerdo.x[c] = x;
      cerdo.y[c] = y;
      lienzo.drawImage(cerdo.objeto, x, y);
      console.log(cantidad);
    }
  }
}

function aleatorio(min, max)
{
  var resultado;
  resultado = Math.floor(Math.random() * (max - min + 1)) + min;
  return resultado;
}

//creamos la funcion moverPollo y cada vez que queramos mover un objeto nuevo, debemos redibujar.



function moverPollo(X, Y)
{
  lienzo.drawImage(pollo.objeto, pollo.x, pollo.y);
}

//dibujamos nuevamente:
function dibujarDeNuevo()
{
  if(fondo.cargaOK == true)
  {
    lienzo.drawImage(fondo.objeto, 0, 0);
  }
  if(vaca.cargaOK == true)
  {
    for(var v=0; v < cantidad; v++)
    {
      lienzo.drawImage(vaca.objeto, vaca.x[v], vaca.y[v]);
      console.log(cantidad);
    }
  }
  if(cerdo.cargaOK == true)
  {
    for(var c=0; c < cantidad; c++)
    {
      lienzo.drawImage(cerdo.objeto, cerdo.x[c], cerdo.y[c]);
      console.log(cantidad);
    }
  }
}

// para mover con el teclado creamos el evento moverTeclado

document.addEventListener("keydown", moverTeclado);

function moverTeclado(evento)
{
  var movida = 20;
  if(evento.keyCode == teclas.LEFT)
  {
    dibujarDeNuevo();
    moverPollo(pollo.x, pollo.y);
    pollo.x = pollo.x - movida;
    console.log("excelente");
  }
  switch(evento.keyCode)
  {
    case teclas.UP:
      dibujarDeNuevo();
      moverPollo(pollo.x, pollo.y);
      pollo.y = pollo.y - movida;
      console.log("arriba");
      break;
      case teclas.RIGHT:
      dibujarDeNuevo();
      moverPollo(pollo.x, pollo.y);
      pollo.x = pollo.x + movida;
      console.log("a la derecha");
      break;
      case teclas.DOWN:
      dibujarDeNuevo();
      moverPollo(pollo.x, pollo.y);
      pollo.y = pollo.y + movida;
      console.log("abajo");
      break;
    default: "movimiento desconocido";
  }
}
