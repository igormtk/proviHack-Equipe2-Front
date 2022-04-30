export const missingFieldsFunction = (info) => {
  let missing_fields = [];

  Object.entries(info).forEach(([key, value]) => {
    if (!value || (key === "products" && !value[0])) {
      const expr = key;
      switch (expr) {
        case "address":
          missing_fields.push("1 - Solicitar Coleta: Local");
          break;
        case "dateTime":
          missing_fields.push("1 - Solicitar Coleta: Data e Hora");
          break;
        case "products":
          missing_fields.push(
            "2 - Qual Produto Deseja Reciclar? Escolha pelo menos 1 produto"
          );
          break;
        default:
          missing_fields.push("3 - Quantidade de Sacas");
      }
    }
  });

  return missing_fields;
};
