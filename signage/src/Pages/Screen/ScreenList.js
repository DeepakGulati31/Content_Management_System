import React from 'react'
import ScreenListComponent from '../../Components/ScreenComponent/ScreenListComponent'
import { useNavigate, useParams } from 'react-router-dom'


function ScreenList() {
  let navigate = useNavigate()
  let params=useParams()
return (

  <div>
    <ScreenListComponent navigate={navigate} id={params}></ScreenListComponent>
  </div>
)
}

export default ScreenList;
