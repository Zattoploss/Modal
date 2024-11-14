
const abrirmodal = document.querySelector("#open-modal");

const fecharmodal = document.querySelector("#fechar");

const modal = document.querySelector("#modal");

const fade = document.querySelector("#modal-fade");




function abrirFechar(){

   //fade.classList.toggle("show")

    modal.showModal()

  // modal.classList.remove("hide")

   //fade.classList.remove("hide")

}

fecharmodal.addEventListener("click", () => {
  modal.close();})


/*fade.addEventListener("click",()=>{

      fade.classList.toggle("show")

    modal.classList.toggle("show")

  //  modal.classList.add("hide")

 //  fade.classList.add("hide")




})*/





function cpfMask(cpf) {
  cpf = cpf.replace(/\D/g, ''); // Remove tudo o que não é dígito
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
  cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o segundo ponto
  cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Adiciona o hífen
  localStorage.setItem("numcpf",cpf)
  return cpf;
}

function CpfValidate() {
  const cpfInput = document.getElementById('cpf');
  cpfInput.value = cpfMask(cpfInput.value);
}

function cepMask(cep) {
  cep = cep.replace(/\D/g, ''); 
  cep = cep.replace(/(\d{2})(\d)/, '$1.$2'); 
  cep = cep.replace(/(\d{3})(\d)/, '$1-$2'); 
  localStorage.setItem("numcep",cep)
  return cep;
}

function CepValidate() {
  const cepInput = document.getElementById('cep');
  cepInput.value = cepMask(cepInput.value);
}



const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d{2})(\d)/, "($1) $2")
  value = value.replace(/(\d)(\d{4})$/, "$1-$2")
  localStorage.setItem("numtel",value)
  return value
}

const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

function cnpjMask(cnpj) {
  cnpj = cnpj.replace(/\D/g, ''); // Remove tudo o que não é dígito
  cnpj = cnpj.replace(/(\d{2})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
  cnpj = cnpj.replace(/(\d{3})(\d)/, '$1.$2'); // Adiciona o segundo ponto
  cnpj = cnpj.replace(/(\d{3})(\d)/, '$1/$2'); // Adiciona o segundo ponto
  cnpj = cnpj.replace(/(\d{4})(\d)/, '$1-$2'); // Adiciona o segundo ponto
  localStorage.setItem("numcnpj",cnpj)
  return cnpj;
}

function CnpjValidate() {
  const cnpjInput = document.getElementById('cnpj');
  cnpjInput.value = cnpjMask(cnpjInput.value);
}


function nomesMask(){
  localStorage.setItem("numnome",nomeInput)
}

function NomeValidate() {
  var nome = document.getElementById('Nome').value
  return nome
}
function Salvar() {
  localStorage.setItem("nomeTexto",NomeValidate())
  localStorage.setItem("numcasa",casaMask())
  localStorage.setItem("numcode",codeMask())
}

function casaMask(){
  var endereco = document.getElementById('casa').value
  return endereco
}



function codeMask(){
  var code = document.getElementById('code').value
  return code
}



const msg = "enviado com exito"
function mensage() {
  window.alert(msg)
  var cpf = document.querySelector("#cpf").value
  var cep = document.querySelector("#cep").value
  var code = document.querySelector("#code").value
  var cnpj = document.querySelector("#cnpj").value
 
}

