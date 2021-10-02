console.log("działa");

let btn = document.querySelector(".btn");
let user = document.getElementById("user");
let identifier = document.getElementById("identifier");
let title = document.getElementById("title");
let body = document.getElementById("body");
console.log(body);

btn.addEventListener("click", function() {
    fetch('https://akademia108.pl/api/ajax/get-post.php', {

            method: 'GET',
        })
        .then(response => response.json())
        .then((data) => {

            user.innerText = `${data.id}`;
            identifier.innerText = `${data.userId}`;
            title.innerText = `${data.title}`;
            body.innerText = `${data.body}`;

        })
        .catch(error => {
            console.error(error);
        })



});