const formatDate = (value) => {
    const date = new Date(value);
    if (!date)
        return "";
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    return day + " " + month;
};

const trimDesc=(desc)=>{
    if (!desc)
        return ''
    const trimedStr= desc.slice(0, 15)
    return trimedStr+'...'
}

export { formatDate ,trimDesc}