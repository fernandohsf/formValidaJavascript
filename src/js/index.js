function validaCampos(){
    let campo = document.getElementsByClassName('validacao');
    let aviso = document.getElementsByClassName('aviso');
    for(let i =0; i< campo.length; i++){
        if(campo[i].value != ""){
            campo[i].classList.remove('erro');
            campo[i].classList.add("correto")
            aviso[i].classList.remove('obrigatorio');
        }else{
            campo[i].classList.remove('correto')
            campo[i].classList.add('erro');
            aviso[i].classList.add('obrigatorio');
        }
    }
}