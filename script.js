const jsonData = new Request("./data.json");
const categoriesBox = document.querySelector(".categories-box");

async function loadJsonData(file) {
  const response = await fetch(file);
  const data = await response.json();

  renderEle(data);
}

function renderEle(data) {
  data.forEach((ele) => {
    categoriesBox.innerHTML += `
    <div class="category-row">
      <div class="title-box">
      <img class="category-icon" src="${ele.icon}" alt="">
      <span class="category-title">${ele.category}</span>
      </div>
      <span class="score">
        <span class="degree">${ele.score}</span>
        <span class="deg-plus"> / 100</span>
      </span>
    </div>
    `;
  });
}

window.onload = () => {
  loadJsonData(jsonData);
};
