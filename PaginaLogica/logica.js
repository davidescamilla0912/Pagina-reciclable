function redirectToRecycleForm() {
    window.location.href = 'formulario.html'; 
}
function generateTicket(event) {
    event.preventDefault(); 

    // Obtener valores del formulario
const name = document.getElementById('name').value;
const id = document.getElementById('id').value;
const material = document.getElementById('material').value;
const quantity = parseFloat(document.getElementById('quantity').value);
let rate = parseFloat(document.getElementById('rate').value);

// Asignar el rate según el material seleccionado
switch (material) {
    case 'Papel': 
        rate = 1500; 
        break;
        case 'Vidrio': 
        rate = 500; 
        break;
        case 'Plastico':
        rate = 3500; 
        break;
        case 'Baterias': 
        rate = 5000; 
        break;
        case 'Madera': 
        rate = 1500; 
        break;
        case 'Cobre': 
        rate = 23000;
        break;
        case 'Aluminio': 
        rate = 6000; 
        break;
    default:
        rate = 0; 
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
