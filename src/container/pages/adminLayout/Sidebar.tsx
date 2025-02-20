import Index from '../../Index'
import PageIndex from '../../PageIndex'

function Sidebar() {
  return (
    <>
     <div className="sidebar-sec">
            <div className="sidebar-logo-sec">
              <Index.Link to={'/'}>
              <img src={PageIndex.Svg.logo} alt="logo" className='sidebar-logo' />
              </Index.Link>
            </div>
            <div className="sidebar-link-sec">
              <ul className="sidebar-ul">
                <li className="sidebar-li active">
                  <Index.Link to={'/'} className="sidebar-link">Dashboard</Index.Link>
                </li>
              </ul>
              
            </div>
          </div>
    </>
  )
}

export default Sidebar