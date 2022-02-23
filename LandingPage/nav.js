const navigation = document.querySelector('.navigation');
const navbth = document.querySelector('.btn-bars');


navbth.addEventListener('click', () => {
    const visibility = navigation.getAttribute('data-visible')

    if (visibility === "false") {
        navigation.setAttribute("data-visible", true);
        navbth.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        navigation.setAttribute('data-visible', false);
        navbth.setAttribute('aria-expanded', false);
    }
});

