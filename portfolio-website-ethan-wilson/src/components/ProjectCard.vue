<!-- New ProjectCard.vue -->
<template>
    <div class="project-card">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <a :href="project.link" target="_blank" rel="noopener">View Project</a>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProjectCard",
    props: {
      project: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .project-card {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    width: 300px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .project-card h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: #333;
  }
  
  .project-card p {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #666;
  }
  
  .project-card a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
  }
  
  .project-card a:hover {
    text-decoration: underline;
  }
  </style>