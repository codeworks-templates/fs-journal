// JAVASCRIPT HOOKS

function setActiveNavLink() {
  const navElem = document.getElementById('nav-' + window.location.href.substr(window.location.href.indexOf('fs-journal/') + 11).split('/')[0])
  if (!navElem) { return }
  navElem.classList.add('active-nav')
}

function init() {
  setActiveNavLink()
  // @ts-ignore
  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json',
    searchResultTemplate: '<li><a href="{{ site.url }}{url}">{title}</a></li>'
  })
}



init()