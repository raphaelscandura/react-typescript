export function timeToSeconds(time:string){
    const [hours='',minutes='',seconds=''] = time.split(":");
    const hoursToSeconds = Number(hours) * 3600;
    const minutesToSeconds = Number(minutes) * 60;
    
    return hoursToSeconds + minutesToSeconds + Number(seconds);
}

export function secondToTime(seconds:number){
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    const [minuteTen, minuteUnity] = String(minutes).padStart(2,'0');
    const [secondTen, secondUnity] = String(secondsLeft).padStart(2,'0');

    return Array(minuteTen,minuteUnity,secondTen,secondUnity);
}