const baseUrl = 'api.openweathermap.org/data/2.5/weather?q=';
const appId = '48887d7f6b72eb3be5c5fd8a8ed4ae1c';

async function loadData(city) {
    try {
        const response = await fetch(`${baseUrl}${city}&appid=${appId}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}
export default loadData;