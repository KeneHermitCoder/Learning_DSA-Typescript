import { timeInterval, } from '../utils/timeInterval';

function longestCommonPrefix(strs: string[]): string {
    let existingPrefix = '';
    while (strs.length && !existingPrefix.length) {
        console.log(`${strs[strs.length - 1]}`)
        let longestString = strs[strs.length-1];
        if (strs.every(str => str.startsWith(longestString))) {
            existingPrefix = longestString;
            break;
        }
        strs[strs.length - 1] = longestString.slice(0, longestString.length - 1)
    }
    return existingPrefix;
}

// (() => {
//     const timeBeforeOperation = new Date();
//     console.log('Before sorting...');
//     console.log({
//         'startTime': timeBeforeOperation,
//         'startInterval': timeInterval(timeBeforeOperation, timeBeforeOperation, 'ms'),
//         arrayToSort: ["flower", "flow", "flight"]
//     });
//     console.log('\nAfter sorting...');
//     console.log({
//         'timeInterval': timeInterval(timeBeforeOperation, new Date(), 'ms'),
//         sortedArray: longestCommonPrefix([
//             "flowering", "flows", "flight", "flighting", "flightless", "flights", 'fleet',
//             'flew', 'flews', 'flewless', 'flewings', 'flewsing', 'flewings', 'flaw', 'flaws',
//             'flawless', 'flawlessing', 'flawlessness', 'flawlessly', 'fluid', 'fluidity', 'fluidly',
//             'flap', 'flaps', 'flapsing', 'flapsless', 'flapless', 'flapslessly', 'flapslessness',
//             'flapping', 'flow', 'flowed', 'flowing', 'flowingly', 'flowless', 'flowlessly', 'flowlessness',
//             'flame', 'flaming', 'flamingly', 'flamingness', 'flames', 'flamingly', 'flamingness',
//             'flamingo', 'flank', 'flanked', 'flanking', 'flanked', 'flanked', 'flanked', 'flanked',
//             'flanked', 'flanked', 'flanked', 'flanked', 'flanked', 'flanked', 'flanked', 'flanked',
//             'fleet', 'fleeted', 'fleeting', 'fleetingly', 'fleetless', 'fleetlessly', 'fleetlessness',
//             'flee', 'fleeing', 'fleeingly', 'fleeingness', 'flees', 'fleeingly', 'fleeingness',
//             'fleeing', 'flees', 'fleeingly', 'fleeingness', 'flees', 'fleeingly', 'fleeingness',
//             'flees', 'fleeingly', 'fleeingness', 'flees', 'fleeingly', 'fleeingness', 'flees',
//             'fleeingly', 'fleeingness', 'flees', 'fleeingly', 'fleeingness', 'flees', 'fleeingly',
//             'fleeingness', 'flees', 'fleeingly', 'fleeingness', 'flees', 'fleeingly', 'fleeingness',
//         ])
//     });
// })();