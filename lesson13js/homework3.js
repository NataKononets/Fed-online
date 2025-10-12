window.onload = function() {
const elementsArray=[
    {tag: "p", text:'еlement 1'},
    {tag: "div", text:'element 2'},
    {tag: "span", text:'element 3'},
]
const container = document.getElementById('container');
function createElementFromObject(obj) {
    const newElement = document.createElement(obj.tag);
    newElement.textContent = obj.text;
    return newElement;
}
elementsArray.forEach(item => {
    const element = createElementFromObject(item);
    container.appendChild(element);
})
  const elementsArray2 = [
    {text: 'element 4', usePrepend: true},
    {text: 'element 5', usePrepend: false},
    {text: 'element 6', usePrepend: true}
]
const container2 = document.getElementById('container2');
elementsArray2.forEach(item => {
    const newElement = document.createElement('p');
    newElement.textContent = item.text;
    if (item.usePrepend) {
        container2.before(newElement);
    } else {
        container2.after(newElement);
    }   
}) 
}