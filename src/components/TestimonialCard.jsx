

function TestimonialCard({ imageUrl, name, rating, message }) {
  return (
    <div>
        <div>
            <p>{rating}</p>
            <img src={imageUrl} alt="profile image" />
            <p>{message}</p>
        </div>
        <div>
            <p>{name}</p>
        </div>
    </div>
  )
}

export default TestimonialCard