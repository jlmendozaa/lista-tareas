# Usar una imagen base con Java 17 JDK para la construcción
FROM openjdk:17 as build

# Establecer el directorio de trabajo en el contenedor
WORKDIR /app

# Copiar el proyecto Maven al contenedor
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY src src

# Empaquetar la aplicación, saltando las pruebas
RUN ./mvnw package -DskipTests

# Etapa de ejecución: Usar una imagen base con Java 17
FROM openjdk:17

# Copiar el JAR empaquetado desde la etapa de construcción al contenedor de ejecución
COPY --from=build /app/target/*.jar app.jar

# Comando para ejecutar la aplicación
ENTRYPOINT ["java","-jar","/app.jar"]
