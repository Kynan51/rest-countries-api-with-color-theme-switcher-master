 fetch('./data.json')
 .then(response => response.json())
 .then(data => {
    data.forEach(country => {
      const markup = `
        <div class="country-card">
          <img src="${country.flags.png}" alt="Flag of ${country.name}">
          <h2 class="country-name">${country.name}</h2>
          <p class="country-info">Population: ${country.population}</p>
          <p class="country-info">Region: ${country.region}</p>
          <p class="country-info">Capital: ${country.capital}</p>
        </div>`;
      document.querySelector('#countries').insertAdjacentHTML('beforeend', markup);
    });
  })
 .catch(error => console.error('Error:', error));

const themeSwitcher = document.getElementById('theme-switcher');
const root = document.documentElement;

themeSwitcher.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark'? '' : 'dark';
  themeSwitcher.textContent = root.dataset.theme === 'dark'? 'Switch to Light Mode' : 'Switch to Dark Mode';

});


renderOnDOM(countries)

const detailButtons = document.getElementById('detail')
console.log(detailButtons);

for(let index = 0; index<detailButtons.length;index++){
  detailButtons[index].addEventListener("click",(event=>{
    console.log(event.target);
    console.log(event.target.getAttribute("id"));
    let filteredList = tickets.filter(ticket=>ticket.event === event.target.getAttribute("id"))
    console.log(filteredList);
    if ( event.target.getAttribute("id") === "all") {
      renderOnDOM(tickets)
    }else{
      renderOnDOM(filteredList)
    }
  })
)
}