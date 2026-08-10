const restaurants = [
  {
    id: 1,
    name: "Green Bowl",
    cuisine: "Healthy Food",
    rating: 4.5,
    distance: "1.2 km",
    price: "₹₹",
    score: 92,
    hygiene: "Available",
    storage: "Available",
    verification: "Available",
    reports: "Low"
  },
  {
    id: 2,
    name: "Spice Route",
    cuisine: "Indian",
    rating: 4.3,
    distance: "0.8 km",
    price: "₹",
    score: 84,
    hygiene: "Available",
    storage: "Limited",
    verification: "Pending",
    reports: "Low"
  },
  {
    id: 3,
    name: "Urban Tandoor",
    cuisine: "North Indian",
    rating: 4.6,
    distance: "1.8 km",
    price: "₹₹",
    score: 89,
    hygiene: "Available",
    storage: "Available",
    verification: "Available",
    reports: "Low"
  },
  {
    id: 4,
    name: "Fresh Leaf Cafe",
    cuisine: "Vegetarian",
    rating: 4.4,
    distance: "2.1 km",
    price: "₹₹",
    score: 91,
    hygiene: "Available",
    storage: "Available",
    verification: "Available",
    reports: "Low"
  },
  {
    id: 5,
    name: "Himalayan Kitchen",
    cuisine: "Indian",
    rating: 4.2,
    distance: "2.5 km",
    price: "₹",
    score: 78,
    hygiene: "Available",
    storage: "Limited",
    verification: "Pending",
    reports: "Medium"
  },
  {
    id: 6,
    name: "City Bites",
    cuisine: "Fast Food",
    rating: 4.1,
    distance: "0.6 km",
    price: "₹",
    score: 75,
    hygiene: "Available",
    storage: "Limited",
    verification: "Pending",
    reports: "Medium"
  }
];

function displayRestaurants(data = restaurants) {
  const list = document.getElementById("restaurantList");

  list.innerHTML = data.map(r => `
    <div class="card">
      <h2>${r.name}</h2>
      <p>${r.cuisine}</p>
      <p>⭐ ${r.rating} &nbsp; 📍 ${r.distance} &nbsp; 💰 ${r.price}</p>

      <div class="score ${r.score >= 85 ? "high" : "medium"}">
        ${r.score}/100
      </div>

      <p>🛡️ Food Safety Confidence</p>
      <p>✓ Hygiene: ${r.hygiene}</p>
      <p>✓ Storage: ${r.storage}</p>
      <p>✓ Verification: ${r.verification}</p>

      <button class="action" onclick="openProfile(${r.id})">
        View Safety Profile
      </button>

      <button class="action" onclick="addCompare(${r.id})">
        Compare
      </button>
    </div>
  `).join("");
}

function searchRestaurants() {
  const query = document
    .getElementById("search")
    .value
    .toLowerCase();

  const filtered = restaurants.filter(r =>
    r.name.toLowerCase().includes(query) ||
    r.cuisine.toLowerCase().includes(query)
  );

  displayRestaurants(filtered);
}

function showPage(page) {
  document.querySelectorAll(".page").forEach(p => {
    p.classList.add("hidden");
  });

  document.getElementById(page).classList.remove("hidden");

  if (page === "explore") {
    document.getElementById("exploreList").innerHTML =
      restaurants.map(r => `
        <div class="card">
          <h2>${r.name}</h2>
          <p>${r.cuisine}</p>
          <p>⭐ ${r.rating}</p>
          <p>🛡️ ${r.score}/100</p>
          <button class="action" onclick="openProfile(${r.id})">
            View Profile
          </button>
        </div>
      `).join("");
  }
}

function openProfile(id) {
  const r = restaurants.find(x => x.id === id);

  document.querySelectorAll(".page").forEach(p => {
    p.classList.add("hidden");
  });

  const profile = document.getElementById("profile");

  profile.classList.remove("hidden");

  document.getElementById("profileContent").innerHTML = `
    <div class="card">
      <h1>${r.name}</h1>
      <p>${r.cuisine} • ⭐ ${r.rating} • 📍 ${r.distance}</p>

      <div class="score high">
        ${r.score}/100
      </div>

      <h2>Food Safety Confidence</h2>

      <p>
        This score summarizes available safety-related information.
        It is not a medical or legal guarantee.
      </p>

      <br>

      <h2>Safety Information</h2>

      <ul>
        <li>✓ Hygiene information: ${r.hygiene}</li>
        <li>✓ Storage information: ${r.storage}</li>
        <li>✓ Verification evidence: ${r.verification}</li>
        <li>✓ Recent reports: ${r.reports}</li>
      </ul>

      <h2>Storage Intelligence</h2>

      <div class="card">
        <p>Food: Cooked Rice</p>
        <p>Preparation: 1:00 PM</p>
        <p>Storage information: Available</p>
        <p>Temperature log: Available</p>
        <br>
        <strong>
          Information appears consistent with the restaurant's
          stated procedure. Follow applicable local food-safety guidance.
        </strong>
      </div>

      <h2>FoodTrust AI</h2>

      <div class="card">
        <p>
          Based on the available sample information, ${r.name}
          has a ${r.score}/100 information-confidence score,
          with ${r.verification.toLowerCase()} verification information.
        </p>
      </div>

      <button class="action" onclick="showPage('home')">
        ← Back
      </button>
    </div>
  `;
}

let compareList = [];

function addCompare(id) {
  if (!compareList.includes(id)) {
    compareList.push(id);
  }

  showComparison();
  showPage("compare");
}

function showComparison() {
  const selected = restaurants.filter(r =>
    compareList.includes(r.id)
  );

  document.getElementById("comparison").innerHTML = `
    <div class="card">
      <h2>Restaurant Comparison</h2>

      <table width="100%" cellpadding="12">
        <tr>
          <th>Factor</th>
          ${selected.map(r => `<th>${r.name}</th>`).join("")}
        </tr>

        <tr>
          <td>Rating</td>
          ${selected.map(r => `<td>⭐ ${r.rating}</td>`).join("")}
        </tr>

        <tr>
          <td>Safety Information</td>
          ${selected.map(r => `<td>${r.score}/100</td>`).join("")}
        </tr>

        <tr>
          <td>Storage</td>
          ${selected.map(r => `<td>${r.storage}</td>`).join("")}
        </tr>

        <tr>
          <td>Verification</td>
          ${selected.map(r => `<td>${r.verification}</td>`).join("")}
        </tr>

        <tr>
          <td>Distance</td>
          ${selected.map(r => `<td>${r.distance}</td>`).join("")}
        </tr>
      </table>

      <br>

      <h3>FoodTrust AI Recommendation</h3>

      <p>
        The recommendation depends on the user's selected priorities.
        Restaurants with stronger available information can be highlighted
        for further consideration.
      </p>
    </div>
  `;
}

displayRestaurants();
