<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>© 2024 Ethan Wilson</p>
    </footer>
  </div>
</template>

<style>
/* Ensure the body and html take full height of the viewport */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

/* The app container should take up at least the full height of the viewport */
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Main content should take the remaining available space */
main {
  flex: 1;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Header styles */
header {
  background: #141414;
  color: #fff;
  padding: 10px 0;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  margin: 0 15px;
}

nav a {
  color: #fff;
  text-decoration: none;
  font-weight: bold;
}

/* Footer styles */
footer {
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px 0;
  margin-top: auto; /* Pushes footer to the bottom */
}

/* Responsive Design */

/* On small screens, stack the navigation links vertically */
@media (max-width: 768px) {
  nav ul {
    flex-direction: column;
    align-items: center;
  }

  nav li {
    margin: 10px 0;
  }

  nav a {
    font-size: 18px;
  }

  /* Make footer text larger on small screens */
  footer p {
    font-size: 14px;
  }
}

/* On extra small screens, make the navigation more compact */
@media (max-width: 480px) {
  nav a {
    font-size: 16px;
  }

  footer p {
    font-size: 12px;
  }
}
</style>
