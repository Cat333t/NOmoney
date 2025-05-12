let particlesConfig = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 10,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 80,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#000",
      "opacity": 0.4,
      "width": 2
    },
    "move": {
      "enable": true,
      "speed": 12,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 800,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 300,
        "size": 20,
        "duration": 1,
        "opacity": 0.8,
        "speed": 3
      },
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 20
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}

function particlesRefresh() {
    window.pJSDom[0].pJS = particlesConfig;
    window.pJSDom[0].pJS.fn.particlesRefresh();
}

//dark mode
const themeToggle = document.querySelector(".theme-toggle").querySelector("input");

function loadTheme() {
    let theme = localStorage.getItem("theme");
    if (!theme) {
        theme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    document.documentElement.setAttribute("data-theme", theme);
    if (document.documentElement.getAttribute("data-theme") === "dark") {
        particlesConfig.particles.color.value = "#fff";
    } else {
        particlesConfig.particles.color.value = "#000";
    }
    themeToggle.checked = theme === "dark";
}

loadTheme();

themeToggle.addEventListener("change", () => {
    if (themeToggle.checked) {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
        particlesConfig.particles.color.value = "#000";
        localStorage.setItem("theme", "light");
    }

    if (document.documentElement.getAttribute("data-theme") === "dark") {
        particlesConfig.particles.color.value = "#fff";
        particlesConfig.particles.line_linked.color = "#fff";
    } else {
        particlesConfig.particles.color.value = "#000";
        particlesConfig.particles.line_linked.color = "#000";
    }
    // Update particles color
    particlesRefresh();
});

document.querySelectorAll(".logo").forEach((logo) => {
    logo.addEventListener("click", () => {
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            particlesConfig.particles.line_linked.enable = !particlesConfig.particles.line_linked.enable;
            particlesConfig.particles.line_linked.color = "#fff";
        } else {
            particlesConfig.particles.line_linked.enable = !particlesConfig.particles.line_linked.enable;
            particlesConfig.particles.line_linked.color = "#000";
        }

        particlesRefresh();
    });
})

particlesJS("particles-js", particlesConfig);

