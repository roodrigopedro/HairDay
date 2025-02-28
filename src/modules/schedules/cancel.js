import { schedulesDay } from "./load.js"
import { scheduleCancel } from "../../services/schedule-cancel.js"

const periods = document.querySelectorAll(".period")

// Gera evento de clique para cada lista.(manhã, tarde e noite)
periods.forEach((period) => {
    // Captura o evento de clique na lista.
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            // Obtém a li pai do elemento clicado.
            const item = event.target.closest("li")
            
            // Pega o id do agendamento a ser removido.
            const { id } = item.dataset

            // Confirma se o id foi selecionado.
            if (id) {
                // Confirma se o usuario quer cancelar
                const isConfirm = confirm(
                    "Deseja realmente cancelar este agendamento?"
                )

                if (isConfirm) {
                    // Faz a requisição na API para cancelar.
                    await scheduleCancel({ id })
                    
                    // Recarrega os agendamentos.
                    schedulesDay()
                }
            }
        }
    })
})