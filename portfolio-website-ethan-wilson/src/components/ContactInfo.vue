<template>
  <div class="contact-container">
    <h1 class="contact-header">Contact Me</h1>
    <p class="contact-email">Email: <a href="mailto:ethan09905@cccneb.edu">ethan09905@cccneb.edu</a></p>
    <div class="contact-icons">
      <!-- Email Link -->
      <a href="mailto:ethan09905@cccneb.edu" class="icon-link">
        <img src="https://img.icons8.com/material-outlined/24/ffd700/mail.png" alt="Email" />
      </a>
      <!-- LinkedIn Link -->
      <a href="https://linkedin.com/in/ethan09905" class="icon-link" target="_blank">
        <img src="https://img.icons8.com/material-outlined/24/ffd700/linkedin.png" alt="LinkedIn" />
      </a>
      <!-- GitHub Link -->
      <a href="https://github.com/ethan09905" class="icon-link" target="_blank">
        <img src="https://img.icons8.com/material-outlined/24/ffd700/github.png" alt="GitHub" />
      </a>
      <!-- Discord Link -->
      <a href="https://discord.com/users/ethan09905" class="icon-link" target="_blank">
        <img src="https://img.icons8.com/ios/24/ffd700/discord-logo.png" alt="Discord" />
      </a>
      <!-- Reddit Link -->
      <a href="https://www.reddit.com/user/ethan09905" class="icon-link" target="_blank">
        <img src="https://img.icons8.com/material-outlined/24/ffd700/reddit.png" alt="Reddit" />
      </a>
      <!-- Twitter Link -->
      <a href="https://twitter.com/ethan09905" class="icon-link" target="_blank">
        <img src="https://img.icons8.com/material-outlined/24/ffd700/twitter.png" alt="Twitter" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactInfo",
};
</script>

<style scoped>
.contact-container {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
  border-radius: 12px;
  padding: 20px;
  color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  animation: fadeIn 1.5s ease-in-out;
}

.contact-header {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
}

.contact-email {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.contact-email a {
  color: #ffd700;
  text-decoration: none;
  transition: color 0.3s ease;
}

.contact-email a:hover {
  color: #ff4500;
}

.contact-icons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.icon-link {
  transition: transform 0.3s ease, color 0.3s ease;
}

.icon-link:hover {
  transform: scale(1.2);
}

.icon-link img {
  color: #ffd700;
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}

.icon-link img:hover {
  transform: scale(1.2);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .contact-container {
    padding: 15px;
  }

  .contact-header {
    font-size: 1.8rem;
  }

  .contact-email {
    font-size: 1rem;
  }

  .icon-link {
    font-size: 1.8rem;
  }
}
</style>
