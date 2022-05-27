// <!-- ================================== 
// responsive mediaqueries navbar
// =================================== -->
const mobile_nav = document.querySelector('.mobile_navbar_btn');
const headerElement = document.querySelector('.header');
mobile_nav.addEventListener('click', () => {
    headerElement.classList.toggle('active');
});

// <!-- ================================== 
// Latest work section tabbed component
// =================================== -->
const work_btns = document.querySelector('.work_btns');
const work_btn = document.querySelectorAll('.work_btn');
const work_img = document.querySelectorAll('.img_overlay');
work_btns.addEventListener('click', (data) => {
    const work_btn_clicked = data.target;
    console.log(work_btn_clicked);
    if (!work_btn_clicked.classList.contains('work_btn')) return;
    work_btn.forEach((currElement) => {
        currElement.classList.remove('work_btn_active')
    });
    work_btn_clicked.classList.add('work_btn_active');

    //to find the number of the data
    const btn_num = work_btn_clicked.dataset.btnNum;
    console.log(btn_num);
    const img_active = document.querySelectorAll(`.work_btn--${btn_num}`);
    work_img.forEach((currElement) => currElement.classList.add('work_img_not_active'));
    img_active.forEach((currElement) => currElement.classList.remove('work_img_not_active'));
});


//scroll to top button full using js and css

// const hero_section = document.querySelector('.section_hero');
// const footerElemnt = document.querySelector('.section_footer');

// const scrollElement = document.createElement('div');     // -----create div
// scrollElement.classList.add('scrollTop'); // ------- give class name of the div
// scrollElement.innerHTML = `<ion-icon class="scroll" name="arrow-up-outline"></ion-icon>`;  // -----add icon

// footerElemnt.after(scrollElement);
// const scroll_Top_Funtion = () => {
//     hero_section.scrollIntoView({ behavior: 'smooth' })
// }
// scrollElement.addEventListener('click', scroll_Top_Funtion)

//------------------------------------------

//-----scroll to top button full using js and html and css

const hero_section = document.querySelector('.section_hero');
const footerElemnt = document.querySelector('.section_footer');
const scrollElement = document.querySelector('.scrollTop');
footerElemnt.after(scrollElement);
const scroll_Top_Funtion = () => {
    hero_section.scrollIntoView({ behavior: 'smooth' })
}
scrollElement.addEventListener('click', scroll_Top_Funtion);


// <!-- ================================== 
// create a sticky nav bar
// =================================== -->
const observer = new IntersectionObserver((entries) => {
    const ent = entries[0];
    console.log(ent);
    !ent.isIntersecting ? document.body.classList.add('sticky') : document.body.classList.remove('sticky');
}, { root: null, threshold: 0 });
observer.observe(hero_section);