import { useFilter } from "../../../../context/filterContext";
import "./filter.css";
export const Filter = () => {
  const { state, dispatch } = useFilter();
  const { men, women, kid, latest } = state;
  return (
    <aside className="side-bar">
      <div className="sidebar-title heading-lg">FILTERS</div>
      <div className="list">
        <div className="list-title">SORT BY</div>
        <div className="check-list-item">
          <input
            name="checkbox"
            type="radio"
            onChange={() =>
              dispatch({ type: "sortBy", payload: "HIGH_TO_LOW" })
            }
          />
          <label>High To Low</label>
        </div>

        <div className="check-list-item">
          <input
            name="checkbox"
            type="radio"
            onChange={() =>
              dispatch({ type: "sortBy", payload: "LOW_TO_HIGH" })
            }
          />
          <label>Low To High</label>
        </div>
        <div className="check-list-item">
          <input
            name="checkbox"
            type="radio"
            onChange={() =>
              dispatch({ type: "sortBy", payload: "LOW_TO_HIGH_RATE" })
            }
          />
          <label>Low To High Rating</label>
        </div>
        <div className="check-list-item">
          <input
            name="checkbox"
            type="radio"
            onChange={() =>
              dispatch({ type: "sortBy", payload: "HIGH_TO_LOW_RATE" })
            }
          />
          <label>High To Low Rating</label>
        </div>
      </div>
      <div className="list">
        <div className="list-title">CATEGORIES</div>
        <div className="check-list-item">
          <input
            name="checkbox"
            type="checkbox"
            checked={men}
            onChange={(e) => {
              dispatch({ type: "Men", payload: e.target.checked });
            }}
          />
          Men's
        </div>

        <div className="check-list-item">
          <input
            name="checkbox"
            type="checkbox"
            checked={women}
            onChange={(e) => {
              dispatch({ type: "Women", payload: e.target.checked });
            }}
          />
          Women's
        </div>
        <div className="check-list-item">
          <input
            name="checkbox"
            type="checkbox"
            checked={kid}
            onChange={(e) => {
              dispatch({ type: "Kid", payload: e.target.checked });
            }}
          />
          Kid's
        </div>
        <div className="check-list-item">
          <input
            name="checkbox"
            type="checkbox"
            checked={latest}
            onChange={(e) => {
              dispatch({ type: "latest", payload: e.target.checked });
            }}
          />
          Latest
        </div>

        <div className="check-list-item">+ More</div>
      </div>
      <div className="list">
        <div className="list-title">RATING</div>
        <div className="check-list-item">
          <input
            name="checkbox"
            type="range"
            min="1"
            max="5"
            defaultValue="1"
            onChange={(e) => {
              dispatch({ type: "rating", payload: parseInt(e.target.value) });
            }}
          />
        </div>
        <button
          className="btn btn-dark filter-btn"
          onClick={() => {
            console.log("clicked");
            dispatch({ type: "clear" });
          }}
        >
          Clear
        </button>
      </div>
    </aside>
  );
};
