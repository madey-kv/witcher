const tabs = option => {
  const {
      selectorTabsButtons,
      activeClassButton,
      selectorTabsElement,
      activeClassTab,
      callback = () => {}
  } = option;

  const tabsButtons = document.querySelectorAll(selectorTabsButtons);
  const tabsElements = document.querySelectorAll(selectorTabsElement);

  tabsButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
          for (let i = 0; i < tabsButtons.length; i++) {
              if (tabsButtons[i] === button) {
                  tabsButtons[i].classList.add(activeClassButton);
                  tabsElements[i].classList.add(activeClassTab);
                  callback(i);
              } else {
                  tabsButtons[i].classList.remove(activeClassButton);
                  tabsElements[i].classList.remove(activeClassTab);
              }
          }
      })
  })
};

export default tabs;