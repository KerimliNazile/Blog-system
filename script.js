let posts = [];

function addPost() {
    const title = document.getElementById("post-title").value;
    const content = document.getElementById("post-content").value;
    if (title.trim() === "" || content.trim() === "") {
        alert("Please enter both title and content.");
        return;
    }

    const post = {
        title: title,
        content: content,
        comments: []
    };

    posts.push(post);
    displayPosts();
    document.getElementById("post-title").value = "";
    document.getElementById("post-content").value = "";
}

function displayPosts() {
    const blogPosts = document.getElementById("blog-posts");
    blogPosts.innerHTML = "";
    posts.forEach((post, index) => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <h3>Comments:</h3>
            <div id="comments-${index}"></div>
            <input type="text" id="comment-${index}" placeholder="Add a comment">
            <button onclick="addComment(${index})">Add Comment</button>
        `;
        blogPosts.appendChild(postDiv);
        displayComments(index);
    });
}

function addComment(index) {
    const commentInput = document.getElementById(`comment-${index}`);
    const commentContent = commentInput.value;
    if (commentContent.trim() === "") {
        alert("Please enter a comment.");
        return;
    }

    const comment = {
        content: commentContent
    };

    posts[index].comments.push(comment);
    displayComments(index);
    commentInput.value = "";
}

function displayComments(index) {
    const commentsDiv = document.getElementById(`comments-${index}`);
    commentsDiv.innerHTML = "";
    posts[index].comments.forEach(comment => {
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");
        commentDiv.innerText = comment.content;
        commentsDiv.appendChild(commentDiv);
    });
}

// Initial display
displayPosts();
