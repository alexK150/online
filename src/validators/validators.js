export const requiredField = value => {
    if (value) return undefined;
    return 'Field is required';
}

//function which creates validator
export const maxLengthCreator = (maxLength) => value => {
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}
