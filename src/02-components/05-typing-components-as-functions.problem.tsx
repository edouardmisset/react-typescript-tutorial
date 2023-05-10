import React from 'react'

interface Props {
  className: string
  children?: React.ReactNode
}

export const Button = (props: Props) => {
  return <button className={props.className}>{props.children}</button>
}

const Parent = () => {
  return (
    <>
      <Button className="my-class"></Button>
      <Button className="my-class">123</Button>
    </>
  )
}
