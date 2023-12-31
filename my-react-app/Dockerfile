# Usar una imagen base de Node.js
FROM node:16
# Establecer el directorio de trabajo en /app
WORKDIR /app

# Copiar los archivos del proyecto de React al contenedor
COPY . .

# Instalar dependencias
RUN npm install

# Exponer el puerto 3000 (el puerto en el que se ejecutará la aplicación React)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]

