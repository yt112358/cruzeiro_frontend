export function openProjectDialog() {
  let modalWindow = document.getElementById("project");
  modalWindow.showModal();
}

export function openRegisterDialog() {
  let modalWindow = document.getElementById("register");
  let datepickerFieldset = modalWindow.querySelector(".datepicker-fieldset");
  modalWindow.showModal();
  loadSaveData();

  const submitBtn = document.getElementById("submitBtn");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    if (form.checkValidity()) {
      const cpfInput = document.getElementById("cpf");
      const telefoneInput = document.getElementById("telefone");

      // let gender = document.getElementById("gender").value;
      const gender = document.querySelector('input[name="gender"]:checked');
      const otherGender =
        gender.value === "Outro"
          ? document.getElementById("other-gender").value
          : "";

      // Se tudo estiver válido, você pode salvar os dados no localStorage ou fazer outra ação
      let formData = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        gender: gender.value,
        otherGender: otherGender,
        telefone: telefoneInput.value,
        cpf: cpfInput.value,
        dataNascimento: document.getElementById("datepicker").value,
      };

      localStorage.setItem("formData", JSON.stringify(formData));
      templateDialog(
        "Cadastro realizado com sucesso!",
        "Seus dados foram salvos com sucesso.",
      );
    } else {
      templateDialog(
        "Erro no formulário!",
        "Por favor, preencha todos os campos corretamente.",
      );
    }
  });
  let datepickerInstance = null;
  if (!datepickerInstance) {
    datepickerInstance = flatpickr("#datepicker", {
      dateFormat: "d/m/Y",
      static: true,
      appendTo: datepickerFieldset,
      onClose: function (selectedDates, dateStr, instance) {
        const inputEl = instance.element;
        if (selectedDates.length == 0) {
          inputEl.classList.add("is-invalid");
        } else {
          inputEl.classList.remove("is-invalid");
        }
      },
    });
  }
}

function loadSaveData() {
  let storage = window.localStorage;
  let formData = JSON.parse(storage.getItem("formData"));
  let form = document.getElementById("form");

  if (form != null && formData != null) {
    document.getElementById("nome").value = formData.nome;
    document.getElementById("email").value = formData.email;
    document.getElementById("telefone").value = formData.telefone;
    document.getElementById("cpf").value = formData.cpf;
    document.getElementById("datepicker").value = formData.dataNascimento;
    //document.getElementById("gender").value = formData.gender;
    const gender = document.querySelector(
      `input[name="gender"][value="${formData.gender}"]`,
    );
    document.getElementById("other-gender").value = formData.otherGender;

    if (gender) {
      gender.checked = true;
    }
  }
}

function templateDialog(title, content) {
  const template = document.getElementById("modal-template");
  const clone = template.content.cloneNode(true);
  clone.querySelector(".modal-title").textContent = title;
  clone.querySelector(".modal-content").textContent = content;

  const modalWindow = document.getElementById("modal");
  if (modalWindow && modalWindow.children) {
    Array.from(modalWindow.children).forEach((child) => {
      child.remove();
    });
  }

  modalWindow.append(clone);
  modalWindow.showModal();
}
