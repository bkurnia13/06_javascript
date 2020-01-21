// Event Handler -> Inline HTML
const p3 = document.querySelector('.p3');

function ubahWarnaP3() {
    p3.style.backgroundColor = 'lightblue';
}



// Event Handler -> Methode
const p2 = document.querySelector('.p2');

function ubahWarnaP2() {
    p2.style.backgroundColor = 'lightblue';
}

p2.onclick = ubahWarnaP2;



// Event Listener
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('Item Baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});



// Resource : https://developer.mozilla.org/en-US/docs/Web/Events