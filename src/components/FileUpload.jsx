import { useState } from 'react'
import { uploadPDF } from '../services/api'

export default function FileUpload({ onUploaded }) {
  const [loading, setLoading] = useState(false)
  const [fileName, setFileName] = useState('')

  async function handleUpload(e) {
    const file = e.target.files[0]
    if (!file) return
    setFileName(file.name)
    setLoading(true)
    try {
      const result = await uploadPDF(file)
      onUploaded(result)
    } catch (err) {
      onUploaded('Error: ' + (err.message || err))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4 border rounded bg-white shadow">
      <h2 className="text-xl font-semibold mb-3">Upload PDF</h2>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleUpload}
        className="block w-full text-sm mb-3"
      />

      {fileName && <div className="text-sm text-gray-600">Selected: {fileName}</div>}
      {loading && <p className="mt-2 text-blue-500">Embedding PDF...</p>}
    </div>
  )
}
