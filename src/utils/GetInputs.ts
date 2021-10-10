function getInputs(type_step: string): Object[] {

  let resp: Object[] = [{}];

  switch (type_step) {
    case '1': // Adequação Manual de Regras
      resp = [
        {
          "Houve um treinamento dos funcionários ?": "",
          "type": "select",
          "input": "1",
          "description": {
            simpleDescription: "Sobre o treinamento",
            text: 'Houve um treinamento dos funcionários para entendimento e cumprimento dos itens abordados pelo manual',
            title: "Treinamento de funcionários",
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, {
          "O manual foi criado ou revisado por um especialista da área ? ": "",
          "type": "select",
          "input": "2",
          "description": {
            simpleDescription: "Para que ele possa verificar se esta adequado a lei.",
            moreInfo: false
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, {
          "Observações": "",
          "input": "3",
          "type": "textarea",
          "description": {
            simpleDescription: "Observações relacionadas ao manual de regras.",
            moreInfo: false
          }
        },
      ];
      break;
    case '2': // Pré-Contratação
      resp = [
        {
          "Todos os dados requeridos são necessários ? cuja a inexistência causa interrupção na contratação.": "",
          "type": "select",
          "input": "1",
          "description": {
            simpleDescription: "Existem diferentes tipos de dados",
            text: "",
            title: "",
            moreText: [{"Titulo": "Os dados podem ser classificados das seguintes maneiras", "text": "Conveniente: é um tratamento dispensável, e não afeta operações."},
              {"Titulo": "", "text": "Desejável: é um tratamento dispensável, mas que pode entregar mais eficiência às operações."},
              {"Titulo": "", "text": "Importante: é um tratamento necessário, cuja interrupção afeta o desempenho da contratação."},
              {"Titulo": "", "text": "Essencial: é um tratamento necessário, cuja interrupção paralisa a contratação."}
            ],
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        },{
          "A coleta de dados possui um aviso de privacidade ?": "",
          "type": "select",
          "input": "2",
          "description": {
            simpleDescription: "É necessário um aviso",
            text: " No momento da contratação, a coleta precisa ser restrita e possuir um aviso de privacidade que deve ser assinado pelo contratante e contratado. O compartilhamento de informações com terceiros, como operadoras de saúde e outros benefícios, também deve receber atenção.",
            title: "Aviso de coleta de dados",
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        },{
          "É estipulado um prazo para descarte de currículos, e este prazo é informado para o candidato ?": "",
          "type": "select",
          "input": "3",
          "description": {
            simpleDescription: "Segundo a LGPD todo dado que perde sua utilidade deverá ser descartado",
            moreInfo: false
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        },{
          "O currículo do candidato é compartilhado com terceiros ? ": "",
          "type": "select",
          "input": "4",
          "description": {
            simpleDescription: "Com outras empresas ou pessoas",
            moreInfo: false
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        },{
          "Se sim : É informado para o candidato que seu currículo esta sendo compartilhado ?": "",
          "type": "select",
          "input": "5",
          "description": {
            simpleDescription: "O candidado deve estar ciente do compartilhamento.",
            text: "",
            moreText: [{"Titulo": "Aviso de compartilhamento", "text": "Será necessário informa ao candidado, que terá seus dados compartilhados, e quais dados serão compartilhados."},
            ],
            title: "",
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, {
          "Observações": "",
          "input": "6",
          "type": "textarea",
          "description": {
            simpleDescription: "Adicione uma obeservação para esta etapa."
          }
        }
      ];
      break;
    case '3': // Contratação
      resp = [
        {
          "O funcionário assinou um contrato permitindo a utilização de seus dados por parte da empresa ?": "",
          "type": "select",
          "input": "1",
          "description": {
            simpleDescription: "É importante que o usuário autorize a empresa a coleta e uso de seus dados, de acordo com sua função.",
            moreInfo: false
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        },   {
          "Para cada utilização diferente dos dados, o usuário autorizou o seu uso ?": "",
          "type": "select",
          "input": "2",
          "description": {
            simpleDescription: "Diferentes tipos de dados necessitam de diferentes autorizações.",
            text: "",
            moreText: [{"Titulo": "Diferentes tipos de dados necessitam de diferentes autorizações.", "text": "Para cada uso diferente de dado será necessário uma autorização por parte do usuário, onde sua finalidade deverá ser informada."},{"Titulo": "Exemplos :", "text": "Caso o dado seja repassado para o plano de saúde."},{"Titulo": "", "text": "Usado para criação de um cartão refeição."},{"Titulo": "", "text": "Seguro de vida co contratado."},{"Titulo": "", "text": "Gestão de folha de pagamento."}],
            title: "",
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        },{
          "Todas as autorizações requeridas , possui a especificação da utilização do dado?": "",
          "type": "select",
          "input": "3",
          "description": {
            simpleDescription: "Autorizações não podem ser genéricas.",
            text: "A empresa deve informar o candidato sobre as finalidades de uso, o tempo de armazenamento e as consequências, caso opte por não dar o seu consentimento. ou candidato não seja aprovado no processo, é preciso apagar todos seus dados pessoais.",
            title: "Autorizações não podem ser genéricas.",
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, {
          "A empresa consegue informar ao seus empregado a natureza de seus dados ?": "",
          "type": "select",
          "input": "4",
          "description": {
            simpleDescription: "O empregado tem direito de acesso a todos os seus dados.",
            text: "O empregado tem direito de acesso a todos os seus dados, podendo requerer que a empresa o informe sobre a natureza e destinação destas informações, bem como que o empregador efetue o descarte dos mesmo quando a rescisão contratual, exceto para cumprimento de obrigações legais e regulatórias",
            title: "O empregado tem direito de acesso a todos os seus dados.",
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, {
          "São realizados treinamentos e reuniões ?": "",
          "type": "select",
          "input": "5",
          "description": {
            simpleDescription: "Reuniões ou treinamentos para funcionários.",
            text: "São realizados treinamentos e reuniões com os funcionários para conscientização sobre os riscos e importância da segurança da informação.",
            title: "Reuniões ou treinamentos para funcionários.",
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, {
          "Os funcionários terceirizados estão cientes das políticas internas de segurança ?": "",
          "type": "select",
          "input": "6",
          "description": {
            simpleDescription: "Concientização de funcionários terceirizados.",
            text: "Em caso de contratação de terceiros, com os quais os dados pessoais da empresa é compartilhado, existe um procedimento de verificação da conformidade destes terceiros com a legislação de proteção de dados e com as suas próprias políticas internas (se existentes).",
            title: "Concientização de funcionários terceirizados.",
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, {
          "Existem meios para proteção dos dados coletados dos funcionários ?": "",
          "type": "select",
          "input": "7",
          "description": {
            simpleDescription: "Proteção de dados sensiveis.",
            moreInfo: false
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, {
          "Todos os funcionários seguem um política de segurança de senhas fortes ?": "",
          "type": "select",
          "input": "8",
          "description": {
            simpleDescription: "Política de segurança.",
            moreInfo: false
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        },{
          "Observações": "",
          "input": "9",
          "type": "textarea",
          "description": {
            simpleDescription: "Observações relacionadas a Contratação.",
            moreInfo: false
          }
        },
      ];
      break;
    case '4': // Termo de desligamento
      resp = [
        {
          "Em caso de término do contrato, os dados do funcionário são eliminados ? ": "",
          "type": "select",
          "input": "1",
          "description": {
            simpleDescription: "Necessario segundo o 16º artigo da lei",
            moreText: [{"Titulo": "Eliminação de Dados", "text": "Em caso de desligamento do colaborador, deve-se observar quais os dados precisarão ser mantidos e quais deverão ser excluídos, em razão do término da finalidade que justificou seu tratamento. As informações poderão ser mantidas para cumprimento de obrigações legais, atendendo os prazos e exigências de autoridades, ou cumprimento de obrigações judiciais, em caso de processos administrativos."},{"Titulo": "", "text": "De acordo com a Lei Seção IV Do Término do Tratamento de Dados, Art. 16. Os dados pessoais serão eliminados após o término de seu tratamento, no âmbito e nos limites técnicos das atividades, autorizada a conservação para as seguintes finalidades."}],
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, 
        {
          "Se sim: São utilizados mecanismos de descarte seguro dos dados. Que eliminem a possibilidade de restauração ? ": "",
          "type": "select",
          "input": "2",
          "description": {
            simpleDescription: "Eliminação completa dos dados",
            moreText: [{"Titulo": "Eliminação completa dos dados", "text": "Em caso de desligamento do colaborador, deve-se observar quais os dados precisarão ser mantidos e quais deverão ser excluídos, em razão do término da finalidade que justificou seu tratamento. As informações poderão ser mantidas para cumprimento de obrigações legais, atendendo os prazos e exigências de autoridades, ou cumprimento de obrigações judiciais, em caso de processos administrativos."},{"Titulo": "", "text": "De acordo com a Lei Seção IV Do Término do Tratamento de Dados, Art. 16. Os dados pessoais serão eliminados após o término de seu tratamento, no âmbito e nos limites técnicos das atividades, autorizada a conservação para as seguintes finalidades."}],
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, 
        {
          "Se não, Porquê ?": "",
          "type": "select",
          "input": "3",
          "description": {
            simpleDescription: "Necessidade de retenção dos dados",
            moreText: [{"Titulo": "Eliminação de Dados", "text": "Em caso de desligamento do colaborador, deve-se observar quais os dados precisarão ser mantidos e quais deverão ser excluídos, em razão do término da finalidade que justificou seu tratamento. As informações poderão ser mantidas para cumprimento de obrigações legais, atendendo os prazos e exigências de autoridades, ou cumprimento de obrigações judiciais, em caso de processos administrativos."},{"Titulo": "", "text": "Seção IV Do Término do Tratamento de Dados, Art. 16º Art. 16. Os dados pessoais serão eliminados após o término de seu tratamento, no âmbito e nos limites técnicos das atividades, autorizada a conservação para as seguintes finalidades."}],
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'Cumprimento de obrigação legal',
              "label": 'Cumprimento de obrigação legal'
            }, {
              "value": 'Estudo por órgão de pesquisa',
              "label": 'Estudo por órgão de pesquisa'
            },
            {
              "value": 'Transferência a terceiro',
              "label": 'Transferência a terceiro'
            },
            {
              "value": 'Uso exclusivo do controlador',
              "label": 'Uso exclusivo do controlador'
            },
            {
              "value": 'Nenhuma das opções',
              "label": 'Nenhuma das opções'
            },
          ]
        }, {
          "Por que? (opcional)": "",
          "type": "string",
          "input": "4",
          "description": {
            simpleDescription: "Caso tenha selecionado 'Nenhuma das opções', indique qual é o seu caso. ",
            moreInfo: false
          }
        }, {
          "Observações": "",
          "input": "5",
          "type": "textarea",
          "description": {
            simpleDescription: "Observações relacionadas ao termo de desligamento.",
            moreInfo: false
          }
        },
      ];
      break;
    case '5': // Política de dados
      resp = [
        {
          "Dados sensíveis são armazenados de forma segura ?": "",
          "type": "select",
          "input": "1",
          "description": {
            simpleDescription: "Há utilização de alguma plataforma para armazenar os dados de forma segura em um banco de dados especifico.",
            moreInfo: false
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, {
          "Se sim, esses dados são armazenados em alguma solução em nuvem ( ex: Google Drive, One Drive, etc ) ?": "",
          "type": "select",
          "input": "2",
          "description": {
            simpleDescription: "Forma de armazenamento.",
            moreInfo: false
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, {
          "A empresa possui código de ética e conduta de colaboradores ?": "",
          "type": "select",
          "input": "3",
          "description": {
            simpleDescription: "Deixe claro suas regras",
            text: "Se de um lado cabe ao empregador informar seus funcionários sobre o compartilhamento de dados pessoais com terceiros, é recomendado a revisão do contrato dos prestadores de serviço, com o intuito de incluir as obrigações da LGPD no âmbito da proteção de dados transferidos, assim como responsabilidade do contratante em caso de vazamento.",
            title: "Deixe claro suas regras",
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, {
          "Observações": "",
          "input": "4",
          "type": "textarea",
          "description": {
            simpleDescription: "Observações relacionadas a Política de daodos.",
            moreInfo: false
          }
        },
      ];
      break;
    case '6': // Imagens e Biometria
      resp = [
        {
          "São tiradas fotos para crachás ?": "",
          "type": "select",
          "input": "1",
          "description": {
            simpleDescription: "Atenção com as imagens",
            text: 'A lei considera a imagem da pessoa como um dado pessoal, mais ainda, como um dado pessoal sensível uma vez que é considerado dado biométrico, o que exige um cuidado mais rigoroso em seu tratamento.',
            title: "Atenção com as imagens",
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, 
        {
          "A empresa faz utilização de biometria ? ": "",
          "type": "select",
          "input": "2",
          "description": {
            simpleDescription: "Atenção com a biometria",
            moreInfo: false
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            },
          ]
        }, 
        {
          "Se sim. Dados biometricos são armazenados de forma segura ? ": "",
          "type": "select",
          "input": "3",
          "description": {
            simpleDescription: "Dado capaz de identificar uma pessoa.",
            text: "Por ser tratar de um dado sensível deverá ser armazenado de forma segura. São dados capazes de identificar com alto grau de precisão a pessoa e, quando associados a certos contextos, podem, em tese, gerar uma discriminação. Contudo há outros mecanismos menos invasivos capazes de controlar o registro da jornada do empregado, como as próprias folhas manuais e o cartão magnético.",
            title: "Dado capaz de identificar uma pessoa.",
            moreInfo: true
          },
          "options": [
            {
              "value": '',
              "label": ''
            }, {
              "value": 'sim',
              "label": 'Sim'
            }, {
              "value": 'nao',
              "label": 'Não'
            }
          ]
        }, 
        {
          "Observações": "",
          "input": "4",
          "type": "textarea",
          "description": {
            simpleDescription: "Observações relacionadas a Imagens e Biometria.",
            moreInfo: false
          }
        },
      ];
      break;
    default: resp = [];
  }

  return resp;
}

export {
  getInputs
}
