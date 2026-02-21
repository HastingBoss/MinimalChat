export const contacts = [
    {
        id: 1,
        name: 'Carlos Rodríguez',
        type: 'dm',
        job_title: 'Desarrollador Backend Senior',
        work_hours: '24hs',
        availability: 'En línea',
        profile_picture: 'https://randomuser.me/api/portraits/men/1.jpg',
        messages: [
            { id: 1, send_by_me: true, message: '¿Cómo va la migración?', created_at: '11:45' },
            { id: 2, send_by_me: false, message: 'Casi terminamos con usuarios.', created_at: '11:50' },
            { id: 3, send_by_me: true, message: 'Avísame para probar.', created_at: '11:55' },
            { id: 4, send_by_me: false, message: 'Sandbox habilitado.', created_at: '12:10' },
            { id: 5, send_by_me: true, message: 'Lanzando tests.', created_at: '12:15' },
            { id: 6, send_by_me: false, message: 'Ojo con el límite.', created_at: '12:20' },
            { id: 7, send_by_me: true, message: 'Tests pasados ok.', created_at: '12:45' },
            { id: 8, send_by_me: false, message: 'Perfecto, pasamos a producción mañana.', created_at: '12:50' },
            { id: 9, send_by_me: true, message: 'Entendido. Me quedo atento al deploy.', created_at: '13:00' },
            { id: 10, send_by_me: false, message: 'Por cierto, ¿viste lo de la API de Stripe?', created_at: '13:15' },
            { id: 11, send_by_me: true, message: 'Sí, hay que actualizar la versión del SDK.', created_at: '13:20' },
            { id: 12, send_by_me: false, message: 'Lo apunto.', created_at: '13:30' }
        ]
    },
    {
        id: 2,
        name: 'Ana García',
        type: 'dm',
        job_title: 'Gerente de Proyecto',
        work_hours: '08:30 - 17:30',
        availability: 'En reunión',
        profile_picture: 'https://randomuser.me/api/portraits/women/2.jpg',
        messages: [
            { id: 1, send_by_me: false, message: '¿Revisamos Sprint 4?', created_at: '09:10' },
            { id: 2, send_by_me: true, message: 'Claro, 14:00.', created_at: '09:15' },
            { id: 3, send_by_me: false, message: 'Te envío Zoom.', created_at: '10:05' },
            { id: 4, send_by_me: true, message: 'Anotando puntos.', created_at: '10:10' },
            { id: 5, send_by_me: false, message: '¿Traes retención?', created_at: '11:30' },
            { id: 6, send_by_me: true, message: 'Sí, en PDF.', created_at: '11:35' },
            { id: 7, send_by_me: false, message: 'He adelantado la reunión a las 13:45, ¿puedes?', created_at: '13:10' },
            { id: 8, send_by_me: true, message: 'Sí, dame 5 minutos.', created_at: '13:40' },
            { id: 9, send_by_me: false, message: 'Entra cuando quieras.', created_at: '13:45' }
        ]
    },
    {
        id: 3,
        name: 'Sofía Martínez',
        type: 'dm',
        job_title: 'Diseñadora UX/UI',
        work_hours: '10:00 - 19:00',
        availability: 'Remoto',
        profile_picture: 'https://randomuser.me/api/portraits/women/3.jpg',
        messages: [
            { id: 1, send_by_me: false, message: 'Mira los wireframes.', created_at: '11:30' },
            { id: 2, send_by_me: true, message: 'Revisando.', created_at: '11:35' },
            { id: 3, send_by_me: false, message: 'Mira el menú lateral.', created_at: '11:40' },
            { id: 4, send_by_me: true, message: 'Me gusta el degradado.', created_at: '11:50' },
            { id: 5, send_by_me: false, message: 'Nuevo color de marca.', created_at: '12:00' },
            { id: 6, send_by_me: true, message: '¿Habrá versiones en light mode?', created_at: '12:15' },
            { id: 7, send_by_me: false, message: 'Por supuesto, estoy en ello.', created_at: '12:30' },
            { id: 8, send_by_me: true, message: 'Avísame cuando los tengas.', created_at: '13:00' }
        ]
    },
    {
        id: 4,
        name: 'David López',
        type: 'dm',
        job_title: 'Ingeniero DevOps',
        work_hours: '09:00 - 18:00',
        availability: 'En línea',
        profile_picture: 'https://randomuser.me/api/portraits/men/4.jpg',
        messages: [
            { id: 1, send_by_me: false, message: 'SSL listos.', created_at: '10:00' },
            { id: 2, send_by_me: true, message: 'Gracias David.', created_at: '10:05' },
            { id: 3, send_by_me: false, message: 'He reconfigurado el balanceador.', created_at: '11:00' },
            { id: 4, send_by_me: true, message: 'Lo noto más rápido.', created_at: '11:15' }
        ]
    },
    {
        id: 5,
        name: 'Lucía Fernández',
        type: 'dm',
        job_title: 'Frontend Developer',
        work_hours: '09:00 - 18:00',
        availability: 'En línea',
        profile_picture: 'https://randomuser.me/api/portraits/women/5.jpg',
        messages: [
            { id: 1, send_by_me: false, message: 'Error en la landing.', created_at: '09:30' },
            { id: 2, send_by_me: true, message: 'Pásame el log.', created_at: '09:31' },
            { id: 3, send_by_me: false, message: 'Parece un problema de tipos con TS.', created_at: '09:45' }
        ]
    },
    {
        id: 6,
        name: 'Miguel Ángel',
        type: 'dm',
        job_title: 'QA Engineer',
        work_hours: '08:00 - 17:00',
        availability: 'En línea',
        profile_picture: 'https://randomuser.me/api/portraits/men/6.jpg',
        messages: [
            { id: 1, send_by_me: false, message: 'Tests del módulo 3 fallando.', created_at: '15:20' },
            { id: 2, send_by_me: true, message: '¿Es intermitente o constante?', created_at: '15:25' }
        ]
    },
    {
        id: 7,
        name: 'Elena Gómez',
        type: 'dm',
        job_title: 'Marketing Specialist',
        work_hours: '09:00 - 18:00',
        availability: 'Fuera',
        profile_picture: 'https://randomuser.me/api/portraits/women/7.jpg',
        messages: [{ id: 1, send_by_me: false, message: 'Métrica de CTR subiendo.', created_at: '12:00' }]
    },
    {
        id: 8,
        name: 'Roberto Díaz',
        type: 'dm',
        job_title: 'Product Owner',
        work_hours: '09:00 - 18:00',
        availability: 'En línea',
        profile_picture: 'https://randomuser.me/api/portraits/men/8.jpg',
        messages: [{ id: 1, send_by_me: false, message: '¿Roadmap para mañana?', created_at: '16:45' }]
    },
    {
        id: 9,
        name: 'Laura Ruiz',
        type: 'dm',
        job_title: 'Data Analyst',
        work_hours: '09:00 - 18:00',
        availability: 'Ausente',
        profile_picture: 'https://randomuser.me/api/portraits/women/9.jpg',
        messages: [{ id: 1, send_by_me: false, message: 'CSV de ventas limpio.', created_at: '10:00' }]
    },
    {
        id: 10,
        name: 'Jorge Torres',
        type: 'dm',
        job_title: 'Security Lead',
        work_hours: '09:00 - 18:00',
        availability: 'En línea',
        profile_picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        messages: [{ id: 1, send_by_me: false, message: 'Nueva vulnerabilidad detectada.', created_at: '10:30' }]
    },
    {
        id: 11,
        name: 'Carmen Vega',
        type: 'dm',
        job_title: 'Content Writer',
        work_hours: '08:00 - 16:00',
        availability: 'En línea',
        profile_picture: 'https://randomuser.me/api/portraits/women/10.jpg',
        messages: [{ id: 1, send_by_me: false, message: 'Post de blog terminado.', created_at: '15:00' }]
    },
    {
        id: 12,
        name: 'Pablo Soto',
        type: 'dm',
        job_title: 'Illustrator',
        work_hours: '11:00 - 20:00',
        availability: 'En línea',
        profile_picture: 'https://randomuser.me/api/portraits/men/11.jpg',
        messages: [{ id: 1, send_by_me: false, message: 'Iconos listos.', created_at: '18:15' }]
    },
    {
        id: 13,
        name: 'Marta Sanz',
        type: 'dm',
        job_title: 'SEO Specialist',
        work_hours: '09:00 - 18:00',
        availability: 'En línea',
        profile_picture: 'https://randomuser.me/api/portraits/women/11.jpg',
        messages: [{ id: 1, send_by_me: false, message: 'Palabras clave analizadas.', created_at: '11:00' }]
    },
    {
        id: 14,
        name: 'Ignacio Mora',
        type: 'dm',
        job_title: 'SysAdmin',
        work_hours: '00:00 - 08:00',
        availability: 'Durmiendo',
        profile_picture: 'https://randomuser.me/api/portraits/men/12.jpg',
        messages: [{ id: 1, send_by_me: false, message: 'Servidor estable bajo carga.', created_at: '04:00' }]
    },
    {
        id: 15,
        name: 'Victoria Luna',
        type: 'dm',
        job_title: 'UX Researcher',
        work_hours: '09:00 - 18:00',
        availability: 'En línea',
        profile_picture: 'https://randomuser.me/api/portraits/women/12.jpg',
        messages: [{ id: 1, send_by_me: false, message: 'Entrevistas listas.', created_at: '11:20' }]
    },
    {
        id: 16,
        name: 'Diego Costa',
        type: 'dm',
        job_title: 'Mobile Dev',
        work_hours: '09:00 - 18:00',
        availability: 'En línea',
        profile_picture: 'https://randomuser.me/api/portraits/men/13.jpg',
        messages: [{ id: 1, send_by_me: false, message: 'Nueva build subida.', created_at: '17:30' }]
    },
    {
        id: 17,
        name: 'Sandra Ruiz',
        type: 'dm',
        job_title: 'HR Manager',
        work_hours: '09:00 - 18:00',
        availability: 'En línea',
        profile_picture: 'https://randomuser.me/api/portraits/women/13.jpg',
        messages: [{ id: 1, send_by_me: false, message: 'Contrato firmado.', created_at: '09:45' }]
    }
]
