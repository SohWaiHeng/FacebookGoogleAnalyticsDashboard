import React, { Component, Fragment } from 'react';
import { Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Bar, Pie } from 'react-chartjs-2';
import { useLocation } from 'react-router-dom';
import Header from '../../Components/header';
import App from '../../App';
import FBHeader from '../../Components/fbHeader';
import styles from './index.css';

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
} from 'reactstrap';

// import PageTitle from '../../../Layout/AppMain/PageTitle';

import {
    AreaChart, Area, Line,
    ResponsiveContainer,
    BarChart,
    ComposedChart,
    CartesianGrid,
    Tooltip,
    LineChart
} from 'recharts';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faAngleDown
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
var maindata = [];
var total7Days = {
    // likesourcetonumberoffans
    'Likes Sources': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    // pifd
    'Page Impressions Frequency': {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6-10": 0,
        "11-20": 0,
        "21+": 0
    },
    // pvs
    'Page View Sites': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    // feedback
    'Fans Impressions': {
        "link": 0,
        "like": 0,
        "comment": 0,
        "other": 0
    }
};
var total28Days = {
    // likesourcetonumberoffans
    'Likes Sources': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    // pifd
    'Page Impressions Frequency': {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6-10": 0,
        "11-20": 0,
        "21+": 0
    },
    // pvs
    'Page View Sites': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    // feedback
    'Fans Impressions': {
        "link": 0,
        "like": 0,
        "comment": 0,
        "other": 0
    }
};
var total90Days = {
    // likesourcetonumberoffans
    'Likes Sources': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    // pifd
    'Page Impressions Frequency': {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6-10": 0,
        "11-20": 0,
        "21+": 0
    },
    // pvs
    'Page View Sites': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    // feedback
    'Fans Impressions': {
        "link": 0,
        "like": 0,
        "comment": 0,
        "other": 0
    }
};
var temp = {
    // likesourcetonumberoffans
    'Likes Sources': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    // pifd
    'Page Impressions Frequency': {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6-10": 0,
        "11-20": 0,
        "21+": 0
    },
    // pvs
    'Page View Sites': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    // feedback
    'Fans Impressions': {
        "link": 0,
        "like": 0,
        "comment": 0,
        "other": 0
    }
};
var totalCountryData = { '7': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], '28': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], '90': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
var country = {
    labels: ['Australia', 'Canada', 'China', 'Great Britain', 'Hong Kong', 'India', 'Macao', 'Malaysia', 'Singapore', 'Taiwan', 'USA', 'Others'],
    datasets: [
        {
            data: totalCountryData['7'],
            backgroundColor: [
                '#8dace7',
                '#71deb9',
                '#ef869e',
                '#8dace7',
                '#71deb9',
                '#ef869e',
                '#8dace7',
                '#71deb9',
                '#ef869e',
                '#8dace7',
                '#71deb9',
                '#ef869e'
            ],
            hoverBackgroundColor: [
                '#8dace7',
                '#71deb9',
                '#ef869e',
                '#8dace7',
                '#71deb9',
                '#ef869e',
                '#8dace7',
                '#71deb9',
                '#ef869e',
                '#8dace7',
                '#71deb9',
                '#ef869e'
            ]
        }
    ]
}
var previous7Days = { 'country': [] };
var previous28Days = { 'country': [] };
const lineChartColour = '#2ad2c9';
const countryNames = ['Australia', 'Canada', 'China', 'Great Britain', 'Hong Kong', 'India', 'Macao', 'Malaysia', 'Singapore', 'Taiwan', 'USA', 'Others'];
const countryArr = { 'AU': 'Australia', 'CA': 'Canada', 'CN': 'China', 'GB': 'Great Britain', 'HK': 'Hong Kong', 'ID': 'India', 'MO': 'Macao', 'MY': 'Malaysia', 'SG': 'Singapore', 'TW': 'Taiwan', 'US': 'USA' }
var fansCountryLifeTime = { 'others': 0 };
let genderAge7 = { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] };
let genderAge28 = { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] };
let genderAge90 = { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] };
var difference = { 'Page Engagement': { '7': 0, '28': 0, '90': 0 }, 'Post Impressions': { '7': 0, '28': 0, '90': 0 }, 'New Fans': { '7': 0, '28': 0, '90': 0 }, 'Page Consumptions': { '7': 0, '28': 0, '90': 0 }, 'Page View Total': { '7': 0, '28': 0, '90': 0 }, 'Number of Likes': { '7': 0, '28': 0, '90': 0 } };
var todaysValue = {};
const barColor = { 'Likes Sources': 'success', 'Page Impressions Frequency': 'info', 'Page View Sites': 'warning', 'Fans Impressions': 'danger' }
const metricsArray = ['Page Engagement', 'Post Impressions', 'New Fans', 'Page Consumptions', 'Page View Total', 'Number of Likes'];
const metricsName = ['Page Engagement', 'Post Impressions', 'New Fans', 'Page Consumptions', 'Page View Total', 'Number of Likes'];
var progressValues = {
    // likesourcetonumberoffans
    'Likes Sources': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    // pifd
    'Page Impressions Frequency': {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6-10": 0,
        "11-20": 0,
        "21+": 0
    },
    // pvs
    'Page View Sites': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    // feedback
    'Fans Impressions': {
        "link": 0,
        "like": 0,
        "comment": 0,
        "other": 0
    }
};

var pageImpressionsFrequencyDistribution, pageViewsBySite, fansByLikeSource, fansCountry, pageTotalLikers, pagePostEngagement, pageImpressions, pageNewLikers, genderAndAgeToFrequency, clicksOnPageContents, pageViews, postLikes, postLoves, postWow, postHaha, postSorry, postAnger, postReactions;

