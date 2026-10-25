# Portafolio 2 - Aplicación Web Progresiva (PWA)

Este repositorio contiene la resolución de 5 ejercicios prácticos orientados a dotar a una Aplicación Web Progresiva (PWA) de capacidades avanzadas, utilizando Web APIs modernas.

## Ejercicios Implementados

1. **Consulta de Permisos y Geolocalización:** Uso de `navigator.permissions` y `navigator.geolocation` para obtener coordenadas y mostrarlas en un mapa interactivo incrustado.
2. **Captura de Medios con Cámara:** Acceso a la cámara mediante `getUserMedia`, renderizado en un elemento `<video>` y captura de fotografía estática enviada a un `<canvas>`.
3. **Notificaciones Push Locales:** Solicitud de permisos y disparo de notificaciones personalizadas (título, cuerpo, icono y vibración) a través de un Service Worker.
4. **Persistencia de Datos Asíncrona:** Creación de una base de datos local con IndexedDB para realizar operaciones CRUD (Insertar, Consultar, Eliminar) sin conexión.
5. **Estrategia de Caché Dinámica (Network-First):** Consumo de una API REST con `fetch`, guardando copia local en IndexedDB. Implementa un *fallback* para mostrar los últimos datos guardados si el dispositivo se queda sin red.

## Tecnologías Utilizadas
* HTML5 (Canvas, Video, Iframes)
* CSS3 (Flexbox, Grid)
* JavaScript (Vanilla)
* Service Workers
* IndexedDB
* Web APIs (Geolocation, MediaDevices, Notifications, Permissions)

## Cómo ejecutar el proyecto localmente
Para probar los Service Workers y las notificaciones (Ejercicios 3 y 5), es necesario ejecutar el proyecto en un servidor local (no usar `file:///`).
* Si usas VS Code, puedes utilizar la extensión **Live Server**.
* Abre el archivo `index.html` de la raíz y presiona "Open with Live Server".

## Autor
* **Alondra Gómez**