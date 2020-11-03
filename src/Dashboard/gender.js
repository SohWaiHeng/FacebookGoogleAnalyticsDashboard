import React, { useState, useEffect, useCallback } from "react";
import { addDays } from "date-fns";
import { Pie } from "react-chartjs-2";
import CustomDatePicker from "./datepicker";
import { queryReport } from "./queryReport";
import { ChartTitle, Subtitle, PieChartWrapper, colors } from "./styles";
import styles from './Basic/index.css';
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

const Gender = (props) => {
  const INITIAL_STATE = {
    labels: [],
    values: [],
    colors: [],
  };
  const [reportData, setReportData] = useState(INITIAL_STATE);
  const [startDate, setStartDate] = useState(addDays(new Date(), -10));
  const [endDate, setEndDate] = useState(new Date());
  const [totalUsers, setTotalUsers] = useState(0);

  const displayResults = useCallback((response) => {
    const queryResult = response.result.reports[0].data.rows;
    const total = response.result.reports[0].data.totals[0].values[0];
    setTotalUsers(total);
    let labels = [];
    let values = [];
    let bgColors = [];
    queryResult.forEach((row, id) => {
      labels.push(row.dimensions[0]);
      values.push(row.metrics[0].values[0]);
      bgColors.push(colors[id]);
    });
    setReportData({
      ...reportData,
      labels,
      values,
      colors: bgColors,
    });
  }, [setReportData, reportData]);

  const data = {
    labels: reportData.labels,
    datasets: [
      {
        data: reportData.values,
        backgroundColor: reportData.colors,
      },
    ],
  };

  const options = {
    legend: { position: "bottom" },
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        font: {
          size: 0,
        },
      },
    },
  };

  useEffect(() => {
    const request = {
      viewID: props.viewID,
      startDate,
      endDate,
      metrics: "ga:audience",
      dimensions: ["ga:userGender"],
    };
    setTimeout(
      () =>
        queryReport(request)
          .then((resp) => {console.log(resp); displayResults(resp)})
          .catch((error) => console.error(error)),
      1500
    );
  }, [startDate, endDate, displayResults, props.viewID]);

  wait(5 * 1000).then(() =>{ console.log(data) })

  return (
    <div>
        <ChartTitle>Gender</ChartTitle>
        <Subtitle>{`Total Users - ${totalUsers}`}</Subtitle>
        <CustomDatePicker
          placeholder={"Start date"}
          date={startDate}
          handleDateChange={(date) => setStartDate(date)}
        />
        <CustomDatePicker
          placeholder={"End date"}
          date={endDate}
          handleDateChange={(date) => setEndDate(date)}
        />
        {reportData && (
          <PieChartWrapper>
            <Pie data={data} options={options} width={300} height={300} />
          </PieChartWrapper>
        )}
      </div>
  );
};

export default Gender;