export default class BasicDashboard extends Component {

    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',
            obj: { 'Page Engagement': total7Days, 'Post Impressions': total7Days, 'New Fans': total7Days, 'Page Consumptions': total7Days, 'Page View Total': total7Days, 'Number of Likes': total7Days },
            num: { 'Page Engagement': 7, 'Post Impressions': 7, 'New Fans': 7, 'Page Consumptions': 7, 'Page View Total': 7, 'Number of Likes': 7 },
            todaysValue: { 'Page Engagement': 0, 'Post Impressions': 0, 'New Fans': 0, 'Page Consumptions': 0, 'Page View Total': 0, 'Number of Likes': 0 },
            difference: { 'Page Engagement': { '7': 0, '28': 0, '90': 0 }, 'Post Impressions': { '7': 0, '28': 0, '90': 0 }, 'New Fans': { '7': 0, '28': 0, '90': 0 }, 'Page Consumptions': { '7': 0, '28': 0, '90': 0 }, 'Page View Total': { '7': 0, '28': 0, '90': 0 }, 'Number of Likes': { '7': 0, '28': 0, '90': 0 } },
            currentDifference: '7',
            mydata: [],
            totalWhatDays: total7Days,
            // genderAge: { '7': { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] }, '28': { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] }, '90': { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] } },
            demographic: {
                labels: ['13-17', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
                datasets: [
                    {
                        label: 'Male',
                        backgroundColor: 'rgba(146,202,242,0.2)',
                        borderColor: 'rgba(38,150,228,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(146,202,242,0.4)',
                        hoverBorderColor: 'rgba(38,150,228,1)',
                        borderCapStyle: 'round',
                        data: genderAge7['M']
                    },
                    {
                        label: 'Female',
                        backgroundColor: 'rgba(255,87,121,0.2)',
                        borderColor: 'rgba(255,87,122,1)',
                        borderWidth: 1,
                        stack: 1,
                        hoverBackgroundColor: 'rgba(255,171,188,1)',
                        hoverBorderColor: 'rgba(255,87,122,1)',
                        data: genderAge7['F']
                    },
                    {
                        label: 'Unknown',
                        backgroundColor: 'rgba(15,21,150,0.2)',
                        borderColor: 'rgba(25,99,232,1)',
                        borderWidth: 1,
                        stack: 2,
                        hoverBackgroundColor: 'rgba(25,99,232,1)',
                        hoverBorderColor: 'rgba(7,9,232,1)',
                        data: genderAge7['U']
                    }
                ]
            },
            thecountry: {
                labels: ['Australia', 'Canada', 'China', 'Great Britain', 'Hong Kong', 'India', 'Macao', 'Malaysia', 'Singapore', 'Taiwan', 'USA', 'Others'],
                datasets: [
                    {
                        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                        backgroundColor: [
                            '#8dace7',
                            '#71deb9',
                            '#ef869e',
                            '#8dace7',
                            '#71deb9',
                            '#ef869e',
                            '#8dace7',
                            '#71deb9',
                            '#ef869e',
                            '#8dace7',
                            '#71deb9',
                            '#ef869e'
                        ],
                        hoverBackgroundColor: [
                            '#8dace7',
                            '#71deb9',
                            '#ef869e',
                            '#8dace7',
                            '#71deb9',
                            '#ef869e',
                            '#8dace7',
                            '#71deb9',
                            '#ef869e',
                            '#8dace7',
                            '#71deb9',
                            '#ef869e'
                        ]
                    }
                ]
            },
            progressValues: {
                // likesourcetonumberoffans
                'Likes Sources': {
                    "Ads": 0,
                    "News Feed": 0,
                    "Page Suggestions": 0,
                    "Restored Likes from Reactivated Accounts": 0,
                    "Search": 0,
                    "Your Page": 0,
                    "Other": 0
                },
                // pifd
                'Page Impressions Frequency': {
                    "1": 0,
                    "2": 0,
                    "3": 0,
                    "4": 0,
                    "5": 0,
                    "6-10": 0,
                    "11-20": 0,
                    "21+": 0
                },
                // pvs
                'Page View Sites': {
                    "WWW": 0,
                    "MOBILE": 0,
                    "OTHER": 0
                },
                // feedback
                'Fans Impressions': {
                    "link": 0,
                    "like": 0,
                    "comment": 0,
                    "other": 0
                }
            }

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }

    changeCurrentDifference(num) {
        this.setState(prevState => {
            let currentDifference = Object.assign({}, prevState.currentDifference);
            currentDifference = num;
            return { currentDifference };
        })
    }

    updateDataDisplayed(difference, genderAge, countryArr) {
        const arr = difference == '7' ? total7Days : (difference == '28' ? total28Days : total90Days)
        console.log(arr)
        console.log(total28Days)
        metricsArray.map((value, index) => {
            this.current0(value, arr);
            this.current1(value, parseFloat(difference));
            this.current2(value);
            this.current3(value);
        })
        this.current4(genderAge);
        this.current5(countryArr)
        Object.keys(this.state.progressValues).map((key) => {
            this.current7(arr, key);
            this.current8(arr);
        })
    }

    current0(metric, object) {
        this.setState(prevState => {
            let obj = Object.assign({}, prevState.obj);
            obj[metric] = object;
            return { obj };
        })
    }

    current1(metric, number) {
        this.setState(prevState => {
            let num = Object.assign({}, prevState.num);
            num[metric] = number;
            return { num };
        })
    }

    current2(metric) {
        this.setState(prevState => {
            let todaysValue = Object.assign({}, prevState.todaysValue);
            todaysValue[metric] = (parseFloat(maindata[Object.keys(maindata)[0]][metric]))
            return { todaysValue };
        })
    }

    current3(metric) {
        this.setState(prevState => {
            let difference = Object.assign({}, prevState.difference);
            difference[metric]['7'] = (parseFloat(maindata[Object.keys(maindata)[0]][metric]) - parseFloat(maindata[Object.keys(maindata)[6]][metric])) / parseFloat(maindata[Object.keys(maindata)[6]][metric]) * 100
            difference[metric]['28'] = (parseFloat(maindata[Object.keys(maindata)[0]][metric]) - parseFloat(maindata[Object.keys(maindata)[27]][metric])) / parseFloat(maindata[Object.keys(maindata)[27]][metric]) * 100
            difference[metric]['90'] = (parseFloat(maindata[Object.keys(maindata)[0]][metric]) - parseFloat(maindata[Object.keys(maindata)[89]][metric])) / parseFloat(maindata[Object.keys(maindata)[89]][metric]) * 100
            return { difference };
        })
    }

    current4(obj) {
        this.setState(prevState => {
            // let demographic = Object.assign({}, prevState.demographic.datasets[0].data);
            // demographic = number;
            // console.log("demographic.datasets[0].data " + demographic)
            // console.log(outerGenderAge)
            let demographic = Object.assign({}, prevState.demographic);
            const copy = JSON.parse(JSON.stringify(obj))
            demographic.datasets.map((value) => {
                if (value.label == 'Male') value.data = copy['M'];
                else if (value.label == 'Female') value.data = copy['F'];
                else if (value.label == 'Unknown') value.data = copy['U'];
            })
            // demographic.datasets[0].data = obj;
            // console.log("demographic.datasets[0].data " + demographic.datasets[0].data)
            // demographic.datasets[1].data = number['F'];
            // console.log("demographic.datasets[1].data " + demographic.datasets[1].data)
            // demographic.datasets[2].data = number['U'];
            // console.log("demographic.datasets[2].data " + demographic.datasets[2].data)
            // console.log("demographic " + this.state.demographic);
            return { demographic };
        })
    };

    current5(array) {
        console.log(this.state.thecountry.datasets)
        this.setState(prevState => {
            let thecountry = Object.assign({}, prevState.thecountry);
            thecountry.datasets[0].data = array;
            return { thecountry }
        })
    }

