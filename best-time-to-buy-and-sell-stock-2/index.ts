const pricesInput = document.getElementById('pricesInput');
const searchBtn = document.getElementById('search');
const resultToShow = document.getElementById('result');

searchBtn?.addEventListener('click', maxProfit);

function maxProfit()
{
    const prices = JSON.parse(pricesInput.value);

    let result = 0;

    for (let i = 0; i < prices.length; i++)
    {
        if (prices[i] < prices[i + 1])
        {
            result = result + prices[i + 1] - prices[i];
        }
    }

    resultToShow.innerHTML = JSON.stringify(result);
};
