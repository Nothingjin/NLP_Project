import { useRef, useState } from 'react'
import './App.css'

const TEXT = [...'안녕하세요']

export default function App() {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 50, y: 50 })
  const [hover, setHover] = useState(false)

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100,
    })
  }

  return (
    <main className="stage">
      <h1
        ref={ref}
        className={`hello ${hover ? 'hover' : ''}`}
        style={{ '--mx': `${pos.x}%`, '--my': `${pos.y}%` }}
        onMouseMove={onMove}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {TEXT.map((ch, i) => (
          <span key={i} className="char" style={{ '--i': i }}>
            {ch}
          </span>
        ))}
      </h1>
      <p className="hint">마우스를 올려보세요</p>
    </main>
  )
}
