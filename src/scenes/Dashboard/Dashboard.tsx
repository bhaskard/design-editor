import { Switch, Route, NavLink } from 'react-router-dom'
import Icons from '@components/icons'
import { useStyletron } from 'baseui'
import Templates from './Templates'
import Creations from './Creations'
import Uploads from './Uploads'

function Dashboard() {
  const [css] = useStyletron()
  const navLink = css({
    padding: '1rem 0 1rem 1rem',
    width: '180px',
    textAlign: 'center',
    textDecoration: 'none',
    fontFamily: 'Uber Move Text',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    color: '#000',
  })

  const activeNavLink = css({
    color: 'rgba(255,255,255)',
    background: '#000',
  })
  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <div style={{ width: '300px', background: '#E7ECEF', display: 'flex', flexDirection: 'column' }}>
        <div style={{ paddingTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icons.Logo size={45} />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '0.5rem',
            flex: 1,
            justifyContent: 'center',
            paddingBottom: '8rem',
          }}
        >
          <NavLink exact activeClassName={activeNavLink} className={navLink} to="/">
            <Icons.Templates size={24} />
            Templates
          </NavLink>
          <NavLink activeClassName={activeNavLink} className={navLink} to="/creations">
            <Icons.Elements size={24} />
            My creations
          </NavLink>
          <NavLink activeClassName={activeNavLink} className={navLink} to="/uploads">
            <Icons.Uploads size={24} />
            My uploads
          </NavLink>
        </div>
        <div
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingBottom: '1.5rem' }}
        >
          editor
        </div>
      </div>
      <div style={{ flex: 1, display: 'flex' }}>
        <Switch>
          <Route path="/creations" component={Creations} />
          <Route path="/uploads" component={Uploads} />
          <Route path="/" component={Templates} />
        </Switch>
      </div>
    </div>
  )
}

export default Dashboard
