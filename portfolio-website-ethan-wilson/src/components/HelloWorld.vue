<template>
  <div class="container">
    <!-- Intro Section -->
    <div class="intro">
      <div class="profile">
        <img src="path/to/your-portrait.jpg" alt="Ethan Wilson" class="profile-img" />
      </div>
      <div class="intro-text">
        <h1>Ethan Wilson</h1>
        <h2>Web Developer | Software Developer | DevOps Enthusiast</h2>
        <p class="services-description">
          I specialize in software development, cloud infrastructure, DevOps automation, CI/CD pipelines, and containerization with Docker & Kubernetes. Let me help you streamline your development process and build scalable solutions.
        </p>
      </div>
    </div>

    <!-- Cards Section for Projects -->
    <div class="cards-container">
      <div
        class="card"
        v-for="(project, index) in projects"
        :key="index"
        ref="card"
        v-bind:class="{'animate': isVisible[index]}"
        @scroll="handleScroll(index)"
      >
        <div class="card-header">
          <img :src="project.image" alt="Project Image" class="card-img" />
        </div>
        <div class="card-body">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "CI/CD Pipeline with GitHub Actions",
          description: "Automated deployments with Docker and Kubernetes.",
          image: "https://i.pinimg.com/736x/fd/6e/a3/fd6ea353e9d27822350fca82e5522670.jpg",
        },
        {
          title: "Dockerized Microservices",
          description: "Microservices architecture using Docker and Kubernetes.",
          image: "https://i.pinimg.com/736x/03/c2/50/03c2503b483a77cc24b475aace0fc37c.jpg",
        },
        {
          title: "Cloud Infrastructure with AWS",
          description: "Setting up cloud services with AWS and Terraform.",
          image: "https://i.pinimg.com/736x/fb/e7/be/fbe7be77dd75dd673dd18f5238713786.jpg",
        },
        {
          title: "DevOps Automation with Ansible",
          description: "Automated configuration management with Ansible.",
          image: "https://i.pinimg.com/736x/33/69/46/33694676a16852e87821e94e61b0bae3.jpg",
        },
      ],
      isVisible: [],
    };
  },
  methods: {
    handleScroll(index) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.isVisible[index] = true;
            } else {
              this.isVisible[index] = false;
            }
          });
        },
        { threshold: 0.3 }
      );
      observer.observe(this.$refs.card[index]);
    },
  },
  mounted() {
    this.projects.forEach((_, index) => {
      this.isVisible[index] = false;
      this.handleScroll(index);
    });
  },
};
</script>

<style scoped>
/* Global styles */
body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: #f4f4f4;
}

/* Container and layout */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

/* Intro section */
.intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.profile {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
}

.profile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.intro-text {
  flex: 1;
  text-align: left;
  margin-left: 20px;
}

h1 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 10px;
}

h2 {
  font-size: 1.5rem;
  color: #555;
}

.services-description {
  font-size: 1.1rem;
  color: #777;
  margin-top: 10px;
  line-height: 1.5;
}

/* Card Container */
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

/* Card Styles */
.card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.card-header {
  position: relative;
  overflow: hidden;
}

.card-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body {
  padding: 20px;
}

.card h3 {
  font-size: 1.5rem;
  margin: 10px 0;
}

.card p {
  font-size: 1rem;
  color: #777;
}

.card.animate {
  opacity: 1;
  transform: translateY(0);
}

/* Animation keyframes */
@keyframes fadeInUp {
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .intro {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .intro-text {
    margin-left: 0;
    margin-top: 20px;
  }

  .intro h1 {
    font-size: 2.5rem;
  }

  .intro h2 {
    font-size: 1.25rem;
  }

  .card-body {
    padding: 15px;
  }
}
</style>
