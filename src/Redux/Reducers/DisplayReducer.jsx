import { rowIndex } from '../Actions/DisplayAction'
import { DISPLAYROWS , ROWINDEX} from '../Actions/Types'

const initialState = {display : "", rowIndex : [{row: "0", col: "0", status: true}]}

export const display = (state = initialState, action) => {
    switch (action.type){
        case DISPLAYROWS:
            return {...state, display : action.payload}

        case ROWINDEX:
            let data = [...state.rowIndex]
            data = data.filter((res, index) => index <= action.payload.row)
            let len = data.length
            let val = false

            for (let i = 0; i < len; i++){
                if(data[i].row === action.payload.row){
                    data[i].col = action.payload.col
                    data[i].status = action.payload.status
                    val = true
                    break
                }

               
            }

            if(!val){
                data = [...state.rowIndex, action.payload]
            }
            return {...state, rowIndex : data}

        default:
            return state
    }
}