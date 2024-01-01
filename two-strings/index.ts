const string1Input = document.getElementById('string1Input');
const string2Input = document.getElementById('string2Input');
const searchBtn = document.getElementById('search');
const result = document.getElementById('result');

searchBtn?.addEventListener('click', search);

function search()
{
    const mainString: string = string1Input.value;

    const testString: string = string2Input.value;

    if (testString.length > mainString.length)
    {
        result.innerHTML = "testString length is greater than mainString length";
        return;
    }

    for (let windowLength = testString.length; windowLength <= mainString.length; windowLength++)
    {
        for (let sliderIndex = 0; sliderIndex <= mainString.length - windowLength; sliderIndex++)
        {
            const stringForCheck = mainString.slice(sliderIndex, sliderIndex + windowLength);

            if (checkOneStringIncludesOtherStringLetters(stringForCheck, testString))
            {
                result.innerHTML = stringForCheck;
                return;
            }
        }
    }

    result.innerHTML = "No Answer";

}

function checkOneStringIncludesOtherStringLetters(stringForCheck: string, testString: string)
{
    for (let letter = 1; letter <= testString.length; letter++)
    {
        if (!stringForCheck.includes(testString[letter - 1])) return false;
    }

    return true;
}
