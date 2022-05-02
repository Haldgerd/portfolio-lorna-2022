const generateYear = (): number => {
    const date: Date = new Date();
    const year: number = date.getFullYear();

    return year;
};

export default generateYear;
