export const getPercentage = (updateObj) => {
    return ((Math.ceil((updateObj.sold/updateObj.nftTotal)*100)).toString() + "%")
}