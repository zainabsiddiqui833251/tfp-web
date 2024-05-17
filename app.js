window.addEventListener('load',
    function(){
        document.getElementById('maincontent').style.display = 'none';
this.setTimeout(function(){
    document.getElementById('loading').style.display = 'none';

    document.getElementById('maincontent').style.display = 'block';
},3000)
    }
)

function showsidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hidesidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

// modes
// modes
// modes
let btn1 = document.querySelector('.toggle'); // Assuming your button has a class of 'toggle'
let mode = 'light'; // Strings should be enclosed in quotes

btn1.addEventListener('click', () => {
    if (mode === 'light') {
        mode = 'dark';
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        btn1.style.backgroundColor = 'white'; // Change button background color to white in dark mode
        btn1.style.color = 'white'; // Change button text color to black in dark mode
        btn1.innerHTML = '<i class="fa-solid fa-lightbulb" style="color: yellow;">light';
        // Change color of footer links to white in dark mode
        let footerLinks = document.querySelectorAll('footer a');
        footerLinks.forEach(link => {
            link.style.color = 'white';
        });
    } else {
        mode = 'light';
        document.body.style.backgroundColor = 'lightblue';
        document.body.style.color = 'black';
        btn1.style.backgroundColor.border = 'black'; // Change button background color to black in light mode
        btn1.style.color = 'black'; // Change button text color to white in light mode
        btn1.innerHTML = '<i class="fa-solid fa-lightbulb" style="color: grey;">dark';
        // Change color of footer links to black in light mode
        let footerLinks = document.querySelectorAll('footer a');
        footerLinks.forEach(link => {
            link.style.color = 'white';
        });
    }
});



// modes

// search button
function searchContent() {
  var searchText = document.getElementById('searchInput').value.toLowerCase();

  // Exclude footer, navbar, header, and specific ul elements from the search
  var elementsToSearch = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span');
  var elementsToExclude = document.querySelectorAll('footer, footer *, nav, nav *, header, header *, ul.exclude, ul.exclude *');

  elementsToSearch.forEach(function(element) {
    if (!Array.from(elementsToExclude).includes(element)) {
      var content = element.textContent.toLowerCase();
      if (content.includes(searchText)) {
        highlightText(element, searchText);
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        clearHighlight(element);
      }
    }
  });
}

function highlightText(element, searchText) {
  var content = element.textContent;
  var regex = new RegExp(`(${searchText})`, 'gi');
  var highlightedContent = content.replace(regex, '<span class="highlight">$1</span>');
  element.innerHTML = highlightedContent;
}

function clearHighlight(element) {
  element.innerHTML = element.textContent;
}

// Ensure you have CSS for the .highlight class
// Example CSS:
// .highlight {
//   background-color: yellow;
// }

// search button


function toggleVideos() {
    var videos = document.querySelectorAll('.videos2');
    var btnText = document.getElementById("readMoreBtn");
    for (var i = 0; i < videos.length; i++) {
      if (videos[i].style.display === "none") {
        videos[i].style.display = "block";
        btnText.innerHTML = "Show Less";
      } else {
        videos[i].style.display = "none";
        btnText.innerHTML = "Show More";
      }
    }
  }

  AOS.init(
    {
        // offset: 300,
        duration: 300,
        once: false,
        easing: 'ease-in-out',
    }
);

