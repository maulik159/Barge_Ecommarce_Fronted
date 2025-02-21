import Index from "../../Index";
import PageIndex from "../../PageIndex";

function TopOrderListed() {
  return (
    <>
    <div className="top-user-main">
      <div className="user-scroll">
      <Index.Table className="top-user-table">
        <thead>
          <tr>
            <th>IMPA Code</th>
            <th>Product Name</th>
            <th>No. of Times ordered</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
                  <p className="common-text">d9w87d</p>
            </td>
            <td>Lorem Ipsum</td>
            <td>564</td>
            <td>
              <div className="tabele-action-sec position-relative">
                  <Index.Button className="dot-btn">
                      <img src={PageIndex.Png.more} alt="menu" className="dot-ic" />
                  </Index.Button>
                  <div className="action-list">
                      <ul className="action-ul">
                          <li className="action-li"><Index.Link className="action-link" to={'/'}>Action</Index.Link></li>
                          <li className="action-li"><Index.Link className="action-link" to={'/'}>Action</Index.Link></li>
                      </ul>
                  </div>
              </div>
            </td>
          </tr>
        </tbody>
      </Index.Table>
      </div>
    </div>
  </>
  )
}

export default TopOrderListed