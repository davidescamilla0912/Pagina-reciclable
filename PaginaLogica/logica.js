function openRecycleForm() {
    const formHTML = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Formulario de Reciclaje</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    padding: 20px;
                    line-height: 1.6;
                    background-color: #f0f9f4; /* Fondo suave */
                    color: #333;
                }

                body::before {
    content: "";
    position: fixed; /* Cambiar a fixed para que permanezca fija */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('https://reciclajeygestion.es/wp-content/uploads/2022/02/reciclajeygestionpost2.jpg');
    background-size: cover; /* La imagen cubrirá todo el fondo */
    background-position: center;
    z-index: -1;
    background-attachment: fixed; /* Fija la imagen en su lugar */
}
                }

                h2 {
                    text-align: center;
                    color: #4CAF50; /* Verde ecológico */
                    font-size: 24px;
                    margin-bottom: 20px;
                }

                form {
                    background-color: rgba(255, 255, 255, 0.8);
                    padding: 60px;
                    border-radius: 10px;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
                    max-width: 400px;
                    margin: 0 auto;
                }

                label {
                    font-weight: bold;
                    color: #4CAF50;
                    display: block;
                    margin-bottom: 8px;
                }

                input[type="text"],
                input[type="number"] {
                    width: 100%;
                    padding: 12px;
                    margin-bottom: 20px;
                    border: 2px solid #4CAF50;
                    border-radius: 8px;
                    font-size: 16px;
                    background-color: #f1f1f1;
                }

                input[type="text"]:focus,
                input[type="number"]:focus {
                    border-color: #45A049;
                    background-color: #ffffff;
                    outline: none;
                }

                button {
                    width: 100%;
                    padding: 10px;
                    background-color: #4CAF50;
                    color: white;
                    border: none;
                    border-radius: 8px;
                    font-size: 18px;
                    cursor: pointer;
                    transition: background-color 0.3s ease;
                }

                button:hover {
                    background-color: #45A049;
                }

                button:active {
                    background-color: #388E3C;
                    transform: scale(0.98);
                }

                #ticket {
                    background-color: #ffffff;
                    padding: 20px;
                    border: 2px solid #4CAF50;
                    margin-top: 20px;
                    text-align: center;
                    width: 50%;
                    margin-left: auto;
                    margin-right: auto;
                }

                #ticket h3 {
                    margin-bottom: 10px;
                    color: #4CAF50;
                }

                #ticket p {
                    font-size: 16px;
                    color: #333;
                }
            </style>
        </head>
        <body>
            <h2>Formulario de Reciclaje</h2>
            <form onsubmit="generateTicket(event)">
                <label for="name">Nombre:</label><br>
                <input type="text" id="name" name="name" required><br>

                <label for="id">ID:</label><br>
                <input type="text" id="id" name="id" required><br>

                <label for="material">Tipo de Material:</label><br>
                <input type="text" id="material" name="material" required><br>

                <label for="quantity">Cantidad (kg):</label><br>
                <input type="number" id="quantity" name="quantity" step="0.01" required><br>

                <label for="rate">Precio por kg (COP):</label><br>
                <input type="number" id="rate" name="rate" step="1" value="3000" required><br>

                <button type="submit">Calcular Pago</button>
            </form>

            <div id="ticket" style="display:none;">
                <h3>BOLETO DE RECICLAJE</h3>
                <p><strong>Nombre:</strong> <span id="ticket-name"></span></p>
                <p><strong>ID:</strong> <span id="ticket-id"></span></p>
                <p><strong>Tipo de Material:</strong> <span id="ticket-material"></span></p>
                <p><strong>Cantidad (kg):</strong> <span id="ticket-quantity"></span> kg</p>
                <p><strong>Precio por kg:</strong> <span id="ticket-rate"></span> COP</p>
                <p><strong>Total a Pagar:</strong> <span id="ticket-total"></span> COP</p>
            </div>

            <script>
                function generateTicket(event) {
                    event.preventDefault(); // Evitar el envío del formulario

                    // Obtener los valores del formulario
                    const name = document.getElementById('name').value;
                    const id = document.getElementById('id').value;
                    const material = document.getElementById('material').value;
                    const quantity = parseFloat(document.getElementById('quantity').value);
                    const rate = parseFloat(document.getElementById('rate').value);

                    // Calcular el total a pagar
                    const totalPayment = quantity * rate;

                    // Mostrar el boleto con los valores ingresados
                    document.getElementById('ticket-name').innerText = name;
                    document.getElementById('ticket-id').innerText = id;
                    document.getElementById('ticket-material').innerText = material;
                    document.getElementById('ticket-quantity').innerText = quantity;
                    document.getElementById('ticket-rate').innerText = rate.toLocaleString('es-CO');
                    document.getElementById('ticket-total').innerText = totalPayment.toLocaleString('es-CO');

                    // Mostrar el boleto en la página
                    document.getElementById('ticket').style.display = 'block';
                }
            </script>
        </body>
        </html>
    `;

    // Abrir una nueva ventana con el formulario
    const newTab = window.open();
    newTab.document.open();
    newTab.document.write(formHTML);
    newTab.document.close();
}


    const newTab = window.open();
    newTab.document.open();
    newTab.document.write(formHTML);
    newTab.document.close();

