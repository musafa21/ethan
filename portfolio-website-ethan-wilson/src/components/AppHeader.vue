<template>
  <header>
    <nav class="navbar navbar-transparent" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand navbar-brand-centered" href="/">
            <img src="images/logo.png" alt="ETHAN WILSON" width="300">
          </a>
        </div>
        <div class="collapse navbar-collapse" id="navbar-brand-centered">
          <ul class="nav navbar-nav navbar-center">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/services">Services</a></li>
            <li class="active"><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
};
</script>

<style scoped>
/* Your custom styles can go here */
</style>
