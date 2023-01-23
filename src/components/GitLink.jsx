import React from 'react'
import { Link } from 'react-router-dom'

const GitLink = () => (
    <div>
    <Link to="https://github.com/charlesknapp" style={{ display: "flex", alignItems: "right" }}>
      <span style={{color: 'white'}}>GitHub</span>
    </Link>
    </div>
)

export default GitLink