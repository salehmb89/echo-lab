document.getElementById('hamburger-menu').addEventListener('click', toggleSidebar);
document.querySelector('.overlay').addEventListener('click', toggleSidebar);

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar-menu');
  const overlay = document.querySelector('.overlay');
  
  const isOpen = sidebar.style.left === "0px";

  sidebar.style.left = isOpen ? "-250px" : "0";
  overlay.style.display = isOpen ? 'none' : 'block';
}
