import axios from 'axios'
import React, { useEffect, useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Levels from '../../Components/TeamChart/Levels'
import data from '../../Dummy/Data/employees.json'


export default function TeamChart() {

    const state = useSelector(state => state)
    const dispatch = useDispatch()


    const [rowData, setRowData] = useState([])
    const [dataExtra, setDataExtra] = useState([])

    useEffect(() => {
        let data
        let lista = []
        let managerId
        axios.get(`https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api?offset=${0}&limit=${20}`).then(res => {
            data = res.data
        }).then(() => {
            data.map(res => {
                if (res.manager === 0) {
                    console.log("res manager", res.manager, "data",res)
                    lista.push(res)
                    managerId = res.id
                }
               
            })

            let auxList = []
            data.map(res => {
                console.log("res.manager", res.manager, "res.id", res.id)
                if (res.manager === managerId) {
                    console.log("pushea", res)
                    auxList.push(res)
                }
            })

            let piramyd = [...lista, auxList]

            setRowData(piramyd)

        })





    }, [])






useEffect(() => {

    let id = state.display.display.managerId
    if(state.display.display.status === true){
        axios.get(`https://2jdg5klzl0.execute-api.us-west-1.amazonaws.com/default/EmployeesChart-Api?manager=${id}`).then(res => {
            setDataExtra(res.data)
        })
    }


}, [state.display.display])


    useEffect(() => {


        let len = rowData.length
        let data = [...rowData]
        let indexRow = state.display.rowIndex
        let cardSelected = state.display.display

        console.log("card", cardSelected)

        if (cardSelected !== "") {

            if (cardSelected.status) {
                data = data.filter((res, index) => index <= cardSelected.row)
                data = [...data, dataExtra]
            } else {

                console.log("row", cardSelected.row, "col", cardSelected.col)
                if (cardSelected.row === 0) {
                    data = data[0]
                } else {
                    data = data.filter((res, index) => index <= cardSelected.row)
                }

            }
        }


        setRowData(data)


    }, [state.display.display, dataExtra])




    const _showChart = () => {

        let data = []

        let list = [...rowData]

        list.map((levels, index) => {
            if (levels.length === undefined) {

                data.push(<div className="row" id={index} key={index}>
                    <Levels employee={levels} id={index}></Levels>
                </div>)
            }
            else {
                let row = []

                row.push(<div className="row" id={index}>

                    {levels.map((items, index) => {
                        return <Levels employee={items} key={index} id={index}></Levels>
                    })}
                </div>)
                data.push(row)


            }

        })



        return data
    }

    return (
        <>
            <div className="container-chart">
                {_showChart()}
            </div>
        </>
    )
}
