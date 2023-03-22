
export const convertMoney = (money) => {
    const currency  = money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "VND";
    return currency
}