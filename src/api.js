async function request(path) {
    const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
    const response = await fetch(url);
    return response.json();
}

export async function getCalendars() {
    return request(`/calendar`);
}

export async function getSchedule(arg = {}) {
    const params = new URLSearchParams(arg);
    return request(`/calendar/schedule?${params.toString()}`);
}