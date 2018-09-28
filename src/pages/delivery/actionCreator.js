export const getGoodInfoById = () => {
    return (dispatch) => {
        fetch('/api/floorlist')
            .then(response => response.json())
            .then(result => {
                dispatch({
                    type: 'getGoodInfo',
                    data: result.data
                })
            })
    }
}