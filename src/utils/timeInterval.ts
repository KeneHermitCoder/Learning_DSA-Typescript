export function timeInterval(start: Date | number, end: Date | number, format: 'ms' | 's' | 'm' | 'h' | 'd' | 'M' | 'y' = 'ms'): string {
    const diff = new Date(end).getTime() - new Date(start).getTime();
    const formats = {
        ms: 1,
        s: 1000,
        m: 60000,
        h: 3600000,
        d: 86400000,
        M: 2592000000,
        y: 31536000000
    }
    return `${(diff / formats[format]).toFixed(3)} ${format}`;
}