import _ from 'lodash';
import './style.css';

let content = document.querySelector('#content');

let websiteMain = (()=>{
    let header =()=>{
        let createElement = document.createElement('div');
        createElement.classList.add('header');
    
        return createElement;
    }
    
    let headerContent=() =>{
        let headerSection = document.querySelector('.header');
        let createTitle = document.createElement('h1');
        let list = document.createElement('ul');
        
        
        createTitle.innerText = 'La Taquería';
        headerSection.appendChild(createTitle);
    
        list.classList.add('links');
        headerSection.appendChild(list);
        let listData = ['Home','Menu','Reviews','Contact Us'];
        listData.forEach((item)=>{
            let createLinks = document.createElement('li');
            createLinks.innerText = item;
            createLinks.className = item;
            list.appendChild(createLinks);
        })
        
    }
    
    
    let mainSection =()=>{
        let createElement = document.createElement('div');
        createElement.classList.add('main-section');
    
        return createElement;
    }
    
    let mainSectionSections=()=>{
        let mainSection = document.querySelector('.main-section');
        let createLeft = document.createElement('div');
        let createRight = document.createElement('div');
    
        createLeft.classList.add("left-side");
        mainSection.appendChild(createLeft);
        createRight.classList.add("right-side");
        mainSection.appendChild(createRight);
    
    }
    
    let mainContent=()=>{//add more images
        let leftSection = document.querySelector('.left-side');
        let rightSection = document.querySelector('.right-side');
        let createTitle = document.createElement('h1');
        let smallP = document.createElement('p1');
        let largeP = document.createElement('p2');
    
        createTitle.innerText = "Bienvenida a la Taquería";
        leftSection.appendChild(createTitle);
    
        smallP.innerText = "Authentic Flavors | Bold Vibes";
        leftSection.appendChild(smallP);
    
        largeP.innerText = "La Taquería brings your abuela's cooking to the table at your tia's home. If you are looking for a fun place to dance, eat and drink until the sun rises, La Taqueria is what you are looking for. We have the traditional flavors mixed with a moderan flare. Everything we serve is sourced from hispanic owned companies and farmers to support the community. Ven a festejar con nosotros en la Taqueria!";
        leftSection.appendChild(largeP);
    
        let img = document.createElement("img");
        img.src = "../src/mexican-resturant.jpg";
        rightSection.appendChild(img);
        
    }
    let footer=()=>{
        let createElement = document.createElement('div');
        createElement.classList.add('footer');
    
        return createElement;
    }
    
   let footerContent=()=>{
        let footerSection = document.querySelector('.footer');
        let createTitle = document.createElement('p');
        let list2 = document.createElement('ul');
    
        createTitle.innerText = 'La Taquería';
        footerSection.appendChild(createTitle);
    
        list2.classList.add('links');
        footerSection.appendChild(list2);
        let listData = ['Home','Menu','Reviews','Contact Us '];
        listData.forEach((item)=>{
            let createLinks = document.createElement('li');
            createLinks.innerText = item;
            createLinks.className = item;
            list2.appendChild(createLinks);
        })
    
    }

    let homePage = () => {
        headerContent();
        footerContent();
        mainSectionSections();
        mainContent();
    }

    content.appendChild(header());
    content.appendChild(mainSection());
    content.appendChild(footer());

    return {header,headerContent,mainSection,mainSectionSections,mainContent,footer,footerContent,homePage}

})();

websiteMain.homePage();

function removeAllChildNodes (parent) {
    while (parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


let homeObject = (() => {
    
    const homePageBtn = () => {
        let mainSection = document.querySelector('.main-section');
        removeAllChildNodes(mainSection);
        websiteMain.mainSectionSections();
        websiteMain.mainContent();
    }

    let homeBtn = document.querySelectorAll('.Home');
    for (let i =0;i<homeBtn.length;i++){
        homeBtn[i].addEventListener('click', homePageBtn);
    }
    

})();

let menuObject = (()=>{
    let mainSection = document.querySelector('.main-section');
    
    const menuSwitch = ()=> {
        let mainSection = document.querySelector('.main-section');
        removeAllChildNodes(mainSection);
    }

    const addMenuContent = () => {

    }


    let menuBtn = document.querySelectorAll('.Menu');
    for(let i=0;i<menuBtn.length;i++){
        menuBtn[i].addEventListener('click', menuSwitch);
    }
    

return {menuSwitch}
   
})();

let reviewsObject = (() => {
    const reviewSwitch = ()=> {
        let mainSection = document.querySelector('.main-section');
        removeAllChildNodes(mainSection);
    }
    const addReviewContent = () => {
        //comeback
    }

    let reviewsBtn = document.querySelectorAll('.Reviews');
    for(let i=0;i<reviewsBtn.length;i++){
        reviewsBtn[i].addEventListener('click', reviewSwitch);
    }
    
    
    return {reviewSwitch}
})();

let contactObject = (() => {
    let mainSection = document.querySelector('.main-section');
    const contactSwitch = ()=> {
        removeAllChildNodes(mainSection);
        addContactContent();
    }
    const addContactContent = () => {//add images to content
        let createElement = document.createElement('div');
        createElement.classList.add("blurb");
        mainSection.appendChild(createElement);

        let heading = document.createElement('h1')
        heading.innerText="Ponerse en Contacto!"
        createElement.appendChild(heading);

        let para = document.createElement('p')
        para.innerText = "La Taquería is dedicated to giving our customers the perfect experience! Feel free to contact us with any questions or feedback you may have. Gracias!"
        para.classList.add('para');
        createElement.appendChild(para);


        let info = document.createElement('p')
        info.classList.add("contact-info");
        info.innerText="Contact Information \n Reservations: (888)888-8888 \n Job Inquary: lataqueria@taqueria.com \n Talk to Manager: (999)999-9999"
        createElement.appendChild(info);
    }

    let contactBtn = document.querySelectorAll('.Contact');
    for(let i=0;i<contactBtn.length;i++){
        contactBtn[i].addEventListener('click', contactSwitch);
    }
    
    
    return {contactSwitch,addContactContent}
})();
