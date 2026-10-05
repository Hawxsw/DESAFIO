export function Commissioncalc(sales) {
    if (sales <= 100) {
        return 0
    }

    if (sales < 500) {
        return sales * 0.01
    }

    return sales * 0.05

}