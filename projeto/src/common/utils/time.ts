export function timeToSeconds(time:string){
    const [hours='',minutes='',seconds=''] = time.split(":");
    const hoursToSeconds = Number(hours) * 3600;
    const minutesToSeconds = Number(minutes) * 60;
    
    return hoursToSeconds + minutesToSeconds + Number(seconds);
}