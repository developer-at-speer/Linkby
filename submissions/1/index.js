const projects = [	{ id: 1, name: 'Option 1', probability: 0.3 },	{ id: 2, name: 'Option 2', probability: 0.5 },	{ id: 3, name: 'Option 3', probability: 0.15 },	{ id: 4, name: 'Option 4', probability: 0.05 }];

function pickRandomItem(options) {
    let randomNumber = Math.random(), cumulativeProbability = 0;
    for (let i = 0; i < options.length; i++) {
        cumulativeProbability += options[i].probability;
        if (randomNumber < cumulativeProbability) {
            return options[i];
        }
    }
}

const results = {
    1: 0, 2: 0, 3: 0, 4: 0
};

for (let i = 0; i < 500; i++) {
    let item = pickRandomItem(projects);
    results[item.id]++;
}

console.log(results);
