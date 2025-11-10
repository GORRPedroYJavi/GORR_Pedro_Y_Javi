// Ejemplo de módulo para API
export async function obtenerDatos(url) {
  const respuesta = await fetch(url);
  return await respuesta.json();
}
