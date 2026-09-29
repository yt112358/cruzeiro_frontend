// import scripts
import { toggleDarkMode } from "./visual.js";
import { formatarTelefone, validarCPF } from "./form.js";
import "./dialog.js";
import { openProjectDialog, openRegisterDialog } from "./dialog.js";

const dialogLink = document.getElementById("openRegister");
dialogLink.addEventListener("click", openRegisterDialog);

const projectLink = document.getElementById("openProject");
projectLink.addEventListener("click", openProjectDialog);

const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", toggleDarkMode);

///  onblur="this.value = formatarTelefone(this.value);"
const telField = document.getElementById("telefone");
telField.addEventListener("blur", formatarTelefone);

/// onblur="if(validarCPF(this.value)) { this.value = formatarCPF(this.value); }"
const cpfField = document.getElementById("cpf");
cpfField.addEventListener("blur", validarCPF);
