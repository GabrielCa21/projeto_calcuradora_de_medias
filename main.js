const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="Emoji celebrando" />';
const imgReprovado = '<img src="./images/reprovado.png" alt="Emoji decepcionado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaminima = parseFloat (prompt('Qual a nota minima?'));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adcionalinhas();
    atualizatabela();
    atualizamediafinal();
    calculamediafinal();
    
    
});

function adcionalinhas(){
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');
    
    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} Já foi inserida`);
    } else{
        
    }

    atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));
    
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaminima ? imgAprovado : imgReprovado}</td>`;
    linha += '</tr>';

    linhas += linha;

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizatabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizamediafinal(){
    const mediafinal = calculamediafinal();
    document.getElementById('mediafinalvalor').innerHTML = mediafinal;
    document.getElementById('mediafinalresultado').innerHTML = mediafinal >= notaminima? spanAprovado: spanReprovado;
}
function calculamediafinal(){
    let somadasnotas = 0;
    for(i=0; i < notas.length; i++){
        somadasnotas += notas[i];
    }
    return somadasnotas / notas.length;
}