const data = 'data/users.json'
const listData = document.getElementById('data');

const getListJson = () => {
    fetch(data)
    .then(response => {
        return response.json();
    }).then(responeJson => {
        console.log(responeJson);
        listData.innerHTML = "";
        let people = responeJson;
        people.forEach(item => {
            listData.innerHTML += `<tr>
            <th scope="row">${item.id}</th>
            <td>${item.name}</td>
            <td>${item.username}</td>
            <td>${item.email}</td>
            <td>${item.address.city}</td>
            <td>${item.company.name}</td>
          </tr>`
        });
    })
}

document.addEventListener('DOMContentLoaded', getListJson);