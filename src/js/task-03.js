// Массив изображений
const images = [
    {
      url:
        "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "White and Black Long Fur Cat",
    },
    {
      url:
        "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Orange and White Koi Fish Near Yellow Koi Fish",
    },
    {
      url:
        "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      alt: "Group of Horses Running",
    },
  ];

  const galleryList = document.getElementById("gallery");
  
  function createGalleryItem({ url, alt }) {
    return `<li class="gallery-item">
        <img src="${url}" alt="${alt}" width="400">
      </li>`;
  }
  
  const galleryMarkup = images.reduce(
    (markup, item) => markup + createGalleryItem(item),
    ""
  );
  
  galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);
  
  galleryList.style.display = "flex";
  galleryList.style.justifyContent = "space-around";
  
  const galleryItems = document.querySelectorAll(".gallery-item");
  galleryItems.forEach((el) => {
    el.style.border = "2px solid green";
    el.style.borderRadius = "7px";
    el.style.width = "400px";
    el.style.height = "200px";
    el.style.overflow = "hidden";
  });