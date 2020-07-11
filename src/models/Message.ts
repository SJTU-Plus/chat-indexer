export interface Message {
    id: string;
    name: string;
    msg: string;
    time: number;
}

import messages from './messages.json'

export function generateChatData(start: number, end: number) {
    const x: Message[] = []
    let i = 0
    const allMessage = messages as Array<any>

    allMessage.forEach((item: any) => {
        if (start <= item["time"] && item["time"] < end) {
            x.push({ id: i.toString(), name: item["name"], msg: item["msg"], time: item["time"] })
        }
        i += 1
    })

    return x
}

export function searchChatData(val: string) {
    let x: Message[] = []
    let i = 0
    let cnt = 0
    const allMessage = messages as Array<any>
    allMessage.forEach((item: any) => {
        if (item["msg"].search(val) != -1 || item["name"].search(val) != -1) {
            x.push({ id: i.toString(), name: item["name"], msg: item["msg"], time: item["time"] })
            cnt += 1
        }
        i += 1
    })
    x.reverse()
    x = x.slice(0, 500)
    return x
}
