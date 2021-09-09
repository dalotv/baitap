// Khai bao
var mybutton = document.getElementById("myBtn");
console.log(mybutton)
window.scrollTo({left: 0, behavior: 'smooth'})  
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tinTuc = $('.tt-main')
tinTuc.addEventListener('scroll', myFunction)
console.log(tinTuc)
const menuok = $('.menu-container')


function myFunction() {
  if (tinTuc.scrollTop > 0) {
    menuok.style.backgroundColor = '#222d4f'
    mybutton.style.display = 'block'
    setTimeout(() => {
    mybutton.style.opacity = '1'
    },200)
  } else {
    menuok.style.backgroundColor = 'transparent'
    mybutton.style.opacity = '0'
    setTimeout(() => {
      mybutton.style.display = 'none'
    },200)
  }
}

function topFunction() {
  tinTuc.scrollTo({top: 0, behavior: 'smooth'})
}

// Hieu ung chuyen Menu
const tabs = $$(".menu-text")
const mline = $(".menu-line")
const mline2 = $(".menu-line2")
const tabActive = $(".menu-text.ok")
const hsecsions = $$(".scroll-page")
const htabs = $$(".menu-doc-list-item")
console.log(htabs)

mline.style.left = mline2.style.left = "calc(" + tabActive.offsetLeft + "px" + " + 20px)"
mline.style.width = tabActive.offsetWidth  / "1.5"  + "px"
mline2.style.width = tabActive.offsetWidth / "2.3" + "px"

window.onresize = function () {
  const tabActive = $('.menu-text.ok')
  mline.style.left = mline2.style.left = "calc(" + tabActive.offsetLeft + "px" + " + 20px)"
  mline.style.width = tabActive.offsetWidth  / "1.5"  + "px"
  mline2.style.width = tabActive.offsetWidth / "2.3" + "px"
  window.scrollTo({left: parseInt($(".scroll-page.ok").offsetLeft)})  
}

htabs.forEach((htab, index) => {
  htab.onclick= function (e) {
    e.preventDefault()
    tabs[index].click()
    $('.menu-doc-list-item.ok').classList.remove("ok")
    this.classList.add("ok")
  }
})

tabs.forEach((tab, index) => {
  const hsecsion = hsecsions[index]

  tab.onclick = function (e) {
    if (index == 0) {
      nuts[0].click()
    }
    if (index == 1) {
      setTimeout(() => {
        $('.sk-t1 h1').style.display = 'block'
      },100)
    }
    else {
      setTimeout(() => {
        $('.sk-t1 h1').style.display = 'none'
      },200)
    }
    if (index != 4) {
      tinTuc.scrollTo({top: 0, behavior: 'smooth'})
    }
    else {

    }
    if (index == 2) {
      setTimeout(() => {
        $('.vd-t1 h1').style.display = 'block'
      },200)
    }
    else {
      setTimeout(() => {
        $('.vd-t1 h1').style.display = 'none'
      },200)
    }
    e.preventDefault()
    $('.menu-doc-list-item.ok').classList.remove("ok")
    htabs[index].classList.add("ok")

    $(".scroll-page.ok").classList.remove("ok")
    hsecsion.classList.add("ok")

    var i = parseInt(hsecsion.offsetLeft)
    window.scrollTo({left: i, behavior: 'smooth'})  

    $('.menu-text.ok').classList.remove("ok")
    this.classList.add("ok")

    mline.style.left = mline2.style.left = 
      "calc(" + this.offsetLeft + "px" + " + 20px)"
    mline.style.width = this.offsetWidth  / "1.5"  + "px"
    mline2.style.width = this.offsetWidth / "2.3" + "px"
  }
  tab.onmouseover = function () {
    mline.style.left = "calc(" + this.offsetLeft + "px" + " + 20px)"
    mline.style.width = this.offsetWidth  / "1.5"  + "px"

  }
  tab.onmouseout = function () {
    mline.style.left = "calc(" + $('.menu-text.ok').offsetLeft + "px" + " + 20px)"
    mline.style.width = $('.menu-text.ok').offsetWidth  / "1.5"  + "px"
  }
})

