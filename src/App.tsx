import React from "react";
import "./App.scss";

import { DatePicker } from "@blueprintjs/datetime";

function App() {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-auto chat-sidebar">
          <div className="row">
            <div className="col my-3">
              <DatePicker
                className="chat-datepicker"
                highlightCurrentDay={true}
                shortcuts={true}
                showActionsBar={true}
                // onChange={(newDate) => this.handleChange(newDate)}
                // value={this.state.selectedDate}
              />
            </div>
          </div>
          <div className="row">
            <div className="col my-3">
              <div className="bp3-input-group">
                <span className="bp3-icon bp3-icon-search"></span>
                <input type="text" className="bp3-input" placeholder="搜索" />
                <button className="bp3-button bp3-minimal bp3-intent-primary bp3-icon-arrow-right"></button>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col my-3">
              <p>
                共 0 条记录
                <br />
                <small className="text-muted">
                  全文搜索仅展示最新的 500 条记录
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-auto h-100">
          <div className="h-100 overflow-auto"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
