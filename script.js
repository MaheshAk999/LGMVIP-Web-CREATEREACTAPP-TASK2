let box = document.getElementById("cards");
let fun = async () => {
  let response = await fetch("https://reqres.in/api/users?page=1");
  let file = await response.json();
  let info = file.data
    .map((element) => {
      return `<div class="card">
        <div class="profile">
            <img src="${element.avatar}" alt="">
        </div>
        <div class="cardcontent">
            <p>${element.first_name} ${element.last_name}</p>
            <p>${element.email}</p> 
            <p>User ID: ${element.id}</p>
        </div>
    </div>`;
    }).join("");
  cards.innerHTML = info;
};
let button = document.getElementById("button").addEventListener("click", () => {
  cards.innerHTML = `<h1 style="margin-top:5cm;"> Getting Users data...</h1>`;
  setTimeout(() => {fun();}, 3000);
});