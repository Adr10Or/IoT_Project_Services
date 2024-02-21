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

## Instrucciones de Despliegue

Para levantar cada servicio:

1. Clona este repositorio en tu dispositivo.
2. Navega al subdirectorio correspondiente al servicio que deseas desplegar.
3. Ejecuta el comando:

   ```sh
   docker-compose up -d

## Pruebas y Seguridad

Este entorno ha sido probado y securizado específicamente en Raspbian OS, simulando un despliegue en hardware similar a Raspberry Pi. Para garantizar una seguridad óptima, se recomienda realizar pruebas adicionales adaptadas a tu entorno específico antes de proceder a la producción.

### Recomendaciones Adicionales para Mejorar la Seguridad

- **Control del Firewall**: Se recomienda configurar adecuadamente el firewall del dispositivo para controlar el acceso a los servicios expuestos. Asegúrate de que solo los puertos necesarios estén abiertos y que el acceso esté restringido según sea necesario.

- **Auditorías de Seguridad con CIS Benchmark**: Para una configuración de seguridad más rigurosa, se aconseja aplicar las auditorías de seguridad entregadas por el CIS (Center for Internet Security) Benchmark. Esto incluye revisiones detalladas de las configuraciones del demonio Docker, puertos, y accesos a los servicios, asegurando que cumplan con las mejores prácticas de seguridad.

Es importante destacar que, aunque en los archivos `docker-compose.yml` se configura la comunicación de los servicios únicamente de manera interna para el host que ejecuta Docker Compose, la configuración del firewall y la revisión de las políticas de seguridad son esenciales para proteger el entorno.

### Referencias

Para implementar las diferentes prácticas de seguridad se tomaron como referencia los siguientes recursos:

- [Mejores prácticas de seguridad en contenedores Docker - Hardening](https://blog.elhacker.net/2021/03/mejores-practicas-de-seguridad-en-contenedores-docker-hardening.html)
- [Azure NiFi - Microsoft](https://learn.microsoft.com/es-es/azure/architecture/example-scenario/data/azure-nifi)
- [Guía de Administración de NiFi](https://nifi.apache.org/docs/nifi-docs/html/administration-guide.html#logging_configuration)
- [Configuración de un NiFi Registry Seguro - Comunidad Cloudera](https://community.cloudera.com/t5/Community-Articles/Setting-Up-a-Secure-Apache-NiFi-Registry/ta-p/247753)
- [Mosquitto: Configuración de usuarios y clientes - Blog Parravidales](https://blog.parravidales.es/mosquitto-configuracion-de-usuarios-y-clientes/)
- [Aumenta la seguridad de Mosquitto añadiendo TLS - Blog Parravidales](https://blog.parravidales.es/aumenta-la-seguridad-de-mosquitto-anadiendo-tls/)
- [Introducción a la seguridad en CouchDB](https://docs.couchdb.org/en/stable/intro/security.html)
- [Securing Node-RED - Node-RED Docs](https://nodered.org/docs/user-guide/runtime/securing-node-red)

### Nota Final

Este proyecto IoT simula un ambiente donde se generan, procesan, almacenan y presentan datos en un frontend con un dashboard. Se recomienda encarecidamente ajustar las configuraciones de acceso, contraseñas y certificados de ejemplo proporcionados para adaptarlas a las necesidades específicas de cada proyecto.

Las configuraciones de seguridad implementadas son básicas y sirven como punto de partida. Para entornos controlados y altamente seguros, es crucial leer detalladamente cada una de las referencias y aplicar configuraciones más rigurosas. La razón por la cual se presentan configuraciones básicas es para servir como guía y referencia en la implementación de un nivel adecuado de control de acceso seguro para cada uno de los servicios conectados en el entorno.

