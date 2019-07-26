export const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)// to find certain element using a attribute value.
};