const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];
getData();

filter.addEventListener("input", (e) => filterData(e.target.value));

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50"); //brings 50 random users

  const { results } = await res.json();

  // Clear results
  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li"); //we create a list item for each of these users
    listItems.push(li);
    li.innerHTML = `
        <img src="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info"> 
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `;
    result.appendChild(li); //we put each user (li) inside the parent element (ul "result")
  });
}

function filterData(searchTerm) {
  console.log(searchTerm);
}
