import React, { useState } from "react";
import DayVisitsReport from "./dayVisitsReport";
import CountriesReport from "./countriesReport";
import PageviewsReport from "./pageviewReport";
import SourceReport from "./sourceReport";
import BrowsersReport from "./browsersReport";
import DevicesReport from "./devicesReport";
import Demographic from './demographic';
import Gender from './gender';
import Header from "../Components/header";
import { LastRow } from "./styles";
import InputField from "../Components/input";
import BasicDashboard from './Basic/index.js';
import { isLogIn, fbLogIn } from '../Components/header.js';
import { Row, Col } from 'reactstrap';
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
      <Row>
        <Col md="6">
          <div className="card">
            <div className="card-body">
              <DayVisitsReport
                metric={"ga:users"}
                title={"Users"}
                viewID={viewID}
              />
            </div></div>
        </Col>
        <Col md="6">
          <div className="card">
            <div className="card-body">
              <DayVisitsReport
                metric={"ga:sessions"}
                title={"Sessions"}
                viewID={viewID}
              />
            </div></div>
        </Col>
      </Row>
      <Row>
        <Col md="6"><Gender viewID={viewID} /></Col>
        <Col md="6"><CountriesReport viewID={viewID} /></Col>
      </Row>
      <Row>
      <Col md="6"><PageviewsReport viewID={viewID} /></Col>
      <Col md="6"><SourceReport viewID={viewID} /></Col>
      </Row>
      <div className="card" className={styles.card}>
        <div className="card-body">
          <LastRow>
            <Col md="6"><BrowsersReport viewID={viewID} /></Col>
            <Col md="6"><DevicesReport viewID={viewID} /></Col>
          </LastRow>
        </div>
      </div>
      {/* {isFBLogIn? <BasicDashboard id='fb' />: ''} */}
      {/* <div id='fb'></div> */}
    </>
  );
};

export default DashBoard;
