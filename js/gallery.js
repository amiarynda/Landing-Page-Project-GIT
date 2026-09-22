let api = "https://dummyjson.com/c/80bd-6336-48b2-8aa6";

async function getImages() {
  try {
    let response = await fetch(api);
    if (!response.ok) throw new error("Data not found");
    images = await response.json();
    console.log(images)
    showImages();
  } catch (error) {
    console.log("Error: ", error);
  }
}

function showImages() {
  let element = "";
  images.images.forEach((item, id) => {
    element += `
      <li class="group h-[240px] overflow-hidden bg-neutral-200 sm:h-[230px] md:h-[250px] lg:h-[255px]">
        <img
          src="./assets/${images.images[id]}"
          alt="Kegiatan KodeKita — dokumentasi ${id}"
          class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </li>
    `;
  });

  document.getElementById("gallery").innerHTML = element;
}

getImages();