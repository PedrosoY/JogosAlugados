function alterarStatus(id){
    let gameClicado = document.getElementById(`game-${id}`);
    let imagemJogo = gameClicado.querySelector('.dashboard__item__img');
    let botaoAlugarDevolver = gameClicado.querySelector('.dashboard__item__button');

    if (botaoAlugarDevolver.innerHTML == 'Alugar'){
        botaoAlugarDevolver.innerHTML = 'Devolver';
        botaoAlugarDevolver.classList.add('dashboard__item__button--return');
        imagemJogo.classList.add('dashboard__item__img--rented');
    } else {
        botaoAlugarDevolver.innerHTML = 'Alugar';
        botaoAlugarDevolver.classList.remove('dashboard__item__button--return');
        imagemJogo.classList.remove('dashboard__item__img--rented');
    }
}
