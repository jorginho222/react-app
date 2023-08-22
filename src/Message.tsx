function Message() {
  const name = 'pepe'
  if (name)
    return <h1>Hello {name}</h1>
  return <h1>Hello nadie!</h1>
}

export default Message