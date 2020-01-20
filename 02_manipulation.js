// DOM Manipulation 1 -> Insert Element
const pBaru = document.createElement('p'); // 1. Buat Element Baru
const teksPBaru = document.createTextNode('Paragraf Baru'); // 2. Buat Isi Element
pBaru.appendChild(teksPBaru); // 3. Simpan Tulisan ke Dalam Element 

// 4. Letakan Element ke dalam HTML
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



// DOM Manipulation 2 -> Insert Element
const liBaru = document.createElement('li'); // 1. Buat Elemen Baru
const teksLiBaru = document.createTextNode('Item Baru'); // 2. Buat Isi Element
liBaru.appendChild(teksLiBaru); // 3. Simpan Tulisan kedalam Element

// 4. Letakan Element ke dalam HTML
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);



// DOM Manipulation 3 -> Remove Element
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);



// DOM Manipulation 4 -> Replace Element
const sectionB = document.getElementById('b'); // 1. Cari Element Parent
const p4 = sectionB.querySelector('p'); // 2. Cari Element yang akan di replace

const h2Baru = document.createElement('h2'); // 3. Buat Element baru
const teksH2Baru = document.createTextNode('Judul Baru'); // 4. Buat isi untuk element baru
h2Baru.appendChild(teksH2Baru); // 5. Masukan tulisan kedalam element.

// 6. Lakukan Replace
sectionB.replaceChild(h2Baru, p4);



// Penanda
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';