const NUMERO_WHATSAPP = "5584981436968";

const MENSAGEM = "Olá! Vi o site do Pardes e gostaria de saber mais.";

const botoesWhatsapp = document.querySelectorAll(".link-whatsapp");

botoesWhatsapp.forEach(function (botao) {

  const mensagem = botao.dataset.mensagem || MENSAGEM;

  botao.href = "https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(mensagem);
  botao.target = "_blank";
  botao.rel = "noopener";
});

document.documentElement.classList.add("js");

const itensParaAparecer = document.querySelectorAll(".aparece");

const observador = new IntersectionObserver(
  function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visivel");
        observador.unobserve(entrada.target);
      }
    });
  },
  { threshold: 0.2 }
);

itensParaAparecer.forEach(function (item) {
  observador.observe(item);
});

document.getElementById("ano").textContent = new Date().getFullYear();
