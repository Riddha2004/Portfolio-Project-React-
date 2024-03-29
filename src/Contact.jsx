const Contact = () => {
  return (
    <section class="contact" id="contact">
        <h2 class="heading">Contact <span>Me!</span></h2>

        <form action="#">
            <div class="input-box">
                <div class="input-field">
                    <input type="text" placeholder="Full Name" required/>
                    <span class="focus"></span>
                </div>
                <div class="input-field">
                    <input type="text" placeholder="Full Name" required/>
                    <span class="focus"></span>
                </div>
            </div>

            <div class="input-box">
                <div class="input-field">
                    <input type="number" placeholder="Mobile Number" required/>
                    <span class="focus"></span>
                </div>
                <div class="input-field">
                    <input type="text" placeholder="Email Subject" required/>
                    <span class="focus"></span>
                </div>
            </div>

            <div class="textarea-field">
                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message" required></textarea>
                <span class="focus"></span>
            </div>

            <div class="btn-box btns">
                <button type="submit" class="btn">Submit</button>
            </div>
        </form>
    </section>

  )
}
export default Contact