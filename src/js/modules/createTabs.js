const createTabs = (tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) => {

    // Tabs

    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);


    function hideTabContent() {
        tabsContent.forEach(item => item.classList.remove('active'));
        tabs.forEach(item => item.parentNode.classList.remove(activeClass));
    }

    function showTabContent(i= 0) {
        tabsContent[i].classList.add('active')
        tabs[i].parentNode.classList.add(activeClass);
        activateTab(i);
    }


    // Запускает появление каждого item внутри активного tabContent через интервал
    function activateTab(i) {
        let id = document.querySelector(`#tabLink${i + 1}`).getAttribute("data-tab"),
            currentTabItems = document.querySelector(id).querySelectorAll(`.services-item`);

        clearInterval(staggerInterval);
        removeAllActiveTabs(currentTabItems);

        item = 0;
        staggerInterval = setInterval(function () {
            currentTabItems[item].classList.add('active');
            item++;
            if (item >= currentTabItems.length) clearInterval(staggerInterval);
        }, 200);
    }


    let staggerInterval,
        item = 0;

    const removeAllActiveTabs = function removeAllActivetabs(currentTabItems) {
        currentTabItems.forEach(item => item.classList.remove('active'));
    };


    tabsParent.addEventListener('click', (event) => {
        if (event.target && event.target.classList.contains(tabsSelector.slice(1))) {
            event.preventDefault();
            if (!event.target.parentNode.classList.contains(activeClass)) {
                tabs.forEach((item, i) => {
                    if (event.target === item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                })
            }
        }
    });

    hideTabContent();
    showTabContent();
}

export default createTabs;