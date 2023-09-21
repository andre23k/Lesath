import { discloud } from "discloud.app"

 function calculateReload() {
    const date = new Date()
    if (date.getHours() >= 2) date.setDate(date.getDate() + 1)
    date.setHours(2, 0, 0, 0)
    const twoAm = date.valueOf()
    const timeRemaing = twoAm - Date.now()
    
    return setTimeout(() => reload(), timeRemaing)
}
async function reload() {
    await discloud.apps.restart('all')
    .then(() => {})
    .catch(() => {})
    return
}
export default calculateReload
