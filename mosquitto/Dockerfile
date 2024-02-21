FROM eclipse-mosquitto:latest

# Copiar el script de inicio al contenedor
#COPY entrypoint.sh /entrypoint.sh

# Dar permisos de ejecución al script
#RUN chmod +x /entrypoint.sh

# Establecer el script como punto de entrada
#ENTRYPOINT ["/entrypoint.sh"]

COPY config/mosquitto.conf /mosquitto/config/mosquitto.conf

RUN chown -R 1001:1001 /mosquitto/config /mosquitto/data /mosquitto/log

USER 1001

CMD ["/usr/sbin/mosquitto", "-c", "/mosquitto/config/mosquitto.conf"]
