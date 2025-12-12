import { useState } from 'react'
import { askQuestion } from '../services/api'

export default function ChatBox() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleAsk() {
    if (!question.trim()) return
    setLoading(true)
    try {
      const res = await askQuestion(question)
      // expecting { answer: '...' }
      if (res && res.answer) setAnswer(res.answer)
      else setAnswer(JSON.stringify(res))
    } catch (err) {
      setAnswer('Error: ' + (err.message || err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4 mt-6 border rounded bg-white shadow">
      <h2 className="text-xl font-semibold mb-3">Ask Your PDF</h2>

      <textarea
        className="w-full border p-3 rounded mb-3"
        rows="3"
        placeholder="Ask anything about the PDF..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />

      <button
        onClick={handleAsk}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Ask
      </button>

      {loading && <p className="text-blue-500 mt-2">Thinking...</p>}

      {answer && (
        <div className="mt-4 p-3 bg-gray-100 border rounded">
          <h3 className="font-semibold">Answer:</h3>
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}
