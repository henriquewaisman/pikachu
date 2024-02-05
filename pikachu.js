async function pikachu() {
  var url = "https://pokeapi.co/api/v2/pokemon/25"
  var response = await fetch(url)
  var data = await response.json()
  var name = data.name
  console.log(name)
}

pikachu();
