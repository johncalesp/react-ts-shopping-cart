const CURRENTY_FORMATTER = new Intl.NumberFormat(undefined,{
    currency:'USD',
    style:'currency'
})

export const formatCurrency = (number:number) => {
    return CURRENTY_FORMATTER.format(number)
}