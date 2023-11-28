import React from 'react'
import Alert from 'react-bootstrap/Alert';

function AlertComp(props) {
  return (
    <div>
        <Alert key="primary" variant="primary">
            {props.message}
        </Alert>
    </div>
  )
}

export default AlertComp