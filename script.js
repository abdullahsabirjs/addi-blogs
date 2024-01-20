document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/posts')
        .then(response => response.json())
        .then(data => {
            const postsContainer = document.querySelector('.posts-container');
            data.forEach(post => {
                const postElement = document.createElement('div');
                postElement.className = 'post';
                // Populate postElement with post data
                postElement.innerHTML = `
                    <div class="post-header">
                        <span class="post-type">${post.type}</span>
                        <span class="post-user">${post.username}</span>
                        <span class="post-date">${post.date}</span>
                    </div>
                    <div class="post-content">${post.content}</div>
                    <!-- Add more post details here -->
                `;
                postsContainer.appendChild(postElement);
            });
        })
        .catch(error => console.error('Error:', error));
});
