
if (!localStorage.getItem('count')) {
localStorage.setItem('count', 0);
}

document.getElementById("items").innerHTML = `Items: ${localStorage.getItem('count')}`;

function clickCount() {
    let count = Number.parseInt(localStorage.getItem('count')) + 1;
    localStorage.setItem('count', count);
    document.getElementById("items").innerHTML = `Items: ${count}`;
}

function removeCount() {
    let count = Number.parseInt(localStorage.getItem('count'));
    if (count > 0) {
        count--;
        localStorage.setItem('count', count);
        document.getElementById("items").innerHTML = `Items: ${count}`;
    }
}