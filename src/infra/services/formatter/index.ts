export const formatDate = (date: Date) => {
    return Intl.DateTimeFormat('pt-BR', {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }).format(date);
  };

export  const formatValue = (value: number) => {
    const number = parseFloat((value / 100).toFixed(2));
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(number);
  };

  