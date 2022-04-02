

class Post {

    constructor(){
        this.timeline_post = document.querySelector('.timeline_post')
    }

    /**
     * get show post
     */

    timelinePosts(post){

        let post_list = ''
        post.reverse().map(data=>{
            let {name, user_photo, content, photo}= data

            post_list += `
            
             <div class="card shadow cardBg ">
                            <div class="card-body">
                                <div class="timeline_area_section">
                                    <div class="timeline_image_title d-flex align-items-center">
                                         <img style="width: 50px; height: 50px; border-radius: 50px; object-fit: cover;"
                                     src=" ${user_photo}" alt="">
                                        <h2 class="ms-3"> ${ name } </h2>
                                    </div>
                                    <div class="timeline-feuturesImage_content">
                                        <p> ${ content }</p>
                                            <img class="w-100" src=" ${ photo }"
                                                alt="">
                                    </div>

                                </div>


                            </div>
                        </div>

            `
        });

        this.timeline_post.innerHTML = post_list;
        
    }
    


}

let post = new Post



export default post;