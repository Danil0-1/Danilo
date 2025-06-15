let titulo = "6lock / Danilo Muskus ";
let pos = 0;

function moverTitulo() {
  document.title = titulo.substring(pos) + titulo.substring(0, pos);
  pos = (pos + 1) % titulo.length;
  setTimeout(moverTitulo, 200);
}

window.onload = moverTitulo;
