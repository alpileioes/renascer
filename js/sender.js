const nameField = document.getElementById('nome-completo')
const patientField = document.getElementById('nome-paciente')
const celField = document.getElementById('cel')

const btnSubmit = document.querySelector('[type="submit"]')
btnSubmit.onclick = e => {
  e.preventDefault()
  sender()
}

const sender = () => {
  fetch('https://telegram-bot-4wwl.onrender.com/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      type: "renascer",
      nomePaciente: patientField.value,
      nomeCompleto: nameField.value,
      telefoneWhatsApp: celField.value
    })
  })
    .then(location.reload)
    .catch(console.log)
}
