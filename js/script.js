
document.getElementById("seta-esq").addEventListener('click', ()=>{
    document.getElementById('limpeza-pele').style.display = 'none'
    document.getElementById('designer').style.display = 'flex'
});

document.getElementById("seta-dir").addEventListener('click', ()=>{
    document.getElementById('limpeza-pele').style.display = 'flex'
    document.getElementById('designer').style.display = 'none' 
});


//arrumar
document.getElementById('btn-mobile').addEventListener('click',()=>{
    document.getElementById('mobile-menu').style.display = flex;
    alert('ola');
})