    current7(obj, name) {
        Object.entries(obj[name]).forEach(([key2, value2]) => {
            console.log(temp[name][key2] + ' ' + obj[name][key2])
            temp[name][key2] = 0 || ((obj[name][key2] / Math.max(...Object.values(obj[name]))) * 100);
            console.log(temp[name][key2] + ' ' + obj[name][key2])
        })
        this.setState(prevState => {
            let progressValues = Object.assign({}, prevState.progressValues);
            progressValues = temp;
            return { progressValues };
        })
    };

    current8(obj) {
        this.setState(prevState => {
            let totalWhatDays = Object.assign({}, prevState.totalWhatDays);
            totalWhatDays = obj;
            return { totalWhatDays };
        })
    }

    // current5(number) {
    //     this.setState(prevState => {
    //         // console.log(genderAge);
    //         let demographic = Object.assign({}, prevState.demographic.datasets[1].data);
    //         demographic = number;
    //         console.log("demographic.datasets[1].data " + demographic)
    //         // demographic.datasets[1].data = [];
    //         // demographic.datasets[1].data = number['F'];
    //         // console.log("demographic.datasets[1].data " + demographic.datasets[1].data)
    //         // demographic.datasets[2].data = [];
    //         // demographic.datasets[2].data = number['U'];
    //         // console.log("demographic.datasets[2].data " + demographic.datasets[2].data)
    //         // console.log("demographic " + this.state.demographic);
    //         return { demographic };
    //     })
    // }
    current6(number) {
        this.setState(prevState => {
            // console.log(genderAge);
            let demographic = Object.assign({}, prevState.demographic.datasets[2].data);
            demographic = number;
            console.log("demographic.datasets[2].data " + demographic)
            // demographic.datasets[1].data = [];
            // demographic.datasets[1].data = number['F'];
            // console.log("demographic.datasets[1].data " + demographic.datasets[1].data)
            // demographic.datasets[2].data = [];
            // demographic.datasets[2].data = number['U'];
            // console.log("demographic.datasets[2].data " + demographic.datasets[2].data)
            // console.log("demographic " + this.state.demographic);
            return { demographic };
        })
    }

