
document.addEventListener("DOMContentLoaded", () => {

  console.log("SCRIPT LOADED");


  /****************************************************
   * MOBILE NAV TOGGLE
   ****************************************************/
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });

    navLinks.addEventListener("click", (e) => {
      if (e.target.classList.contains("nav-link")) {
        navLinks.classList.remove("open");
      }
    });
  }

  /****************************************************
   * FOOTER YEAR
   ****************************************************/
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  /****************************************************
   * PRODUCT DATABASE (SAFE SLUGS)
   ****************************************************/
  const PRODUCT_DATA = {
    hardwood: {
      meranti: {
        displayName: "Meranti",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      },

      kapur: {
        displayName: "Kapur",
        description:
          "Kapur is durable, moisture resistant, and ideal for heavy-duty interior and structural applications.",
        images: [
          "images/hardwood/kapur/img1.jpeg",
          "images/hardwood/kapur/img2.jpeg",
          "images/hardwood/kapur/img3.jpeg",
          "images/hardwood/kapur/img4.jpeg",
          "images/hardwood/kapur/img5.jpeg"
        ]
      },

      arau: {
        displayName: "Arau",
        description:
          "Sal wood is extremely strong and widely used in construction, flooring, and load-bearing applications.",
        images: [
          "images/hardwood/arau/img1.jpeg",
          "images/hardwood/arau/img2.jpeg",
          "images/hardwood/arau/img3.jpeg",
          "images/hardwood/arau/img4.jpeg",
          "images/hardwood/arau/img5.jpeg"
        ]
      },

      sal: {
        displayName: "Sal",
        description:
          "Sal wood is extremely strong and widely used in construction, flooring, and load-bearing applications.",
        images: [
          "images/hardwood/sal/img1.jpeg",
          "images/hardwood/sal/img2.jpeg",
          "images/hardwood/sal/img3.jpeg",
          "images/hardwood/sal/img4.jpeg",
          "images/hardwood/sal/img5.jpeg"
        ]
      },

      curin: {
        displayName: "Curin",
        description:
          "Sal wood is extremely strong and widely used in construction, flooring, and load-bearing applications.",
        images: [
          "images/hardwood/curin/img1.jpeg",
          "images/hardwood/curin/img2.jpeg",
          "images/hardwood/curin/img3.jpeg",
          "images/hardwood/curin/img4.jpeg",
          "images/hardwood/curin/img5.jpeg"
        ]
      },

      rajak: {
        displayName: "Rajak",
        description:
          "Sal wood is extremely strong and widely used in construction, flooring, and load-bearing applications.",
        images: [
          "images/hardwood/rajak/img1.jpeg",
          "images/hardwood/rajak/img2.jpeg",
          "images/hardwood/rajak/img3.jpeg",
          "images/hardwood/rajak/img4.jpeg",
          "images/hardwood/rajak/img5.jpeg"
        ]
      },

      "dowel-laminated": {
        displayName: "Dowel Lamniated",
        description:
          "Sal wood is extremely strong and widely used in construction, flooring, and load-bearing applications.",
        images: [
          "images/hardwood/dl/img1.jpeg",
          "images/hardwood/dl/img2.jpeg",
          "images/hardwood/dl/img3.jpeg",
          "images/hardwood/dl/img4.jpeg",
          "images/hardwood/dl/img5.jpeg"
        ]
      },

      "red-solomon": {
        displayName: "Red Solomon",
        description:
          "Sal wood is extremely strong and widely used in construction, flooring, and load-bearing applications.",
        images: [
          "images/hardwood/pm/img1.jpeg",
          "images/hardwood/pm/img2.jpeg",
          "images/hardwood/pm/img3.jpeg",
          "images/hardwood/pm/img4.jpeg",
          "images/hardwood/pm/img5.jpeg"
        ]
      },

      nito: {
        displayName: "Nito",
        description:
          "Sal wood is extremely strong and widely used in construction, flooring, and load-bearing applications.",
        images: [
          "images/hardwood/nito/img1.jpeg",
          "images/hardwood/nito/img2.jpeg",
          "images/hardwood/nito/img3.jpeg",
          "images/hardwood/nito/img4.jpeg",
          "images/hardwood/nito/img5.jpeg"
        ]
      },

      uba: {
        displayName: "UBA",
        description:
          "Sal wood is extremely strong and widely used in construction, flooring, and load-bearing applications.",
        images: [
          "images/hardwood/uba/img1.jpeg",
          "images/hardwood/uba/img2.jpeg",
          "images/hardwood/uba/img3.jpeg",
          "images/hardwood/uba/img4.jpeg",
          "images/hardwood/uba/img5.jpeg"
        ]
      },

      mlh: {
        displayName: "MLH",
        description:
          "Sal wood is extremely strong and widely used in construction, flooring, and load-bearing applications.",
        images: [
          "images/hardwood/mlh/img1.jpeg",
          "images/hardwood/mlh/img2.jpeg",
          "images/hardwood/mlh/img3.jpeg",
          "images/hardwood/mlh/img4.jpeg",
          "images/hardwood/mlh/img5.jpeg"
        ]
      },

      hollock: {
        displayName: "Hollock",
        description:
          "Sal wood is extremely strong and widely used in construction, flooring, and load-bearing applications.",
        images: [
          "images/hardwood/mlh/img1.jpeg",
          "images/hardwood/mlh/img2.jpeg",
          "images/hardwood/mlh/img3.jpeg",
          "images/hardwood/mlh/img4.jpeg",
          "images/hardwood/mlh/img5.jpeg"
        ]
      },

      cp: {
        displayName: "Central Provinces",
        description:
          "Sal wood is extremely strong and widely used in construction, flooring, and load-bearing applications.",
        images: [
          "images/hardwood/cp/img1.jpeg",
          "images/hardwood/cp/img2.jpeg",
          "images/hardwood/cp/img3.jpeg",
          "images/hardwood/cp/img4.jpeg",
          "images/hardwood/cp/img5.jpeg"
        ]
      },
    },
    teakwood: {
      ecuador: {
        displayName: "Ecuador",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/teakwood/ecuador/img1.jpg",
          "images/teakwood/ecuador/img2.jpg",
          "images/teakwood/ecuador/img3.jpeg",
          "images/teakwood/ecuador/img4.jpeg",
          "images/teakwood/ecuador/img5.jpeg"
        ]
      },
      "costa-rica": {
        displayName: "Costa Rica",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/teakwood/costa-rica/img1.jpg",
          "images/teakwood/costa-rica/img2.jpg",
          "images/teakwood/costa-rica/img3.jpg",
          "images/teakwood/costa-rica/img4.jpg",
          "images/teakwood/costa-rica/img5.jpg"
        ]
      },
      ghana: {
        displayName: "Ghana",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/teakwood/ghana/img1.jpeg",
          "images/teakwood/ghana/img2.jpeg",
          "images/teakwood/ghana/img3.jpeg",
          "images/teakwood/ghana/img4.jpeg",
          "images/teakwood/ghana/img5.jpeg"
        ]
      },
      ginni: {
        displayName: "Ginni",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      },
      vietnam: {
        displayName: "Vietnam",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      },
      benin: {
        displayName: "Benin",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      },
      panama: {
        displayName: "Panama",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      },
      brazil: {
        displayName: "Brazil",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/teakwood/brazil/img1.jpeg",
          "images/teakwood/brazil/img2.jpeg",
          "images/teakwood/brazil/img3.jpeg",
          "images/teakwood/brazil/img4.jpeg",
          "images/teakwood/brazil/img5.jpeg"
        ]
      },
      mexico: {
        displayName: "Mexico",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      },
      nigeria: {
        displayName: "nigeria",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/teakwood/nigeria/img1.jpeg",
          "images/teakwood/nigeria/img2.jpeg",
          "images/teakwood/nigeria/img3.jpeg",
          "images/teakwood/nigeria/img4.jpeg",
          "images/teakwood/nigeria/img5.jpeg"
        ]
      },
      tanzania: {
        displayName: "tanzania",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      },
    },

    pinewood: {
      'united-state': {
        displayName: "United State",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      },
      "chille": {
        displayName: "Chille",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      },
      russia: {
        displayName: "Russia",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      },
      canada: {
        displayName: "Canada",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      },
      "new-zealand": {
        displayName: "New Zealand",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      },
      sweden: {
        displayName: "sweden",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      },
      vietnam: {
        displayName: "Vietnam",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      },
    },

    manufactured: {
      "wall-panel": {
        displayName: "Wall Panel",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/manufactured-products/wall panel/img1.jpeg",
          "images/manufactured-products/wall panel/img2.jpeg",
          "images/manufactured-products/wall panel/img3.jpeg",
          "images/manufactured-products/wall panel/img4.jpeg",
          "images/manufactured-products/wall panel/img5.jpeg"
        ]
      },
      "flooring": {
        displayName: "Flooring",
        description:
          "Meranti hardwood features straight grain, uniform texture, and excellent workability. Ideal for premium furniture, doors, and interiors.",
        images: [
          "images/hardwood/meranti/img1.jpg",
          "images/hardwood/meranti/img2.jpg",
          "images/hardwood/meranti/img3.jpg",
          "images/hardwood/meranti/img4.jpg",
          "images/hardwood/meranti/img5.jpg"
        ]
      }
    }
  };

  /****************************************************
   * HOME PAGE SLIDESHOW
   ****************************************************/

  const homeSlides = document.querySelectorAll(".hero-slide");
  let homeIndex = 0;

  if (homeSlides.length > 0) {
    setInterval(() => {
      homeSlides[homeIndex].classList.remove("active");
      homeIndex = (homeIndex + 1) % homeSlides.length;
      homeSlides[homeIndex].classList.add("active");
    }, 4500);
  }


  /****************************************************
   * READ URL PARAMS
   ****************************************************/
  const params = new URLSearchParams(window.location.search);
  const category = params.get("category");
  const item = params.get("item");

  /****************************************************
   * HERO SLIDER ELEMENTS (NOW THEY EXIST)
   ****************************************************/
  const heroSlidesContainer = document.getElementById("pd-hero-slides");
  const prevBtn = document.querySelector(".pd-nav.prev");
  const nextBtn = document.querySelector(".pd-nav.next");

  if (!heroSlidesContainer || !prevBtn || !nextBtn) {
    console.error("Slider elements missing");
    return;
  }

  if (!PRODUCT_DATA[category] || !PRODUCT_DATA[category][item]) {
    console.error("Product not found:", category, item);
    return;
  }

  const product = PRODUCT_DATA[category][item];

  /****************************************************
   * TEXT CONTENT
   ****************************************************/
  document.getElementById("pd-category").textContent = category.toUpperCase();
  document.getElementById("pd-title").textContent = product.displayName;
  document.getElementById("pd-short").textContent = product.description;
  document.getElementById("pd-spec-type").textContent = product.displayName;

  /****************************************************
   * BUILD SLIDES
   ****************************************************/
  heroSlidesContainer.innerHTML = product.images
    .map(
      (img, i) => `
        <div class="pd-hero-slide ${i === 0 ? "active" : ""}"
             style="background-image:url('${img}')"></div>
      `
    )
    .join("");

  const slides = document.querySelectorAll(".pd-hero-slide");
  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    slides.forEach(s => s.classList.remove("active"));
    slides[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  function startAuto() {
    interval = setInterval(nextSlide, 4000);
  }

  function resetAuto() {
    clearInterval(interval);
    startAuto();
  }

  /****************************************************
   * BUTTON EVENTS (NOW THEY WORK)
   ****************************************************/
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetAuto();
  });

  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetAuto();
  });

  startAuto();

});