export const contacts = [
    {
        id: 1,
        name: 'Carlos Rodríguez',
        job_title: 'Senior Backend Developer',
        work_hours: '09:00 - 18:00',
        last_time_connection: '12:00',
        profile_picture: 'https://randomuser.me/api/portraits/men/1.jpg',
        messages: [
            {
                id: 1,
                send_by_me: true,
                message: 'Hola Carlos, ¿cómo va la migración de la base de datos?',
                created_at: '11:45',
                is_read: true
            },
            {
                id: 2,
                send_by_me: false,
                message: 'Hola, todo bien. Ya casi terminamos con los usuarios, falta la tabla de pedidos.',
                created_at: '11:50',
                is_read: true
            },
            {
                id: 3,
                send_by_me: true,
                message: 'Perfecto, avísame cuando esté listo para probar los endpoints.',
                created_at: '11:55',
                is_read: true
            }
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
            {
                id: 1,
                send_by_me: false,
                message: 'Buenos días, ¿podemos revisar el cronograma del proyecto Sprint 4?',
                created_at: '09:10',
                is_read: true
            },
            {
                id: 2,
                send_by_me: true,
                message: 'Claro Ana, ¿te parece bien a las 14:00?',
                created_at: '09:15',
                is_read: true
            },
            {
                id: 3,
                send_by_me: false,
                message: 'Genial, envío la invitación.',
                created_at: '09:20',
                is_read: true
            }
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
            {
                id: 1,
                send_by_me: false,
                message: 'He subido los nuevos wireframes a Figma. ¿Puedes echarles un vistazo?',
                created_at: '11:30',
                is_read: false
            }
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
            {
                id: 1,
                send_by_me: true,
                message: 'David, el despliegue en staging falló anoche.',
                created_at: 'Ayer',
                is_read: true
            },
            {
                id: 2,
                send_by_me: false,
                message: 'Lo estoy revisando. Parece ser un problema con las variables de entorno.',
                created_at: 'Ayer',
                is_read: true
            }
        ]
    }
]
