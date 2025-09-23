import { useState } from 'react'

function App() {
  return (
    <div>
      <div className="debug-test">
        🔥 CSS DEBUG TEST - If you see red background, CSS is loading!
      </div>

      <div style={{ padding: '20px' }}>
        <h1>Codeflow Nation</h1>
        <p>This is a test to see if basic styling works.</p>
        <button className="btn-primary">Test Button</button>
      </div>
    </div>
  )
}

export default App