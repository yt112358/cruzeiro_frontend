function validarCPF(cpf) {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, "");

  // CPF precisa ter exatamente 11 dígitos
  if (cpf.length !== 11) return false;

  // Elimina CPFs com todos os dígitos iguais (ex: 111.111.111-11)
  if (/^(\d)\1{10}$/.test(cpf)) return false;

  // Validação do 1º Dígito Verificador
  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(9))) return false;

  // Validação do 2º Dígito Verificador
  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpf.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(cpf.charAt(10))) return false;

  return true;
}

function formatarCPF(cpf) {
  // Remove caracteres não numéricos
  cpf = cpf.replace(/[^\d]/g, "");

  // Formata o CPF no padrão 000.000.000-00
  return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
}

function formatarTelefone(telefone) {
  let valor = telefone.replace(/\D/g, ""); // Remove tudo que não for dígito

  if (valor.length > 11) {
    valor = valor.slice(0, 11); // Limita ao tamanho máximo (com DDD)
  }

  // Aplica a formatação baseada na quantidade de dígitos
  if (valor.length > 10) {
    // Celular com 9 dígitos: (XX) 9XXXX-XXXX
    valor = valor.replace(/^(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
  } else if (valor.length > 6) {
    // Fixo ou celular em início de digitação: (XX) XXXX-XXXX
    valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
  } else if (valor.length > 2) {
    // Apenas DDD e início: (XX) XXXX
    valor = valor.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
  } else if (valor.length > 0) {
    // Apenas DDD: (XX
    valor = valor.replace(/^(\d*)/, "($1");
  }

  return valor;
}
