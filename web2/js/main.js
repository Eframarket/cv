// Datos de proyectos
const projects = [
  {
    title: "Proyecto Web 1",
    description: "Una aplicación web moderna construida con HTML, CSS y JavaScript.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Proyecto Web 2",
    description: "Un sitio web responsivo con animaciones y efectos interactivos.",
    technologies: ["Sass", "JavaScript", "CSS Grid"],
  },
  {
    title: "Proyecto Web 3",
    description: "Una landing page optimizada para conversiones y SEO.",
    technologies: ["HTML5", "CSS3", "JavaScript ES6"],
  },
]

// Elementos del DOM
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.querySelector(".nav__menu")
const ctaButton = document.getElementById("cta-button")
const contactForm = document.getElementById("contact-form")
const projectsGrid = document.getElementById("projects-grid")

// Funcionalidad del menú móvil
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active")
  navToggle.classList.toggle("active")
})

// Cerrar menú al hacer click en un enlace
document.querySelectorAll(".nav__link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active")
    navToggle.classList.remove("active")
  })
})

// Smooth scroll para navegación
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Funcionalidad del botón CTA
ctaButton.addEventListener("click", () => {
  document.getElementById("sobre-mi").scrollIntoView({
    behavior: "smooth",
  })
})

// Cargar proyectos dinámicamente
function loadProjects() {
  projectsGrid.innerHTML = ""

  projects.forEach((project, index) => {
    const projectCard = document.createElement("div")
    projectCard.className = "project-card"
    projectCard.style.animationDelay = `${index * 0.1}s`

    projectCard.innerHTML = `
            <h3 class="project-card__title">${project.title}</h3>
            <p class="project-card__description">${project.description}</p>
            <div class="project-technologies">
                ${project.technologies.map((tech) => `<span class="skill-tag">${tech}</span>`).join("")}
            </div>
            <button class="btn btn--primary" style="margin-top: 1rem;">Ver Proyecto</button>
        `

    projectsGrid.appendChild(projectCard)
  })
}

// Manejar envío del formulario
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  const formData = new FormData(contactForm)
  const name = formData.get("name")
  const email = formData.get("email")
  const message = formData.get("message")

  // Simular envío del formulario
  showNotification("¡Mensaje enviado correctamente! Te contactaremos pronto.", "success")
  contactForm.reset()
})

// Función para mostrar notificaciones
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification--${type}`
  notification.textContent = message

  // Estilos para la notificación
  Object.assign(notification.style, {
    position: "fixed",
    top: "20px",
    right: "20px",
    padding: "1rem 2rem",
    backgroundColor: type === "success" ? "#27ae60" : "#3498db",
    color: "white",
    borderRadius: "5px",
    zIndex: "9999",
    animation: "slideInRight 0.3s ease",
  })

  document.body.appendChild(notification)

  // Remover notificación después de 3 segundos
  setTimeout(() => {
    notification.style.animation = "slideOutRight 0.3s ease"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Animación de scroll para elementos
function animateOnScroll() {
  const elements = document.querySelectorAll(".project-card, .about__content")

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animation = "fadeInUp 0.6s ease forwards"
        }
      })
    },
    { threshold: 0.1 },
  )

  elements.forEach((element) => {
    observer.observe(element)
  })
}

// Inicializar la aplicación
document.addEventListener("DOMContentLoaded", () => {
  loadProjects()
  animateOnScroll()

  // Agregar estilos para animaciones adicionales
  const style = document.createElement("style")
  style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
        
        .project-technologies {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.5rem;
            margin: 1rem 0;
        }
    `
  document.head.appendChild(style)
})

// Cambiar color del header al hacer scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector(".header")
  if (window.scrollY > 100) {
    header.style.backgroundColor = "rgba(255, 255, 255, 0.95)"
    header.style.backdropFilter = "blur(10px)"
  } else {
    header.style.backgroundColor = "#ffffff"
    header.style.backdropFilter = "none"
  }
})
