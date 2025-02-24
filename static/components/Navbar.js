
const Navbar = {
  template: `
  <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">Quizz</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">Home</router-link>
          <router-link class="nav-link" to="/user-login">Login</router-link>
        </div>
        <div class="navbar-nav ms-auto">
          <a class="nav-link text-danger fw-bold" style="cursor: pointer">Logout</a>
        </div>
      </div>
    </div>
  </nav>
  `
}

export default Navbar;