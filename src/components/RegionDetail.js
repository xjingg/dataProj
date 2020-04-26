import React from "react";
import { connect } from "react-redux";

const RegionDetail = ({ region }) => {
  if (!region) {
    return <div>Select a region</div>;
  }

  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {region.title}
        <br />
        Case: {region.case}
      </p>
    </div>
  );
};

const mapStateToProps = state => {
  return { region: state.selectedRegion };
};

export default connect(mapStateToProps)(RegionDetail);
