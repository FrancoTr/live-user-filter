const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];
getData();

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50"); //brings 50 random users

  const { results } = await res.json();

  // Clear results
  results.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li"); //we create a list item for each of these users
    listItems.push(li);
    li.innerHTML = `
        <img srs="${user.picture.large}" alt="${user.name.first}">
        <div class="user-info"> 
            <h4>${user.name.first} ${user.name.last}</h4>
            <p>${user.location.city}, ${user.location.country}</p>
        </div>
    `;
    result.appendChild(li);
  });
}
