import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Middle = () => {
  const navigate = useNavigate()
  useEffect(() => {
    navigate('/preachings/1')
  }, [])
  return (
    <div>

    </div>
  )
}

export default Middle
