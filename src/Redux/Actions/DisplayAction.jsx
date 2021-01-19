import { DISPLAYROWS, ROWINDEX } from './Types'

export const displayRows = (value) => ({
    type: DISPLAYROWS,
    payload: value
})


export const rowIndex = (value) => ({
    type: ROWINDEX,
    payload: value
})