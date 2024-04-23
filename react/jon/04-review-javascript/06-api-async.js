fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => console.log(data))

async function todos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const json = response.json()
    return json;
}

x = todos()
x