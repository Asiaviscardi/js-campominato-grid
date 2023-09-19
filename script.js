const container = document.querySelector('container')

reset ();

for(let i=0; i<64; i++){
    const quadrato = crea ();
}

quadrato.addeventlistener ('click')
console.log(this);
container.append (quadrato);

function crea(){
    const nuovo = document.createElement('div')
    nuovo.className='quadrato';
    return nuovo;
}

function reset(){
    container.innerHTML='';
}