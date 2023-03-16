export function getFormattedTime(time) {
    const date = new Date(time);
    let months = [
        'Янв', 'Февр', 'Марта',
        'Апр', 'Мая', 'Июня', 'Июля',
        'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'
    ];
    let formattedTime = '';

    let year = date.getFullYear();
    let month = months[date.getMonth()];
    let day = date.getDate();

    formattedTime = `${day} ${month} ${year}`;

    return formattedTime;
}