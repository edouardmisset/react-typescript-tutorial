type ModalProps = { buttonColor: string } & (
  | {
      variant: 'no-title'
    }
  | {
      variant: 'title'
      title: string
    }
)

export const Modal = (props: ModalProps) => {
  return props.variant === 'no-title' ? (
    <div>No title</div>
  ) : (
    <div>Title: {props.title}</div>
  )
}

export const Test = () => {
  return (
    <div>
      {/* @ts-expect-error */}
      <Modal buttonColor="red" />
      <Modal
        buttonColor="red"
        variant="no-title"
        // @ts-expect-error
        title="Oh dear"
      />
      <Modal variant="title" title="Hello" buttonColor="red" />
    </div>
  )
}
