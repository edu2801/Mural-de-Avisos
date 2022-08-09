document.addEventListener("DOMContentLoaded", () => {
  updatePosts();
});

function updatePosts() {
  fetch("https://mural-avisos-edu.herokuapp.com/api/all")
    .then((res) => res.json())
    .then((json) => {
      let postElements = "";

      let posts = JSON.parse(json);
      posts.forEach((post) => {
        let postElemet = `<div id=${post.id} class="card mb-4">
                                    <div class="card-header d-flex justify-content-between">
                                        <h5 class="card-title">${post.title}</h5>
                                        <button class="btn btn-sm btn-outline-danger" onclick="delPost(this)">X</button>
                                    </div>
                                    <div class="card-body">
                                        <div class="card-text">${post.description}</div>
                                    </div>
                                </div>`;
        postElements += postElemet;
      });
      document.getElementById("posts").innerHTML = postElements;
    });
}

function newPost() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("desc").value;

  let post = { title, description };

  const options = {
    method: "POST",
    headers: new Headers({ "content-type": "application/json" }),
    body: JSON.stringify(post),
  };

  fetch("https://mural-avisos-edu.herokuapp.com/api/new", options).then(
    (res) => {
      updatePosts();

      document.getElementById("title").value = "";
      document.getElementById("desc").value = "";
    }
  );
}

function delPost(elem) {
  let confirmation = confirm("Deseja apagar esse aviso?");

  let id = elem.parentNode.parentNode.id;
  let idObj = { id };

  if (confirmation) {
    const options = {
      method: "DELETE",
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(idObj),
    };

    fetch("https://mural-avisos-edu.herokuapp.com/api/delete", options).then(
      (res) => {
        updatePosts();
      }
    );
  }
}
