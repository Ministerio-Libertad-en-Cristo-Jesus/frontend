import { useNavigate } from 'react-router-dom'

const ArrowLeft = () => {
  const navigate = useNavigate()
  return (
    <svg onClick={() => { navigate('/offering') }} className="w-9 p-2 rounded hover:bg-[#dadada] hover:cursor-pointer fill-blueI hover:fill-yellow-500 transition-all duration-300" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className="" fillRule="evenodd" clipRule="evenodd" d="M7.70703 13.707C7.5195 13.8945 7.26519 13.9998 7.00003 13.9998C6.73487 13.9998 6.48056 13.8945 6.29303 13.707L0.293031 7.70698C0.105559 7.51945 0.000244141 7.26514 0.000244141 6.99998C0.000244141 6.73482 0.105559 6.48051 0.293031 6.29298L6.29303 0.29298C6.48163 0.110822 6.73423 0.0100274 6.99643 0.0123059C7.25863 0.0145843 7.50944 0.119753 7.69485 0.305161C7.88026 0.490569 7.98543 0.741382 7.9877 1.00358C7.98998 1.26578 7.88919 1.51838 7.70703 1.70698L3.41403 5.99998H15C15.2652 5.99998 15.5196 6.10534 15.7071 6.29287C15.8947 6.48041 16 6.73476 16 6.99998C16 7.2652 15.8947 7.51955 15.7071 7.70709C15.5196 7.89462 15.2652 7.99998 15 7.99998H3.41403L7.70703 12.293C7.8945 12.4805 7.99982 12.7348 7.99982 13C7.99982 13.2651 7.8945 13.5195 7.70703 13.707V13.707Z"/>
    </svg>
  )
}

export default ArrowLeft