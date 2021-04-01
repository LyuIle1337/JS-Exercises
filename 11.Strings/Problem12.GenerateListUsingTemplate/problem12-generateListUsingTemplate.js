function createList() {
    let humans = [
        { name: 'human1', age: 69 },
        { name: 'human2', age: 20 },
        { name: 'human3', age: 12 },
        { name: 'human4', age: 50 },
        { name: 'human5', age: 100 }];

    let container = document.getElementById('list-container').innerHTML;
    let ul = document.createElement('lu');
    for (let i = 0; i < humans.length; i++) {
        var li = document.createElement('li');
        li.innerHTML = format(container, humans[i]);
        ul.appendChild(li);
    }
    document.body.appendChild(ul)

    function format(container, person) {
        return container.replace(/\{(\w+)\}/g, function (match, prop) {
            return person[prop] || '';
        });
    }
}