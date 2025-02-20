import Index from "../../Index";
import PageIndex from "../../PageIndex";

function TopUserTab() {
  return (
    <>
      <div className="top-user-main">
        <div className="user-scroll">
          <Index.Table className="top-user-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="name-wrapper">
                    <img
                      src={PageIndex.Png.avtar}
                      alt="user"
                      className="table-user-img"
                    />
                    <div className="name-location-sec">
                      <p className="common-text user-name-text">Ashley Lopez</p>
                      <p className="common-text">Location</p>
                    </div>
                  </div>
                </td>
                <td>(212) 535-8263 </td>
                <td>jacobjackson1988@yahoo.com</td>
                <td>
                  <div className="tabele-action-sec position-relative">
                    <Index.Button
                      className="dot-btn"
                      onClick={() => {
                        const actionList =
                          document.querySelector(".action-list");
                        if (actionList) {
                          actionList.classList.toggle("active");
                        }
                      }}
                    >
                      <img
                        src={PageIndex.Png.more}
                        alt="menu"
                        className="dot-ic"
                      />
                    </Index.Button>
                    <div className="action-list ">
                      <ul className="action-ul">
                        <li className="action-li">
                          <Index.Link className="action-link" to={"/"}>
                            Action
                          </Index.Link>
                        </li>
                        <li className="action-li">
                          <Index.Link className="action-link" to={"/"}>
                            Action
                          </Index.Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="name-wrapper">
                    <img
                      src={PageIndex.Png.avtar}
                      alt="user"
                      className="table-user-img"
                    />
                    <div className="name-location-sec">
                      <p className="common-text user-name-text">Ashley Lopez</p>
                      <p className="common-text">Location</p>
                    </div>
                  </div>
                </td>
                <td>(212) 535-8263 </td>
                <td>jacobjackson1988@yahoo.com </td>
                <td>
                  <div className="tabele-action-sec position-relative">
                    <Index.Button className="dot-btn">
                      <img
                        src={PageIndex.Png.more}
                        alt="menu"
                        className="dot-ic"
                      />
                    </Index.Button>
                    <div className="action-list">
                      <ul className="action-ul">
                        <li className="action-li">
                          <Index.Link className="action-link" to={"/"}>
                            Action
                          </Index.Link>
                        </li>
                        <li className="action-li">
                          <Index.Link className="action-link" to={"/"}>
                            Action
                          </Index.Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="name-wrapper">
                    <img
                      src={PageIndex.Png.avtar}
                      alt="user"
                      className="table-user-img"
                    />
                    <div className="name-location-sec">
                      <p className="common-text user-name-text">Ashley Lopez</p>
                      <p className="common-text">Location</p>
                    </div>
                  </div>
                </td>
                <td>(212) 535-8263 </td>
                <td>jacobjackson1988@yahoo.com </td>
                <td>
                  <div className="tabele-action-sec position-relative">
                    <Index.Button className="dot-btn">
                      <img
                        src={PageIndex.Png.more}
                        alt="menu"
                        className="dot-ic"
                      />
                    </Index.Button>
                    <div className="action-list">
                      <ul className="action-ul">
                        <li className="action-li">
                          <Index.Link className="action-link" to={"/"}>
                            Action
                          </Index.Link>
                        </li>
                        <li className="action-li">
                          <Index.Link className="action-link" to={"/"}>
                            Action
                          </Index.Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="name-wrapper">
                    <img
                      src={PageIndex.Png.avtar}
                      alt="user"
                      className="table-user-img"
                    />
                    <div className="name-location-sec">
                      <p className="common-text user-name-text">Ashley Lopez</p>
                      <p className="common-text">Location</p>
                    </div>
                  </div>
                </td>
                <td>(212) 535-8263 </td>
                <td>jacobjackson1988@yahoo.com </td>
                <td>
                  <div className="tabele-action-sec position-relative">
                    <Index.Button className="dot-btn">
                      <img
                        src={PageIndex.Png.more}
                        alt="menu"
                        className="dot-ic"
                      />
                    </Index.Button>
                    <div className="action-list">
                      <ul className="action-ul">
                        <li className="action-li">
                          <Index.Link className="action-link" to={"/"}>
                            Action
                          </Index.Link>
                        </li>
                        <li className="action-li">
                          <Index.Link className="action-link" to={"/"}>
                            Action
                          </Index.Link>
                        </li>
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
  );
}

export default TopUserTab;
