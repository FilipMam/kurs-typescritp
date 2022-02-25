const buttonElement = document.querySelector("button");
const calculatePrice = (originalPrice: number, hasDiscount: boolean) => {
    return hasDiscount ? originalPrice * 0.8 : originalPrice;
};

buttonElement.addEventListener("click", () => {
    const originalPrice: number = 50;
    const hasDiscount: boolean =
        new URLSearchParams(window.location.search).get("discount") === "true";
    console.log(calculatePrice(originalPrice, hasDiscount));
});
