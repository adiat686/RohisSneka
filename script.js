// Dark mode toggle
function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

// Artikel dummy
const artikelList = document.getElementById("artikelList");
const artikel = [
  { title: "Keutamaan Sholat Dhuha", text: "Sholat dhuha adalah salah satu sunnah..." },
  { title: "Adab Menuntut Ilmu", text: "Seorang muslim dianjurkan untuk belajar..." },
  { title: "Keutamaan Sedekah", text: "Sedekah dapat membuka pintu rezeki..." }
];

artikel.forEach(a => {
  const div = document.createElement("div");
  div.className = "p-6 bg-gray-100 rounded-lg shadow hover:scale-105 transition";
  div.innerHTML = `<h4 class="font-bold mb-2">${a.title}</h4><p>${a.text}</p>`;
  artikelList.appendChild(div);
});

// Navbar hide saat scroll
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");
  if (prevScrollpos > currentScrollPos) {
    navbar.style.top = "0";
  } else {
    navbar.style.top = "-80px";
  }
  prevScrollpos = currentScrollPos;
}


