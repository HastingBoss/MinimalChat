export const contacts = [
    {
        id: 1,
        name: 'Hermano',
        last_time_connection: '12:00',
        profile_picture: 'https://randomuser.me/api/portraits/men/1.jpg',
        messages: [
            {
                id: 1,
                send_by_me: true,
                message: 'Hello',
                created_at: '12:00',
                is_read: true
            },
            {
                id: 2,
                send_by_me: false,
                message: 'Hello',
                created_at: '12:00',
                is_read: true
            }
        ]
    },
    {
        id: 2,
        name: 'Luisa',
        last_time_connection: '12:15',
        profile_picture: 'https://randomuser.me/api/portraits/women/2.jpg',
        messages: [
            {
                id: 1,
                send_by_me: false,
                message: 'Hi John!',
                created_at: '12:10',
                is_read: true
            },
            {
                id: 2,
                send_by_me: true,
                message: 'How are you?',
                created_at: '12:11',
                is_read: true
            },
            {
                id: 3,
                send_by_me: false,
                message: 'I am good, thanks!',
                created_at: '12:12',
                is_read: true
            }
        ]
    },
    {
        id: 3,
        name: 'Pepe',
        last_time_connection: '11:45',
        profile_picture: 'https://randomuser.me/api/portraits/men/3.jpg',
        messages: [
            {
                id: 1,
                send_by_me: false,
                message: 'Are we still on for lunch?',
                created_at: '11:30',
                is_read: false
            }
        ]
    },
    {
        id: 4,
        name: 'Luis',
        last_time_connection: 'Yesterday',
        profile_picture: 'https://randomuser.me/api/portraits/women/4.jpg',
        messages: [
            {
                id: 1,
                send_by_me: true,
                message: 'Happy Birthday!',
                created_at: 'Yesterday',
                is_read: true
            },
            {
                id: 2,
                send_by_me: false,
                message: 'Thank you so much!',
                created_at: 'Yesterday',
                is_read: true
            }
        ]
    }
]
