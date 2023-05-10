import React from 'react'

export const Button = (
  props: Pick<HTMLButtonElement, 'className'>,
) => {
  return <button className={props.className}></button>
}

const Parent = () => {
  return (
    <>
      {/* @ts-expect-error */}
      <Button></Button>

      <Button className="my-class"></Button>
    </>
  )
}
