function getPrice(originalPrice, typePromotion = 'default') {

    if (typePromotion === "preOrder") {
        return originalPrice * 0.8;
    }

    if (typePromotion === "promotion") {
        return originalPrice <= 200 ? originalPrice * 0.9 : originalPrice - 30;
    }

    if (typePromotion === "blackFriday") {
        return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 50;
    }

    if (typePromotion === "11/11/2011") {
        return originalPrice <= 200 ? originalPrice * 0.8 : originalPrice - 50; 
    }

    if (typePromotion === "default") {
        return originalPrice;
    }
}

console.log(`----> PIRCE:::`, getPrice(200, 'promotion'))