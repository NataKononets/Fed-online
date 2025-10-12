window.onload = function() {
    const tree = document.getElementById('tree');
    const firstLevelItems = tree.querySelectorAll(':scope > li');
    const secondLevelItems = tree.querySelectorAll('li > ul > li');
    console.log('кількість першого рівня:',firstLevelItems.length);
    console.log('кількість другого рівня:',secondLevelItems.length);
    const booksArray=[{title: 'Пригоди Аліси в Країні Див', year: 1865, rating: 4.8},
        {title: '1984', year: 1949, rating: 4.8},
        {title: 'Гаррі Поттер і філософський камінь', year: 1997, rating: 4.7},
    ];
const tableBody=document.getElementById('bookTableBody');
    booksArray.forEach(book=>{
        const row=document.createElement('tr');
        const titleCell=document.createElement('td');
        titleCell.textContent=book.title;
        const yearCell=document.createElement('td');
        yearCell.textContent=book.year;
        const ratingCell=document.createElement('td');
        ratingCell.textContent=book.rating;
        row.appendChild(titleCell);
        row.appendChild(yearCell);
        row.appendChild(ratingCell);
        tableBody.appendChild(row);
    });

}