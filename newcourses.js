
const coursesPreviewImg = document.querySelector(".courses-right-bar .courses-preview-img");

const coursesPreviewIcon = document.querySelector(".courses-right-bar .courses-preview-img i");

const coursesPreviewText = document.querySelector(".courses-right-bar .courses-preview-img .prev-text");

const coursesStickyBar = document.querySelector(".courses-sticky-bar");

window.addEventListener("scroll", (e) => {
    if (scrollY > 500) {
        coursesPreviewText.style.opacity = "0";
        coursesPreviewIcon.style.opacity = "0";
        coursesPreviewImg.style.height = "0";
        coursesStickyBar.style.display = "block";
    } else {
        coursesPreviewText.style.opacity = "1";
        coursesPreviewIcon.style.opacity = "1";
        coursesPreviewImg.style.height = "190px";
        coursesStickyBar.style.display = "none";
    }
});


window.onload = setTimeout(() => {
    document.querySelector(".preloader").style.display = "none";
}, 4000);

window.onload = setTimeout(() => {
    document.querySelector('.ph-item').style.display = "none";
}, 7000);

const coursesSingleDrawer = document.querySelectorAll(".courses-drawer-inner .single-courses-drawer");

for (let i = 0; i < coursesSingleDrawer.length; i++) {
    coursesSingleDrawer[i].addEventListener("click", () => {
        coursesSingleDrawer[i].classList.toggle("expended");
    });
}




// see more functionality
const coursesSeeMoreBtn = document.querySelectorAll('.course-see-more-button');
const classesToggling = (button)=>{
    button.classList.toggle("course-see-more-button");
    button.classList.toggle("course-see-less-button");
    button.parentNode.classList.toggle('courses-see-more-button-section')
    button.parentNode.classList.toggle('courses-see-less-button-section')
}


for(i = 0; i <coursesSeeMoreBtn.length; i++) {
    coursesSeeMoreBtn[i].addEventListener("click", (e) => {
        const btn  = e.target;
        if(btn.classList.contains("course-see-more-button")){
            classesToggling(btn)
            btn.innerText = 'See less';
        }else{
            classesToggling(btn)
            btn.innerText = 'See more';
        }

    })
}




document.querySelectorAll('.single-rating .fa-spell-check').forEach(singleEditIcon => {

    singleEditIcon.addEventListener('click', () => {


        const ratingHeader = singleEditIcon.nextElementSibling;
        const raterName = ratingHeader.querySelector('.rater-name');
        const ratingDes = ratingHeader.nextElementSibling;




        const raterNameText = raterName.textContent;
        const ratingDesText = ratingDes.textContent;




        document.querySelector('.edit-rating-admin-popup-wraper').classList.toggle('d-none')

        document.querySelector('.edit-rating-admin-popup-wraper .name-int').value = raterNameText;
        document.querySelector('.edit-rating-admin-popup-wraper .des-textarea').value  = ratingDesText;

    });
});









// cart button animations
const cartButton = document.querySelectorAll(".cart__button");
cartButton.forEach((button) => {
    button.addEventListener("click", function(){
        let button = this;
        button.classList.add("clicked");
        setTimeout(()=>this.querySelector(".added").innerText = 'Added',2500)
    });
});

document.querySelector('.topbar-buy-btn').addEventListener("click", function(){
    document.querySelector('.select-preference-wraper').classList.remove('d-none')
})
document.querySelector('.select-preference-wraper .fa-times').addEventListener("click", function(){
    document.querySelector('.select-preference-wraper').classList.add('d-none')
})