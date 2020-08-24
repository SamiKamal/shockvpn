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


///Initiation Variables
var icon_1 = document.getElementById("b1");
var topLine_1 = document.getElementById("top-line-1");
var middleLine_1 = document.getElementById("middle-line-1");
var bottomLine_1 = document.getElementById("bottom-line-1");
var state_1 = "menu";  // can be "menu" or "arrow"
var topLineY_1;
var middleLineY_1;
var bottomLineY_1;
var topLeftY_1;
var topRightY_1;
var bottomLeftY_1;
var bottomRightY_1;
var topLeftX_1;
var topRightX_1;
var bottomLeftX_1;
var bottomRightX_1;

///Animation Variables
var segmentDuration_1 = 15;
var menuDisappearDurationInFrames_1 = segmentDuration_1;
var arrowAppearDurationInFrames_1 = segmentDuration_1;
var arrowDisappearDurationInFrames_1 = segmentDuration_1;
var menuAppearDurationInFrames_1 = segmentDuration_1;
var menuDisappearComplete_1 = false;
var arrowAppearComplete_1 = false;
var arrowDisappearComplete_1 = false;
var menuAppearComplete_1 = false;
var currentFrame_1 = 1;

///Menu Disappear 
function menuDisappearAnimation_1() {
    currentFrame_1++;
    if ( currentFrame_1 <= menuDisappearDurationInFrames_1 ) {
        window.requestAnimationFrame( ()=> { 
            //top line
            topLineY_1 = AJS.easeInBack( 37, 50, menuDisappearDurationInFrames_1, currentFrame_1 );
            topLine_1.setAttribute( "d", "M30,"+topLineY_1+" L70,"+topLineY_1 );
            //bottom line
            bottomLineY_1 = AJS.easeInBack( 63, 50, menuDisappearDurationInFrames_1, currentFrame_1 );
            bottomLine_1.setAttribute( "d", "M30,"+bottomLineY_1+" L70,"+bottomLineY_1 );
            //recursion
            menuDisappearAnimation_1();
        });
    } else {
        middleLine_1.style.opacity = "0";
        currentFrame_1 = 1;
        menuDisappearComplete_1 = true;
        openMenuAnimation_1();
    }
}

