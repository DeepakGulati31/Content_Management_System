import React from 'react'
import CreateScreenComponent from '../../Components/ScreenComponent/CreateScreenComponent';

import {useNavigate,useParams} from 'react-router-dom';

function CreateScreen() {
    let navigate=useNavigate();
    let params=useParams();

  return (
    <div>
    <CreateScreenComponent navigate={navigate} id={params.id}></CreateScreenComponent>
    </div>
  )
}

export default CreateScreen;