// Hieu ung chuyen Sliders

const nuts = $$(".chuyen")
const panes = $$(".slider-text")
const sldrbgs = $$(".slider-bg")


nuts.forEach((nut, index) => {
  const pane = panes[index]
  const sldrbg = sldrbgs[index]


  nut.onclick = function (e) {
    e.preventDefault()
    $(".chuyen.active").classList.remove("active")
    this.classList.add("active")
    
    $(".slider-text.active").classList.remove("active")
    setTimeout (() => {
      pane.classList.add("active")
    },300)

    $(".slider-bg.active").classList.remove("active")
    sldrbg.classList.add("active")

  }
})

// Su kien

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = $$(".sk-Slides");
  var infos = $$(".sk-t2");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
      infos[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  infos[slideIndex-1].style.display = "block";  
}

// Videos

 // 2. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 3. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
   player = new YT.Player('player', {
     videoId: 'RxCEMy022Do',
     playerVars: {
       'controls' : 0,
       'rel' : 0,
       'autoplay' : 0,
       'playsinline': 1,
       'showinfo' : 0
     },
   });
 }

const showvd = $(".show-vd")
const textvd = $(".vd-t1")

showvd.onclick = function showVideos(e) {
  e.preventDefault()
  showvd.style.opacity = "0"
  textvd.style.opacity = "0"
  setTimeout(() => {
    showvd.style.display = "none"
    textvd.style.display = "none"
    player.playVideo()
  }, 700)

}

//Tieu su

const tsbg = $('.ts-bg')

document.addEventListener('mousemove', function(e) {
  var x = e.clientX;
  var y = e.clientY;
  tsbg.style.left = -x / 20 + "px"
  tsbg.style.top = -y / 20 + "px"
})

const thanhViens = $$('.ts-tv')
const tvInfors = $$('.ts-tv-info')
const crossXY = $$('.cross')
const tsOver = $('.ts-overlay')


thanhViens.forEach((thanhVien, index) => {
  var i = index

  thanhVien.addEventListener('click', showTvIn)
  function showTvIn() {
    if (index === 1) {
      i = 2
      thanhVien.style.transform = "translateX(-30vw)"
    }
    if (index === 2) {
      i = 4
      thanhVien.style.transform = "translateX(-60vw)"
    }
    tvInfors[index].classList.add('active')
    thanhVien.classList.add('tv-showIn')
    crossXY[i].classList.remove('cross-return')
    crossXY[i+1].classList.remove('cross-return')
    crossXY[i].classList.add('cross-move')
    crossXY[i+1].classList.add('cross-move')
    setTimeout(function() {
      thanhVien.removeEventListener('click', showTvIn)
      crossXY[i].addEventListener('click', showTvOut)
      crossXY[i+1].addEventListener('click', showTvOut)
      tsOver.addEventListener('click', showTvOut)
    },500)
  }

  function showTvOut() {
    if (index > 0) {
        thanhVien.style.transform = "translateX(0)"
    }
    thanhVien.classList.remove('tv-showIn')
    thanhVien.classList.add('tv-showOut')
    crossXY[i].classList.remove('cross-move')
    crossXY[i+1].classList.remove('cross-move')
    crossXY[i].classList.add('cross-return')
    crossXY[i+1].classList.add('cross-return')
    tvInfors[index].classList.remove('active')
    setTimeout(function() {
      thanhVien.classList.remove('tv-showOut')
      console.log(thanhVien.className)
      thanhVien.addEventListener('click', showTvIn)
      crossXY[i].removeEventListener('click', showTvOut)
      crossXY[i+1].removeEventListener('click', showTvOut)
      tsOver.removeEventListener('click', showTvOut)
    },500)
  }




})









