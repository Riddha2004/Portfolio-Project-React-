import img2 from './WhatsApp Image 2023-12-10 at 1.41.33 PM.jpeg'

const About_Me = () => {
  return (
    <section class="about" id="about">
        <h2 class="heading">About <span>Me</span></h2>

        <div class="about-img">
            <img src={img2} alt=""/>    
            <span class="circle-spin"></span> 
        </div>

        <div class="about-content">
            <h3>Web Developer!</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
             expedita quis aliquid, voluptate blanditiis mollitia impedit non architecto eum quaerat saepe dolorem 
             nobis officia exercitationem ipsa. Expedita sint omnis distinctio?Lorem ipsum dolor sit amet consectetur 
             adipisicing elit. Distinctio temporibus voluptas perspiciatis alias nihil ducimus, maiores facilis quibusdam 
             eaque quidem illum repellat totam dignissimos eius perferendis, omnis, fugiat commodi dolore.</p>

             <div class="btn-box btns">
                <a href="#" class="btn">Read More</a>
             </div>
        </div>
    </section>
  )
}
export default About_Me