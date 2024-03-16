import img1 from './Home.png'

const Home = () => {
  return (
    <section class="home" id="home">
        <div class="home-content">
            <h1>Hi, I'm <span>Riddha Roy Chowdhury</span></h1>
            <div class="text-animate">
                <h3>Coding Enthuciast</h3>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum repellendus enim perspiciatis quaerat 
            odit animi, maiores, facere alias esse quam magni dignissimos vitae perferendis adipisci, consequuntur excepturi ea 
            consequatur nam!</p>

            <div class="btn-box">
                <a href="#" class="btn">Resume</a>
                <a href="#" class="btn">Hire Me</a>
            </div>
        </div>

        <div class="home-sci">
            <a href="#" ><i class='bx bxl-instagram' ></i></a>
            <a href="#" ><i class='bx bxl-twitter'></i></a>
            <a href="#" ><i class='bx bxl-linkedin' ></i></a>
        </div>
         <div class="image">
            <img src={img1} alt=""/>
         </div>
        <div class="home-imgHover"></div>
    </section>

  )
}
export default Home