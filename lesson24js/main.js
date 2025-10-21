window.onload = function() {
    const API_URL = 'https://jsonplaceholder.typicode.com';
    const btn = document.getElementById('getUserBtn');
const infoBox = document.getElementById('userInfo');
async function getUserData(userId) 
{
    try {
        const response = await fetch(`${API_URL}/users/${userId}`);
        if (!response.ok) {
            throw new Error('User not found!');
          }
        const user  = await response.json();
        infoBox.innerHTML = `
            </p><strong>Name:</strong> ${user.name}</p>
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
        `;
    } catch (error) {
        infoBox.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }   
}
btn.addEventListener('click', () => {
    const id = document.getElementById('userId').value.trim();
    if (id) {
        getUserData(id);
    } else {
        infoBox.innerHTML = '<p style="color: red;">Please enter a user ID.</p>';
    }   
});
  const FILM_API = 'https://swapi.dev/api/films';
  const filmBtn = document.getElementById('getFilmBtn');
  const filmInfoBox = document.getElementById('filmInfo');

  async function getFilmData(filmId) {
    try {
      const response = await fetch(`${FILM_API}/${filmId}/`);
      if (!response.ok) throw new Error('Film not found!');
      const film = await response.json();

      filmInfoBox.innerHTML = `        <p><strong>Title:</strong> ${film.title}</p>
        <p><strong>Release date:</strong> ${film.release_date}</p>
     `;
    } catch (error) {
      filmInfoBox.innerHTML = `<p style="color:red;">Error: ${error.message}</p>;
   ` }
  }

  filmBtn.addEventListener('click', () => {
    const id = document.getElementById('filmId').value.trim();
    if (id) getFilmData(id);
    else filmInfoBox.innerHTML = `<p style="color:red;">Please enter film ID!</p>`;
  });
  
  const PLANET_API = 'https://swapi.dev/api/planets';
  const planetBtn = document.getElementById('getPlanetBtn');
  const planetInfoBox = document.getElementById('planetInfo');

  async function getPlanetData(planetId) {
    try {
      const response = await fetch(`${PLANET_API}/${planetId}/`);
      if (!response.ok) {
        throw new Error('Planet not found!');
      }

      const planet = await response.json();

      planetInfoBox.innerHTML =` 
        <p><strong>Name:</strong> ${planet.name}</p>
        <p><strong>Climate:</strong> ${planet.climate}</p>
      `;
    } catch (error) {
      planetInfoBox.innerHTML = ` <p style="color:red;">Error: ${error.message}</p>`;
    }
  }

  planetBtn.addEventListener('click', () => {
    const id = document.getElementById('planetId').value.trim();
    if (id) {
      getPlanetData(id);
    } else {
      planetInfoBox.innerHTML = `<p style="color:red;">Please enter planet ID!</p>`;
    }
    });
};