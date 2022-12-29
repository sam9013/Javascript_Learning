var imagenes = [];
imagenes["BULBASAUR"] = "Bulbasaur.png";
imagenes["CHARMANDER"] = "Charmander.png";
imagenes["SQUIRTLE"] = "Squirtle.png";
imagenes["IVYSAUR"] = "Ivysaur.png";
imagenes["CHARMELEON"] = "Charmeleon.png";
imagenes["WARTORTLE"] = "Wartortle.png";
imagenes["PIKACHU"] = "Pikachu.png";


var bulbasaur = new PokemonDesk("BULBASAUR", 100, 100);
var charmander = new PokemonDesk("CHARMANDER", 100, 120);
var squirtle = new PokemonDesk("SQUIRTLE", 150, 100);
var ivysaur = new PokemonDesk("IVYSAUR", 200, 200);
var charmeleon = new PokemonDesk("CHARMELEON", 200, 240);
var wartortle = new PokemonDesk("WARTORTLE", 300, 200);
var pikachu = new PokemonDesk("PIKACHU", 200, 200);

var coleccion = [];
coleccion.push(bulbasaur);
coleccion.push(charmander);
coleccion.push(squirtle);
coleccion.push(ivysaur);
coleccion.push(charmeleon);
coleccion.push(wartortle);
coleccion.push(pikachu);

for(var pokem of coleccion)
{
  pokem.mostrar();
}
