var heading = Array.from(document.querySelectorAll('.faq__header'))
var content = Array.from(document.querySelectorAll('.faq__text'))

function accordionFAQ(heading, content){
	const current = document.querySelector(".faq__box.active")
    if (current && current !== heading) {
      current.classList.remove('active')
      document.querySelector('.isOpen').style.maxHeight = 0;
      document.querySelector('.isOpen').classList.remove('isOpen')
      // current.nextElementSibling.style.maxHeight = 0;
    }
    heading.classList.toggle("active");
    content.classList.toggle('isOpen')
    const accordianItemBody = content;
  
    if (heading.classList.contains("active")) {
      accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
    } else {
      accordianItemBody.style.maxHeight = 0;
    }

}

document.querySelector('.faq__container').addEventListener('click', e => {
    // console.log(e.target.querySelector('.faq__text'))
    // document.querySelector('.faq__box').classList.toggle('active')

    let current = document.querySelector('.faq__box.active') || null;

    console.log(current === e.target.closest('.faq__box.active')) 
    if (current){
      current.classList.remove('active')
    } 
    
    e.target.closest('.faq__box').classList.toggle('active')
    if (current === e.target.closest('.faq__box.active')){
      e.target.closest('.faq__box').classList.toggle('active')
    }
    
})





// check if there is an active faq
// if there is delete the class and add it to the clicked one
// if there isn't add it to the clicked one
