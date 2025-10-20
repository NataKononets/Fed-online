            window.onload = function() {
   const jph = 'https://jsonplaceholder.typicode.com';
    const $ = (s) => document.querySelector(s);

    function showLoading(el) {
      el.innerHTML = `
        <div class="d-flex align-items-center gap-2 text-secondary">
          <div class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></div>
          <span>Завантаження…</span>
        </div>
     `;
    }

    function showAlert(errBox, message) {
      errBox.classList.remove('d-none');
      errBox.textContent = message;
    }
    function clearAlert(errBox) {
      errBox.classList.add('d-none');
      errBox.textContent = '';
    }

    function escapeHtml(str) {
      return String(str)
        .replaceAll('&', '&amp;')
        .replaceAll('<', '&lt;')
        .replaceAll('>', '&gt;');
    }

    function linkList(urls) {
      if (!Array.isArray(urls) || urls.length === 0) {
        return '<span class="text-secondary">немає</span>';
      }
      return `
        <ul class="list-unstyled ms-2 mb-0">
          ${urls.map(u => {
            const txt = escapeHtml(u);
            return `<li class="mb-1"><a href="${txt}" target="_blank" rel="noopener noreferrer">${txt}</a></li>`;
          }).join('')}
        </ul>
     `;
    }

    async function safeFetch(url, options = {}) {
      const res = await fetch(url, options);
      if (!res.ok) {
        let detail = '';
        try { detail = await res.text(); } catch {}
        throw new Error(`HTTP \&{res.status} ${res.statusText} \${detail ? ' — ' + detail : ''}`);
      }
      return res.json();
    }

        async function loadUsers() {
      const box = $('#usersList');
      const err = $('#usersErr');
      clearAlert(err);
      showLoading(box);

      try {
        const users = await safeFetch(`${jph}/users`);
        console.clear();
        console.log('Список користувачів (/users):', users);

        if (!users.length) {
          box.innerHTML = '<div class="text-secondary">Нічого не знайдено.</div>';
          return;
        }

        box.innerHTML = `
          <ul class="list-group">
            ${users.map(u => `
              <li class="list-group-item d-flex justify-content-between align-items-start">
                <div>
                  <div class="fw-semibold">${escapeHtml(u.name)}</div>
                  <a href="mailto:${escapeHtml(u.email)}">${escapeHtml(u.email)}</a>
                </div>
                <span class="badge text-bg-secondary">id ${u.id}</span>
              </li>
            `).join('')}
          </ul>
        `;
      } catch (e) {
        showAlert(err, 'Помилка завантаження /users: ' + e.message);
        box.innerHTML = '';
      }
    }
    async function loadUserById(id) {
      const box = $('#userDetails');
      const err = $('#userErr');
      clearAlert(err);
      showLoading(box);
      try {
        const u = await safeFetch(`${jph}/users/${id}`);
        console.log(`Деталі користувача (/users/${id}):`, u);

        box.innerHTML = `
          <dl class="row">
            <dt class="col-sm-4">Ім'я</dt>
            <dd class="col-sm-8">${escapeHtml(u.name)}</dd>

            <dt class="col-sm-4">Нікнейм</dt>
            <dd class="col-sm-8">${escapeHtml(u.username)}</dd>

            <dt class="col-sm-4">Email</dt>
            <dd class="col-sm-8"><a href="mailto:${escapeHtml(u.email)}">${escapeHtml(u.email)}</a></dd>

            <dt class="col-sm-4">Сайт</dt>
            <dd class="col-sm-8"><a href="http://${escapeHtml(u.website)}" target="_blank" rel="noopener noreferrer">${escapeHtml(u.website)}</a></dd>

            <dt class="col-sm-4">Компанія</dt>
            <dd class="col-sm-8">${escapeHtml(u.company?.name || '')}</dd>

            <dt class="col-sm-4">Адреса</dt>
            <dd class="col-sm-8">${escapeHtml(`${u.address?.city || ''}, ${u.address?.street || ''} ${u.address?.suite || ''}`)}</dd>
          </dl>
       `;
      } catch (e) {
        showAlert(err,` Помилка /users/${id}: ${e.message}`);
        box.innerHTML = '';
      }
    }

    async function loadPostsByUserId(userId) {
      const box = $('#postsList');
      const err = $('#postsErr');
      clearAlert(err);
      showLoading(box);

      try {
        const posts = await safeFetch(`${jph}/posts?userId=${encodeURIComponent(userId)}`);
        console.log(`Пости користувача (/posts?userId=\${userId}):`, posts);

        if (!posts.length) {
          box.innerHTML = '<div class="text-secondary">Постів не знайдено.</div>';
          return;
        }

        box.innerHTML = `
          <ol class="list-group list-group-numbered">
            ${posts.map(p => `
              <li class="list-group-item">${escapeHtml(p.title)}</li>
            `).join('')}
          </ol>
       ` ;
      } catch (e) {
        showAlert(err, 'Помилка завантаження постів: ' + e.message);
        box.innerHTML = '';
      }
    }

        async function loadPlanet1() {
      const box = $('#planetCard');
      const err = $('#planetErr');
      clearAlert(err);
      showLoading(box);

      try {
        const planet = await safeFetch('https://swapi.dev/api/planets/1/');
        console.log('SWAPI планета (planets/1):', planet);

        box.innerHTML = `
          <div class="card border-secondary-subtle">
            <div class="card-body">
              <h3 class="h5 card-title mb-3">Планета: ${escapeHtml(planet.name)}</h3>
              <div class="row">
                <div class="col-sm-6">
                  <div><span class="text-secondary">Клімат:</span> <strong>${escapeHtml(planet.climate)}</strong></div>
                  <div><span class="text-secondary">Населення:</span> <strong>${escapeHtml(planet.population)}</strong></div>
                  <div><span class="text-secondary">Діаметр:</span> <strong>${escapeHtml(planet.diameter)}</strong></div>
                  <div><span class="text-secondary">Період обертання:</span> <strong>${escapeHtml(planet.rotation_period)}</strong></div>
                </div>
                <div class="col-sm-6">
                  <div class="mb-2"><span class="text-secondary">Фільми:</span> ${linkList(planet.films)}</div>
                  <div><span class="text-secondary">Жителі:</span> ${linkList(planet.residents)}</div>
                </div>
              </div>
              <p class="mt-3 mb-0 small text-secondary">
                Джерело: <a href="https://swapi.dev/api/planets/1/" target="_blank" rel="noopener noreferrer">SWAPI</a>
              </p>
            </div>
          </div>
        `;
      } catch (e) {
        showAlert(err, 'Помилка SWAPI: ' + e.message + '. Переконайся, що використовуєш HTTPS.');
        box.innerHTML = '';
      }
    }
      $('#loadUsersBtn').addEventListener('click', loadUsers);
      $('#loadUserBtn').addEventListener('click', () => {
        const id = Number($('#userIdInput').value || 1);
        loadUserById(id);
      });
      $('#loadPostsBtn').addEventListener('click', () => {
        const id = Number($('#postsUserIdInput').value || 1);
        loadPostsByUserId(id);
      });
      $('#loadPlanetBtn').addEventListener('click', loadPlanet1);

      loadUsers().catch(() => {});

            }