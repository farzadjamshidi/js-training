const pricesInput = document.getElementById('pricesInput');
const searchBtn = document.getElementById('search');
const resultToShow = document.getElementById('result');

searchBtn?.addEventListener('click', maxProfit);

function maxProfit()
{
    const prices = JSON.parse(pricesInput.value);

    let t = 0;

    for (t = prices.length - 1; t >= 0; t--)
    {
        if (prices[t] > prices[t - 1]) break;
    }

    let s = 0;

    for (s = 0; s < t; s++)
    {
        if (prices[s + 1] > prices[s]) break;
    }

    const max = Math.max(...prices);
    const min = Math.min(...prices);

    let result = 0;

    const slice1 = [];
    const slice2 = prices.slice(s, t + 1);

    result = Math.max(result, subMaxProfit(slice1) + subMaxProfit(slice2));

    for (let i = s; i < t + 1; i++)
    {

        slice1.push(slice2.shift());

        const max1 = Math.max(...slice1, 0);
        const min1 = Math.min(...slice1, 0);

        const max2 = Math.max(...slice2, 0);
        const min2 = Math.min(...slice2, 0);

        if (result < max1 - min1 + max2 - min2)
        {
            result = Math.max(result, subMaxProfit(slice1) + subMaxProfit(slice2));
            if (result === 2 * (max - min)) break;
        }

    }


    resultToShow.innerHTML = JSON.stringify(result);
};


function subMaxProfit(subPrices: number[]): number
{

    let result = 0;

    for (let j = 1; j < subPrices.length; j++)
    {
        for (let i = 0; i < subPrices.length - j; i++)
        {

            if (subPrices[i + j] - subPrices[i] > result)
            {
                result = subPrices[i + j] - subPrices[i];
            }

        }
    }

    return result;
}
