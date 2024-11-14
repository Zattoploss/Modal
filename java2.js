  

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
  cep = cep.replace(/\D/g, ''); // Remove tudo o que não é dígito
  cep = cep.replace(/(\d{2})(\d)/, '$1.$2'); // Adiciona o primeiro ponto
  cep = cep.replace(/(\d{3})(\d)/, '$1-$2'); // Adiciona o segundo ponto
  
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
  
  return cnpj;
}

function CnpjValidate() {
  const cnpjInput = document.getElementById('cnpj');
  cnpjInput.value = cnpjMask(cnpjInput.value);
}





const msg = "enviado com exito"
function mensage() {
  window.alert(msg)
  var cpf = document.querySelector("#cpf").value

}



addEventListener("DOMContentLoaded",()=>{

  var recebanome = localStorage.getItem("nomeTexto")
  document.getElementById("Nome").value = recebanome

  var recebacpf = localStorage.getItem("numcpf")
  document.getElementById("cpf").value = recebacpf


  var recebacode = localStorage.getItem("numcode")
  document.getElementById("code").value = recebacode


  
   var recebecasa = localStorage.getItem("numcasa")

   document.getElementById("casa").value = recebecasa
  var recebatel = localStorage.getItem("numtel")
  document.getElementById("tel").value = recebatel
})