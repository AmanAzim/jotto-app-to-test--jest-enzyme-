import checkPropTypes from 'check-prop-types'



export const findByTestAttr=(wrapper, val)=>{
    return wrapper.find(`[data-test='${val}']`)// to find certain element using a attribute value.
};

export const checkProps=(Component, props)=>{
    const propError=checkPropTypes(Component.propTypes, {...props}, 'props', Component.name);
    expect(propError).toBeUndefined();
};