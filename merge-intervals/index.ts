const intervalsInput = document.getElementById('intervalsInput');
const mergeBtn = document.getElementById('merge');
const resultToShow = document.getElementById('result');

mergeBtn?.addEventListener('click', merge);

function merge()
{
    const intervals = JSON.parse(intervalsInput.value);

    const result: number[][] = [];

    const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

    result.push(sortedIntervals[0]);

    for (let i = 1; i < sortedIntervals.length; i++)
    {

        const lastInterval = result[result.length - 1];

        if (lastInterval[1] >= sortedIntervals[i][0])
        {

            result.pop();

            const newInterval = [lastInterval[0]];

            newInterval.push(Math.max(lastInterval[1], sortedIntervals[i][1]));

            result.push(newInterval);
        }
        else
        {
            result.push(sortedIntervals[i]);
        }
    }

    resultToShow.innerHTML = JSON.stringify(result);
}
