
function getInputs(type_step: string): Object[]{

  let resp: Object[] = [{}];

  switch(type_step){
    case '1': //Adequação Manual de Regras
      resp = [
        { "Houve um treinamento dos funcionários ?": "", "type" : "select", "description": { simpleDescription: "Sobre o treinamento", text: 'Houve um treinamento dos funcionários para entendimento e cumprimento dos itens abordados pelo manual', title: "Treinamento de funcionários", moreInfo: true,  },
          "options": [
            {"value": '', "label": ''},
            {"value": 'sim', "label": 'Sim'},
            {"value": 'nao', "label": 'Não'},
          ]
        },
        { "Teste ?": "", "type" : "select", "description": { simpleDescription: "Houve um treinamento dos funcionários para entendimento e cumprimento dos itens abordados pelo manual", text: 'Houve um treinamento dos funcionários para entendimento e cumprimento dos itens abordados pelo manual',  moreInfo: true,  },
          "options": [
            {"value": '', "label": ''},
            {"value": 'sim', "label": 'Sim'},
            {"value": 'nao', "label": 'Não'},
          ]
        },
        { "Informacao 3": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição" } },
        { "Observações": "", "type" : "textarea", "description": { simpleDescription: "Exemplo Descrição" } },
      ];
      break;
    case '2':
      resp = [
        { "Informacao 1": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição2" } },
        { "Informacao 2": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição" } },
        { "Informacao 3": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição" } },
        { "Observações": "", "type" : "textarea", "description": { simpleDescription: "Exemplo Descrição" } },
      ];
      break;
    case '3':
      resp = [
        { "Informacao 1": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição3" } },
        { "Informacao 2": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição" } },
        { "Exemplo de select": "", "type" : "select", "description": { simpleDescription: "Exemplo Descrição" },
          "options": [
            {"value": 'opcao1', "label": 'Opção 1'},
            {"value": 'opcao2', "label": 'Opção 2'},
            {"value": 'opcao3', "label": 'Opção 3'},
          ]
        },
      ];
      break;
    case '4':
      resp = [
        { "Informacao 1": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição4" } },
        { "Informacao 2": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição" } },
        { "Informacao 3": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição" } },
      ];
      break;
    case '5':
      resp = [
        { "Informacao 1": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição5" } },
        { "Informacao 2": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição" } },
        { "Informacao 3": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição" } },
        { "Nome": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição" } },
      ];
      break;
    case '6':
      resp = [
        { "Informacao 1": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição6" } },
        { "Informacao 2": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição" } },
        { "Informacao 3": "", "type" : "string", "description": { simpleDescription: "Exemplo Descrição" } },
      ];
      break;
    default:
      resp = [];
  }
  
  return resp;
}

export {getInputs}