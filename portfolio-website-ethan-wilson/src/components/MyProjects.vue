<template>
  <div class="portfolio">
    <h1>My Portfolio</h1>
    <div class="projects">
      <!-- Project 1 - Grocery List App -->
      <div class="project-card">
        <img
          src="https://i.pinimg.com/736x/04/00/a3/0400a3b6459accff7000aa1f7a28bdf7.jpg"
          alt="Grocery List App"
          class="project-image"
        />
        <h2>Grocery List App</h2>
        <p>
          A simple app to help you make a grocery list.
        </p>
        <a href="https://github.com/ethanwilson902/Grocery-List_App.git" class="btn btn-primary">View Project</a>
      </div>

      <!-- Project 2 - Notes App -->
      <div class="project-card">
        <img
          src="https://i.pinimg.com/736x/63/fe/d6/63fed6d3417d5fce7ccd4533f4ef7d2c.jpg"
          alt="Notes App"
          class="project-image"
        />
        <h2>Notes App</h2>
        <p>
          This is a simple note taking app.
        </p>
        <a href="https://github.com/ethanwilson902/Notes_App.git" class="btn btn-primary">View Project</a>
      </div>

      <!-- Project 3 - Python & Flask -->
      <div class="project-card">
        <img
          src="https://i.pinimg.com/474x/72/15/4c/72154cbd4eff97f81c60d5a0fbc9812f.jpg"
          alt="Python & Flask"
          class="project-image"
        />
        <h2>Python & Flask</h2>
        <p>
          A brief description of Project 3. This project involved using Python and Flask.
        </p>
        <a href="#" class="btn btn-primary">View Project</a>
      </div>

      <!-- Responsive, Small Business Website -->
      <div class="project-card">
        <img
          src="https://i.pinimg.com/236x/66/13/e9/6613e931eb8adfce42102de8d5e366e7.jpg"
          alt="Responsive, Small Business Website"
          class="project-image"
        />
        <h2>Responsive, Small Business Website</h2>
        <p>
          A website developed for a small business, featuring responsive design and dynamic content integration.
        </p>
      </div>

      <!-- E-commerce Platform -->
      <div class="project-card">
        <img
          src="https://i.pinimg.com/236x/5b/e2/63/5be26353bd577f9f5e5df8fc81723a90.jpg"
          alt="E-commerce Platform"
          class="project-image"
        />
        <h2>E-commerce Platform</h2>
        <p>
          An e-commerce platform with payment gateway integration and product management tools.
        </p>
      </div>

      <!-- Portfolio Website -->
      <div class="project-card">
        <img
          src="https://i.pinimg.com/474x/4e/6f/79/4e6f798ab2bed096c32b1080fa9ba4da.jpg"
          alt="Portfolio Website"
          class="project-image"
        />
        <h2>Portfolio Website</h2>
        <p>
          A portfolio website for a client in the creative industry, emphasizing design and usability.
        </p>
      </div>

      <!-- More Projects -->
      <div class="coming-soon">
        <img
          src="https://i.pinimg.com/236x/43/69/dd/4369dd89280fc9224e58ac2c1f0cf8ba.jpg"
          alt="Coming Soon"
          class="project-image"
        />
        <h2>More Projects Coming Soon!</h2>
        <p>Stay tuned for exciting updates on new and innovative projects.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProjects",
};
</script>

<style scoped>
.portfolio {
  padding: 20px;
  animation: fadeIn 1.5s ease-in;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #333;
}

.projects {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.project-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  max-width: 300px;
  padding: 15px;
  text-align: center;
  animation: slideIn 1.5s ease-in-out;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.project-image {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 15px;
}

.project-card h2 {
  margin: 10px 0;
  font-size: 1.5rem;
  color: #222;
}

.project-card p {
  color: #555;
  font-size: 1rem;
  line-height: 1.4;
}

.coming-soon {
  background: #f9f9f9;
  border: 2px dashed #ccc;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  animation: bounceIn 2s infinite;
  max-width: 300px;
}

.coming-soon h2 {
  color: #444;
  font-size: 1.8rem;
  margin-bottom: 10px;
}

.coming-soon p {
  color: #777;
}

/* Animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(50%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

@keyframes bounceIn {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}
</style>
