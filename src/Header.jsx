import React from 'react'
const Header = (props) => {
  return (
    <div>{props.title}</div>
  )
}

Header.defaultProps ={
  title:"Todo list"
}
export default Header