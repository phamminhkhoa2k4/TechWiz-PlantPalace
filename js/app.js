$(document).ready(function () {
  // Xử lý sự kiện khi nhấp vào các liên kết
  $(".nav-link").click(function (event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

    var url = $(this).attr("href"); // Lấy đường dẫn từ thuộc tính href của liên kết
    console.log("URL:", url);
    console.log("hello");

    // // Tải nội dung trang home mặc định
    // $("#content").load("home.html");
    // Sử dụng phương thức load() để tải nội dung từ đường dẫn và thay thế phần nội dung chính
    $("#content").load(url);
  });
});

// breadcrumb
// $(document).ready(function () {
//   // Xử lý khi trang được tải
//   updateBreadcrumb();

//   // Xử lý sự kiện khi nhấn vào các liên kết navigation
//   $(".nav-link").click(function (event) {
//     event.preventDefault();

//     var url = $(this).attr("href");
//     $("#content").html("Loading...");
//     loadContent(url, function () {
//       updateBreadcrumb(url);
//     });
//   });

//   // Cập nhật breadcrumb dựa trên đường dẫn hiện tại của trang
//   function updateBreadcrumb(url) {
//     var breadcrumbContainer = $("#breadcrumb");
//     breadcrumbContainer.empty(); // Xóa breadcrumb hiện tại

//     var breadcrumbData = getBreadcrumbData(url);
//     if (breadcrumbData) {
//       $.each(breadcrumbData, function (index, segment) {
//         var segmentLink = $("<a></a>")
//           .attr("href", segment.url)
//           .text(segment.title);
//         var segmentItem = $("<span></span>").append(segmentLink);

//         if (index < breadcrumbData.length - 1) {
//           segmentItem.append(" > ");
//         }

//         breadcrumbContainer.append(segmentItem);
//       });
//     }
//   }

//   // Lấy dữ liệu breadcrumb dựa trên đường dẫn hiện tại của trang
//   function getBreadcrumbData(url) {
//     // Đây là một ví dụ cấu trúc dữ liệu breadcrumb đa cấp
//     var breadcrumbData = {
//       "home.html": [{ url: "home.html", title: "home 1" }],
//       "page2.html": [
//         { url: "page1.html", title: "Page 1" },
//         { url: "page2.html", title: "Page 2" },
//       ],
//       "page3.html": [
//         { url: "page1.html", title: "Page 1" },
//         { url: "page2.html", title: "Page 2" },
//         { url: "page3.html", title: "Page 3" },
//       ],
//     };
//     return breadcrumbData[url] || null;
//   }

//   // Tải nội dung từ đường dẫn
//   function loadContent(url, callback) {
//     $("#content").load(url, function () {
//       if (typeof callback === "function") {
//         callback();
//       }
//     });
//   }
// });

// slider

const data = [
  {
    img: "../assets/img/garden.jpg",
    country: "Country 1",
    place: "Place 1",
    description: "Description 1",
  },
  {
    img: "../assets/img/logo.jpg",
    country: "Country 2",
    place: "Place 2",
    description: "Description 2",
  },
  {
    img: "../assets/img/garden.jpg",
    country: "Country 1",
    place: "Place 1",
    description: "Description 1",
  },
  // Thêm các phần tử khác tương tự
];

const introduce = document.querySelector(".introduce");
const ordinalNumber = document.querySelector(".ordinal-number");

introduce.innerHTML = "";
ordinalNumber.innerHTML = "";
for (let i = 0; i < data.length; i++) {
  introduce.innerHTML += `
        <div class="wrapper">
            <span>
                <h5 class="country" style="--idx:0">${data[i].country}</h5>
            </span>
            <span>
                <h1 class="place" style="--idx:1">${data[i].place}</h1>
            </span>
            <span>
                <p class="description" style="--idx:2">${data[i].description}</p>
            </span>
            <span>
                <button class="slider-button discover-button" style="--idx:3">Discover Now</button>
            </span>
        </div>`;

  ordinalNumber.innerHTML += `<h2>0${i + 1}</h2>`;
}

