const body = document.body;
const array = ["html", "css", "js"];

const render = (array) => {

    const ul = document.createElement("ul");

    // for (let i = 0; i < array.length; i++) {
    //     const li = document.createElement("li");
    //     li.textContent = array[i];
    //     ul.append(li);
    // }

    //Сделал 2-мя способами через цикл for и for of

    for (item of array) {
        const li = document.createElement("li");
        li.textContent = item;
        ul.append(li);
    }
    
    return body.append(ul); 
}

render(array);
