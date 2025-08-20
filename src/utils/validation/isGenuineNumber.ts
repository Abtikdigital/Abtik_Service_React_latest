 function isGenuineIndianPhoneNumber(phoneNumber:any) {
    const digits = String(phoneNumber).replace(/\D/g, '');

    if (!/^[6-9]\d{9}$/.test(digits)) {
        return false;
    }

    const sequenceLength = 4;
    for (let i = 0; i <= digits.length - sequenceLength; i++) {
        const sub = digits.substring(i, i + sequenceLength);
        const firstDigit = parseInt(sub[0], 10);

        let isRepeating = true;
        let isSequentialAsc = true;
        let isSequentialDesc = true;

        for (let j = 1; j < sequenceLength; j++) {
            const currentDigit = parseInt(sub[j], 10);
            if (currentDigit !== firstDigit) isRepeating = false;
            if (currentDigit !== firstDigit + j) isSequentialAsc = false;
            if (currentDigit !== firstDigit - j) isSequentialDesc = false;
        }

        if (isRepeating || isSequentialAsc || isSequentialDesc) {
            return false;
        }
    }
    return true;
}

export default isGenuineIndianPhoneNumber