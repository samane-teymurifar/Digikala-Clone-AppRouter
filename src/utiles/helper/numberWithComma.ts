export const removeCommasFromNumber = (x: number | string) => {
    if (x === undefined) return x;
    return x.toString().replaceAll(',', '');
  };
  

export const numberWithCommas = (x: number | string) => {
    if (x === undefined) return x;
    // new Intl.NumberFormat('fa-IR', {minimumFractionDigits: 0,maximumFractionDigits: 0}).format(number)
    return removeCommasFromNumber(x)
      .toString()
      .replaceAll(/\B(?=(\d{3})+(?!\d))/g, ',');
  };
  