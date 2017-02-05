    const nav = document.querySelector('.site-nav ul');
    const markup = 
    `${navItems.map( navItem => `<li><a href="${navItem.link}">${navItem.label}</a></li>`).join('')}`;
    nav.innerHTML = markup;
    nav.firstChild.classList.add('active');

    // activate/deactivate links
    const linkListItems = nav.querySelectorAll('li');
    linkListItems.forEach(function(linkListItem) {
      linkListItem.querySelector('a').addEventListener('click', function() {
        linkListItems.forEach(item => item.classList.remove('active'));
        linkListItem.classList.add('active');
      });
    });

    // sticky menu
    let topOfNav = nav.offsetTop;
    window.addEventListener('scroll', fixNav);

    function fixNav() {
      if(window.scrollY >= topOfNav) {
        document.body.classList.add('fixed-nav');
      } else {
        document.body.classList.remove('fixed-nav');
      }
    }