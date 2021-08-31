const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];
getData();

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=15"); //brings 15 random users

  const data = await res.json();
  console.log(data);
}
