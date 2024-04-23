const {name, total, date} = {
    name: "Lowe",
    total: 10,
    date: "01-01-2023"
}

const output = `Name: ${name}, ${total + 10} total, day: ${date.split("-")[0]}`
output // Name: Lowe, 20 total, day: 01 