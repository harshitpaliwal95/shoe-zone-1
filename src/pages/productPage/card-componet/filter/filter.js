export const Filter = () => {
  return (
    <aside className="side-bar">
      <div className="sidebar-title heading-lg">FILTERS</div>
      <div className="list">
        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> Men
        </div>

        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> Women
        </div>
        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> Kids
        </div>
      </div>
      <div className="list">
        <div className="list-title">CATEGORIES</div>
        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> Gym Shoes
        </div>

        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> Running Shoes
        </div>
        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> Jordan
        </div>
        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> Cycling Shoes
        </div>
        <div className="check-list-item">+ More</div>
      </div>
      <div className="list">
        <div className="list-title">PRICE</div>
        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> $0 - $25
        </div>
        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> $25 - $100
        </div>
        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> $100 - $150
        </div>
        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> $150 - $280
        </div>
      </div>
      <div className="list">
        <div className="list-title">
          RATING <i className="bi bi-star-fill"></i>
        </div>
        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> 5 Only
        </div>
        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> 4 And Up
        </div>
        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> 3 And UP
        </div>
        <div className="check-list-item">
          <input name="checkbox" type="checkbox" /> 2 And UP
        </div>
      </div>
    </aside>
  );
};
