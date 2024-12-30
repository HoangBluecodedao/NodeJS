/**
 * Giảm giá khi người dùng đặt trước một sản phẩm của VINFAST
 * @param {*} originalPrice
 * @returns
 */
function preOrderPrice(originalPrice) {
    return originalPrice * 0.8; 
}

/**
 * Tiếp tục thêm tính năng khuyến mãi thông thường
 * @param {*} originalPrice
 * @returns
 */
function promotionPrice(originalPrice) {
    return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
}

/**
 * Giá mặc định
 * @param {*} originalPrice
 * @returns
 */
function defaultPrice(originalPrice) {
    return originalPrice;
}

/**
 * Giá mặc định
 * @param {*} originalPrice
 * @returns
 */
function dayPrice(originalPrice) {
    return originalPrice * 0.6;
}

/**
 * Giá mặc định
 * @param {*} originalPrice
 * @returns
 */
function blackFridayPrice(originalPrice) {
    return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 50;
}

const getPriceStrategies = {
    preOrder: preOrderPrice,
    promotion: promotionPrice,
    blackFriday: blackFridayPrice,
    dayPrice,
    default: defaultPrice,
}

function getPrice(originalPrice, typePromotion) {
    return getPriceStrategies[typePromotion](originalPrice);
}

console.log('--->>', getPrice(200, 'default'))