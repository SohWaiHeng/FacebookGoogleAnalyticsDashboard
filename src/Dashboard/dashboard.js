import React from "react";
import DayVisitsReport from "./dayVisitsReport";
import CountriesReport from "./countriesReport";
import PageviewsReport from "./pageviewReport";
import SourceReport from "./sourceReport";
import BrowsersReport from "./browsersReport";
import DevicesReport from "./devicesReport";
import { LastRow } from "./styles";
import { Row, Col } from 'reactstrap';
import styles from './Basic/index.css';


const DashBoard = () => {

  const viewID = 'YOUR_VIEW_ID';

  return (
    <>
      <Row>
        <Col md="6">
          <div className="card">
            <div className="card-body">
              <DayVisitsReport
                metric={"ga:users"}
                title={"Users"}
                viewID={viewID}
              />
            </div>
          </div>
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
        <Col md="6">
          <div className="card">
            <div className="card-body">
              <PageviewsReport viewID={viewID} />
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="card">
            <div className="card-body">
              <SourceReport viewID={viewID} />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <div className="card">
            <div className="card-body">
              <BrowsersReport viewID={viewID} />
            </div>
          </div>
        </Col>
        <Col md="6">
          <div className="card">
            <div className="card-body">
              <DevicesReport viewID={viewID} />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        {/* <Col md="6"><Gender viewID={viewID} /></Col> */}
        <Col md="6">
          <div className="card">
            <div className="card-body">
              <CountriesReport viewID={viewID} />
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default DashBoard;
