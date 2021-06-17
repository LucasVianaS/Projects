const informations = document.querySelector('.informations');
const usersInformation = document.querySelector('.users-informations');
const tbody = document.querySelector('.tbody');
const before = document.querySelector('.before');
const after = document.querySelector('.after');
const urlAPI = "https://jsonplaceholder.typicode.com/users";

async function getApi(url) {

    const response = await fetch(url);

    const data = await response.json();

    function createElement(name, username, email, address, phone, website) {
        const tr = document.createElement('tr');
        tr.classList.add('.users-informations');

        tbody.appendChild(tr);

        const tdName = document.createElement('td');
        tdName.textContent = name;
        tdName.classList.add('name');
        const tdUsername = document.createElement('td');
        tdUsername.textContent = username;
        tdUsername.classList.add('username');
        const tdEmail = document.createElement('td');
        tdEmail.textContent = email;
        tdEmail.classList.add('email');
        const tdAddress = document.createElement('td');
        tdAddress.textContent = address;
        tdAddress.classList.add('address');
        const tdPhone = document.createElement('td');
        tdPhone.textContent = phone;
        tdPhone.classList.add('phone');
        const tdWebsite = document.createElement('td');
        tdWebsite.textContent = website;
        tdWebsite.classList.add('website');

        tr.appendChild(tdName);
        tr.appendChild(tdUsername);
        tr.appendChild(tdEmail);
        tr.appendChild(tdAddress);
        tr.appendChild(tdPhone);
        tr.appendChild(tdWebsite);
    };

    let perPage = 2;
    const state = {
        page: 1,
        perPage,
        totalPages: Math.ceil(data.length / perPage)
    };

    const controls = {
        next() {
            if (state.page !== state.totalPages) {
                state.page++;
            }
        },

        previous() {
            if (state.page > 1) {
                state.page--;
            }
        },

        createListeners() {
            before.addEventListener('click', () => {
                controls.previous();
                update();
            });

            after.addEventListener('click', () => {
                controls.next();
                update();
            });
        }
    };

    const list = {
        update() {
            tbody.textContent = "";

            let page = state.page - 1;
            let start = page * state.perPage;
            let end = start + state.perPage;

            const paginatedItems = data.slice(start, end);

            paginatedItems.forEach((user) => {
                if (typeof user.address === 'object') {
                    const city = user.address.city;
                    const street = user.address.street;
                    const suite = user.address.suite;
                    const zipcode = user.address.zipcode;
                    const addressResult = `${city}, ${street}, ${suite}, ${zipcode}`;

                    user.address = addressResult;
                };

                const name = user.name;
                const username = user.username;
                const email = user.email;
                const address = user.address;
                const phone = user.phone;
                const website = user.website;

                createElement(name, username, email, address, phone, website);
            });
        }
    };

    function update() {
        list.update();
    };

    function init() {
        controls.createListeners();
        update();
    };

    init();
};

getApi(urlAPI);
