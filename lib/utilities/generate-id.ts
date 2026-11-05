const CHARACTERS = "abcdefghiklmnopqrstuvwxwzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

export default function generateId() {

    const result: string[] = [];

    result.push(CHARACTERS[Math.floor(Math.random() * 100) % CHARACTERS.length - 10]);
    for (let i = 1; i < 10; i++) {
        result.push(CHARACTERS[Math.floor(Math.random() * 100) % CHARACTERS.length]);
    }
    return result.join("");
}