// import { BigNumber } from 'bignumber.js'

// export const ROUND_PRECISION = 2
// export const MAX_PRECISION = 18

// export const formatWeiToNumber = (value, decimals = 18) => new BigNumber(value).div(10 ** decimals).toNumber()
// export const formatWei = (value, round = ROUND_PRECISION, decimals = 18) => new BigNumber(value).div(10 ** decimals).toFormat(round, BigNumber.ROUND_HALF_UP)
// export const formatEther = (value, round = ROUND_PRECISION) => new BigNumber(value).toFormat(round, BigNumber.ROUND_HALF_UP)

// export const toWei = (value, decimals = 18) => {
//   if (!value) {
//     return 0
//   }
//   return new BigNumber(value).multipliedBy(10 ** decimals).toFixed()
// }

export const addressShortener = (address) => address ? `${address.substring(0, 6)}...${address.substring(address.length - 4, address.length)}` : ''

// export const formatNumber = (num) => String(num).replace(/(.)(?=(\d{3})+$)/g, '$1,')
