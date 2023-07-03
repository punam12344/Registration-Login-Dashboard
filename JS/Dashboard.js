let posts = [];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(function (value) {
    return value.json();
  })
  .then(function (value) {
    posts = value;
    displayData(value);
  });
function displayData(arr) {
  let myPosts = arr.map(function (value, index) {
    return `<div class="col-4">
  <div class="card">
    <div class="card-body">
      <p class="card-text">${value.userId}</p>
      <p class="card-text">${value.id}</p>
      <h4 class="card-title">${value.title}</h4>
      <p class="card-text" id="${index}" onclick=Readmore("${index}")>
      ${value.body.slice(0, 22).concat(".....readmore")}</p>
      </div>
    </div>
  </div>`;
  });
  document.getElementById("seen").innerHTML = myPosts.join("");
}

function Readmore(index) {
  for (i = 0; i < posts.length; i++) {
    if (i == index) {
      let data = document.getElementById(index).innerText;

      if (data.includes("readmore") == true) {
        document.getElementById(index).innerHTML =
          posts[index].body.concat("....Readless");
      } else {
        document.getElementById(index).innerHTML = posts[index].body
          .slice(0, 22)
          .concat("....eadmore");
      }
    } else {
      document.getElementById(i).innerHTML = posts[i].body
        .slice(0, 22)
        .concat("....readmore");
    }
  }

  // displayData(data);
}
