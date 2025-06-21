document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.createElement("button");
  menuToggle.className = "menu-toggle";
  menuToggle.innerHTML = "⋮";

  const dropdown = document.createElement("ul");
  dropdown.className = "dropdown";
  const items = [
    { id: "profile", label: "Giới thiệu" },
    { id: "skills", label: "Kỹ năng" },
    { id: "experience", label: "Kinh nghiệm" },
    { id: "education", label: "Học vấn" },
    { id: "goals", label: "Mục tiêu" },
    { id: "hobbies", label: "Sở thích" },
    { id: "contact", label: "Liên hệ" }
  ];

  items.forEach(({ id, label }) => {
    const li = document.createElement("li");
    li.textContent = label;
    li.dataset.section = id;
    dropdown.appendChild(li);
  });

  const navbar = document.querySelector(".navbar");
  navbar.innerHTML = ""; // Xóa ul cũ
  navbar.appendChild(menuToggle);
  navbar.appendChild(dropdown);

  const sections = document.querySelectorAll(".section");

  // Toggle menu
  menuToggle.addEventListener("click", () => {
    dropdown.classList.toggle("active");
  });

  // Khi chọn menu
  dropdown.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      const target = e.target.dataset.section;

      sections.forEach((sec) => {
        sec.classList.remove("active");
        if (sec.id === target) {
          sec.classList.add("active");
        }
      });

      // Ẩn menu
      dropdown.classList.remove("active");

      // Thêm nút "Quay lại"
      addBackButton();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  function addBackButton() {
    sections.forEach((sec) => {
      if (sec.id !== "profile") {
        if (!sec.querySelector(".back-button")) {
          const backBtn = document.createElement("button");
          backBtn.className = "back-button";
          backBtn.textContent = "← Quay lại";
          backBtn.addEventListener("click", () => {
            sections.forEach(s => s.classList.remove("active"));
            document.getElementById("profile").classList.add("active");
            window.scrollTo({ top: 0, behavior: "smooth" });
          });
          sec.appendChild(backBtn);
        }
      }
    });
  }

  // Khởi tạo nút quay lại cho tất cả trừ phần giới thiệu
  addBackButton();
});