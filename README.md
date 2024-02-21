# Proyecto de Entorno IoT con Seguridad Básica

## Descripción

Este proyecto establece un entorno IoT implementando una serie de servicios esenciales mediante Docker Compose, incluyendo Node-RED, CouchDB, Mosquitto, Kafka y NiFi. Cada uno de estos componentes ha sido configurado con medidas de seguridad básicas para asegurar la comunicación y el acceso.

## Estructura del Proyecto

El repositorio está dividido en subdirectorios, cada uno correspondiente a un servicio particular. Dentro de cada subdirectorio se encuentra un `docker-compose.yml` que facilita el despliegue individualizado del servicio.

## Configuración de Seguridad

Las credenciales y parámetros de configuración de seguridad se manejan a través de archivos `.env` que se incluyen en el repositorio para fines de demostración y prueba. 

**Advertencia de Seguridad**: Los archivos `.env` se proporcionan abiertamente para revisión. Para entornos de producción:

- Implementa `.gitignore` para omitir archivos `.env` en el sistema de control de versiones.
- Gestiona las credenciales de forma segura, preferiblemente utilizando un gestor de secretos como HashiCorp Vault.

## Pruebas y Seguridad

Este entorno ha sido probado y securizado específicamente en Raspbian OS, emulando un despliegue en hardware Raspberry Pi. Se recomienda llevar a cabo pruebas adicionales adecuadas a tu entorno específico antes de su puesta en producción.

## Instrucciones de Despliegue

Para levantar cada servicio:

1. Clona este repositorio en tu dispositivo Raspberry Pi.
2. Navega al subdirectorio correspondiente al servicio que deseas desplegar.
3. Ejecuta el comando:

   ```sh
   docker-compose up -d
