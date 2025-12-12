import { useState } from 'react'
import FileUpload from './components/FileUpload'
import ChatBox from './components/ChatBox'

export default function App() {
  const [embedMessage, setEmbedMessage] = useState('')

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">PDF Chat Assistant</h1>

        <FileUpload onUploaded={setEmbedMessage} />

        {embedMessage && (
          <div className="mt-4 p-3 bg-green-100 border border-green-400 rounded">
            {embedMessage}
          </div>
        )}

        <ChatBox />
      </div>
    </div>
  )
}
