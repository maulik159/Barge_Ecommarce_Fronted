import PageIndex from "../container/PageIndex";

function Search() {
  return (
    <>
      <div className="search-sec">
        <div className="input-wrapper position-relative">
          <img src={PageIndex.Png.search} alt="search" className="search-ic" />
          <input
            type="text"
            className="custom-input"
            placeholder="Search order ID..."
          />
        </div>
      </div>
    </>
  );
}

export default Search;
