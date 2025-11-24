const usersContainer = document.getElementById("users-container");
const searchInput = document.getElementById("search");

let usersData = []; // store all users

// Fetch API Data
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  usersData = data;
  displayUsers(data);
}

// Display Cards
function displayUsers(users) {
  usersContainer.innerHTML = ""; // reset

  users.forEach(user => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>City:</strong> ${user.address.city}</p>
    `;

    usersContainer.appendChild(card);
  });
}

// Search Feature
searchInput.addEventListener("input", () => {
  const searchText = searchInput.value.toLowerCase();

  const filtered = usersData.filter(user =>
    user.name.toLowerCase().includes(searchText)
  );

  displayUsers(filtered);
});

// Initialize
getUsers();
