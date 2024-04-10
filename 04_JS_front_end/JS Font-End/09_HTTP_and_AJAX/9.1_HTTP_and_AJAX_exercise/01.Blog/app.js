function attachEvents() {
    const postsURL = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsURL = 'http://localhost:3030/jsonstore/blog/comments';
    
    const loadPostsButton = document.getElementById('btnLoadPosts');
    const postsSelect = document.getElementById('posts');
    const viewPostButton = document.getElementById('btnViewPost');
    const titleElement = document.getElementById('post-title');
    const postContentElement = document.getElementById('post-body');
    const commentsList = document.getElementById('post-comments');

    loadPostsButton.addEventListener('click', loadPostsEvent);
    viewPostButton.addEventListener('click', viewPostEvent);

    async function loadPostsEvent() {
        const [postsResponse, commentsResponse] = await Promise.all([
            fetch(postsURL),
            fetch(commentsURL)
        ]);
        
        const postsData = await postsResponse.json();
        const commentsData = await commentsResponse.json();
        
        displayPosts(postsData);
        
        loadPostsEvent.postsData = postsData;
        loadPostsEvent.commentsData = commentsData;
    }

    function displayPosts(postsData) {
        for (const [postId, post] of Object.entries(postsData)) {
            const option = document.createElement('option');
            option.textContent = post.title;
            option.value = postId;
            postsSelect.appendChild(option);
        }
    }

    function viewPostEvent() {
        const selectedPostId = postsSelect.value;
        const postsData = loadPostsEvent.postsData;
        const chosenPost = postsData[selectedPostId];
        titleElement.textContent = chosenPost.title;
        postContentElement.textContent = chosenPost.body;
        
        displayComments(selectedPostId);
    }

    function displayComments(postId) {
        commentsList.innerHTML = '';
        const commentsData = loadPostsEvent.commentsData;
        const postComments = Object.values(commentsData).filter(comment => comment.postId === postId);
        postComments.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = comment.text;
            commentsList.appendChild(li);
        });
    }
}

attachEvents();
