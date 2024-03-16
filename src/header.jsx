const Header = () => {
  return (
    <header class="header">
        <a href="#" class="logo">Riddha</a>

        <div class="bx bx-menu" id="menu-icon"></div>

        <nav class="navbar">
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>

            <span class="active-nav"></span>
        </nav>
    </header>
  )
}
export default Header