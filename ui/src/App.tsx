import { Outlet } from 'react-router-dom'
import { Menu } from './components/Menu'
import { TopBar } from './components/TopBar'

export function App() {

  return <div className="flex flex-col min-h-screen">
    <header className="h-20 border-white/15 border-t border-b">
      <TopBar />
    </header>

    <section className="flex flex-1">
      <aside className="w-44 bg-foreground border-white/15 border-r py-4">
        <Menu />
      </aside>

      <main className="px-10 py-6">
        <Outlet />
      </main>
    </section>
  </div>  
}