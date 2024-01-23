let contadorEnvios = 0; 
document.addEventListener("DOMContentLoaded", function() {
    // O código dentro deste bloco será executado após o carregamento completo do DOM.
  
    const inputNome = document.getElementById('nome-contact'); 
    const inputNumero = document.getElementById('numero-contact'); 
    const form = document.getElementById('form-Contato');
    const tableBody = document.querySelector('.interfaceTable table tbody')
  

    form.addEventListener("submit", function(e) {
        e.preventDefault();  // Prevenindo o envio padrão do formulário 
        addContacts(); 

        if (!contemApenasNumeros(inputNumero.value)) {
            alert('Por favor, insira apenas números no campo de telefone.');
            return inputNumero.value = "";

        }

        if (contadorEnvios < 6) {
            contadorEnvios++
            limpaCampo(); 
        } else {
            document.getElementById('Bsubmit').setAttribute('disabled', 'true');
            alert('Atingiu o limite de envios');
        };
    
    });

    function addContacts()  {

        const telefone = inputNumero.value; //recebendo o valor novo da variavel
        const nomeContact = inputNome.value;
        
            const newContact = tableBody.insertRow(); 
            let cell1 = newContact.insertCell(0); 
            let cell2 = newContact.insertCell(1);
            
            cell1.innerHTML = nomeContact; 
            cell2.innerHTML = telefone; 
      

    };

    function limpaCampo() {
        inputNome.value = ""; 
        inputNumero.value = "";  
    }; 

     // Função auxiliar para verificar se uma string contém apenas números
     function contemApenasNumeros(str) {
        return /^\d+$/.test(str);
    }
});