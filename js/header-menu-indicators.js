const headerMenuList = document.querySelector('.header-nav-list');
headerMenuList.addEventListener('click', toggleMenuIndicator);
function toggleMenuIndicator(e) {
  const activeMenu = headerMenuList.querySelector('.active');
  if (e.target === e.currentTarget) {
    return;
  }
if (e.target === activeMenu) {
    return;
  }
e.target.classList.add('active');
  activeMenu.classList.remove('active');
}