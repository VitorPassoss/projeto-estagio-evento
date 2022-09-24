


function fazPost(url, body) {
  alert("formulario enviado")
  let request = new XMLHttpRequest()
  request.open("POST", url, true)
  request.setRequestHeader("Content-type", "application/json")
  request.send(JSON.stringify(body))

  return request.responseText
 
}


function cadastraUsuario() {
  event.preventDefault()
  let url = "https://go.pccom.pro/crmpro/api/v1/LeadCapture/cab8054bf37e57256346636151f17b9a"
  let nome = document.getElementById("nome").value
  let email = document.getElementById("email").value
  let telefone = document.getElementById("telefone").value
  let desc = document.getElementById("desc").value

  body = {
    "firstName":nome ,
    "emailAddress": email,
    "phoneNumber": telefone
}

  fazPost(url, body)
}


function ViewModal(indice){
  
  let modal = document.querySelector('#modals')

  if(modal.classList[1] == 'invisivel'){
    modal.classList.remove('invisivel')
    modal.classList.add('visivel')
  }

  
  if(window.screen.availHeight < 500){
    document.querySelector('#plsd').placeholder='descrição';
  }
  

  switch (indice) {
    case 1:
      wppTextUm()
      
      break;
      case 2:
        wppTextDois()
      
      break;
      case 3:
        wppTextTres()
      
      break;
      case 4:
        wppTextQuatro()
      break;
      case 5:
        wppTextCinco()
      break;
      case 6:
        wppTextSeis()
      break;
      case 7:
        wppTextSete()
      break;
      case 8:
        wppTextOito()
      break;

  
    default:
      break;
  }

}

function exit(){
  event.preventDefault()
  let modal = document.querySelector('#modals')
  if(modal.classList[1] == 'visivel'){
    modal.classList.remove('visivel')
    modal.classList.add('invisivel')
  }
}

function wppTextUm(){
 let contats = document.querySelector('#contats')
 contats.innerHTML = `
 <h3 class="tituloDiv">Se interessou pela <span style="color:black;">Registro de Site?</span> escolha a melhor forma para entrar em contato conosco:</h3>
 <a href="https://wa.me/5592986428760?text=Ola,Tenho%20interesse%20em%20registrar%20um%20dominio" class="btn-wpp" >
                            <i class="bi bi-whatsapp"></i>  Whatsapp  
                           </a>
                          
                            <a class="btn-inst" href="https://www.instagram.com/pccompro/">
                              <i class="bi bi-instagram"></i>  Instagram 
                            </a>
                            <a class="btn-Email" href="#">
                              <i class="bi bi-envelope"></i>  email@pccompro 
                            </a>
                          <a class="btn-phone" href="#">
                            <i class="bi bi-telephone-fill"></i> +55 92 3995-0150 
                          </a>
 
 `

}

