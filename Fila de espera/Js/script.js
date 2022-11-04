let fila = []
let opcao = ""

do {
  let pacientes = ""
  for (let i = 0; i < fila.length; i++) {
    pacientes += (i + 1) + "º - " + fila[i] + "\n"
  }

  opcao = prompt(
    "📢 Ao remover um paciente, sempre será o primeiro da fila\n\n" +
    "Lista de paciente: ✍\n" + pacientes +
    "\nEscolha uma ação: 👇\n" +
    "\n1. Novo paciente.\n2. Remover paciente no inicio da fila.\n3. Adiciona no inicio da fila.\n4. Remover paciente no final da fila.\n5. Sair."
  )
  switch (opcao) {
    case "1":3
      const novoPaciente = prompt("Qual é o nome do paciente❔ 😃")
      fila.push(novoPaciente)
      break
    case "2":
      const pacienteConsultado = fila.shift()
      if (pacienteConsultado) {
        alert(pacienteConsultado + " foi removido da fila❕ 👋")
      } else {
        alert("Não há pacientes na fila❕ 😔")
      }
      break
    case "3":
      const pacienteFimDeFila = prompt("Qual é o nome do paciente❔ 😃")
      fila.unshift(pacienteFimDeFila)
      break
    case "4":
      const pacienteConsultado1 = fila.pop()
      alert(pacienteConsultado1 + " foi removido da fila❕ 👋")
      break
    case "5":
      alert("Encerrando 😔")
      break
    default:
      alert("Opção inválida❕")
  }
} while (opcao !== "5")