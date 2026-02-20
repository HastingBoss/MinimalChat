// Datos de prueba (mock data) para la aplicación
// Incluye información detallada para simular un entorno profesional
export const contacts = [
    {
        id: 1,
        name: 'Carlos Rodríguez',
        job_title: 'Senior Backend Developer',
        work_hours: '24hs',
        last_time_connection: '12:00',
        profile_picture: 'https://randomuser.me/api/portraits/men/1.jpg',
        messages: [
            { id: 1, send_by_me: true, message: 'Hola Carlos, ¿cómo va la migración de la base de datos?', created_at: '11:45', is_read: true },
            { id: 2, send_by_me: false, message: 'Hola, todo bien. Ya casi terminamos con los usuarios, falta la tabla de pedidos.', created_at: '11:50', is_read: true },
            { id: 3, send_by_me: true, message: 'Perfecto, avísame cuando esté listo para probar los endpoints.', created_at: '11:55', is_read: true },
            { id: 4, send_by_me: false, message: 'Sí, estoy en eso. Encontré unos problemas de consistencia en las fechas, pero ya lo estoy resolviendo.', created_at: '11:58', is_read: true },
            { id: 5, send_by_me: true, message: 'Entendido. ¿Necesitas ayuda con los scripts de limpieza?', created_at: '12:05', is_read: true },
            { id: 6, send_by_me: false, message: 'Por ahora no, creo que lo tengo controlado. Pero te aviso si se complica.', created_at: '12:10', is_read: true },
            { id: 7, send_by_me: true, message: 'Dale. Otra cosa, ¿viste el reporte de latencia del servidor B?', created_at: '14:30', is_read: true },
            { id: 8, send_by_me: false, message: 'No, no lo he revisado. ¿Está muy alto?', created_at: '14:35', is_read: true },
            { id: 9, send_by_me: true, message: 'Sí, picos de 500ms en horas punta. Deberíamos revisar los índices.', created_at: '14:40', is_read: true },
            { id: 10, send_by_me: false, message: 'Uf, eso es mucho. Lo miro apenas termine con la migración. Gracias por avisar.', created_at: '14:45', is_read: true },
            { id: 11, send_by_me: true, message: 'Gracias Carlos.', created_at: '14:50', is_read: true }
        ]
    },
    {
        id: 2,
        name: 'Ana García',
        job_title: 'Project Manager',
        work_hours: '08:30 - 17:30',
        last_time_connection: '12:15',
        profile_picture: 'https://randomuser.me/api/portraits/women/2.jpg',
        messages: [
            { id: 1, send_by_me: false, message: 'Buenos días, ¿podemos revisar el cronograma del proyecto Sprint 4?', created_at: '09:10', is_read: true },
            { id: 2, send_by_me: true, message: 'Claro Ana, ¿te parece bien a las 14:00?', created_at: '09:15', is_read: true },
            { id: 3, send_by_me: false, message: 'Genial, envío la invitación.', created_at: '09:20', is_read: true },
            { id: 4, send_by_me: false, message: 'También necesito que me pasen las estimaciones para las tareas del backlog.', created_at: '10:00', is_read: true },
            { id: 5, send_by_me: true, message: 'Las estamos terminando. Te las paso antes del mediodía.', created_at: '10:15', is_read: true },
            { id: 6, send_by_me: false, message: 'Excelente. Recuerden que el cliente quiere ver el avance del módulo de reportes.', created_at: '10:20', is_read: true },
            { id: 7, send_by_me: true, message: 'Sí, estamos trabajando en los gráficos. Van a quedar muy bien.', created_at: '10:25', is_read: true },
            { id: 8, send_by_me: false, message: 'Me alegra oír eso. Nos vemos en la reunión.', created_at: '10:30', is_read: true },
            { id: 9, send_by_me: true, message: 'Hasta luego.', created_at: '10:35', is_read: true }
        ]
    },
    {
        id: 3,
        name: 'Sofía Martínez',
        job_title: 'UX/UI Designer',
        work_hours: '10:00 - 19:00',
        last_time_connection: '11:45',
        profile_picture: 'https://randomuser.me/api/portraits/women/3.jpg',
        messages: [
            { id: 1, send_by_me: false, message: 'He subido los nuevos wireframes a Figma. ¿Puedes echarles un vistazo?', created_at: '11:30', is_read: false },
            { id: 2, send_by_me: true, message: '¡Claro! Los reviso en un momento.', created_at: '11:35', is_read: true },
            { id: 3, send_by_me: false, message: 'Fíjate especialmente en el flujo de registro. Cambié algunos pasos para simplificarlo.', created_at: '11:40', is_read: false },
            { id: 4, send_by_me: true, message: 'Buena idea. El anterior era un poco largo. ¿Mantuviste los colores de la marca?', created_at: '11:45', is_read: true },
            { id: 5, send_by_me: false, message: 'Sí, pero ajusté un poco el contraste para accesibilidad.', created_at: '11:50', is_read: false },
            { id: 6, send_by_me: true, message: 'Perfecto. Te dejo mis comentarios directamente en Figma.', created_at: '11:55', is_read: true },
            { id: 7, send_by_me: false, message: 'Gracias!', created_at: '12:00', is_read: false }
        ]
    },
    {
        id: 4,
        name: 'David López',
        job_title: 'DevOps Engineer',
        work_hours: '09:00 - 18:00',
        last_time_connection: 'Ayer',
        profile_picture: 'https://randomuser.me/api/portraits/men/4.jpg',
        messages: [
            { id: 1, send_by_me: true, message: 'David, el despliegue en staging falló anoche.', created_at: 'Ayer', is_read: true },
            { id: 2, send_by_me: false, message: 'Lo estoy revisando. Parece ser un problema con las variables de entorno.', created_at: 'Ayer', is_read: true },
            { id: 3, send_by_me: true, message: 'Avísame si necesitas que revise la configuración del contenedor.', created_at: 'Ayer', is_read: true },
            { id: 4, send_by_me: false, message: 'Creo que ya encontré el error. Una variable mal escrita en el pipeline.', created_at: 'Ayer', is_read: true },
            { id: 5, send_by_me: false, message: 'Listo, redeployando ahora.', created_at: 'Ayer', is_read: true },
            { id: 6, send_by_me: true, message: 'Excelente. Confírmame cuando termine para hacer pruebas de humo.', created_at: 'Ayer', is_read: true },
            { id: 7, send_by_me: false, message: 'Despliegue exitoso. Todo verde.', created_at: 'Ayer', is_read: true },
            { id: 8, send_by_me: true, message: 'Gracias David!', created_at: 'Ayer', is_read: true }
        ]
    },
    {
        id: 5,
        name: 'Lucía Fernández',
        job_title: 'Frontend Developer',
        work_hours: '09:00 - 18:00',
        last_time_connection: '10:00',
        profile_picture: 'https://randomuser.me/api/portraits/women/5.jpg',
        messages: [
            { id: 1, send_by_me: false, message: 'Hola, ¿tienes un momento para ver un tema de CSS?', created_at: '09:30', is_read: true },
            { id: 2, send_by_me: true, message: 'Sí, dime. ¿Qué pasa?', created_at: '09:35', is_read: true },
            { id: 3, send_by_me: false, message: 'El header se rompe en pantallas medianas. No sé si es el flexbox o un media query.', created_at: '09:40', is_read: true },
            { id: 4, send_by_me: true, message: 'A ver, comparte pantalla.', created_at: '09:42', is_read: true },
            { id: 5, send_by_me: true, message: 'Ah, ya veo. Te falta un wrap en el contenedor principal.', created_at: '09:50', is_read: true },
            { id: 6, send_by_me: false, message: 'Cierto! Qué detalle. Mil gracias.', created_at: '09:55', is_read: true },
            { id: 7, send_by_me: true, message: 'De nada. A veces pasa.', created_at: '10:00', is_read: true }
        ]
    },
    {
        id: 6,
        name: 'Miguel Ángel Torres',
        job_title: 'QA Engineer',
        work_hours: '08:00 - 17:00',
        last_time_connection: '11:15',
        profile_picture: 'https://randomuser.me/api/portraits/men/6.jpg',
        messages: [
            { id: 1, send_by_me: false, message: 'Encontré un bug crítico en el login.', created_at: '10:00', is_read: true },
            { id: 2, send_by_me: true, message: '¿Qué sucede?', created_at: '10:05', is_read: true },
            { id: 3, send_by_me: false, message: 'Si pones caracteres especiales en el password, da error 500.', created_at: '10:10', is_read: true },
            { id: 4, send_by_me: true, message: 'Ok, levanta el ticket en Jira con prioridad alta.', created_at: '10:15', is_read: true },
            { id: 5, send_by_me: false, message: 'Ya está creado. Ticket QA-1045.', created_at: '10:20', is_read: true },
            { id: 6, send_by_me: true, message: 'Lo reviso ahora mismo.', created_at: '10:25', is_read: true }
        ]
    },
    {
        id: 7,
        name: 'Elena Gómez',
        job_title: 'Marketing Specialist',
        work_hours: '09:00 - 18:00',
        last_time_connection: '13:00',
        profile_picture: 'https://randomuser.me/api/portraits/women/7.jpg',
        messages: [
            { id: 1, send_by_me: false, message: 'Necesitamos actualizar los textos de la landing page.', created_at: '11:00', is_read: true },
            { id: 2, send_by_me: true, message: 'Claro, pásame el documento con los nuevos copys.', created_at: '11:10', is_read: true },
            { id: 3, send_by_me: false, message: 'Te lo acabo de enviar por correo.', created_at: '11:15', is_read: true },
            { id: 4, send_by_me: true, message: 'Recibido. ¿Para cuándo lo necesitan?', created_at: '11:20', is_read: true },
            { id: 5, send_by_me: false, message: 'Idealmente para mañana a primera hora.', created_at: '11:25', is_read: true },
            { id: 6, send_by_me: true, message: 'Haré lo posible.', created_at: '11:30', is_read: true }
        ]
    },
    {
        id: 8,
        name: 'Roberto Díaz',
        job_title: 'Product Owner',
        work_hours: '09:00 - 18:00',
        last_time_connection: '09:00',
        profile_picture: 'https://randomuser.me/api/portraits/men/8.jpg',
        messages: [
            { id: 1, send_by_me: false, message: 'El cliente está pidiendo un cambio en el dashboard.', created_at: '08:30', is_read: true },
            { id: 2, send_by_me: true, message: '¿Qué tipo de cambio?', created_at: '08:35', is_read: true },
            { id: 3, send_by_me: false, message: 'Quieren ver las métricas en tiempo real en lugar de actualizaciones cada hora.', created_at: '08:40', is_read: true },
            { id: 4, send_by_me: true, message: 'Eso implica cambiar los websockets. Es un cambio grande.', created_at: '08:45', is_read: true },
            { id: 5, send_by_me: false, message: 'Lo sé. Reunámonos para ver el impacto.', created_at: '08:50', is_read: true },
            { id: 6, send_by_me: true, message: 'Ok, agendame.', created_at: '08:55', is_read: true }
        ]
    }
]