function wppTextDois(){
  let contats = document.querySelector('#contats')
  contats.innerHTML = `
  <h3 class="tituloDiv">Se interessou pela <span style="color:black;">Hospedagem de Site?</span> escolha a melhor forma para entrar em contato conosco:</h3>
  <a href="https://wa.me/5592986428760?text=Ola,Tenho%20interesse%20em%20Hospedar%20um%20Site" class="btn-wpp" >
                             <i class="bi bi-whatsapp"></i>  Whatsapp  
                            </a>
                           
                             <a class="btn-inst" href="https://www.instagram.com/pccompro/">
                               <i class="bi bi-instagram"></i>  Instagram 
                             </a>
                             <a class="btn-Email" href="#">
                               <i class="bi bi-envelope"></i>  email@pccompro 
                             </a>
                           <a class="btn-phone" href="#">
                             <i class="bi bi-telephone-fill"></i> +55 92 3995-0150 
                           </a>
  
  `
 
 }

 function wppTextTres(){
  let contats = document.querySelector('#contats')
  contats.innerHTML = `
  <h3 class="tituloDiv">Se interessou pelo <span style="color:black;">Desenvolvimento de Sites?</span> escolha a melhor forma para entrar em contato conosco:</h3>
  <a href="https://wa.me/5592986428760?text=Ola,Tenho%20interesse%20em%20Desenvolver%20um%20Site" class="btn-wpp" >
                             <i class="bi bi-whatsapp"></i>  Whatsapp  
                            </a>
                           
                             <a class="btn-inst" href="https://www.instagram.com/pccompro/">
                               <i class="bi bi-instagram"></i>  Instagram 
                             </a>
                             <a class="btn-Email" href="#">
                               <i class="bi bi-envelope"></i>  email@pccompro 
                             </a>
                           <a class="btn-phone" href="#">
                             <i class="bi bi-telephone-fill"></i> +55 92 3995-0150 
                           </a>
  
  `
 
 }

 function wppTextQuatro(){
  let contats = document.querySelector('#contats')
  contats.innerHTML = `
  <h3 class="tituloDiv">Se interessou pelo <span style="color:black;">E-mail profissional ou empresaria?</span> escolha a melhor forma para entrar em contato conosco:</h3>
  <a href="https://wa.me/5592986428760?text=Ola,Tenho%20interesse%20em%20ter%20um%20E-mail%20profissional" class="btn-wpp" >
                             <i class="bi bi-whatsapp"></i>  Whatsapp  
                            </a>
                           
                             <a class="btn-inst" href="https://www.instagram.com/pccompro/">
                               <i class="bi bi-instagram"></i>  Instagram 
                             </a>
                             <a class="btn-Email" href="#">
                               <i class="bi bi-envelope"></i>  email@pccompro 
                             </a>
                           <a class="btn-phone" href="#">
                             <i class="bi bi-telephone-fill"></i> +55 92 3995-0150 
                           </a>
  
  `
 
 }

 function wppTextCinco(){
  let contats = document.querySelector('#contats')
  contats.innerHTML = `
  <h3 class="tituloDiv">Se interessou pelo <span style="color:black;">Suporte Tecnico?</span> escolha a melhor forma para entrar em contato conosco:</h3>
  <a href="https://wa.me/5592986428760?text=Ola,Tenho%20interesse%20em%20ter%20suporte%20tecnico" class="btn-wpp" >
                             <i class="bi bi-whatsapp"></i>  Whatsapp  
                            </a>
                           
                             <a class="btn-inst" href="https://www.instagram.com/pccompro/">
                               <i class="bi bi-instagram"></i>  Instagram 
                             </a>
                             <a class="btn-Email" href="#">
                               <i class="bi bi-envelope"></i>  email@pccompro 
                             </a>
                           <a class="btn-phone" href="#">
                             <i class="bi bi-telephone-fill"></i> +55 92 3995-0150 
                           </a>
  
  `
 
 }

 function wppTextSeis(){
  let contats = document.querySelector('#contats')
  contats.innerHTML = `
  <h3 class="tituloDiv">Se interessou pelo <span style="color:black;">Backup profissional
  ?</span> escolha a melhor forma para entrar em contato conosco:</h3>
  <a href="https://wa.me/5592986428760?text=Ola,Tenho%20interesse%20em%ter%20Backup%20Profissional
  " class="btn-wpp" >
                             <i class="bi bi-whatsapp"></i>  Whatsapp  
                            </a>
                          
                             <a class="btn-inst" href="https://www.instagram.com/pccompro/">
                               <i class="bi bi-instagram"></i>  Instagram 
                             </a>
                             <a class="btn-Email" href="#">
                               <i class="bi bi-envelope"></i>  email@pccompro 
                             </a>
                           <a class="btn-phone" href="#">
                             <i class="bi bi-telephone-fill"></i> +55 92 3995-0150 
                           </a>
  
  `
 
 }

 function wppTextSete(){
  let contats = document.querySelector('#contats')
  contats.innerHTML = `
  <h3 class="tituloDiv">Se interessou pelo <span style="color:black;">Wifi Social
  ?</span> escolha a melhor forma para entrar em contato conosco:</h3>
  <a href="https://wa.me/5592986428760?text=Ola,Tenho%20interesse%20em%20Wifi%20Social

  " class="btn-wpp" >
                             <i class="bi bi-whatsapp"></i>  Whatsapp  
                            </a>
                           
                             <a class="btn-inst" href="https://www.instagram.com/pccompro/">
                               <i class="bi bi-instagram"></i>  Instagram 
                             </a>
                             <a class="btn-Email" href="#">
                               <i class="bi bi-envelope"></i>  email@pccompro 
                             </a>
                           <a class="btn-phone" href="#">
                             <i class="bi bi-telephone-fill"></i> +55 92 3995-0150 
                           </a>
  
  `
 
 }

 function wppTextOito(){
  let contats = document.querySelector('#contats')
  contats.innerHTML = `
  <h3 class="tituloDiv">Se interessou pelo <span style="color:black;">Telefonia em Nuvem
  ?</span> escolha a melhor forma para entrar em contato conosco:</h3>
  <a href="https://wa.me/5592986428760?text=Ola,Tenho%20interesse%20em%20Telefonia%20em%20Nuvem
  " class="btn-wpp" >
                             <i class="bi bi-whatsapp"></i>  Whatsapp  
                            </a>
                           
                             <a class="btn-inst" href="https://www.instagram.com/pccompro/">
                               <i class="bi bi-instagram"></i>  Instagram 
                             </a>
                             <a class="btn-Email" href="#">
                               <i class="bi bi-envelope"></i>  email@pccompro 
                             </a>
                           <a class="btn-phone" href="#">
                             <i class="bi bi-telephone-fill"></i> +55 92 3995-0150 
                           </a>
  
  `
 
 }



 const menuItens = document.querySelectorAll('.navbar-nav a[href^="#"]');

 menuItens.forEach(item => {
  item.addEventListener('click', scrollToId)
});

