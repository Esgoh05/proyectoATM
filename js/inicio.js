const userNameElement = document.querySelector('#userName');

const userSaldoElement = document.querySelector('.modal-text-saldo');

const formIngresarSaldo = document.querySelector('#ingresarSaldoForm');

const formRetirarSaldo = document.querySelector('#retirarSaldoForm');


const userName = localStorage.getItem('nombre');
if (userName) {
    userNameElement.textContent = `${userName}`;
}

const userSaldo = localStorage.getItem('saldo');
if (userSaldo) {
    userSaldoElement.textContent = "$" + `${userSaldo}`;
}

formIngresarSaldo.addEventListener('submit', event => {
    event.preventDefault(); // Evita que se envíe el formulario automáticamente
    const userSaldo = localStorage.getItem('saldo');
    console.log(event.target.saldoIngresado.value);
    const saldoIngresado = event.target.saldoIngresado.value;
    const saldoPorValidar = parseInt(userSaldo)+parseInt(saldoIngresado);

    console.log(saldoPorValidar);

    if (saldoPorValidar > 990) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha podido realizar la operacion. Por favor ingrese un monto menor.',
          })
        //showAlert({ message: 'No se ha podido realizar la operacion. Por favor ingrese un monto menor.'});
    }
    else{
        console.log("Tu nuevo saldo es:" + saldoPorValidar);
        localStorage.setItem("saldo", saldoPorValidar);
        showAlert({ message: 'El monto ingresado fue: ' + `${saldoIngresado}.
        ` + "El saldo actual es: " + `${saldoPorValidar}. `});
    }
});

formRetirarSaldo.addEventListener('submit', e => {
    e.preventDefault(); // Evita que se envíe el formulario automáticamente
    const userSaldo = localStorage.getItem('saldo');
    console.log(e.target.saldoEgreso.value);
    const saldoEgresado = e.target.saldoEgreso.value;
    const saldoActual = parseInt(userSaldo) - parseInt(saldoEgresado);


    if (saldoActual < 10) {
        //showAlert({ message: 'No se ha podido realizar la operacion. Por favor ingrese un monto menor.'});
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'No se ha podido realizar la operacion. Por favor ingrese un nuevo monto.',
          })
    }
    else{
        console.log("Tu nuevo saldo es:" + saldoActual);
        localStorage.setItem("saldo", saldoActual);
        showAlert({ message: 'El monto egresado fue: ' + `${saldoEgresado}.
        ` + "El saldo actual es: " + `${saldoActual}. `});
        console.log(userSaldo);
    }
  
});

function showAlert({ message }) {
    //alert(message);
    Swal.fire(
        message
      )
}