    componentDidMount() {

        console.log(2);

        var script = document.createElement('script');

        script.src = "https://connect.facebook.net/en_US/sdk.js";
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous'

        document.body.appendChild(script);

        window.fbAsyncInit = function () {

            window.FB.init({
                appId: '1079944885546437',
                // autoLogAppEvents: true,
                xfbml: true,
                status: true,
                cooie: true,
                version: 'v8.0'
            });

            // window.FB.getLoginStatus(function(response) {
            //     console.log(response.status)
            //     if (response.status === 'connected') {
            //         //display user data
            //         getFBData();
            //     }
            // });

            // window.FB.getLoginStatus(function (response) {
            //     statusChangeCallback(response);
            // });

            // (function(d, s, id){
            //     var js, fjs = d.getElementsByTagName(s)[0];
            //     if (d.getElementById(id)) {return;}
            //     js = d.createElement(s); js.id = id;
            //     js.src = "https//connect.facebook.net/en_US/sdk.js";
            //     fjs.parentNode.insertBefore(js, fjs);
            //   }(document, 'script', 'facebook-jssdk'));

            // if (typeof facebookInit == 'function') {
            // facebookInit();
            // }

        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        this.run();

    };


    run() {
        // var script = document.createElement('script');

        // script.src = "https://connect.facebook.net/en_US/sdk.js";
        // script.async = true;
        // script.defer = true;
        // script.crossOrigin = 'anonymous'

        // document.body.appendChild(script);

        // console.log('run here')

        // // var gid;

        // // function statusChangeCallback(response) {
        // //     console.log('statusChangeCallback');
        // //     console.log(response);

        // //     if (response.status === 'connected') {
        // //         getFBData();
        // //     } else {
        // //         document.getElementById('status').innerHTML = 'Please log ' +
        // //             'into this app.';
        // //     }
        // // }

        // // function checkLoginState() {
        // //     window.FB.getLoginStatus(function (response) {
        // //         statusChangeCallback(response);
        // //     });
        // // }

        // window.fbAsyncInit = function () {

        //     window.FB.init({
        //         appId: '1079944885546437',
        //         // autoLogAppEvents: true,
        //         xfbml: true,
        //         status: true,
        //         version: 'v8.0'
        //     });

        //     // window.FB.getLoginStatus(function(response) {
        //     //     console.log(response.status)
        //     //     if (response.status === 'connected') {
        //     //         //display user data
        //     //         getFBData();
        //     //     }
        //     // });

        //     // window.FB.getLoginStatus(function (response) {
        //     //     statusChangeCallback(response);
        //     // });

        //     // (function(d, s, id){
        //     //     var js, fjs = d.getElementsByTagName(s)[0];
        //     //     if (d.getElementById(id)) {return;}
        //     //     js = d.createElement(s); js.id = id;
        //     //     js.src = "https//connect.facebook.net/en_US/sdk.js";
        //     //     fjs.parentNode.insertBefore(js, fjs);
        //     //   }(document, 'script', 'facebook-jssdk'));

        //     // if (typeof facebookInit == 'function') {
        //     // facebookInit();
        //     // }

        // };

        wait(2 * 1000).then(() => { getFBData() });

        function getFBData() {

            let accesstoken = 'EAAPWNENHrcUBAHTwo1jmFkx58uizmjCz1V0WCpmWR7uGKZCr0jcvrb6fm24vHa44P4TQdHigXYKNkS4qIlZAf1nq7bZB2RgOkJ76ZCIDhbudCm0ZCwvLUXkj0TUbXcZBlUgZC6Gx9hx8agUhSamwRrdqyLOyUpznbd8RU4lUmh9v69s18xGBiM72cyQnkuPm1ZBEcMkbJ7NM7gZDZD'

            const now = Math.round(Date.now() / 1000);
            // around 90 days before
            const before = Math.round(now - 8000000);
            now.toString();
            before.toString();

            function getValue(data) {
                maindata = data;
                return maindata;
            }

            // var get = await getInsights("page_post_engagements,page_impressions,page_fans,page_fan_adds_unique,page_impressions_by_age_gender_unique,page_consumptions,page_fans_by_like_source,page_impressions_frequency_distribution,page_views_total,page_views_by_site_logged_in_unique,page_fans_country,page_actions_post_reactions_like_total,page_actions_post_reactions_love_total,page_actions_post_reactions_wow_total,page_actions_post_reactions_haha_total,page_actions_post_reactions_sorry_total,page_actions_post_reactions_anger_total,page_positive_feedback_by_type");
            function startThis(callback) {
                return getInsights("page_post_engagements,page_impressions,page_fans,page_fan_adds_unique,page_impressions_by_age_gender_unique,page_consumptions,page_fans_by_like_source,page_impressions_frequency_distribution,page_views_total,page_views_by_site_logged_in_unique,page_fans_country,page_actions_post_reactions_like_total,page_actions_post_reactions_love_total,page_actions_post_reactions_wow_total,page_actions_post_reactions_haha_total,page_actions_post_reactions_sorry_total,page_actions_post_reactions_anger_total,page_positive_feedback_by_type", function (res) {
                    createClass(res, function (resp) {
                        getValue(resp);
                    })
                    console.log(maindata)
                    callback(maindata)
                })
            }

            function getInsights(insights, callback) {
                window.FB.api(
                    '/175239293131122/insights',
                    'GET',
                    { "access_token": accesstoken, "metric": insights, "since": before, "until": now },
                    function (response) {
                        console.log(response);
                        callback(response);
                    }
                )
            }

            function createClass(res, callback) {
                class Metrics {

                    constructor(name, numberOfDays) {
                        this.name = name;
                        this.numberOfDays = numberOfDays;
                    }

                    updateSimpleData(data, name) {
                        var count = 89, sum = 0;
                        allData.forEach((obj) => {
                            if (data.period == 'day') {
                                if (count == 82) {
                                    total7Days[name] = sum;
                                } else if (count == 75) {
                                    previous7Days[name] = sum - total7Days[name]
                                } else if (count == 61) {
                                    total28Days[name] = sum;
                                } else if (count == 33) {
                                    previous28Days[name] = sum - total28Days[name]
                                } else if (count == 0) {
                                    total90Days[name] = sum;
                                    return;
                                }
                                obj[name] = data.values[count].value;
                                sum += data.values[count].value;
                                count--;
                            }
                        });
                    }

                    updateAdvancedData(data, name) {
                        var count = 89, sum = {};
                        total7Days[name] = {};
                        total28Days[name] = {};
                        total90Days[name] = {};
                        allData.forEach((obj) => {
                            obj[name] = data.values[count].value;
                            Object.entries(data.values[count].value).forEach(([key, value]) => {
                                if (!(sum.hasOwnProperty(key))) {
                                    sum[key] = value;
                                } else {
                                    sum[key] += value;
                                }
                            });
                            if (count == 83) {
                                Object.entries(sum).forEach(([key, value]) => {
                                    total7Days[name][key.toString()] = value || 0;
                                    progressValues[name][key.toString()] = value || 0;
                                });
                            } else if (count == 62) {
                                Object.entries(sum).forEach(([key, value]) => {
                                    total28Days[name][key.toString()] = value || 0;
                                });
                            } else if (count == 0) {
                                Object.entries(sum).forEach(([key, value]) => {
                                    total90Days[name][key.toString()] = value || 0;
                                });
                            }
                            count--;
                        });
                        Object.entries(progressValues).forEach(([key, value]) => {
                            Object.entries(progressValues[key]).forEach(([key2, value2]) => {
                                temp[key][key2] = 0 || ((progressValues[key][key2] / Math.max(...Object.values(progressValues[key]))) * 100);
                            })
                        })
                    }

                    // for metrics that show lifetime value
                    saveLivetimeValue(data) {
                        console.log(data.values)
                        var count = 89, todaysValue = {}, othersValue = {'7':0, '28':0, '90':0};
                        Object.entries(data.values).forEach(([key, value]) => {
                            Object.entries(value.value).forEach(([key2, value2]) => {
                                // key2 in countryArr ? country.datasets[0].data[countryNames.indexOf(countryArr[key2])] = value2 : country.datasets[0].data[11] += value2;
                                // key in countryArr ? fansCountryLifeTime[countryArr[key]] = value : fansCountryLifeTime['others'] += value;
                                if (count == 89) {
                                    key2 in countryArr ? totalCountryData['90'][countryNames.indexOf(countryArr[key2])] = value2 : totalCountryData['90'][11] += value2;
                                    // console.log(key2 + ' 90 ' + totalCountryData['90'][countryNames.indexOf(countryArr[key2])])
                                } else if (count == 27) {
                                    key2 in countryArr ? totalCountryData['28'][countryNames.indexOf(countryArr[key2])] = value2 : totalCountryData['28'][11] += value2;
                                    // console.log(key2 + ' 28 ' + totalCountryData['28'][countryNames.indexOf(countryArr[key2])])
                                } else if (count == 6) {
                                    console.log('7 ' + key2 + ' ' + value2)
                                    key2 in countryArr ? totalCountryData['7'][countryNames.indexOf(countryArr[key2])] = value2 : totalCountryData['7'][11] += value2;
                                    console.log('7after  ' + key2 + ' ' + totalCountryData['7'][countryNames.indexOf(countryArr[key2])])
                                } else if (count == -1) {
                                    todaysValue[countryArr[key2]] = value2;
                                    console.log(key2 + ' 0 ' + value2)
                                    console.log(key2 + ' 7 ' + totalCountryData['7'][countryNames.indexOf(countryArr[key2])])
                                    console.log(key2 + ' 28 ' + totalCountryData['28'][countryNames.indexOf(countryArr[key2])])
                                    console.log(key2 + ' 90 ' + totalCountryData['90'][countryNames.indexOf(countryArr[key2])])
                                    key2 in countryArr ? totalCountryData['90'][countryNames.indexOf(countryArr[key2])] = (value2 - totalCountryData['90'][countryNames.indexOf(countryArr[key2])] < 0 ? 0 : value2 - totalCountryData['90'][countryNames.indexOf(countryArr[key2])] ) : othersValue['90'] += value2;
                                    key2 in countryArr ? totalCountryData['28'][countryNames.indexOf(countryArr[key2])] = (value2 - totalCountryData['28'][countryNames.indexOf(countryArr[key2])] < 0 ? 0 : value2 - totalCountryData['28'][countryNames.indexOf(countryArr[key2])]): othersValue['28'] += value2;
                                    key2 in countryArr ? totalCountryData['7'][countryNames.indexOf(countryArr[key2])] = (value2 - totalCountryData['7'][countryNames.indexOf(countryArr[key2])] < 0 ? 0 : value2 - totalCountryData['7'][countryNames.indexOf(countryArr[key2])]): othersValue['7'] += value2;
                                    console.log(key2 + ' 7 ' + totalCountryData['7'][countryNames.indexOf(countryArr[key2])])
                                    console.log(key2 + ' 28 ' + totalCountryData['28'][countryNames.indexOf(countryArr[key2])])
                                    console.log(key2 + ' 90 ' + totalCountryData['90'][countryNames.indexOf(countryArr[key2])])
                                }
                            })
                            if (count == -1) {
                                totalCountryData['90'][11] = (othersValue['90'] - totalCountryData['90'][11] < 0 ? 0 : othersValue['90'] - totalCountryData['90'][11]);
                                totalCountryData['28'][11] = (othersValue['28'] - totalCountryData['28'][11] < 0 ? 0 : othersValue['28'] - totalCountryData['28'][11]);
                                totalCountryData['7'][11] = (othersValue['7'] - totalCountryData['7'][11] < 0 ? 0 : othersValue['7'] - totalCountryData['7'][11]);
                                console.log('others 7 ' + totalCountryData['7'][11])
                            }
                            count--;
                        });
                        console.log(count)
                        console.log(totalCountryData)
                    }

                    getTotal(dict, name, key, sum, maleNum, femaleNum, unknownNum) {
                        dict[name]['M'][key] = maleNum;
                        dict[name]['F'][key] = femaleNum;
                        dict[name]['U'][key] = unknownNum;
                        return sum, dict;
                    }

                    addData(value, obj, sumDict, gender, key) {
                        obj[gender][key] = value;
                        if (sumDict[gender][key] == 0) {
                            sumDict[gender][key] = value;
                        } else {
                            sumDict[gender][key] += value;
                        }
                        return obj, sumDict;
                    }

                    updateAgeGenderData(data, name) {
                        console.log(data.values[0].value)
                        var count = data.values.length - 1, sum = { 'M': {}, 'F': {}, 'U': {} };
                        const substitute = { '13-17': 0, '18-24': 1, '25-34': 2, '35-44': 3, '45-54': 4, '55-64': 5, '65+': 6 }
                        allData.forEach((obj) => {
                            if (data.period == 'day') {
                                // if (data.values[count].value['M'] == {}) {count--; return;}
                                obj[name] = { 'M': {}, 'F': {}, 'U': {} };
                                let temp;
                                if (count == data.values.length - 1) {
                                    // console.log(data.values.length)
                                    Object.entries(data.values[count].value).forEach(([key, value]) => {
                                        value == NaN ? temp = 0 : temp = value;
                                        obj[name][key.substring(0, 1)][key.substring(2)] = temp;
                                        sum[key.substring(0, 1)][key.substring(2)] = temp;
                                    });
                                } else if (count > -1) {
                                    Object.entries(data.values[count].value).forEach(([key, value]) => {
                                        // console.log(key.substring(0, 1) + ' ' + key.substring(2) + ' ' + sum[key.substring(0, 1)][key.substring(2)])
                                        value == NaN ? temp = 0 : temp = value;
                                        obj[name][key.substring(0, 1)][key.substring(2)] = temp;
                                        sum[key.substring(0, 1)][key.substring(2)] += temp;
                                        // if (count == data.values.length - 7) {
                                        //     outerGenderAge['7'][key.substring(0, 1)][substitute[key.substring(2)]] = sum[key.substring(0, 1)][key.substring(2)];
                                        //     if (outerGenderAge['7'][key.substring(0, 1)][substitute[key.substring(2)]] === NaN ) console.log('nan') 
                                        // } else if (count == data.values.length - 28) {
                                        //     outerGenderAge['28'][key.substring(0, 1)][substitute[key.substring(2)]] = sum[key.substring(0, 1)][key.substring(2)];
                                        // } else if (count == 0) {
                                        //     outerGenderAge['90'][key.substring(0, 1)][substitute[key.substring(2)]] = sum[key.substring(0, 1)][key.substring(2)];
                                        // }
                                    });
                                }
                                console.log(count);
                                if (count == data.values.length - 7) {
                                    Object.entries(sum).forEach(([key, value]) => {
                                        Object.entries(value).forEach(([key2, value2]) => {
                                            if (key == 'U' && key2 == '13-17') return;
                                            genderAge7[key][substitute[key2]] = sum[key][key2];
                                        })
                                    })
                                } else if (count == data.values.length - 28) {
                                    Object.entries(sum).forEach(([key, value]) => {
                                        Object.entries(value).forEach(([key2, value2]) => {
                                            if (key == 'U' && key2 == '13-17') return;
                                            genderAge28[key][substitute[key2]] = sum[key][key2];
                                        })
                                    })
                                } else {
                                    Object.entries(sum).forEach(([key, value]) => {
                                        Object.entries(value).forEach(([key2, value2]) => {
                                            if (key == 'U' && key2 == '13-17') return;
                                            genderAge90[key][substitute[key2]] = sum[key][key2];
                                        })
                                    })
                                }
                                count--;

                            }
                        });
                    }

                    displayData(variable) {
                        document.write('<h2>' + this.name + '</h2>');
                        document.write('<h3>' + this.numberOfDays + ' days : ' + variable + '</h3>');
                    }

                    displayDictData(dict) {
                        document.write('<h2>' + this.name + '</h2>');
                        Object.entries(dict).forEach(([key, value]) => {
                            document.write('<h3>' + key + ' : ' + dict[key] + '</h3>');
                        });
                    }
                }

                var allData = [];
                for (let i = 0; i < 90; i++) {
                    const name = i + 'day';
                    allData.push({ 'name': name });
                }

                pageImpressionsFrequencyDistribution = new Metrics('page_impressions_frequency_distribution', 7)
                pageViewsBySite = new Metrics('page_views_by_site_logged_in_unique', 7);
                fansByLikeSource = new Metrics('page_fans_by_like_source', 7);
                fansCountry = new Metrics('page_fans_country', 1); //
                pageTotalLikers = new Metrics('page_fans', 1);
                pagePostEngagement = new Metrics('page_post_engagements', 7);
                pageImpressions = new Metrics('page_impressions', 7);
                pageNewLikers = new Metrics('page_fan_adds_unique', 7);
                genderAndAgeToFrequency = new Metrics('page_impressions_by_age_gender_unique', 7);  //
                clicksOnPageContents = new Metrics('page_consumptions', 7);
                pageViews = new Metrics('page_views_total', 7);
                postLikes = new Metrics('page_actions_post_reactions_like_total', 28);
                postLoves = new Metrics('page_actions_post_reactions_love_total', 28);
                postWow = new Metrics('page_actions_post_reactions_wow_total', 28);
                postHaha = new Metrics('page_actions_post_reactions_haha_total', 28);
                postSorry = new Metrics('page_actions_post_reactions_sorry_total', 28);
                postAnger = new Metrics('page_actions_post_reactions_anger_total', 28);
                postReactions = new Metrics('page_positive_feedback_by_type', 7);

                console.log(res.data)

                for (let i = 0; i < res.data.length; i++) {

                    switch (res.data[i].name) {

                        case 'page_views_by_site_logged_in_unique':
                            if (res.data[i].period == 'day') {
                                pageViewsBySite.updateAdvancedData(res.data[i], 'Page View Sites');
                            }
                            break;

                        case 'page_post_engagements':
                            pagePostEngagement.updateSimpleData(res.data[i], 'Page Engagement');
                            break;

                        case 'page_impressions':
                            pageImpressions.updateSimpleData(res.data[i], 'Post Impressions');
                            break;

                        case 'page_fan_adds_unique':
                            pageNewLikers.updateSimpleData(res.data[i], 'New Fans');
                            break;

                        // case 'page_fans':
                        //     pageTotalLikers.saveLivetimeValue(res.data[i]);
                        //     break;

                        case 'page_impressions_by_age_gender_unique':
                            genderAndAgeToFrequency.updateAgeGenderData(res.data[i], 'agegender');
                            // updateState();
                            break;

                        case 'page_consumptions':
                            clicksOnPageContents.updateSimpleData(res.data[i], 'Page Consumptions');
                            break;

                        case 'page_fans_country':
                            console.log(res.data[i])
                            fansCountry.saveLivetimeValue(res.data[i]);
                            break;

                        case 'page_fans_by_like_source':
                            fansByLikeSource.updateAdvancedData(res.data[i], 'Likes Sources');
                            break;

                        case 'page_impressions_frequency_distribution':
                            if (res.data[i].period == 'day') {
                                pageImpressionsFrequencyDistribution.updateAdvancedData(res.data[i], 'Page Impressions Frequency');
                            }
                            break;

                        case 'page_views_total':
                            pageViews.updateSimpleData(res.data[i], 'Page View Total');
                            break;

                        case 'page_actions_post_reactions_like_total':
                            postLikes.updateSimpleData(res.data[i], 'Number of Likes');
                            break;

                        case 'page_actions_post_reactions_love_total':
                            postLoves.updateSimpleData(res.data[i], 'love');
                            break;

                        case 'page_actions_post_reactions_wow_total':
                            postWow.updateSimpleData(res.data[i], 'wow');
                            break;

                        case 'page_actions_post_reactions_haha_total':
                            postHaha.updateSimpleData(res.data[i], 'haha');
                            break;

                        case 'page_actions_post_reactions_sorry_total':
                            postSorry.updateSimpleData(res.data[i], 'sorry');
                            break;

                        case 'page_actions_post_reactions_anger_total':
                            postAnger.updateSimpleData(res.data[i], 'anger');
                            break;

                        case 'page_positive_feedback_by_type':
                            if (res.data[i].period == 'day') {
                                postReactions.updateAdvancedData(res.data[i], 'Fans Impressions');
                            }
                            break;

                    }
                }
                callback(allData);
            }

            return startThis(function (maindata) {
                console.log(maindata);
                return maindata;
            })

        }

        wait(6 * 1000).then(() => {
            // let todaysValue = { 'ppe': parseFloat(maindata[Object.keys(maindata)[0]]['ppe']), 'pi': parseFloat(maindata[Object.keys(maindata)[0]]['pi']) }
            var metric;
            console.log(maindata)
            // while (maindata == []) this.run();
            for (metric of metricsArray) {
                todaysValue[metric] = parseFloat(maindata[Object.keys(maindata)[0]][metric])
                difference[metric]['7'] = ((total7Days[metric] - previous7Days[metric]) / previous7Days[metric]) * 100
                difference[metric]['28'] = ((total28Days[metric] - previous28Days[metric]) / previous28Days[metric]) * 100
                // difference[metric]['90'] = ((parseFloat(maindata[Object.keys(maindata)[0]][metric]) - parseFloat(maindata[Object.keys(maindata)[6]][metric])) - (parseFloat(maindata[Object.keys(maindata)[7]][metric]) - parseFloat(maindata[Object.keys(maindata)[14]][metric]))) / (parseFloat(maindata[Object.keys(maindata)[7]][metric]) - parseFloat(maindata[Object.keys(maindata)[14]][metric])) * 100
            }
            // temp = JSON.parse(JSON.stringify(progressValues));
            // console.log(outerGenderAge);
            console.log(totalCountryData);
            console.log(country);
            console.log(this.state.thecountry);
            this.setState({ data: maindata, todaysValue: todaysValue, difference: difference, progressValues: temp, thecountry: country });
            console.log(this.state.progressValues)
            // try setting 1 by 1
            // progressValues: {'likeSourceToNumberOfFans': total7Days['likeSourceToNumberOfFans'], 'pifd': total7Days['pifd'], 'pvs': total7Days['pvs'], 'feedback': total7Days['feedback']}}

        })

        // (function (d, s, id) {
        //     var js, fjs = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) return;
        //     js = d.createElement(s); js.id = id;
        //     js.src = "https://connect.facebook.net/en_US/sdk.js";
        //     fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));

        // wait(5 * 1000).then(() => {
        //     // let todaysValue = { 'ppe': parseFloat(maindata[Object.keys(maindata)[0]]['ppe']), 'pi': parseFloat(maindata[Object.keys(maindata)[0]]['pi']) }
        //     var metric;
        //     console.log(maindata)
        //     // while (maindata == []) this.run();
        //     for (metric of metricsArray) {
        //         todaysValue[metric] = parseFloat(maindata[Object.keys(maindata)[0]][metric])
        //         difference[metric] = (parseFloat(maindata[Object.keys(maindata)[0]][metric]) - parseFloat(maindata[Object.keys(maindata)[1]][metric])) / parseFloat(maindata[Object.keys(maindata)[1]][metric]) * 100
        //     }
        //     // temp = JSON.parse(JSON.stringify(progressValues));
        //     // console.log(outerGenderAge);
        //     console.log(maindata)
        //     console.log(temp);
        //     this.setState({ data: maindata, todaysValue: todaysValue, difference: difference, progressValues: temp });
        //     console.log(this.state.progressValues)
        //     // try setting 1 by 1
        //     // progressValues: {'likeSourceToNumberOfFans': total7Days['likeSourceToNumberOfFans'], 'pifd': total7Days['pifd'], 'pvs': total7Days['pvs'], 'feedback': total7Days['feedback']}}

        // })
    }

    // componentWillMount() {
    //     this.setState({
    //         dropdownOpen: false,
    //         activeTab1: '11',
    //         obj: { 'ppe': total7Days, 'pi': total7Days, 'pfn': total7Days, 'pc': total7Days, 'pvt': total7Days, 'like': total7Days },
    //         num: { 'ppe': 7, 'pi': 7, 'pfn': 7, 'pc': 7, 'pvt': 7, 'like': 7 },
    //         todaysValue: { 'ppe': 0, 'pi': 0, 'pfn': 0, 'pc': 0, 'pvt': 0, 'like': 0 },
    //         difference: { 'ppe': 0, 'pi': 0, 'pfn': 0, 'pc': 0, 'pvt': 0, 'like': 0 },
    //         mydata: [],
    //         demographic: {
    //             labels: ['13-17', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
    //             datasets: [
    //                 {
    //                     label: 'Male',
    //                     backgroundColor: 'rgba(255,99,132,0.2)',
    //                     borderColor: 'rgba(255,99,132,1)',
    //                     borderWidth: 1,
    //                     hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    //                     hoverBorderColor: 'rgba(255,99,132,1)',
    //                     borderCapStyle: 'round',
    //                     data: genderAge['7']['M']
    //                 },
    //                 {
    //                     label: 'Female',
    //                     backgroundColor: 'rgba(155,231,91,0.2)',
    //                     borderColor: 'rgba(5,190,132,1)',
    //                     borderWidth: 1,
    //                     stack: 1,
    //                     hoverBackgroundColor: 'rgba(5,190,132,1)',
    //                     hoverBorderColor: 'rgba(255,99,132,1)',
    //                     data: genderAge['7']['F']
    //                 },
    //                 {
    //                     label: 'Unknown',
    //                     backgroundColor: 'rgba(15,21,150,0.2)',
    //                     borderColor: 'rgba(25,99,232,1)',
    //                     borderWidth: 1,
    //                     stack: 2,
    //                     hoverBackgroundColor: 'rgba(25,99,232,1)',
    //                     hoverBorderColor: 'rgba(7,9,232,1)',
    //                     data: genderAge['7']['U']
    //                 }
    //             ]
    //         }
    //     })
    // }

    logout = () => {
        // window.FB.getLoginStatus(() => {
        window.FB.logout(function (response) {
            console.log("Logged Out!");
            // const location = useLocation();
            // console.log(location.pathname);
            window.location = "/";
        });
        // })
    }

    render() {
        return (
            <>
                <Fragment>
                    {/* change the button wording etc */}
                    {/* <Header facebookTextButton="Signed In" facebookDisabled="true" /> */}
                    {/* <button onClick={this.logout}>Sign Out</button> */}
                    <UncontrolledButtonDropdown className="mb-2 mr-2">
                        <DropdownToggle caret color="primary" className="mb-2 mr-2">
                            Days
                                    </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Choose the number of days</DropdownItem>
                            {/* <DropdownItem onClick={() => { this.currentAll('ppe', this.state.obj, total28Days); console.log(this.state.obj); this.currentAll('ppe', this.state.num, 28); console.log(this.state.num); this.currentAll('ppe', this.state.todaysValue, (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']))); console.log(this.state.todaysValue); this.currentAll('ppe', (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']) - parseFloat(maindata[Object.keys(maindata)[1]]['ppe'])) / parseFloat(maindata[Object.keys(maindata)[1]]['ppe']) * 100, this.state.difference); console.log(this.state.difference); }}>dk Days</DropdownItem> */}
                            {/* <DropdownItem onClick={() => { this.current0(value, total7Days); console.log(this.state.obj); this.current1(value, 7); console.log(this.state.num); this.current2(value); console.log(this.state.todaysValue); this.current3(value); console.log(this.state.difference); this.changeCurrentDifference('7') }}>7 Days</DropdownItem>
                                <DropdownItem onClick={() => { this.current0(value, total28Days); this.current1(value, 28); this.current2(value); this.current3(value); this.changeCurrentDifference('28'); }}>28 Days</DropdownItem>
                                <DropdownItem onClick={() => { this.current0(value, total90Days); this.current1(value, 90); this.current2(value); this.current3(value); this.changeCurrentDifference('90'); }}>90 Days</DropdownItem> */}
                            <DropdownItem onClick={() => { this.changeCurrentDifference('7'); this.updateDataDisplayed('7', genderAge7, totalCountryData['7']); }}>7 Days</DropdownItem>
                            <DropdownItem onClick={() => { this.changeCurrentDifference('28'); this.updateDataDisplayed('28', genderAge28, totalCountryData['28']); }}>28 Days</DropdownItem>
                            <DropdownItem onClick={() => { this.changeCurrentDifference('90'); this.updateDataDisplayed('90', genderAge90, totalCountryData['90']); }}>90 Days</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <Row >
                        {metricsArray.map((value, index) => {
                            // const arr = this.state.currentDifference == '7' ? total7Days : (this.state.currentDifference == '28' ? total28Days : total90Days)
                            // this.current0(value, arr);
                            // this.current1(value, parseFloat(this.state.currentDifference));
                            // this.current2(value);
                            // this.current3(value);
                            return (
                                <Col lg="4" key={index}>
                                    <div className="card" className={styles.card}>
                                        <div className="card-body">
                                            <div className="card mb-2 widget-chart">
                                                <div className="widget-chart-content"><br />
                                                    {/* <UncontrolledButtonDropdown className="mb-2 mr-2">
                                                        <DropdownToggle caret color="primary" className="mb-2 mr-2">
                                                            Days
                                                    </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem header>Choose the number of days</DropdownItem> */}
                                                    {/* <DropdownItem onClick={() => { this.currentAll('ppe', this.state.obj, total28Days); console.log(this.state.obj); this.currentAll('ppe', this.state.num, 28); console.log(this.state.num); this.currentAll('ppe', this.state.todaysValue, (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']))); console.log(this.state.todaysValue); this.currentAll('ppe', (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']) - parseFloat(maindata[Object.keys(maindata)[1]]['ppe'])) / parseFloat(maindata[Object.keys(maindata)[1]]['ppe']) * 100, this.state.difference); console.log(this.state.difference); }}>dk Days</DropdownItem> */}
                                                    {/* <DropdownItem onClick={() => { this.current0(value, total7Days); console.log(this.state.obj); this.current1(value, 7); console.log(this.state.num); this.current2(value); console.log(this.state.todaysValue); this.current3(value); console.log(this.state.difference); this.changeCurrentDifference('7') }}>7 Days</DropdownItem>
                                                            <DropdownItem onClick={() => { this.current0(value, total28Days); this.current1(value, 28); this.current2(value); this.current3(value); this.changeCurrentDifference('28'); }}>28 Days</DropdownItem>
                                                            <DropdownItem onClick={() => { this.current0(value, total90Days); this.current1(value, 90); this.current2(value); this.current3(value); this.changeCurrentDifference('90'); }}>90 Days</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledButtonDropdown> */}
                                                    <div className="widget-subheading">
                                                        <h2><b>{metricsName[index]}</b></h2>
                                                    </div>
                                                    <div className="widget-numbers">
                                                        {console.log(total90Days)}
                                                        <h3><b>{this.state.currentDifference == '7' ? total7Days[value] : (this.state.currentDifference == '28' ? total28Days[value] : this.state.currentDifference == '90' ? total90Days[value] : '')}</b></h3>
                                                    </div>
                                                    {console.log(value)}
                                                    {this.state.currentDifference == '90' ? '' :
                                                        <div>
                                                            <div className={this.state.difference[value][this.state.currentDifference] > 0 ? "widget-description text-success" : "widget-description text-danger"}>
                                                                <FontAwesomeIcon icon={this.state.difference[value][this.state.currentDifference] > 0 ? faAngleUp : faAngleDown} />
                                                                <span className="pl-1">{(this.state.difference[value][this.state.currentDifference]).toFixed(2)}%</span>
                                                            </div>
                                                            <div>( from prev. period [{this.state.currentDifference == '7' ? previous7Days[value] : previous28Days[value]}] )</div>
                                                        </div>
                                                    }
                                                    <div className={styles.card}>
                                                        <ResponsiveContainer height={160}>
                                                            <AreaChart data={maindata.slice(0, parseFloat(this.state.currentDifference))} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                                                <defs>
                                                                    <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                                                        <stop offset="10%" stopColor={lineChartColour} stopOpacity={0.7} />
                                                                        <stop offset="90%" stopColor={lineChartColour} stopOpacity={0} />
                                                                    </linearGradient>
                                                                </defs>
                                                                <Tooltip />
                                                                <Area type='monotoneX' dataKey={value} stroke={lineChartColour} strokeWidth={2} fillOpacity={1}
                                                                    fill="url(#colorPv2)" />
                                                            </AreaChart>
                                                        </ResponsiveContainer>
                                                    </div>
                                                </div>
                                                {/* <div className="widget-chart-wrapper chart-wrapper-relative"> */}
                                                {/* <ResponsiveContainer height={100}>
                                                        <LineChart data={maindata}
                                                            margin={{ top: 5, right: 5, left: 5, bottom: 0 }}>
                                                            <Line type='monotone' dataKey='ppe' stroke='#3ac47d'
                                                                strokeWidth={3} />
                                                        </LineChart>
                                                    </ResponsiveContainer> */}
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>

                    <br></br>
                    <Row>
                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                <h2><b>Facebook Demographic Data</b></h2>
                                    <div>
                                        {/* <UncontrolledButtonDropdown className="mb-2 mr-2">
                                            <DropdownToggle caret color="primary" className="mb-2 mr-2">
                                                Days
                                    </DropdownToggle>
                                            <DropdownMenu>
                    <DropdownItem header>Choose the number of days</DropdownItem> */}
                                        {/* <DropdownItem onClick={() => { this.currentAll('ppe', this.state.obj, total28Days); console.log(this.state.obj); this.currentAll('ppe', this.state.num, 28); console.log(this.state.num); this.currentAll('ppe', this.state.todaysValue, (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']))); console.log(this.state.todaysValue); this.currentAll('ppe', (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']) - parseFloat(maindata[Object.keys(maindata)[1]]['ppe'])) / parseFloat(maindata[Object.keys(maindata)[1]]['ppe']) * 100, this.state.difference); console.log(this.state.difference); }}>dk Days</DropdownItem> */}
                                        {/* <DropdownItem onClick={() => { this.current4(genderAge7); }}>7 Days</DropdownItem>
                                                <DropdownItem onClick={() => { this.current4(genderAge28); }}>28 Days</DropdownItem>
                                                <DropdownItem onClick={() => { this.current4(genderAge90); }}>90 Days</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown> */}
                                        <Bar
                                            data={this.state.demographic}
                                            width={50}
                                            height={25}
                                            options={{
                                                barValueSpacing: 20,
                                                scales: {
                                                    yAxes: [{
                                                        ticks: {
                                                            beginAtZero: 0,
                                                        }
                                                    }]
                                                }
                                            }}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md="6">
                            <Card className="main-card mb-3">
                                <CardBody>
                                <h2><b>Facebook Country Data</b></h2>
                                    <div>
                                        {/* <UncontrolledButtonDropdown className="mb-2 mr-2">
                                            <DropdownToggle caret color="primary" className="mb-2 mr-2">
                                                Days
                                    </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem header>Choose the number of days</DropdownItem> */}
                                        {/* <DropdownItem onClick={() => { this.currentAll('ppe', this.state.obj, total28Days); console.log(this.state.obj); this.currentAll('ppe', this.state.num, 28); console.log(this.state.num); this.currentAll('ppe', this.state.todaysValue, (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']))); console.log(this.state.todaysValue); this.currentAll('ppe', (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']) - parseFloat(maindata[Object.keys(maindata)[1]]['ppe'])) / parseFloat(maindata[Object.keys(maindata)[1]]['ppe']) * 100, this.state.difference); console.log(this.state.difference); }}>dk Days</DropdownItem> */}
                                        {/* <DropdownItem onClick={() => { this.current4(genderAge7); }}>7 Days</DropdownItem>
                                                <DropdownItem onClick={() => { this.current4(genderAge28); }}>28 Days</DropdownItem>
                                                <DropdownItem onClick={() => { this.current4(genderAge90); }}>90 Days</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown> */}
                                        <Pie dataKey="value" data={this.state.thecountry} />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        {Object.keys(this.state.progressValues).map((key) => {
                            return (
                                <Col lg="6">
                                    <div className="card" className={styles.card}>
                                        <div className="card-body">
                                            <div className="card mb-2 widget-chart">
                                                <div className="widget-chart-content">
                                                    <h3><b>{key}</b></h3>
                                                    {/* <UncontrolledButtonDropdown className="mb-2 mr-2">
                                                        <DropdownToggle caret color="primary" className="mb-2 mr-2">
                                                            Days
                                                                    </DropdownToggle>
                                                        <DropdownMenu>
                            <DropdownItem header>Choose the number of days</DropdownItem> */}
                                                    {/* <DropdownItem onClick={() => { this.currentAll('ppe', this.state.obj, total28Days); console.log(this.state.obj); this.currentAll('ppe', this.state.num, 28); console.log(this.state.num); this.currentAll('ppe', this.state.todaysValue, (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']))); console.log(this.state.todaysValue); this.currentAll('ppe', (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']) - parseFloat(maindata[Object.keys(maindata)[1]]['ppe'])) / parseFloat(maindata[Object.keys(maindata)[1]]['ppe']) * 100, this.state.difference); console.log(this.state.difference); }}>dk Days</DropdownItem> */}
                                                    {/* <DropdownItem onClick={() => { this.current7(total7Days, key); this.current8(total7Days); }}>7 Days</DropdownItem>
                                                            <DropdownItem onClick={() => { this.current7(total28Days, key); this.current8(total28Days); }}>28 Days</DropdownItem>
                                                            <DropdownItem onClick={() => { this.current7(total90Days, key); this.current8(total90Days); }}>90 Days</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledButtonDropdown> */}
                                                    {Object.keys(this.state.progressValues[key]).map((key2) => {
                                                        return (
                                                            <div>
                                                                <h5>{key2}</h5>
                                                                <Progress className="mb-3" animated color={barColor[key]} value={this.state.progressValues[key][key2]}>{this.state.totalWhatDays[key][key2]}</Progress>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>

                </Fragment >
                {/* <div id='google'></div> */}
            </>
        )
    }
}
