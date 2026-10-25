self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(clients.openWindow('/'));
});

self.addEventListener('message', (event) => {
    if (event.data && event.data.tipo === 'MOSTRAR_NOTIFICACION') {
        self.registration.showNotification(event.data.titulo, {
            body: event.data.cuerpo,
            icon: 'https://cdn-icons-png.flaticon.com/512/564/564619.png', // Icono genérico
            vibrate: [200, 100, 200],
            badge: 'https://cdn-icons-png.flaticon.com/512/564/564619.png'
        });
    }
});