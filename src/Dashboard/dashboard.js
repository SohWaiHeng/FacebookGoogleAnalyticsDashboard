import React, { useState } from "react";
import DayVisitsReport from "./dayVisitsReport";
import CountriesReport from "./countriesReport";
import PageviewsReport from "./pageviewReport";
import SourceReport from "./sourceReport";
import BrowsersReport from "./browsersReport";
import DevicesReport from "./devicesReport";
import Header from "../Components/header";
import { LastRow } from "./styles";
import InputField from "../Components/input";
import BasicDashboard from './Basic/index.js';
import { isLogIn, fbLogIn } from '../Components/header.js';
import styles from './Basic/index.css';

const responseFacebook = (response) => {
  console.log(response);
}

const DashBoard = () => {

  const viewID = '190721502';

  // const [viewID, setViewID] = useState(null);
  const [isFBLogIn, setIsFBLogIn] = useState(false);

  return (
    <>
      {/* <Header /> */}
      <DayVisitsReport
        metric={"ga:users"}
        title={"Users"}
        viewID={viewID}
      />
      <DayVisitsReport
        metric={"ga:sessions"}
        title={"Sessions"}
        viewID={viewID}
      />
      <CountriesReport viewID={viewID} />
      <PageviewsReport viewID={viewID} />
      <SourceReport viewID={viewID} />
      <div className="card" className={styles.card}>
        <div className="card-body">
        <LastRow>
          <BrowsersReport viewID={viewID} />
          <DevicesReport viewID={viewID} />
        </LastRow>
      </div>
    </div>
      {/* {isFBLogIn? <BasicDashboard id='fb' />: ''} */ }
  {/* <div id='fb'></div> */ }
    </>
  );
};

export default DashBoard;
