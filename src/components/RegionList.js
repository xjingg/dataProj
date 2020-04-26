import React, { Component } from "react";
import { connect } from "react-redux";
import { selectRegion } from "../actions";
import { PieChart, Pie, Legend, Tooltip } from "recharts";
// const { PieChart, Pie, Legend, Tooltip } = Recharts;

class RegionList extends Component {
  renderList() {
    // return this.props.regions.map(region => {
    return (
      <PieChart
        width={1000}
        height={500}
        onClick={data => this.props.selectRegion(data)}
      >
        >
        <Pie
          isAnimationActive={false}
          data={this.props.regions}
          cx={300}
          cy={300}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
        <Tooltip />
      </PieChart>
      //  <div className="item" key={region.title}>

      //         <div className="right floated content">
      //           <button
      //             className="ui button primary"
      //             onClick={() => this.props.selectRegion(region)}
      //           >
      //             Select
      //           </button>
      //         </div>
      //         <div className="content">{region.title}</div>
      //       </div>
    );
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return { regions: state.regions };
};

export default connect(mapStateToProps, { selectRegion })(RegionList);
