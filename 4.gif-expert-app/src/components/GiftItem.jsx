

export const GiftItem = () => {
  return (
    <div>
    {images.map(({id, title}) => (
        <GiftItem key={id}/>
    ))}
    </div>
  )
}
