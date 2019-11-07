
export const updateObjectInArray = (item, itemId, objPropName, newObjProps) => {
    item.map(u => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}