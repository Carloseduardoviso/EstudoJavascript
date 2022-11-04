const baralho = []
let opcao = ""

do {
  opcao = prompt(
    "Cartas no baralho:" + baralho.length +
    "\n\n1. Adicionar uma carta\n2. Puxar uma carta\n3. Sair."
  )

  switch(opcao){
    case "1":
      const novaCarta = prompt("Qual é a carta❔ 😃")
      baralho.push(novaCarta)
      break
    case "2":
      const cartaPuxada = baralho.pop()
      if(!cartaPuxada) {
        alert("Não há nenhuma carta no baralho 😔")
      }else{
        alert("Você puxou uma(a) " + cartaPuxada + "😃") 
      }
      break
    case "3":
      alert("Encerrando  😔")
      break
    default:
      alert("Opcão inválida❕ 😔")
  }
} while (opcao !== "3")