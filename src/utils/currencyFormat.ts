

export const currencyFormat = (value: number) => {

    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'LPS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(value);

    
}