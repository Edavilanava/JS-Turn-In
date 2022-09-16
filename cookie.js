let cookies = 0;

let cookiesPerClick = 1;

let cookiesPerSecond= 0;

let cursorUpgrade = 0;

let cursorUpgradeCost= 100;

let currentCursorUpgradeHTML = document.querySelector(".current-cursor-amount");

let cursorUpgradeCostHTML = document.querySelector(".current-cursor-cost");

let amountOfCookiesHTML = document.querySelector(".amount-of-cookies");

let cookiesPerSecHTML = document.querySelector(".cookies-per-second");

document.querySelector(".cookie-img").addEventListener("click", function () {
    cookies += cookiesPerClick + cursorUpgrade;
    amountOfCookiesHTML.innerHTML = `${cookies} Cookies`;
});

document
    .querySelector(".cursor-upgradebtn")
    .addEventListener("click", function () {
    if (cookies >= cursorUpgradeCost) {
        cursorUpgrade++;
        cookies -= cursorUpgradeCost;
        amountOfCookiesHTML.innerHTML = `${cookies} Cookies`;
        cursorUpgradeCost += 100;
        cursorUpgradeCostHTML.innerHTML = `Current Cursor Upgrade: ${cursorUpgradeCost}`;
        currentCursorUpgradeHTML.innerHTML = `Cursor Upgrade: ${cursorUpgrade}`;
    }
});
