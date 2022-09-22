/* eslint-disable no-unused-vars */
const cards = [
  {
    id: 1,
    name: 'William Jones',
    image: 'images/mos.png',
    role: ` William is proffessor of Enterprenuerial
    studies of Harvard Law School.`,
    Responsibility: `He studies commons based peer
    production and published his seminal
    book,The wealth of Networks in 2006`,
  },
  {
    id: 2,
    name: 'Kamoga Peter',
    image: 'images/paul.png',
    role: 'Director of Art center Nabi and a board member of CC Korea.',
    Responsibility: `As the main venue for new media art production, Nabi promotes cross-disciplinary
    collaboration and understanding among science,technology,humanities and the arts`,
  },
  {
    id: 3,
    name: 'Joao Mugerwa',
    image: 'images/sha.png',
    role: ' Director of Art center Nabi and a board member of CC Korea.',
    Responsibility: ` As the main venue for new media art production, Nabi promotes cross-disciplinary
    collaboration and understanding among science,technology,humanities and the arts`,
  },
  {
    id: 4,
    name: 'Namubiru Alice',
    image: 'images/al.png',
    role: ` Alice is proffessor of Enterprenuerial
    studies of Harvard Law School.`,
    Responsibility: `As the main venue for new media art production, Nabi promotes cross-disciplinary
    collaboration and understanding among science,`,
  },
  {
    id: 5,
    name: 'Andrew Carnegie',
    image: 'images/here.png',
    role: ` Andrew is proffessor of Enterprenuerial
    studies of Harvard Law School.`,
    Responsibility: ` As the main venue for new media art production, Nabi promotes cross-disciplinary
    collaboration and understanding among science,technology`,
  },
  {
    id: 6,
    name: 'James Hendrix',
    image: 'images/hend.png',
    role: ` hendrix is proffessor of Enterprenuerial
    studies of Harvard Law School.`,
    Responsibility: `As the main venue for new media art production, Nabi promotes cross-disciplinary
    collaboration and understanding among science`,
  },
];

const developers = document.getElementById('speakers');
// eslint-disable-next-line no-unused-vars
developers.innerHTML = cards
  .map(
    (speak, index) => `


<section class="card ${index % 2 !== 0 ? 'flex-even' : 'flex-odd'}" >
    
  <div class="speaker-details" id="${speak.id}">
  <div class="avator">
            <img  src="${speak.image}" alt="developer-image" /></div>
            <div class="personal-details">
            
           
            <h4>${speak.name}</h4>
            <p class="role"  >${speak.role}</p>
<p class="current-role">${speak.Responsibility}</p> </div>    </div>   </div>  
              
     </section>
     `,
  )
  .join('');

const showMenu = document.querySelector('#burger');
const hideMenu = document.querySelector('#hideMenu');
const popup = document.querySelector('.mobile-menu');

function openMenu() {
  popup.style.display = 'flex';
}
function closeMenu() {
  popup.style.top = '-100%';
  popup.style.width = '50%';
  window.setTimeout(() => {
    window.location.reload();
  }, 50);
}
showMenu.addEventListener('click', openMenu);
hideMenu.addEventListener('click', closeMenu);
