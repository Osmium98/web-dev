import { atom, selector } from "recoil";

export const networkAtom = atom({
    key:"networkAtom",
    default:104
})
export const jobsAtom = atom({
    key:"jobsAtom",
    default:0
})
export const notificationAtom = atom({
    key:"notificationAtom",
    default:12
})
export const messagingAtom = atom({
    key:"messagingAtom",
    default:0
})


export const totalCountSelector = selector({
    key:"totalCountSelector",
    get:({get})=>{
         

        const a = get(networkAtom)
        const b = get(jobsAtom)
        const c = get(notificationAtom)
        const d = get(messagingAtom)

        return a+b+c+d
    }
})