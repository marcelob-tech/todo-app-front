import React from 'react'
import PropTypes from 'prop-types'

const pageHeader = props => {
  return (
    <header className="pageHeader">
        <h2>{props.name} <small>{props.small}</small></h2>
    </header>
  )
}

export default pageHeader;