const currentPrice = "https://wowtokenprices.com/current_prices.json"
// const oneDayPrice = "https://wowtokenprices.com/history_prices_1_day.json"
// const sevenDaysPrice = "https://wowtokenprices.com/history_prices_7_day.json"
// const oneMonthPrice = "https://wowtokenprices.com/history_prices_30_day.json"
// const fullHistoryPrice = "https://wowtokenprices.com/history_prices_full.json"
const wrapper = document.querySelector('main');

fetch(currentPrice)
    .then(function (response) {
        return response.json();
    })
    .then(function (myJson) {
        show(myJson);
    });

const show = (myJson) => {
    Object.keys(myJson).forEach(key => {
        let value = myJson[key];
        const div = document.createElement('div')
        div.classList.add(`${key}`)
        const lastChangeDate = new Date(value.time_of_last_change_utc_timezone)
        div.innerHTML = `<p class=${key}_paragraph>Region: <span>${value.region}</span></p><p>Current price: ${value.current_price}</p><p>Last Change: ${value.last_change} </p><p>${lastChangeDate.getHours()}:${lastChangeDate.getMinutes()}</p>`
        wrapper.appendChild(div)
    });

    document.querySelector('.china').addEventListener('click', () => {
        wrapper.textContent = ""
    })
}