import { schedulesDay } from "../schedules/load"
// Seleciona o inut de data.
const selectedDate = document.getElementById("date")

selectedDate.onchange = () => schedulesDay()