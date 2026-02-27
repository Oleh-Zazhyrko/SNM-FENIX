document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar")
	const allNavItems = document.querySelectorAll(".nav-link")
	const navList = document.querySelector(".navbar-collapse")

	function addShadow() {
		if (window.scrollY >= 300) {
			nav.classList.add("shadow-bg")
		} else {
			nav.classList.remove("shadow-bg")
		}
	}

	allNavItems.forEach(item =>
		item.addEventListener("click", () => {
			navList.classList.remove("show")
		}),
	)

	window.addEventListener("scroll", addShadow)
})

document.getElementById("year").textContent = new Date().getFullYear()

// const GALLERY_COUNT = 8 // сколько фото
// const basePath = "./img/gallery/" // путь
// const ext = "jpeg" // jpeg / jpg / webp

// const pad3 = n => String(n).padStart(3, "0")
// const wrapper = document.getElementById("swiperWrapper")

// wrapper.innerHTML = Array.from({ length: GALLERY_COUNT }, (_, idx) => {
// 	const i = idx + 1
// 	const src = `${basePath}gallery${pad3(i)}.${ext}`

// 	return `
//       <div class="swiper-slide">
//         <img class="gallery-slide-img swiper-lazy"
//              data-src="${src}"
//              alt="Gallery ${pad3(i)}">
//         <div class="swiper-lazy-preloader"></div>
//       </div>
//     `
// }).join("")

// new Swiper(".gallerySwiper", {
// 	loop: true,
// 	speed: 450,
// 	spaceBetween: 0,
// 	navigation: {
// 		nextEl: ".swiper-button-next",
// 		prevEl: ".swiper-button-prev",
// 	},
// 	preloadImages: false,
// 	lazy: {
// 		loadPrevNext: true, // подгружает соседние
// 		loadPrevNextAmount: 2,
// 	},
// 	watchSlidesProgress: true,
// 	keyboard: { enabled: true },
// })

const GALLERY_COUNT = 8
const basePath = "../img/gallery/"
const ext = "jpeg" // проверь: jpeg или jpg

const pad3 = n => String(n).padStart(3, "0")
const wrapper = document.getElementById("swiperWrapper")

wrapper.innerHTML = Array.from({ length: GALLERY_COUNT }, (_, idx) => {
	const i = idx + 1
	const src = `${basePath}gallery${pad3(i)}.${ext}`
	return `
      <div class="swiper-slide">
        <img class="gallery-slide-img" src="${src}" alt="Gallery ${pad3(i)}" loading="lazy">
      </div>
    `
}).join("")

new Swiper(".gallerySwiper", {
	loop: true,
	navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
	keyboard: { enabled: true },
})
