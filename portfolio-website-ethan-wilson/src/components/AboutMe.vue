<template>
  <div class="about">
    <h1>About Me</h1>
    
    <!-- Profile Image Section (on the left) -->
    <div class="profile-section">
      <div class="profile-card">
        <img class="profile-image" src="path-to-your-image.jpg" alt="John Doe" />
      </div>
    </div>

    <!-- Personal Details Section -->
    <div class="details">
      <div class="info-card">
        <p><strong>Name:</strong> Ethan Wilson</p>
        <p><strong>Birthday:</strong> 1 April 1990</p>
        <p><strong>Degree:</strong> Master</p>
        <p><strong>Experience:</strong> 10 Years</p>
        <p><strong>Phone:</strong> <a href="tel:+0123456789">+012 345 6789</a></p>
        <p><strong>Email:</strong> <a href="mailto:info@example.com">info@example.com</a></p>
        <p><strong>Address:</strong> 123 Street, New York, USA</p>
        <p><strong>Freelance:</strong> Available</p>
      </div>
      <div class="about-text">
        <h2>WHO I AM?</h2>
        <p>
          My name is <strong>Ethan Wilson</strong>. I am a professional and enthusiastic programmer in my daily life. 
          I am a quick learner with a self-learning attitude. I love to learn and explore new technologies and 
          am passionate about problem-solving. I love almost all the stacks of web application development and 
          love to make the web more open to the world. My core skill is based on JavaScript and I love to do 
          most of the things using JavaScript. I am available for any kind of job opportunity that suits my 
          skills and interests.
        </p>
      </div>
    </div>
    
    <!-- Work Experience Section (in cards) -->
    <div class="work-experience">
      <h2>Where I Have Worked</h2>
      <div class="experience-cards">
        <div class="experience-card">
          <h3>Company Name 1</h3>
          <p><strong>Role:</strong> Frontend Developer</p>
          <p>Developed interactive web applications using JavaScript, React, and Node.js.</p>
        </div>
        <div class="experience-card">
          <h3>Company Name 2</h3>
          <p><strong>Role:</strong> Backend Developer</p>
          <p>Focused on building REST APIs and microservices with Node.js, Express, and MongoDB.</p>
        </div>
        <div class="experience-card">
          <h3>Company Name 3</h3>
          <p><strong>Role:</strong> Full Stack Developer</p>
          <p>Worked on both frontend and backend for large-scale applications, integrating systems with AWS and deploying using Docker.</p>
        </div>
        <div class="experience-card">
          <h3>Company Name 4</h3>
          <p><strong>Role:</strong> DevOps Engineer</p>
          <p>Automated infrastructure provisioning and deployment pipelines using Terraform and AWS services.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>

<style scoped>
.about {
  padding: 20px;
  animation: fadeIn 1.5s ease-in;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 2.5rem;
  color: #333;
}

.profile-section {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
  animation: slideInFromLeft 1.5s ease-out;
}

.profile-card {
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.profile-image {
  border-radius: 10px;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid #ddd;
  animation: scaleIn 1s ease-in-out;
}

.details {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  animation: fadeIn 2s ease-in-out;
}

.info-card {
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  flex: 1;
  min-width: 300px;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: slideInFromLeft 1.5s ease-out;
}

.info-card p {
  margin: 10px 0;
  font-size: 1rem;
  color: #555;
}

.about-text {
  flex: 2;
  animation: slideInFromRight 1.5s ease-out;
}

.about-text h2 {
  margin-bottom: 15px;
  font-size: 2rem;
  color: #222;
}

.about-text p {
  line-height: 1.6;
  font-size: 1.1rem;
  color: #444;
}

/* Work Experience Section */
.work-experience {
  margin-top: 30px;
  background: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
}

.work-experience h2 {
  margin-bottom: 15px;
  font-size: 2rem;
  color: #222;
}

.experience-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4 cards side by side */
  gap: 15px; /* Small gap between the cards */
  animation: fadeIn 2s ease-in-out;
}

.experience-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: slideInFromLeft 1s ease-out;
}

.experience-card h3 {
  font-size: 1.5rem;
  color: #333;
}

.experience-card p {
  font-size: 1rem;
  color: #555;
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

@keyframes slideInFromLeft {
  from {
    transform: translateX(-50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes slideInFromRight {
  from {
    transform: translateX(50%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes scaleIn {
  from {
    transform: scale(0.5);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
