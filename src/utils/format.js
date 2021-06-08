export const addressShortener = (address) => address ? `${address.substring(0, 6)}...${address.substring(address.length - 4, address.length)}` : ''

export const formatNumber = (num) => String(num).replace(/(.)(?=(\d{3})+$)/g, '$1,')
