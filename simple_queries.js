const fs = require('fs');
const jsonata = require('jsonata');

const rawData = fs.readFileSync('data.json');
const data = JSON.parse(rawData);

const run = async (src) => {
    const expression = jsonata(src);
    const result = await expression.evaluate(data);  // returns 24
    console.log(src + ": " + result);
}

(async () => {
    run("Surname");
    run("Age");
    run("Address.City");
    run("Other.Misc");
    run("Other.Nothing");
    run("Other.`Over 18 ?`")
})()