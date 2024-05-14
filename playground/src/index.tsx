import { connectLogger } from '@reatom/framework'
import { ctx, mount } from '@reatom/jsx'

import { App } from './app'

import './index.css'
import './theme.css'

if (import.meta.env.MODE === 'development') {
  connectLogger(ctx)
}

mount(document.getElementById('app')!, <App />)
