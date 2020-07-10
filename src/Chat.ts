import { Message } from '@/models/Message';

export const AllMessages: Message[] = generate_chat_data()

function generate_chat_data() {
    const x = []
    for (let i = 0; i < 10000; i++) {
        x.push({ id: i, name: "Alex Chi", message: "Hello!", time: Date.now() + i })
    }
    return x
}
