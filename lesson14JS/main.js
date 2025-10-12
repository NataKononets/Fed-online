window.onload = function() {
    const header = document.createElement('header');
  header.style.padding = '50px';
  header.style.backgroundColor = 'yellow';
  header.style.textAlign = 'center';
  header.style.fontSize = '50px';
  header.style.fontFamily = 'Poppins, sans-serif'; 
  header.style.borderRadius = '12px';
  header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
  header.style.margin = '20px auto';
  header.style.width = '90%';
  header.style.display = 'flex';
  header.style.flexDirection = 'column';
  header.style.alignItems = 'center';
  header.innerText = 'Header';
  document.body.appendChild(header);

  const nav = document.createElement('nav');
  nav.style.display = 'flex';
  nav.style.justifyContent = 'center';
  nav.style.flexWrap = 'wrap';
  nav.style.gap = '30px';
  nav.style.marginTop = '20px';
  header.appendChild(nav);

  const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Послуги', url: '/services' },
    { name: 'Контакти', url: '/contacts' },
    { name: 'Про нас', url: '/about-us' },
  ];

  menuData.forEach(item => {
    const link = document.createElement('a');
    link.textContent = item.name;
    link.href = item.url;
    link.target = '_blank';

    link.style.textDecoration = 'none';
    link.style.color = '#333';
    link.style.fontSize = '22px';
    link.style.fontWeight = '500';
    link.style.transition = 'all 0.3s ease';

    link.addEventListener('mouseenter', () => {
      link.style.color = '#E65100';
      link.style.transform = 'scale(1.1)';
    });
    link.addEventListener('mouseleave', () => {
      link.style.color = '#333';
      link.style.transform = 'scale(1)';
    });

    nav.appendChild(link);
  });

const container = document.createElement('div');
container.style.display = 'flex';
container.style.flexWrap = 'wrap';
container.style.justifyContent = 'center';
container.style.gap = '20px';
container.style.marginTop = '40px';
container.style.padding = '20px';
container.style.backgroundColor='#f9f9f9';
container.style.borderRadius = '12px';
container.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
container.style.width = '90%';
document.body.appendChild(container);

for (let i = 1; i <= 50; i++) {
    const square = document.createElement('div');
    square.classList.add('circle-element');
    square.style.width = '50px';
    square.style.height = '50px';
    square.style.borderRadius= '10px';
    // square.style.backgroundColor = getRandomColor();
    square.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    square.style.cursor = 'pointer';
    const hue=i*7;
    square.style.backgroundColor = `hsl(${hue}, 70%, 60%)`;
    square.addEventListener('mouseenter', () => {
        square.style.transform = 'scale(1.2)';
        square.style.backgroundColor=`hsl(${(hue+180)%360}, 80%, 50%)`;
        });
    square.addEventListener('mouseleave', () => {
        square.style.transform = 'scale(1)'
        square.style.backgroundColor=`hsl(${hue}, 70%, 60%)`;
     });
    container.appendChild(square);
}
//         square.style.backgroundColor= getRandomColor();
//     });
//     square.addEventListener('mouseleave', () => {
//         square.style.transform = 'scale(1)';
//      });
//     container.appendChild(square);
// }
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let j = 0; j < 6; j++) 
//         {
//         color += letters[Math.floor(Math.random() * 16)];
//         }
//     return color;
// }
};
