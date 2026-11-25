const mainnav = document.querySelector(".navigation");
const hambutton = document.querySelector("#menu");
const menuIcon = document.querySelector("#menu-icon");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");

  const menuIsOpen = mainnav.classList.contains("show");
  hambutton.setAttribute("aria-expanded", menuIsOpen);
  hambutton.setAttribute(
    "aria-label",
    menuIsOpen ? "Close navigation menu" : "Open navigation menu"
  );
  menuIcon.textContent = menuIsOpen ? "×" : "☰";
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
  templeName: "Cebu City Philippines",
  location: "Cebu City, Philippines",
  dedicated: "2010, June, 13",
  area: 29556,
  imageUrl:
    "https://www.churchofjesuschrist.org/imgs/751a0dd8846a820488f147fd2b50664be8141efd/full/%2C500/0/default"
},
{
  templeName: "Copenhagen Denmark",
  location: "Frederiksberg, Denmark",
  dedicated: "2004, May, 23",
  area: 25000,
  imageUrl:
    "https://www.churchofjesuschrist.org/imgs/47220d7dcbc053a34341eb18652614ce4f9d3ebb/full/800%2C/0/default"
},
{
  templeName: "Curitiba Brazil",
  location: "Curitiba, Brazil",
  dedicated: "2008, June, 1",
  area: 27850,
  imageUrl:
    "https://www.churchofjesuschrist.org/imgs/dcdc13d011d599e0da42ff8eda0c9dae18b5ac36/full/%2C500/0/default"
}
  // Add more temple objects here...
];

const templeGrid = document.querySelector(".temple-grid");
const templeNavLinks = document.querySelectorAll(".navigation a[data-filter]");

const getDedicationYear = (temple) => Number(temple.dedicated.split(",")[0]);

const templeFilters = {
  all: () => true,
  old: (temple) => getDedicationYear(temple) < 1900,
  new: (temple) => getDedicationYear(temple) > 2000,
  large: (temple) => temple.area > 90000,
  small: (temple) => temple.area < 10000,
};

function displayTemples(templesToDisplay) {
  templeGrid.replaceChildren();

  templesToDisplay.forEach((temple) => {
    const card = document.createElement("figure");
    card.classList.add("temple-card");

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area} sq ft`;

    card.appendChild(image);
    card.appendChild(caption);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);

    templeGrid.appendChild(card);
  });
}

displayTemples(temples);

templeNavLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const filterName = event.currentTarget.dataset.filter;
    const filteredTemples = temples.filter(templeFilters[filterName]);
    displayTemples(filteredTemples);

    templeNavLinks.forEach((navLink) => navLink.removeAttribute("aria-current"));
    event.currentTarget.setAttribute("aria-current", "page");

    mainnav.classList.remove("show");
    hambutton.classList.remove("show");
    hambutton.setAttribute("aria-expanded", "false");
    hambutton.setAttribute("aria-label", "Open navigation menu");
    menuIcon.textContent = "☰";
  });
});