function scrollToId(event){
 event.preventDefault();
  
 const to = getScrollTopByHref(event.target) - 70
 
 scrollToPosition(to)
}

function getScrollTopByHref(element){
 const id = element.getAttribute('href')
 return document.querySelector(id).offsetTop
}

function scrollToPosition(to) {
 smoothScrollTo(0, to , 450);
} 

function smoothScrollTo(endX, endY, duration) {
 const startX = window.scrollX || window.pageXOffset;
 const startY = window.scrollY || window.pageYOffset;
 const distanceX = endX - startX;
 const distanceY = endY - startY;
 const startTime = new Date().getTime();

 duration = typeof duration !== 'undefined' ? duration : 100;

 // Easing function
 const easeInOutQuart = (time, from, distance, duration) => {
   if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
   return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
 };

 const timer = setInterval(() => {
   const time = new Date().getTime() - startTime;
   const newX = easeInOutQuart(time, startX, distanceX, duration);
   const newY = easeInOutQuart(time, startY, distanceY, duration);
   if (time >= duration) {
     clearInterval(timer);
   }
   window.scroll(newX, newY);
 }, 1000 / 60); 
};




const menuItens2 = document.querySelectorAll('.card-body a[href^="#"]');

menuItens2.forEach(item => {
 item.addEventListener('click', scrollToId)
});

function scrollToId(event){
event.preventDefault();
 
const to = getScrollTopByHref(event.target) - 170

scrollToPosition(to)
}

function getScrollTopByHref(element){
const id = element.getAttribute('href')
return document.querySelector(id).offsetTop
}

function scrollToPosition(to) {
smoothScrollTo(0, to , 750);
} 

function smoothScrollTo(endX, endY, duration) {
const startX = window.scrollX || window.pageXOffset;
const startY = window.scrollY || window.pageYOffset;
const distanceX = endX - startX;
const distanceY = endY - startY;
const startTime = new Date().getTime();

duration = typeof duration !== 'undefined' ? duration : 100;

// Easing function
const easeInOutQuart = (time, from, distance, duration) => {
  if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
  return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
};

const timer = setInterval(() => {
  const time = new Date().getTime() - startTime;
  const newX = easeInOutQuart(time, startX, distanceX, duration);
  const newY = easeInOutQuart(time, startY, distanceY, duration);
  if (time >= duration) {
    clearInterval(timer);
  }
  window.scroll(newX, newY);
}, 1000 / 60); 
};









