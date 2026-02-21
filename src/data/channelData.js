export const channels = [
    {
        id: 'group-1',
        name: 'diseño-producto',
        type: 'channel',
        description: 'Discusiones sobre el nuevo rediseño de la interfaz.',
        memberList: [
            { name: 'Ana García', job_title: 'Gerente', profile_picture: 'https://randomuser.me/api/portraits/women/2.jpg', availability: 'En línea', work_hours: '09:00 - 18:00' },
            { name: 'Sofía Martínez', job_title: 'Diseñadora', profile_picture: 'https://randomuser.me/api/portraits/women/3.jpg', availability: 'Ausente', work_hours: '10:00 - 19:00' },
            { name: 'Marshall Brown', job_title: 'Líder', profile_picture: 'https://randomuser.me/api/portraits/men/32.jpg', availability: 'En línea', work_hours: '09:00 - 18:00' },
            { name: 'Carlos Rodríguez', job_title: 'Backend', profile_picture: 'https://randomuser.me/api/portraits/men/1.jpg', availability: 'En línea', work_hours: '24hs' },
            { name: 'Lucía Fernández', job_title: 'Frontend', profile_picture: 'https://randomuser.me/api/portraits/women/5.jpg', availability: 'En línea', work_hours: '09:00 - 18:00' },
            { name: 'David López', job_title: 'DevOps', profile_picture: 'https://randomuser.me/api/portraits/men/4.jpg', availability: 'En línea', work_hours: '09:00 - 18:00' }
        ],
        get members() { return this.memberList.length },
        messages: [
            { id: 101, sender: { name: 'Ana García', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' }, message: '¡Buenos días equipo! ¿Cómo van esos avances?', created_at: '09:00', send_by_me: false },
            { id: 102, sender: { name: 'Sofía Martínez', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' }, message: 'Hola Ana. Estoy terminando los prototipos de la nueva navegación.', created_at: '09:05', send_by_me: false },
            { id: 103, sender: { name: 'Marshall Brown', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' }, message: 'Genial Sofía. Recuerda que necesitamos que sea muy minimalista.', created_at: '09:10', send_by_me: true },
            { id: 104, sender: { name: 'Carlos Rodríguez', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' }, message: 'He actualizado la API para soportar los nuevos filtros. Ya pueden probarlos.', created_at: '09:20', send_by_me: false },
            { id: 105, sender: { name: 'Ana García', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' }, message: 'Perfecto Carlos. Marshall, ¿puedes revisar el cronograma hoy?', created_at: '09:25', send_by_me: false },
            { id: 106, sender: { name: 'Marshall Brown', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' }, message: 'Sí, lo tengo agendado para después del almuerzo.', created_at: '09:30', send_by_me: true },
            { id: 107, sender: { name: 'Lucía Fernández', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' }, message: '¿Alguien tiene los últimos assets del dashboard?', created_at: '10:00', send_by_me: false },
            { id: 108, sender: { name: 'Sofía Martínez', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' }, message: 'Sí, los subí a Figma ayer en la carpeta de V2.', created_at: '10:05', send_by_me: false },
            { id: 109, sender: { name: 'Lucía Fernández', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' }, message: 'Gracias, ya los encontré. Empiezo con la maquetación.', created_at: '10:15', send_by_me: false },
            { id: 110, sender: { name: 'David López', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' }, message: 'He detectado un pequeño lag en el entorno de pruebas, lo estoy revisando.', created_at: '10:30', send_by_me: false },
            { id: 111, sender: { name: 'Marshall Brown', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' }, message: 'Oído cocina David. Avísanos si necesitas ayuda.', created_at: '10:35', send_by_me: true },
            { id: 112, sender: { name: 'Carlos Rodríguez', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' }, message: '¿Necesitan que ajuste algo en los endpoints para las nuevas gráficas?', created_at: '10:45', send_by_me: false },
            { id: 113, sender: { name: 'Ana García', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' }, message: 'He revisado el presupuesto y tenemos margen para un par de mejoras extra.', created_at: '11:00', send_by_me: false },
            { id: 114, sender: { name: 'Marshall Brown', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' }, message: 'Bien. Prioricemos la optimización de carga.', created_at: '11:15', send_by_me: true },
            { id: 115, sender: { name: 'Sofía Martínez', avatar: 'https://randomuser.me/api/portraits/women/3.jpg' }, message: 'Añadiré micro-animaciones en los botones para mejorar el feedback.', created_at: '11:20', send_by_me: false },
            { id: 116, sender: { name: 'Lucía Fernández', avatar: 'https://randomuser.me/api/portraits/women/5.jpg' }, message: '¡Me encanta la idea! Le dará ese toque premium.', created_at: '11:25', send_by_me: false }
        ]
    },
    {
        id: 'group-2',
        name: 'ingenieria',
        type: 'channel',
        description: 'Canal técnico para desarrollo.',
        memberList: [
            { name: 'Carlos Ruiz', job_title: 'Backend', profile_picture: 'https://randomuser.me/api/portraits/men/1.jpg', availability: 'En línea', work_hours: '24hs' },
            { name: 'David López', job_title: 'DevOps', profile_picture: 'https://randomuser.me/api/portraits/men/4.jpg', availability: 'En línea', work_hours: '09:00 - 18:00' },
            { name: 'Marshall Brown', job_title: 'Líder', profile_picture: 'https://randomuser.me/api/portraits/men/32.jpg', availability: 'En línea', work_hours: '09:00 - 18:00' },
            { name: 'Miguel Ángel', job_title: 'QA', profile_picture: 'https://randomuser.me/api/portraits/men/6.jpg', availability: 'En línea', work_hours: '08:00 - 17:00' }
        ],
        get members() { return this.memberList.length },
        messages: [
            { id: 201, sender: { name: 'David López', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' }, message: 'Comenzando mantenimiento semanal.', created_at: '08:00', send_by_me: false },
            { id: 202, sender: { name: 'Carlos Ruiz', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' }, message: 'Backup hecho.', created_at: '08:05', send_by_me: false },
            { id: 203, sender: { name: 'David López', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' }, message: 'Deploy exitoso.', created_at: '09:00', send_by_me: false },
            { id: 204, sender: { name: 'Marshall Brown', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' }, message: '¿Viste los logs de latencia?', created_at: '09:15', send_by_me: true },
            { id: 205, sender: { name: 'David López', avatar: 'https://randomuser.me/api/portraits/men/4.jpg' }, message: '45ms de media.', created_at: '09:20', send_by_me: false },
            { id: 206, sender: { name: 'Carlos Ruiz', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' }, message: 'Podemos bajarlo a 30 si optimizamos la query principal.', created_at: '09:30', send_by_me: false },
            { id: 207, sender: { name: 'Marshall Brown', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' }, message: 'Hazlo si no rompe nada.', created_at: '09:35', send_by_me: true },
            { id: 208, sender: { name: 'Miguel Ángel', avatar: 'https://randomuser.me/api/portraits/men/6.jpg' }, message: 'Bug detectado en el login social.', created_at: '10:00', send_by_me: false },
            { id: 209, sender: { name: 'Carlos Ruiz', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' }, message: 'Lo miro en 5 min.', created_at: '10:05', send_by_me: false }
        ]
    },
    {
        id: 'group-3',
        name: 'marketing',
        type: 'channel',
        description: 'Coordinación de campañas.',
        memberList: [
            { name: 'Elena', job_title: 'Marketing', profile_picture: 'https://randomuser.me/api/portraits/women/7.jpg', availability: 'En línea', work_hours: '09:00 - 18:00' },
            { name: 'Marshall Brown', job_title: 'Líder', profile_picture: 'https://randomuser.me/api/portraits/men/32.jpg', availability: 'En línea', work_hours: '09:00 - 18:00' }
        ],
        get members() { return this.memberList.length },
        messages: [
            { id: 301, sender: { name: 'Elena', avatar: 'https://randomuser.me/api/portraits/women/7.jpg' }, message: 'Campaña Q4 lista.', created_at: '11:00', send_by_me: false },
            { id: 302, sender: { name: 'Marshall Brown', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' }, message: 'Pásame el borrador.', created_at: '11:05', send_by_me: true },
            { id: 303, sender: { name: 'Elena', avatar: 'https://randomuser.me/api/portraits/women/7.jpg' }, message: 'Enviado por correo.', created_at: '11:10', send_by_me: false }
        ]
    }
]
