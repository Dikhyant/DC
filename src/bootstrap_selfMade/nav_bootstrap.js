function nav( navElm = ".boot-link", tabElm = ".boot-tab", aProp = ["active"], contentProp = ["active","show"]){
    const navLink = document.querySelectorAll(navElm);
    navLink.forEach(elm=>{
        elm.addEventListener("click", ()=>{
            console.log("clicked");
            navLink.forEach(tag=>{
                aProp.forEach(p=>{ tag.classList.remove(p)} );
            })
            elm.classList.add(...aProp);
            // aProp.forEach(p=>{ elm.classList.add(p)} );
            const id = elm.getAttribute("href");

            const tabPanes = document.querySelectorAll(tabElm);
            tabPanes.forEach(tabPane=>{
                tabPane.classList.remove(...contentProp);
            });

            const tabPane = document.querySelector(id);
            tabPane.classList.add(...contentProp);
        })
    })
}

export default nav;