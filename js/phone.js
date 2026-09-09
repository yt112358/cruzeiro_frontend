function formatarTelefone(telefone) {
    let valor = telefone.replace(/\D/g, ''); // Remove tudo que não for dígito
        
        if (valor.length > 11) {
            valor = valor.slice(0, 11); // Limita ao tamanho máximo (com DDD)
        }

        // Aplica a formatação baseada na quantidade de dígitos
        if (valor.length > 10) {
            // Celular com 9 dígitos: (XX) 9XXXX-XXXX
            valor = valor.replace(/^(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (valor.length > 6) {
            // Fixo ou celular em início de digitação: (XX) XXXX-XXXX
            valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (valor.length > 2) {
            // Apenas DDD e início: (XX) XXXX
            valor = valor.replace(/^(\d{2})(\d{0,5})/, '($1) $2');
        } else if (valor.length > 0) {
            // Apenas DDD: (XX
            valor = valor.replace(/^(\d*)/, '($1');
        }

    return valor;
}