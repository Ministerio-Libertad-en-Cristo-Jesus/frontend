import { useState } from 'react'
import TextArea from '../components/TextArea'

const CreatePreach = () => {
  const [text, setText] = useState('')
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const { value } = e.target
    setText(value)
  }

  return (
    <div className="w-full p-10 lg:p-24 mt-24">
      <TextArea name="text" value={text} onChange={handleChange} placeholder="enseñanza" error={false} errorMessage=""/>
      <p>{JSON.stringify(text.split('\n\n'))}</p>
    </div>
  )
}

export default CreatePreach
