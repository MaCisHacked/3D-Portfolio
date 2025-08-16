import React, { useEffect, useState } from 'react'
import { useDeskStore } from '../store.js'

function Folder({ name, onOpen }) {
  return (
    <div className="folder" onClick={()=>onOpen(name)}>
      <div className="icon" aria-hidden />
      <div>{name}</div>
    </div>
  )
}

export default function ScreenUI() {
  const { openApp, setOpenApp } = useDeskStore()
  const [projects, setProjects] = useState([])

  useEffect(()=>{
    fetch('/content/projects.json').then(r=>r.json()).then(setProjects).catch(()=>{})
  },[])

  return (
    <div className="screen-ui" role="dialog" aria-label="Virtual desktop">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:8}}>
        <strong>my-computer</strong>
        <a className="lite-link" href="./lite.html" target="_blank" rel="noreferrer">open ultra-fast resume ↗</a>
      </div>

      <div className="folders" aria-label="Folders">
        <Folder name="Projects" onOpen={setOpenApp} />
        <Folder name="About" onOpen={setOpenApp} />
        <Folder name="Blog" onOpen={setOpenApp} />
        <Folder name="Contact" onOpen={setOpenApp} />
      </div>

      {openApp && (
        <div className="window" role="region" aria-live="polite">
          <div className="titlebar">
            <strong>{openApp}</strong>
            <button className="close" onClick={()=>setOpenApp(null)}>close</button>
          </div>

          {openApp === 'Projects' && (
            <div>
              {projects.map(p => (
                <div key={p.title} style={{marginBottom:12}}>
                  <div style={{fontWeight:600}}>{p.title}</div>
                  <div style={{opacity:.8}}>{p.desc}</div>
                  <div style={{marginTop:4}}><a href={p.link} target="_blank" rel="noreferrer">view ↗</a></div>
                </div>
              ))}
              {projects.length === 0 && <div>No projects yet — edit <code>/public/content/projects.json</code>.</div>}
            </div>
          )}
          {openApp === 'About' && (
            <div>
              <p>Hi — I’m <strong>Your Name</strong>. I study cybersecurity and build systems + 3D web experiments.</p>
              <ul>
                <li>Focus: security, networking, systems</li>
                <li>Languages: C, Python, JS, (learning Rust/OCaml)</li>
                <li>Interests: low-latency systems, web graphics</li>
              </ul>
            </div>
          )}
          {openApp === 'Blog' && (
            <div>
              <p>Write technical posts here (e.g., bug bounty write-ups). You can turn this into Markdown rendering later.</p>
            </div>
          )}
          {openApp === 'Contact' && (
            <div>
              <p>Email: <a href="mailto:you@example.com">you@example.com</a></p>
              <p>GitHub: <a href="https://github.com/">github.com/yourhandle</a></p>
              <p>LinkedIn: <a href="https://linkedin.com/">linkedin.com/in/yourhandle</a></p>
              <p>(You can replace this with a serverless contact form later.)</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
