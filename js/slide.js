let index = 0;

function toggleSidebarLinks() {
  const sectionSlide = document.querySelectorAll(".section-slide");
  const sidebarLinks = document.querySelectorAll(".sidebar ul li");

  sidebarLinks.forEach((link, index, links) => {
    
    link.addEventListener("click", () => {
      index = 0;
      sectionSlide.forEach(section => section.classList.remove("active"));
      links.forEach(link => link.classList.remove("active"));
      link.classList.add("active");
      const linkId = link.getAttribute("id").replace("to-", "");
      const el = document.getElementById(linkId);
      el.classList.add("active");
      
    })
  });
}

toggleSidebarLinks();

function slideGallery() {

  const arrayGabinete = ["#gabinete img", "#gabinete .right-btn", "#gabinete .left-btn"];
  const arrayBombeiros = ["#bombeiros img", "#bombeiros .right-btn", "#bombeiros .left-btn"];
  const arrayMaquete = ["#maquete img", "#maquete .right-btn", "#maquete .left-btn"];
  const arrayItaiacoca = ["#itaiacoca img", "#itaiacoca .right-btn", "#itaiacoca .left-btn"];
  const arrayImbituva = ["#imbituva img", "#imbituva .right-btn", "#imbituva .left-btn"];
  const arrayCurso = ["#curso img", "#curso .right-btn", "#curso .left-btn"];
  const arrayMapas = ["#mapas img", "#mapas .right-btn", "#mapas .left-btn"];
  


  function startSlide(imageList) {  
    imageList.forEach( imagem => imagem.classList.remove("active"));
    if (index >= (imageList.length -1)) {
      index = -1;
    }
    index++;
    imageList[index].classList.add("active");
    
    
  }
  
  function returnSlide(imageList) {
    imageList.forEach( imagem => imagem.classList.remove("active"));
    if (index <= 0) {
      index = imageList.length;
    }
    index--;
    imageList[index].classList.add("active");
    
  }

  function slide(imagensAtt, rightButtonAtt, leftButtonAtt) {
    const imagens = document.querySelectorAll(imagensAtt);
    const rightButton = document.querySelector(rightButtonAtt);
    const leftBtn = document.querySelector(leftButtonAtt);
  
    rightButton.addEventListener("click", () => {
      startSlide(imagens)
    });
    leftBtn.addEventListener("click", () => {
      returnSlide(imagens)
    } );
  }
  
  slide(arrayGabinete[0], arrayGabinete[1], arrayGabinete[2]);
  slide(arrayBombeiros[0], arrayBombeiros[1], arrayBombeiros[2]);
  slide(arrayMaquete[0], arrayMaquete[1], arrayMaquete[2]);
  slide(arrayItaiacoca[0], arrayItaiacoca[1], arrayItaiacoca[2]);
  slide(arrayImbituva[0], arrayImbituva[1], arrayImbituva[2]);
  slide(arrayCurso[0], arrayCurso[1], arrayCurso[2]);
  slide(arrayMapas[0], arrayMapas[1], arrayMapas[2]);

}

slideGallery();

const iconGallery = document.querySelector(".menu-icon-gallery");
const sidebar = document.querySelector(".sidebar");
iconGallery.addEventListener("click", () => {
  
  sidebar.classList.toggle("active");
})

const ano = document.getElementById("ano");
ano.innerText = new Date().getFullYear() + " ";