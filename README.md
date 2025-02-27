# Rick and Morty API

Este proyecto obtiene la información de la [API Púbica de Rick y Morty](https://rickandmortyapi.com/) y permite analizar la cantidad de personajes en función de diversas propiedades, como el género, el estatus y la especie. La aplicación ofrece un filtro dinámico para mostrar los personajes en función de su nombre, así como una representación en forma de gráfico circular de la cantidad de personajes en función de la propiedad seleccionada.

## Funcionalidades:
- Obtener una lista de personajes con información detallada.
- Filtrar estos personajes por nombre
- Analizar la cantidad de personajes en función de una propiedad seleccionada
- Visualizar los datos analizados mediante un gráfico circular 


## Instrucciones de configuración y ejecución:

(Verificar tener NodeJs en v.14 o superior)

1. Clonar el repositorio:
  
   git clone https://github.com/JEstebanGnz/rick-morty-api.git

2. Ir a la raíz del proyecto y ejecutar:

    npm install

3. Luego, crear el build de producción:

    npm run build

4. Finalmente, correr la app:

    npm start

## Capturas de pantalla de funcionamiento:

Filtrado de personajes
![Rick and Morty API Screenshot](./public/assets/rick-morty-api-1.png)

Información detallada de personajes
</br>
![Rick and Morty API Screenshot](./public/assets/rick-morty-api-2.png)

Análisis de personajes por propiedad
![Rick and Morty API Screenshot](./public/assets/rick-morty-api-3.png)