const getPosts = () =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then(posts =>{
      const container = document.getElementById('container1');
      posts.map(post =>{
              const div = document.createElement('div');
                div.style.height ='150px'
                div.style.width = '400px'
                div.style.border = '1px solid #ccc';
                div.style.padding = '10px';
                div.style.margin = '10px 0';
                div.style.borderRadius = '5px';
                div.innerHTML = `
                    <strong>Title:</strong> ${post.title} <br>
                    <strong>Body:</strong> ${post.body} <br>
                    <strong>User ID:</strong> ${post.userId}
                `;
                container.appendChild(div);
      });
 
    }

    )
    .catch((error) => console.error('Error: ', error));

    
}



// const getPosts = () =>{
//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => {
//     var content = ''
//     json.map((val, index) =>{
//         content += '<div class="card m-2" style="width: 18rem;"><div class="card-body"><h5 class="card-title">${val.title}</h5></div></div>'
      
//     })
//   });
    
// }