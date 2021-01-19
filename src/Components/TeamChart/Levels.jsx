import React, { useEffect, useRef, useState } from 'react'
import './Levels.css'
import { boy, boy1, girl, girl1 } from './images'
import { displayRows, rowIndex } from '../../Redux/Actions/DisplayAction'
import { useDispatch, useSelector } from 'react-redux'

export default function Levels({ employee, id }) {


    const [selected, setSelected] = useState(false)
    const [firstRow, setFirstRow] = useState()
    const images = [boy, boy1, girl, girl1]
    const indexRef = useRef()

    const dispatch = useDispatch()
    const state = useSelector(state => state)



    // useEffect(() => {
    // let rowIndex_1 = state.display.rowIndex
    // let len = state.display.rowIndex.length
    // for (let i = 0; i < len; i++) {
    //     if (rowIndex_1[i].row === indexRef.current.parentNode.id && rowIndex_1[i].col === indexRef.current.id && rowIndex_1[i].status === true) {
    //         console.log("Se pone -")
    //         setSelected(true)
    //     }
    //     else {
    //         console.log("Se pone +")
    //         setSelected(false)
    //     }
    // }


    // }, [state.display.rowIndex])


    useEffect(() => {
        setSelected(false)
        console.log(state.display.rowIndex.length)
        if (state.display.rowIndex.length > 0) {
            state.display.rowIndex.map(res => {
                if (res.row === indexRef.current.parentNode.id && res.col === indexRef.current.id) {
                    if (res.status === true) {
                        setSelected(true)
                    } else if (res.status === false) {
                        setSelected(false)
                    }
                }
            })
        }

        
    }, [state.display.rowIndex])


    

    const _showMore = (e) => {
        e.preventDefault()

        let action = state.display.rowIndex.find(element => (element.row === indexRef.current.parentNode.id && element.col === indexRef.current.id))
     
        if (typeof action === "object") {

            action = action.status
        } else {
            action = ""

        }

        setSelected(!selected)

        if (action !== undefined) {
            dispatch(rowIndex({ row: indexRef.current.parentNode.id, col: indexRef.current.id, status: !action }))
            dispatch(displayRows({ row: indexRef.current.parentNode.id, col: indexRef.current.id, status: !action , managerId: employee.id}))
        }
    }



    return (


        <div className={`card ${selected ? "selected" : ""}`} ref={indexRef} id={id}>
            <div className="card-container">
                <img src={images[Math.floor(Math.random() * (4 - 1) + 1)]} alt="avatar"></img>
                <span>{employee.first} {employee.last}</span>
                <span><strong>Department: </strong>{employee.department}</span>
                <span><strong>Office: </strong>{employee.office === null ? "N/A" : employee.office}</span>
                <span><a href="#" onClick={(e) => _showMore(e)}>{selected ? "-" : "+"}</a></span>
            </div>
        </div>


    )
}
