const blogPost = [
  {
    id: 01,
    title: "Difference between Local Storage and Session Storage",
    postBody:
      "Their main difference is that local storage data does not expire, whereas session storage data gets cleared when the user closes its browser window. <br><br> Page sessions are valid for only one tab at a time. So, if a user has three tabs open, each one will have its own page session. <br><br>Since local storage is not session-based, all the data must be deleted via javascript or manually.",
    postImage:
      "https://isamatov.com/images/local-storage-vs-session-storage/local-storage-vs-session-storage.png",
  },
  {
    id: 02,
    title: "Difference between Global Scope and Block Scope.",
    postBody:
      "<strong>The Block scope:</strong> <br>So far, we’ve seen variables defined with the var keyword. Var can declare a variable either in the global or local scope. The variables that are declared within the block scope are comparable to local ones. They are available within the block that they are defined.<br><br>The main difference between the local scope and block scope is that the block statements (e.g. if conditions or for loops), don't create a new scope. So the var keyword will not have an effect, because the variables are still in the same scope.<br><br><strong>The Global scope:</strong> <br> A variable exists inside or outside a block. If a variable is declared outside all functions or curly braces ({}), it exists in the global scope. The global variables can be accessed by any line of code in the program, including inside blocks.  ",
    postImage: "https://i.ytimg.com/vi/bKH74wo4qS8/maxresdefault.jpg",
  },
  {
    id: 03,
    title: "How does the Event Loop works in JavaScript?",
    postBody:
      "The Event Loop has one simple job — to monitor the Call Stack and the Callback Queue. If the Call Stack is empty, the Event Loop will take the first event from the queue and will push it to the Call Stack, which effectively runs it. Such an iteration is called a tick in the Event Loop.",
    postImage: "https://miro.medium.com/max/1400/1*FA9NGxNB6-v1oI2qGEtlRQ.png",
  },
  {
    id: 04,
    title: "How do I get undefined in JavaScript?",
    postBody:
      "You will get undefined value when you call a non-existent property or method of an object. In the above example, a function Sum does not return any result but still we try to assign its resulted value to a variable. So in this case, result will be undefined.",
    postImage: "https://i.ytimg.com/vi/JoB4_yKyuK4/maxresdefault.jpg",
  },
];

const blogContainer = document.getElementById("blog-container");
blogContainer.textContent = "";

blogPost.forEach((post) => {
  const { title, postBody, postImage } = post;
  const div = document.createElement("div");
  div.classList.add("col-12", "col-md-6", "col-lg-4");
  div.innerHTML = `
    <div class="card h-100">
        <img src="${postImage}"
            class="card-img-top card-img-size fluid" alt="${title}">
        <div class="card-body">
            <h5 class="card-title text-center">${title}</h5>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Launch demo modal
          </button>
        </div>
    </div>`;
  blogContainer.appendChild(div);
});