///Cross Appear
function arrowAppearAnimation_1() {
    currentFrame_1++;
    if ( currentFrame_1 <= arrowAppearDurationInFrames_1 ) {
        window.requestAnimationFrame( ()=> { 
            //top line
            topLeftX_1 = AJS.easeOutBack( 30, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
            topLeftY_1 = AJS.easeOutBack( 50, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
            bottomRightX_1 = AJS.easeOutBack( 70, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
            bottomRightY_1 = AJS.easeOutBack( 50, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
            topLine_1.setAttribute( "d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1 );
            //bottom line
            bottomLeftX_1 = AJS.easeOutBack( 30, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
            bottomLeftY_1 = AJS.easeOutBack( 50, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
            topRightX_1 = AJS.easeOutBack( 70, 65, arrowAppearDurationInFrames_1, currentFrame_1 );
            topRightY_1 = AJS.easeOutBack( 50, 35, arrowAppearDurationInFrames_1, currentFrame_1 );
            bottomLine_1.setAttribute( "d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1 );
            //recursion
            arrowAppearAnimation_1();
        });
    } else {
        currentFrame_1 = 1;
        arrowAppearComplete_1 = true;
        openMenuAnimation_1();
    }
}

///Combined Open Menu Animation
function openMenuAnimation_1() {
    if ( !menuDisappearComplete_1 ) { 
        menuDisappearAnimation_1();
    } else if ( !arrowAppearComplete_1) {
        arrowAppearAnimation_1();
    }
}

///Cross Disappear
function arrowDisappearAnimation_1() {
    currentFrame_1++;
    if ( currentFrame_1 <= arrowDisappearDurationInFrames_1 ) {
        window.requestAnimationFrame( ()=> {
            //top line
            topLeftX_1 = AJS.easeInBack( 35, 30, arrowDisappearDurationInFrames_1, currentFrame_1 );
            topLeftY_1 = AJS.easeInBack( 35, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
            bottomRightX_1 = AJS.easeInBack( 65, 70, arrowDisappearDurationInFrames_1, currentFrame_1 );
            bottomRightY_1 = AJS.easeInBack( 65, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
            topLine_1.setAttribute( "d", "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1 );
            //bottom line
            bottomLeftX_1 = AJS.easeInBack( 35, 30, arrowDisappearDurationInFrames_1, currentFrame_1 );
            bottomLeftY_1 = AJS.easeInBack( 65, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
            topRightX_1 = AJS.easeInBack( 65, 70, arrowDisappearDurationInFrames_1, currentFrame_1 );
            topRightY_1 = AJS.easeInBack( 35, 50, arrowDisappearDurationInFrames_1, currentFrame_1 );
            bottomLine_1.setAttribute( "d", "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1 );
            //recursion
            arrowDisappearAnimation_1();
        });
    } else {
        middleLine_1.style.opacity = "1";
        currentFrame_1 = 1;
        arrowDisappearComplete_1 = true;
        closeMenuAnimation_1();
    }
}

///Menu Appear
function menuAppearAnimation_1() {
    currentFrame_1++;
    if ( currentFrame_1 <= menuAppearDurationInFrames_1 ) {
        window.requestAnimationFrame( ()=> {
            //top line
            topLineY_1 = AJS.easeOutBack( 50, 37, menuDisappearDurationInFrames_1, currentFrame_1 );
            topLine_1.setAttribute( "d", "M30,"+topLineY_1+" L70,"+topLineY_1 );
            //bottom line
            bottomLineY_1 = AJS.easeOutBack( 50, 63, menuDisappearDurationInFrames_1, currentFrame_1 );
            bottomLine_1.setAttribute( "d", "M30,"+bottomLineY_1+" L70,"+bottomLineY_1 );
            //recursion
            menuAppearAnimation_1();
        });
    } else {
        currentFrame_1 = 1;
        menuAppearComplete_1 = true;
        closeMenuAnimation_1();
    }
}

///Close Menu Animation
function closeMenuAnimation_1() {
    if ( !arrowDisappearComplete_1 ) {
        arrowDisappearAnimation_1();
    } else if ( !menuAppearComplete_1 ) {
        menuAppearAnimation_1();
    }
}

///Events
icon_1.addEventListener( "click", ()=> { 
  if ( state_1 === "menu" ) {
    moveNavRepsoniveIn()
    openMenuAnimation_1();
    state_1 = "arrow";
    arrowDisappearComplete_1 = false;
        menuAppearComplete_1 = false;
  } else if ( state_1 === "arrow" ) {
    moveNavRepsoniveOut()
    closeMenuAnimation_1();
    state_1 = "menu";
    menuDisappearComplete_1 = false;
        arrowAppearComplete_1 = false;
  }
});

/////////////////////////////////////////////////////////////////
//////////////////////////////// GET BROWSER WIDTH //////////////
/////////////////////////////////////////////////////////////////
function getWidth() {
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.documentElement.clientWidth
    ) + 17;
  }
      
  let browserWidth = getWidth()
  setInterval(() => {
      browserWidth = getWidth()
  }, 10000);


/////////////////////////////////////////////////////////////////
//////////////////////////////// SMOOTH SCROLLING ///////////////
/////////////////////////////////////////////////////////////////
  var smoothScroll = new scrollToSmooth('a', {
    targetAttribute: 'href',
    duration: 400,
    durationRelative: false,
    durationMin: 400,
    durationMax: false,
    easing: 'easeOutQuad',
    onScrollStart: (data) => { console.log(data); },
    onScrollUpdate: (data) => { console.log(data); },
    onScrollEnd: (data) => { console.log(data); },
    fixedHeader: null
})
smoothScroll.init();

/////////////////////////////////////////////////////////////////
//////////////////////////////// NAV RESPONSIVE /////////////////
/////////////////////////////////////////////////////////////////
let blackScreen = document.querySelector('.black-screen')
let navList = document.querySelector('.nav--list');
if (browserWidth <= 1000){

    function moveNavRepsoniveIn() {
    navList.style.transform = 'translateX(30%)';
    blackScreen.classList.add('display-blackscreen')
    // blackScreen.style.backgroundColor = 'rgba(0, 0, 0, .65)';
    // blackScreen.style.zIndex = '1'
    document.querySelector('.wrapper').style.overflowY = 'hidden'
    document.querySelector('body').style.overflowY = 'hidden'
    }

    function moveNavRepsoniveOut() {
    navList.style.transform = 'translateX(140%)'
    blackScreen.classList.remove('display-blackscreen')
    // blackScreen.style.backgroundColor = 'transparent';
    // blackScreen.style.zIndex = '-1'
    document.querySelector('.wrapper').style.overflowY = 'initial'
    document.querySelector('body').style.overflowY = 'initial'
    }

    /////////////////////////////////////////////////////////////////
    //////////////////////////////// NAV CLICK //////////////////////
    /////////////////////////////////////////////////////////////////
    let navLinks = Array.from(document.querySelectorAll('.nav--link'));
    navLinks.forEach(el => {
        el.addEventListener('click', hideNavWhenClick) 
    });
    
    function hideNavWhenClick() {
        closeMenuAnimation_1();
        state_1 = "menu";
        menuDisappearComplete_1 = false;
        arrowAppearComplete_1 = false;
        moveNavRepsoniveOut()
        // div.classList.add('display')
    
    }

}

    /////////////////////////////////////////////////////////////////
    //////////////////////////////// SHOW LANGUGE BOX ///////////////
    /////////////////////////////////////////////////////////////////
    var div = document.querySelector('.language-box');
function showLanguageBoxWhenClick(e) {
    div.classList.toggle('display')
    if (!blackScreen.classList.contains('display-blackscreen')){
        blackScreen.classList.toggle('display-blackscreen')
    }

    if (browserWidth <= 1000){
        closeMenuAnimation_1();
        state_1 = "menu";
        menuDisappearComplete_1 = false;
        arrowAppearComplete_1 = false;
        navList.style.transform = 'translateX(140%)'
        document.querySelector('.wrapper').style.overflowY = 'initial'
        document.querySelector('body').style.overflowY = 'initial'
    
    }

    
}



document.querySelector('.language-li-click').addEventListener('click', showLanguageBoxWhenClick)

    //////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////// REMOVE WHEN CLICK ON BLACK SCREEN ///////////////
    //////////////////////////////////////////////////////////////////////////////////
    function removeWhenClickOnBlackscreen(e) {
        if (e.target === blackScreen){
            div.classList.add('display')
            blackScreen.classList.remove('display-blackscreen')
            hideNavWhenClick()
        }
    }
document.querySelector('body').addEventListener('click', removeWhenClickOnBlackscreen)
