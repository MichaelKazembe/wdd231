# ![PlantCare](project/images/logos/logo-primary.png)

[![HTML5](https://img.shields.io/badge/HTML5-orange?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5) 
[![CSS3](https://img.shields.io/badge/CSS3-blue?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) 
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) 
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

**PlantCare** is a responsive web application that helps users explore different plants and learn how to take care of them.  
It features a clean **card-based layout**, dynamic **plant details modals**, and a scalable project structure.  

👉 **[Live Demo](https://michaelkazembe.github.io/wdd231/project/index.html)**  

---

## 🚀 Features

- ✅ **Dynamic Plant Cards** – Populated from `plants.json`  
- ✅ **Progressive Reveal** – Loads 4 plants first, with "Show More" to display all  
- ✅ **Full-Screen Modal** – Accessible modal that fills the viewport for plant details  
- ✅ **Responsive Design** – Works smoothly across desktop and mobile  
- ✅ **Accessible UI** – Semantic HTML, ARIA labels, and keyboard navigation  
- ✅ **Scalable Structure** – Separate folders for `scripts`, `styles`, `data`, and `images`  

---

## 🛠️ Tech Stack

- **HTML5** – Semantic structure with ARIA support  
- **CSS3** – Responsive layout, Flexbox/Grid, CSS variables  
- **JavaScript (ES6+)** – DOM manipulation, event handling  
- **JSON** – Plant data stored in `plants.json`  

---

## ⚡ How It Works

1. Plant data is stored in `data/plants.json`.  
2. `scripts/app.js` fetches the JSON and dynamically creates plant cards.  
3. On load, **4 plants** are displayed.  
4. Clicking **"Show More"** reveals all plants (15+).  
5. Clicking a plant card opens a **full-screen modal** with:  
   - Plant image  
   - Description  
   - Care details (watering, soil, sunlight, etc.)  
6. The modal can be closed by:  
   - Clicking the **×** button  
   - Pressing **Escape**  
   - Clicking outside the modal  
 
---

## ▶️ Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/MichaelKazembe/wdd231.git
   cd project

2. Open index.html in your browser.
(No server setup required – runs locally in the browser)

---

## 🌟 Skills Demonstrated

- Front-End Engineering – Modular HTML/CSS/JS structure

- JavaScript – Fetch API, JSON handling, event-driven UI updates

- UI/UX Design – Accessible, responsive, and user-friendly layouts

- Accessibility – ARIA roles, keyboard navigation, semantic HTML

- Project Architecture – Organized folders for scalability

---

## 📌 Future Improvements

- 🔎 Add search & filter (by plant type, light, care level)

- 🌍 Fetch live plant data from a public API instead of static JSON

- 🌗 Implement dark mode toggle

- 🧪 Add unit tests for plant rendering logic

- 📱 Convert to a Progressive Web App (PWA)

---

## 📜 License

Released under the MIT License.
Free to use, modify, and share.

---

## 👨‍💻 Author

Developed with 💚 by Michael Kazembe
📧 [Email](michaelkazembe@gmail.com)
🔗 [LinkedIn](https://www.linkedin.com/in/michael-kazembe/)
