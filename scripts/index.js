import burgerMenu from "./burger.js";
import tabs from "./tabs.js";
import './videotube.min.js';
// import renderTabs from './renderTabs.js'

burgerMenu({
    selectorMenu: '.navigation__list',
    openMenuSelector: 'navigation__list_active'
})

tabs({
    selectorTabsButtons: '.tabs__button',
    activeClassButton: 'tabs__button_active',
    selectorTabsElement: '.tabs__item',
    activeClassTab: 'tabs__item_active',
    // callback: renderTabs,
});

// renderTabs();