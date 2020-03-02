import config from 'config';
import { authHeader } from '../_helpers';

export const chartService = {
    getChartInfo
    // getCompanyInfo,
    // serchCompanyInfo
};

function getChartInfo() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
    };
    console.log('getChartInfo왔음=======');
    return fetch(`${config.apiUrl}/stock/083660`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text;
        // if (response.status !== 200) {
        //     if (response.status === 401) {
        //         logout();
        //         location.reload(true);
        //     }
        //     const error = (data && data.message) || response.statusText;
        //     return Promise.reject(error);
        // }
        // console.log('response.next'+data);
        return data;
    });
}
