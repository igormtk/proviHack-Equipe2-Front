export const missingFieldsFunction = (info) => {
  let missing_fields = [];

  Object.entries(info).forEach(([key, value]) => {
    if (!value) {
      const expr = key;
      switch (expr) {
        case "cep":
          missing_fields.push("1 - Solicitar Coleta: Local - CEP");
          break;
        case "state":
          missing_fields.push("1 - Solicitar Coleta: Local - Estado");
          break;
        case "city":
          missing_fields.push("1 - Solicitar Coleta: Local - Cidade");
          break;
        case "district":
          missing_fields.push("1 - Solicitar Coleta: Local - Bairro");
          break;
        case "street":
          missing_fields.push("1 - Solicitar Coleta: Local - Rua");
          break;
        case "number":
          missing_fields.push("1 - Solicitar Coleta: Local - N° da residência");
          break;
        case "complement":
          missing_fields.push("1 - Solicitar Coleta: Local - Complemento");
          break;

        case "date":
          missing_fields.push("1 - Solicitar Coleta: Data e Hora");
          break;
        case "type":
          missing_fields.push("2 - Qual Produto Deseja Reciclar?");
          break;
        default:
          missing_fields.push("3 - Quantidade de Sacas");
      }
    }
  });

  return missing_fields;
};
