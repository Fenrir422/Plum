export const required = value =>{
    if (value)return undefined;
    return 'Field is required'
}

export const maxLengthCreator =(count)=> (value)=> {
    if(value.length >count) return `Max length is ${count} symbols`;
    return undefined
}