
function getInputs(type_step: string): Object[]{

  let resp: Object[] = [{}];

  switch(type_step){
    case '1':
      resp = [
        { "Informacao 1": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 2": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 3": "", "type" : "string", "description": "Exemplo Description" },
      ];
      break;
    case '2':
      resp = [
        { "Informacao 1": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 2": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 3": "", "type" : "string", "description": "Exemplo Description" },
      ];
      break;
    case '3':
      resp = [
        { "Informacao 1": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 2": "", "type" : "string", "description": "Exemplo Description" },
        { "Informacao 3": "", "type" : "string", "description": "Exemplo Description" },
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