import axios from "axios"

export const obtenerPersonajes = async () => {
  try {
    const respuesta = await axios.get(
      "https://dragonball-api.com/api/characters"
    );
    console.log(respuesta.data.items)
    return respuesta.data.items
  } catch (error) {
    console.error(error)
  }
}