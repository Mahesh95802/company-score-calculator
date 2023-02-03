const saveData = async () => {
    console.log('saveData service called')
    const response = await fetch(`https://store-0001.s3.amazonaws.com/input.csv`, {
        method: 'GET'
    });
    console.log(response)
    const data = await response.text();
    return data;
}

module.exports = { saveData };