
// Menu Mobile
//mostra Sidbar
document.getElementById("hamburguer-icon").onclick = function () {
  document.getElementById("sliding-header-menu-outer").style.right = "0";
}


//Add mão no Butão
document.getElementById("sliding-header-menu-close-button").onmouseover = function () {
  document.getElementById("sliding-header-menu-close-button").style.cursor = "pointer";

}
//esconder Sidbar
document.getElementById("sliding-header-menu-close-button").onclick = function () {
  document.getElementById("sliding-header-menu-outer").style.right = "-320px";

}




// About us Tab

var aboutUs = {
  "Missão": "Fazer com que cada cliente seja reconhecido como autoridade em seu segmento de atuação. Agregar valor ao negócio, potencializar o crescimento das operações e promover e estreitar o relacionamento do cliente com o seu público alvo, por meio da geração de conteúdo de relevância.",
  "Visão": "Ser reconhecida pelos clientes e pelo mercado como uma empresa parceira, inovadora e criativa, que oferece sempre os melhores produtos e soluções em Comunicação Empresarial Integrada.",
  "Valores": "<ul><li>Comprometimento</li><li>Inovação</li><li>Ética profissional</li><li>Superação dos resultados</li><li>Melhoria contínua</li></ul>"
};

var unseletected_color = "#646872";
var seletected_color = "#2A2D34";


var about_tags = document.getElementsByClassName("single-tab");

for (var a = 0; a < about_tags.length; a++) {
 
  about_tags[a].onclick = function () {

    //removendo a seleção de todos
    for (var b = 0; b < about_tags.length; b++) {
      about_tags[b].style['background-color'] = unseletected_color;
      about_tags[b].style['font-weight'] = "normal"
    }
    //colocando marcação no butão selecioando
    this.style['background-color'] = seletected_color;
    this.style['font-weight'] = "bold"

    //pegando o item selecionado (aboutUs) = o mesmo nome da opção
    var selecionado = this.innerHTML;

    document.getElementById("box-text").innerHTML = aboutUs[selecionado];

  };
}



// Slider de serviços
var our_services = [
  {
    'title': 'Webdesign 5646',
    'text': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Branding',
    'text': 'Praesent finibus tincidunt sem non sodales. Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi.'
  },

  {
    'title': 'Marketing Digital',
    'text': 'Nunc et quam in magna vehicula sollicitudin. Aliquam erat volutpat. Maecenas dolor mi, aliquet ac quam aliquet, condimentum dictum nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent finibus.'
  }

];

//service-previous
//service-next
//service-title
//service-text

let servico_atual = 0;

//Butão Voltar
document.getElementById("service-previous").onclick = function(){
  if(servico_atual == 0){
    var servico_anterior  = our_services.length - 1;
  }else {
    var servico_anterior  = servico_atual - 1;
  }

  //exibindo as informações de Cada Elemento do Objeto
  document.getElementById("service-title").innerHTML = our_services[servico_anterior].title;
  document.getElementById("service-text").innerHTML = our_services[servico_anterior].text;

  servico_atual = servico_anterior;
}

//Butão Avançar
document.getElementById("service-next").onclick = function(){
  if(servico_atual == our_services.length - 1){
    var servico_seguinte  = 0;
  }else {
    var servico_seguinte  = servico_atual + 1;
  }

  //exibindo as informações de Cada Elemento do Objeto
  document.getElementById("service-title").innerHTML = our_services[servico_seguinte].title;
  document.getElementById("service-text").innerHTML = our_services[servico_seguinte].text;

  servico_atual = servico_seguinte;
}






// Data Footer - Atualizando o Ano automaticamente.

var ano_atual = new Date;
console.log(ano_atual)
//retornado o Ano
ano_atual = ano_atual.getFullYear();
console.log(ano_atual)
document.getElementById("current_year").innerHTML = ano_atual;



//colocando map na pagina: https://developers.google.com/maps/documentation/javascript/adding-a-google-map#key
//API Key:  AIzaSyBSW-CwJBMS7KuYXuyob6Cq3ziQQFRM0NE






