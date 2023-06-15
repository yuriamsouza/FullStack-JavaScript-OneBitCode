let vagas = [];

function listaVagas() {
  const textoVagas = vagas.reduce((textoFinal, vaga, indice) => {
    textoFinal += (indice + 100) + ". " + vaga.nome;
    textoFinal += " - " + vaga.candidatos.length + " candidato(s)\n";
    return textoFinal;
  }, "");
  return textoVagas;
}

let opcao;

do {
  opcao = prompt(
    "SISTEMA DE GERENCIAMENTO DE VAGAS DE EMPREGOS:\n\n" +
      "1) Listar as vagas disponíveis\n" +
      "2) Cadastrar nova vaga\n" +
      "3) Visualizar uma vaga específica e candidatos\n" +
      "4) Inscrever um candidato em uma vaga\n" +
      "5) Excluir uma vaga\n6) Encerrar e sair"
  );

  switch (opcao) {
    case "1":
      if (vagas.length) {
        alert(listaVagas());
      } else {
        alert("Não há vagas cadastradas.");
      }

      break;

    case "2":
      const vaga = {};
      vaga.nome = prompt("Insira o nome da função da vaga:");
      vaga.descricao = prompt("Informe a descrição da vaga:");
      vaga.dataLimite = prompt(
        "Informe o prazo final para inscrição:\n\n" +
          "(Utilize o formato DD/MM/AAAA)"
      );
      vaga.candidatos = [];

      const confirma = confirm(
        `Confirma a inclusão desta vaga? \n\n` +
          `Nome: ${vaga.nome}\nDescrição: ${vaga.descricao}\n` +
          `Prazo para inscrição: ${vaga.dataLimite}\n`
      );
      if (confirma) {
        vagas.push(vaga);
        alert("Vaga incluída!");
      }

      break;

    case "3":
      if (vagas.length) {
        const indice = prompt(
          "Informe o código da vaga que deseja exibir:\n\n" + listaVagas()
        );
        const vaga = vagas[indice - 100];
        const candidatosEmTexto = vaga.candidatos.reduce(
          (textoFinal, candidato) => textoFinal + "\n  " + candidato,
          ""
        );
        alert(
          `Vaga: ${indice}\nNome: ${vaga.nome}\nDescrição: ${vaga.descricao}\n` +
            `Data limite: ${vaga.dataLimite}\nTotal de candidatos:` +
            `${vaga.candidatos.length}\nCandidatos inscritos:${candidatosEmTexto}`
        );
      } else {
        alert("Não há vagas cadastradas.");
      }

      break;

    case "4":
      if (vagas.length) {
        const indice = prompt(
          "Informe o código da vaga na qual o(a) candidato(a)" +
            "deseja se inscrever:\n\n" +
            listaVagas()
        );
        const candidato = prompt("Informe o nome completo do(a) candidato(a):");
        const vaga = vagas[indice - 100];
        const confirmar = confirm(
          "Confirma a inscrição do candidato " +
            candidato +
            " na vaga " +
            indice +
            " - " +
            vaga.nome +
            "?"
        );
        if (confirmar) {
          vagas[indice - 100].candidatos.push(candidato);
          console.table(vagas);
          alert("Inscrição realizada!");
        }
      } else {
        alert("Não há vagas cadastradas.");
      }

      break;

    case "5":
      if (vagas.length) {
        const indice = prompt(
          "Informe o código da vaga que deseja excluir:\n\n" + listaVagas()
        );
        const vaga = vagas[indice - 100];
        const confirmacao = confirm(
          "Tem certeza que deseja excluir esta vaga?\n\n " +
            indice +
            " - " +
            vaga.nome
        );
        if (confirmacao) {
          vagas.splice(indice - 100, 1);
          alert("Vaga excluída.");
        }
      } else {
        alert("Não há vagas cadastradas.");
      }

      break;

    case "6":
      alert("Encerrando...");
      break;

    default:
      alert("Opção inválida! Escolha uma das opções do menu.");
      break;
  }
} while (opcao !== "6");
