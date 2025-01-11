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
    await run("Surname");
    await run("Age");
    await run("Address.City");
    await run("Other.Misc");
    await run("Other.Nothing");
    await run("Other.`Over 18 ?`")

    await run("Phone[0]");
    await run("Phone[1]");
    await run("Phone[-1]");
    await run("Phone[-2]");
    await run("Phone[8]");
    await run("Phone[0].number");
    await run("Phone.number");
    await run("Phone.number[0]");
    await run("(Phone.number)[0]");
    await run("Phone[[0..1]]");
})()