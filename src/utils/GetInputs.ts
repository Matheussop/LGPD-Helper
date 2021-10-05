
function getInputs(type_step: string): Object[]{

  let resp: Object[] = [{}];

  switch(type_step){
    case '1':
      resp = [
        { "Informacao 1": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 2": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 3": "", "type" : "string", "description": "Exemplo Description",
          "options": [
            {"value": 'tecnologia', "label": 'Tecnologia'},
            {"value": 'alimentao', "label": 'Alimentão'},
            {"value": 'saude', "label": 'Saúde'},
          ]
        },
        { "Observações": "", "type" : "textarea", "description": "Alguma Observação a ser colocada ? " },
      ];
      break;
    case '2':
      resp = [
        { "Informacao 1": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 2": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 3": "", "type" : "string", "description": "Exemplo Description" },
        { "Observações": "", "type" : "textarea", "description": "Alguma Observação a ser colocada ? " },
      ];
      break;
    case '3':
      resp = [
        { "Informacao 1": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 2": "", "type" : "string", "description": "Exemplo Description" },
        { "Exemplo de select": "", "type" : "select", "description": "Exemplo de select feito dinâmico",
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
        { "Informacao 1": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 2": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 3": "", "type" : "string", "description": "Exemplo Description" },
      ];
      break;
    case '5':
      resp = [
        { "Informacao 1": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 2": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 3": "", "type" : "string", "description": "Exemplo Description" },
        { "Nome": "", "type" : "string", "description": "Nome do funcionário" },
      ];
      break;
    case '6':
      resp = [
        { "Informacao 1": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 2": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 3": "", "type" : "string", "description": "Exemplo Description" },
      ];
      break;
    default:
      resp = [];
  }
  
  return resp;
}

export {getInputs}