function redirectToRecycleForm() {
    window.location.href = 'formulario.html'; // Cambia 'ruta_a_tu_formulario.html' por la ruta correcta del archivo HTML
}
function generateTicket(event) {
    event.preventDefault(); // Evitar que el formulario recargue la página

    // Obtener valores del formulario
const name = document.getElementById('name').value;
const id = document.getElementById('id').value;
const material = document.getElementById('material').value;
const quantity = parseFloat(document.getElementById('quantity').value);
let rate = parseFloat(document.getElementById('rate').value);

// Asignar el rate según el material seleccionado
switch (material) {
    case 'Papel': // Reemplaza 'material1' por el nombre de tu material
        rate = 1500; // Reemplaza 10 por el valor de rate correspondiente
        break;
        case 'Vidrio': // Reemplaza 'material2' por el nombre de tu material
        rate = 500; // Reemplaza 15 por el valor de rate correspondiente
        break;
        case 'Plastico': // Reemplaza 'material3' por el nombre de tu material
        rate = 3500; // Reemplaza 20 por el valor de rate correspondiente
        break;
        case 'Baterias': // Reemplaza 'material2' por el nombre de tu material
        rate = 5000; // Reemplaza 15 por el valor de rate correspondiente
        break;
        case 'Madera': // Reemplaza 'material2' por el nombre de tu material
        rate = 1500; // Reemplaza 15 por el valor de rate correspondiente
        break;
        case 'Cobre': // Reemplaza 'material2' por el nombre de tu material
        rate = 23000; // Reemplaza 15 por el valor de rate correspondiente
        break;
        case 'Aluminio': // Reemplaza 'material2' por el nombre de tu material
        rate = 6000; // Reemplaza 15 por el valor de rate correspondiente
        break;
    default:
        rate = 0; // En caso de que no se seleccione un material válido
        break;
}

// Calcular el total a pagar
const total = quantity * rate;

    // Rellenar los datos del boleto
    document.getElementById('ticket-name').textContent = name;
    document.getElementById('ticket-id').textContent = id;
    document.getElementById('ticket-material').textContent = material;
    document.getElementById('ticket-quantity').textContent = quantity.toFixed();
    document.getElementById('ticket-rate').textContent = rate.toFixed();
    document.getElementById('ticket-total').textContent = total.toFixed();

    // Mostrar el boleto
    document.getElementById('ticket').style.display = 'block';
}