introduce.children[0].classList.add("active");
ordinalNumber.children[0].classList.add("active");

const thumbnailListWrapper = document.querySelector(".thumbnail-list .wrapper");

thumbnailListWrapper.innerHTML += `<div class="thumbnail zoom ">
                                        <img src="${data[0].img}" alt="" />
                                    </div>`;
for (let i = 1; i < data.length; i++) {
  thumbnailListWrapper.innerHTML += `
        <div class="thumbnail" style="--idx: ${i - 1}">
            <img src="${data[i].img}" alt="" />
        </div>
    `;
}

const nextBtn = document.querySelector(".navigation .next-button");
var currentIndex = 0;
nextBtn.addEventListener("click", () => {
  nextBtn.disabled = true;
  var clone = thumbnailListWrapper.children[0].cloneNode(true);
  clone.classList.remove("zoom");
  thumbnailListWrapper.appendChild(clone);
  thumbnailListWrapper.children[1].classList.add("zoom");
  setTimeout(() => {
    thumbnailListWrapper.children[0].remove();
    nextBtn.disabled = false;
  }, 1000);

  for (let i = 2; i < thumbnailListWrapper.childElementCount; i++) {
    thumbnailListWrapper.children[1].style = `--idx: ${i - 2}`;
  }
  currentIndex < data.length - 1 ? currentIndex++ : (currentIndex = 0);

  for (let i = 0; i < data.length; i++) {
    introduce.children[i].classList.remove("active");
    ordinalNumber.children[i].classList.remove("active");
  }
  introduce.children[currentIndex].classList.add("active");
  ordinalNumber.children[currentIndex].classList.add("active");
  ordinalNumber.children[currentIndex].textContent = `0${currentIndex + 1}`;
});








// relative 

const iconArrow = document.getElementsByClassName('icon-arrow');
const relativeProduct = document.getElementsByClassName('relative-product');
const relativeProductPage = Math.ceil(relativeProduct.length/4);
let l = 0;
let movePer = 25.34;
let maxMove = 203;

// responsive view

let responsive_relative = window.matchMedia("(max-width:767px)");
if(responsive_relative.matches){
    movePer = 50.36;
    maxMove = 504;
}let right_mover = ()=>{
    l = l + movePer;
    if(relativeProduct == 1){
        l = 0
    }
    for(const i of relativeProduct){
        if(l > maxMove){
            l = l - movePer;
        }
        i.style.left = '-' + l + '%';
    }
}

let left_mover = ()=>{
    l = l - movePer;
    if(l <= 0){
        l = 0;
    }
    for(const i of relativeProduct){
        if(relativeProductPage > 1){
            i.style.left = '-' + l + '%';
        }
        
    }
}

iconArrow[1].onclick = ()=>{right_mover();}
iconArrow[0].onclick = ()=>{left_mover();}




// open or close filter mobile 

 const openFilterBtn = document.querySelector(".js-open-filter");
 const sidebar = document.querySelector(".grid-item-sidebar-filter");
 const closeFilterBtn = document.querySelector(".js-close-btn");
 const downBtn = document.querySelector(".down");
 const upBtn = document.querySelector(".up");
 const dropdown = document.querySelector(
   ".grid-item-sidebar-filter-content-item-dropdown"
 );

 openFilterBtn.addEventListener("click", () => {
  alert("actived")
  console.log("actived")
   sidebar.classList.add("is-active");
 });
 closeFilterBtn.addEventListener("click", () => {
   sidebar.classList.remove("is-active");
 });

 downBtn.addEventListener("click", () => {
   dropdown.classList.remove("");
   downBtn.classList.add("hide");
   upBtn.classList.remove("hide");
 });
 upBtn.addEventListener("click", () => {
   downBtn.classList.remove("hide");
   upBtn.classList.add("hide");
 });