const Skills = () => {
  return (
    <section class="skills" id="skills">
    <h2 class="heading"> My <span>Skills</span></h2>

    <div class="skills-rows">
        <div class="skills-column">
            <h3 class="title"> Coding Skills</h3>

            <div class="skills-box">
                <div class="skills-content">
                    <div class="progress">
                        <h3>C++ <span>80%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3>C Programming <span>50%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3>Data Structures <span>80%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3> Algorithms <span>70%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>
                </div>
            </div>
        </div>

        <div class="skills-column">
            <h3 class="title">Development Skills</h3>

            <div class="skills-box">
                <div class="skills-content">
                    <div class="progress">
                        <h3>React JS<span>70%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3>Node JS<span>70%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3>Express JS<span>60%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>

                    <div class="progress">
                        <h3>Mongo DB<span>70%</span></h3>
                        <div class="bar"><span></span></div>
                    </div>
                </div>
            </div>
        </div>

    </div>
 </section>

  )
}
export default Skills