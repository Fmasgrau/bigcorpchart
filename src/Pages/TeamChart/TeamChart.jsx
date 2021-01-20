import React, { useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux'
import Levels from '../../Components/TeamChart/Levels'
import { getEmployeesByLimits , getEmployeesById } from '../../Services/ChartApi'


export default function TeamChart() {

    const state = useSelector(state => state)
    const [rowData, setRowData] = useState([])
    const [dataExtra, setDataExtra] = useState([])


    /**
     * First render. I'm using this method because the all employees endpoint is not working.
     * On that you request for all employees (because in that case , are just 20)
     * and the manipulate the data to obtain the top level and then display the people who is below them,
     * just the next level only
     */

    useEffect(() => {
        let data
        let lista = []
        let managerId
        getEmployeesByLimits(0,20).then(res => {
            data = res.data
        }).then(() => {
            data.map(res => {
                if (res.manager === 0) {
                    lista.push(res)
                    managerId = res.id
                }
               
            })

            let auxList = []
            data.map(res => {
                if (res.manager === managerId) {
                    auxList.push(res)
                }
            })

            let piramyd = [...lista, auxList]

            setRowData(piramyd)

        })





    }, [])




/**
 * This useeffect is fired when someone wants to see more in one resource, so this will search the subordinates for the id selected.
 */

useEffect(() => {

    let id = state.display.display.managerId
    if(state.display.display.status === true){
        getEmployeesById(id).then(res => {
            setDataExtra(res.data)
        })
    }


}, [state.display.display])



/**
 * This useEffect is used for manage the data when a user want to see more or less levels.
 */
    useEffect(() => {


        let data = [...rowData]
        let cardSelected = state.display.display


        if (cardSelected !== "") {

            if (cardSelected.status) {
                data = data.filter((res, index) => index <= cardSelected.row)
                data = [...data, dataExtra]
            } else {

                if (cardSelected.row === 0) {
                    data = data[0]
                } else {
                    data = data.filter((res, index) => index <= cardSelected.row)
                }

            }
        }


        setRowData(data)


    }, [state.display.display, dataExtra])



    /**
     *This function display the data into the main page
     */

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
