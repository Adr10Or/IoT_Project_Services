# Proyecto de Entorno IoT con Seguridad Básica

## Descripción

Este proyecto establece un entorno IoT implementando una serie de servicios esenciales mediante Docker Compose, incluyendo Node-RED, CouchDB, Mosquitto, Kafka y NiFi. Cada uno de estos componentes ha sido configurado con medidas de seguridad básicas para asegurar la comunicación y el acceso.

## Estructura del Proyecto

El repositorio está dividido en subdirectorios, cada uno correspondiente a un servicio particular. Dentro de cada subdirectorio se encuentra un `docker-compose.yml` que facilita el despliegue individualizado del servicio.

## Gestión de Configuración y Seguridad

Las credenciales y los parámetros de configuración de seguridad son manejados a través de archivos `.env` incluidos en el repositorio con fines de demostración y prueba. 

### Advertencia de Seguridad

Los archivos `.env` se proporcionan de manera abierta para facilitar la revisión. Sin embargo, para entornos de producción, es crucial adoptar prácticas más seguras:

- **Exclusión de Archivos Sensibles**: Implementa un archivo `.gitignore` para excluir archivos `.env` del sistema de control de versiones, evitando así la exposición accidental de secretos.

- **Gestión Avanzada de Secretos**: Para una seguridad óptima, se recomienda gestionar las credenciales utilizando soluciones especializadas en la gestión de secretos. Herramientas como HashiCorp Vault, AWS Secrets Manager, Azure Key Vault, y Google Cloud Secret Manager ofrecen mecanismos robustos para almacenar, acceder y auditar secretos en entornos de producción.

- **Uso de Archivos `passwd` para Contraseñas**: En algunos servicios, especialmente aquellos relacionados con la autenticación, es común colocar un archivo `passwd` que contiene las contraseñas en formato hasheado. Este enfoque permite una gestión más segura de las contraseñas, ya que solo se almacenan en forma hasheada y pueden ser modificadas o gestionadas de manera segura sin exponer las contraseñas en texto plano. Es fundamental asegurar que estos archivos `passwd` también estén protegidos adecuadamente y no se incluyan en el control de versiones.

### Mejores Prácticas para la Gestión de Secretos

- **Auditoría Regular**: Realiza auditorías periódicas de los secretos y credenciales para asegurar que solo las credenciales necesarias estén en uso y que las antiguas o innecesarias sean rotadas o revocadas.
- **Minimizar la Exposición**: Aplica el principio de menor privilegio asegurando que los servicios y aplicaciones solo tengan acceso a los secretos que estrictamente necesitan para operar.
- **Seguridad en el Transporte**: Asegura la comunicación entre tus aplicaciones y el gestor de secretos utilizando cifrado de extremo a extremo para evitar la exposición de secretos durante la transmisión.

La adopción de estas prácticas y herramientas mejora significativamente la seguridad de los entornos de desarrollo y producción, protegiendo la infraestructura crítica y los datos sensibles contra accesos no autorizados y posibles brechas de seguridad.

## Pruebas y Seguridad

Este entorno ha sido probado y securizado específicamente en Raspbian OS, emulando un despliegue en hardware Raspberry Pi. Se recomienda llevar a cabo pruebas adicionales adecuadas a tu entorno específico antes de su puesta en producción.

## Instrucciones de Despliegue

Para levantar cada servicio:

1. Clona este repositorio en tu dispositivo Raspberry Pi.
2. Navega al subdirectorio correspondiente al servicio que deseas desplegar.
3. Ejecuta el comando:

   ```sh
   docker-compose up -d
