// src/components/Editor/EditorPage.jsx
export default function EditorPage() {
  return (
    <div style={{ backgroundColor: '#111', color: 'white', height: '100vh', padding: '50px' }}>
      <h1>Panel de Control Multiplanetario</h1>
      <hr />
      <p>Aquí puedes escribir el nuevo código o textos para tu web.</p>
      <textarea style={{ width: '100%', height: '200px', marginTop: '20px' }} placeholder="Escribe aquí..." />
    </div>
  );
}