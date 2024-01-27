import crypto from 'crypto';

function generateName() {
    const length = 10;
    const bytes = crypto.randomBytes(Math.ceil(length / 2));
    return bytes.toString('hex').slice(0, length);
}

export default generateName;