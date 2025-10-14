window.onload = function() {
  const text = document.getElementById('myText');
  const button = document.getElementById('colorButton');

  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  function changeTextColor() {
    const newColor = getRandomColor();
    text.style.color = newColor;
  }

  button.onclick = changeTextColor;
  const square = document.getElementById('square');
  function doubleSize() {
    const currentWidth = square.offsetWidth;
    const currentHeight = square.offsetHeight;
    const newWidth = currentWidth * 2;
    const newHeight = currentHeight * 2;
    square.style.width = newWidth + 'px';
    square.style.height = newHeight + 'px';
  }
    square.onclick = doubleSize;

    const counterValue = document.getElementById('counterValue');
    const incrementButton = document.getElementById('counterButton');

    let count= 0;
    function addOne() {
        count ++;
        counterValue.innerText = count;
        if (count>9) {
            counterButton.textContent = 'Більше не можна';
            counterButton.removeEventListener('click', addOne);
        }
    }
    counterButton.addEventListener('click', addOne);
    
    const container = document.getElementById('container');
    const restoreButton = document.getElementById ('restoreButton');
    function createBoxes () {
       container.innerHTML = '';
       for (let i=1; i<=10; i++) 
        {
            const box = document.createElement('div')
            box.className = "box";
            boxtextContent = i;
            box.onclick = function (){
                box.remove();
            };
            container.appendChild(box);
        } 
       }
    createBoxes();
    restoreButton.onclick = createBoxes;

     const blockContainer = document.querySelector('.blockContainer');

  blockContainer.addEventListener('click', function(event) {
  
    if (event.target.classList.contains('first')) {
      alert('Ви натиснули першу кнопку!');
    } else if (event.target.classList.contains('second')) {
      alert('Ви натиснули другу кнопку!');
    } else if (event.target.classList.contains('third')) {
      alert('Ви натиснули третю кнопку!');
    }
  });
}