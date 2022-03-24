import { useFilter } from "../../../../context/filterContext";
import { ACTION } from "../../../../action/action";

export const Filter = ({ shortBy }) => {
  const { state, dispatch } = useFilter();

  return (
    <aside className="side-bar">
      <div className="sidebar-title heading-lg">FILTERS</div>
      <div className="list">
        <div className="list-title">SORT BY</div>
        <div className="check-list-item">
          <input
            name="checkbox"
            type="radio"
            onChange={() => dispatch({ type: ACTION.HIGH_TO_LOW })}
          />{" "}
          <label>High To Low</label>
        </div>

        <div className="check-list-item">
          <input
            name="checkbox"
            type="radio"
            onChange={() => dispatch({ type: ACTION.LOW_TO_HIGH })}
          />{" "}
          <label>Low To High</label>
        </div>
      </div>
      <div className="list">
        <div className="list-title">CATEGORIES</div>
        <div className="check-list-item">
          <input
            name="checkbox"
            type="checkbox"
            onChange={() => {
              dispatch({ type: ACTION.CATEGORY, payload: "Men" });
            }}
          />{" "}
          Men's
        </div>

        <div className="check-list-item">
          <input
            name="checkbox"
            type="checkbox"
            onChange={() => {
              dispatch({ type: ACTION.CATEGORY, payload: "Women" });
            }}
          />{" "}
          Women's
        </div>
        <div className="check-list-item">
          <input
            name="checkbox"
            type="checkbox"
            onChange={() => {
              dispatch({ type: ACTION.CATEGORY, payload: "Kid" });
            }}
          />{" "}
          Kid's
        </div>

        <div className="check-list-item">+ More</div>
      </div>
      <div className="list">
        <div className="list-title">RATING</div>
        <div className="check-list-item">
          <input name="checkbox" type="range" min="1" max="5" />
        </div>
      </div>
    </aside>
  );
};
