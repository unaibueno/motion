let openmodal1 = document.getElementById('producto1');
let openmodal2 = document.getElementById('producto2');
let openmodal3 = document.getElementById('producto3');
let openmodal4 = document.getElementById('producto4');

let producto_modal_1 = document.querySelector('.modal1');
let producto_modal_2 = document.querySelector('.modal2');
let producto_modal_3 = document.querySelector('.modal3');
let producto_modal_4 = document.querySelector('.modal4');

openmodal1.addEventListener('click', () => {
    cerrarModales();
    producto_modal_1.style.display = 'block';
    document.body.style.overflow = 'hidden';

});

openmodal2.addEventListener('click', () => {
    cerrarModales();
    producto_modal_2.style.display = 'block';
    document.body.style.overflow = 'hidden';

});

openmodal3.addEventListener('click', () => {
    cerrarModales();
    producto_modal_3.style.display = 'block';
    document.body.style.overflow = 'hidden';

});

openmodal4.addEventListener('click', () => {
    cerrarModales();
    producto_modal_4.style.display = 'block';
    document.body.style.overflow = 'hidden';

});

function cerrarModales() {
    // Oculta todos los modales
    producto_modal_1.style.display = 'none';
    producto_modal_2.style.display = 'none';
    producto_modal_3.style.display = 'none';
    producto_modal_4.style.display = 'none';
    document.body.style.overflow = 'auto';

}


// Oculta el modal al hacer clic en el botón de cerrar
let ocultarModal = document.querySelectorAll('.close-btn');
ocultarModal.forEach(btn => {
    btn.addEventListener('click', () => {
        cerrarModales();
    });
});
