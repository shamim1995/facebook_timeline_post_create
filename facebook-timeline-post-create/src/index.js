import'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import'bootstrap/js/dist/modal'
import'bootstrap/js/dist/alert'
import axios from 'axios'
import Alert from './components/Alert'
import Post from './components/Post'

// dom loaded
document.addEventListener('DOMContentLoaded', getPost)

// from element

document.getElementById('postForm').addEventListener('submit', createPost)

// validation element

const msg = document.getElementById('msg')
// get all post
function getPost(){
axios.get("http://localhost:5050/posts").then(res=>{Post.timelinePosts(res.data) })
}

// create post 

function createPost(e) {
    e.preventDefault();
    
  let form_data = new FormData(e.target);  
  let data = Object.fromEntries(form_data.entries())
    

    if(data.name == "" || data.user_photo == "" || data.content == "" || data.photo == ""){
        msg.innerHTML = Alert.danger(`All fields Required !`)
    }else{
         axios.post('http://localhost:5050/posts', {
            name: data.name,
            user_photo: data.uPhoto,
            content: data.content,
            photo: data.fPhoto

        }).then(res => {
         
           getPost();
            
        });
    }

  

}