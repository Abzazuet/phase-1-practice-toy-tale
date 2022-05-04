let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  const toyContainer = document.querySelector("#toy-collection");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
  fetch('http://localhost:3000/toys')
  .then(res => res.json())
  .then(data => displayData(data, toyContainer))
});
function displayData(data, container){
  for (let toy of data){
    let h2 = document.createElement("h2");
    let likes = document.createElement("p");
    let image = document.createElement("img");
    let toyContainer = document.createElement("div");
    toyContainer.classList.add("toy");
    likes.innerText = toy.likes;
    h2.innerText = toy.name;
    image.src = toy.image;
    toyContainer.appendChild(h2);
    toyContainer.appendChild(image);
    toyContainer.appendChild(likes);
    container.appendChild(toyContainer);
  }
    
}
