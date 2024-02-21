#!/bin/sh

# Esperar a que Mosquitto se inicie completamente (ajustar segÃºn sea necesario)
sleep 5

# Configurar usuario y contraseÃ±a
mosquitto_passwd -b /etc/mosquitto/passwd "$MOSQUITTO_USER" "$MOSQUITTO_PASSWORD"

# Ejecutar el comando original de Mosquitto
exec "$@"
