const BASE_URL = '/api/pdf'

export async function uploadPDF(file) {
  const formData = new FormData()
  formData.append('file', file)

  const res = await fetch(`${BASE_URL}/embed`, {
    method: 'POST',
    body: formData,
  })

  if (!res.ok) throw new Error(await res.text())
  return await res.text()
}

export async function askQuestion(question) {
  const res = await fetch(`${BASE_URL}/ask`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question }),
  })

  if (!res.ok) {
    const txt = await res.text()
    throw new Error(txt)
  }
  return await res.json()
}
