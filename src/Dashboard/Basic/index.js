import React, { Component, Fragment } from 'react';
import { Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Bar } from 'react-chartjs-2';
import FBHeader from '../../Components/fbHeader';
import App from '../../App';

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
    'likeSourceToNumberOfFans': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    'pifd': {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6-10": 0,
        "11-20": 0,
        "21+": 0
    },
    'pvs': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    'feedback': {
        "link": 0,
        "like": 0,
        "comment": 0,
        "other": 0
    }
};
var total28Days = {
    'likeSourceToNumberOfFans': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    'pifd': {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6-10": 0,
        "11-20": 0,
        "21+": 0
    },
    'pvs': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    'feedback': {
        "link": 0,
        "like": 0,
        "comment": 0,
        "other": 0
    }
};
var total90Days = {
    'likeSourceToNumberOfFans': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    'pifd': {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6-10": 0,
        "11-20": 0,
        "21+": 0
    },
    'pvs': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    'feedback': {
        "link": 0,
        "like": 0,
        "comment": 0,
        "other": 0
    }
};
var temp = {
    'likeSourceToNumberOfFans': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    'pifd': {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6-10": 0,
        "11-20": 0,
        "21+": 0
    },
    'pvs': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    'feedback': {
        "link": 0,
        "like": 0,
        "comment": 0,
        "other": 0
    }
};
var fansCountryLifeTime = {};
let genderAge7 = { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] };
let genderAge28 = { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] };
let genderAge90 = { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] };
var difference = {};
var todaysValue = {};
const barColor = { 'likeSourceToNumberOfFans': 'success', 'pifd': 'info', 'pvs': 'warning', 'feedback': 'danger' }
const metricsArray = ['ppe', 'pi', 'pfn', 'pc', 'pvt', 'like'];
const metricsName = ['Page Engagement', 'Post Impressions', 'New Fans', 'Page Consumptions', 'Page View Total', 'Number of Likes'];
var progressValues = {
    'likeSourceToNumberOfFans': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    'pifd': {
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
        "5": 0,
        "6-10": 0,
        "11-20": 0,
        "21+": 0
    },
    'pvs': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    'feedback': {
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
            obj: { 'ppe': total7Days, 'pi': total7Days, 'pfn': total7Days, 'pc': total7Days, 'pvt': total7Days, 'like': total7Days },
            num: { 'ppe': 7, 'pi': 7, 'pfn': 7, 'pc': 7, 'pvt': 7, 'like': 7 },
            todaysValue: { 'ppe': 0, 'pi': 0, 'pfn': 0, 'pc': 0, 'pvt': 0, 'like': 0 },
            difference: { 'ppe': 0, 'pi': 0, 'pfn': 0, 'pc': 0, 'pvt': 0, 'like': 0 },
            mydata: [],
            totalWhatDays: total7Days,
            // genderAge: { '7': { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] }, '28': { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] }, '90': { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] } },
            demographic: {
                labels: ['13-17', '18-24', '25-34', '35-44', '45-54', '55-64', '65+'],
                datasets: [
                    {
                        label: 'Male',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        borderCapStyle: 'round',
                        data: genderAge7['M']
                    },
                    {
                        label: 'Female',
                        backgroundColor: 'rgba(155,231,91,0.2)',
                        borderColor: 'rgba(5,190,132,1)',
                        borderWidth: 1,
                        stack: 1,
                        hoverBackgroundColor: 'rgba(5,190,132,1)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
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
            progressValues: {
                'likeSourceToNumberOfFans': {
                    "Ads": 0,
                    "News Feed": 0,
                    "Page Suggestions": 0,
                    "Restored Likes from Reactivated Accounts": 0,
                    "Search": 0,
                    "Your Page": 0,
                    "Other": 0
                },
                'pifd': {
                    "1": 0,
                    "2": 0,
                    "3": 0,
                    "4": 0,
                    "5": 0,
                    "6-10": 0,
                    "11-20": 0,
                    "21+": 0
                },
                'pvs': {
                    "WWW": 0,
                    "MOBILE": 0,
                    "OTHER": 0
                },
                'feedback': {
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
            difference[metric] = (parseFloat(maindata[Object.keys(maindata)[0]][metric]) - parseFloat(maindata[Object.keys(maindata)[1]][metric])) / parseFloat(maindata[Object.keys(maindata)[1]][metric]) * 100
            return { difference };
        })
    }

    current4(obj) {
        console.log(genderAge7)
        console.log(genderAge28)
        console.log(genderAge90)
        console.log(obj);
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
            console.log(genderAge7)
            console.log(genderAge28)
            console.log(genderAge90)
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

    current5(number) {
        this.setState(prevState => {
            // console.log(genderAge);
            let demographic = Object.assign({}, prevState.demographic.datasets[1].data);
            demographic = number;
            console.log("demographic.datasets[1].data " + demographic)
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

        var script = document.createElement('script');

        script.src = "https://connect.facebook.net/en_US/sdk.js";
        script.async = true;
        script.defer = true;
        script.crossOrigin = 'anonymous'

        document.body.appendChild(script);

        console.log('run here')

        // var gid;

        // function statusChangeCallback(response) {
        //     console.log('statusChangeCallback');
        //     console.log(response);

        //     if (response.status === 'connected') {
        //         getFBData();
        //     } else {
        //         document.getElementById('status').innerHTML = 'Please log ' +
        //             'into this app.';
        //     }
        // }

        // function checkLoginState() {
        //     window.FB.getLoginStatus(function (response) {
        //         statusChangeCallback(response);
        //     });
        // }

        window.fbAsyncInit = function () {

            window.FB.init({
                appId: '1079944885546437',
                // autoLogAppEvents: true,
                cookie: true,
                xfbml: true,
                status: true,
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

        getFBData();

        function getFBData() {

            let accesstoken = 'EAAPWNENHrcUBAM7zxKq2buk1PkbPdqBpTZCzbW3zYA3d0pnau7QfUg6Ii2x2ieZAmv0mwBIqEU0Dw0JGB6QTa8ZCHg79d56luGsFsfpdZAnZAO2gG94vsfXEZAlM7lKJjTSdIc5V2sszFSZBsvM6DHoxLJPrUXsS9B3jCEtkveA68xFQaFAjBBx6qKtGAgHC06NIdBZAcl05VgZDZD'

            const now = Math.round(Date.now() / 1000);
            // around 90 days before
            const before = Math.round(now - 8000000);
            now.toString();
            before.toString();

            function getValue(data) {
                maindata = data;
                console.log(maindata);
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
                                } else if (count == 61) {
                                    total28Days[name] = sum;
                                } else if (count == -1) {
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
                        Object.entries(data.values[89].value).forEach(([key, value]) => {
                            fansCountryLifeTime[key] = value;
                        });
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
                                } else if (count == 0) {
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

                for (let i = 0; i < res.data.length; i++) {

                    switch (res.data[i].name) {

                        case 'page_views_by_site_logged_in_unique':
                            if (res.data[i].period == 'day') {
                                pageViewsBySite.updateAdvancedData(res.data[i], 'pvs');
                            }
                            break;

                        case 'page_post_engagements':
                            pagePostEngagement.updateSimpleData(res.data[i], 'ppe');
                            break;

                        case 'page_impressions':
                            pageImpressions.updateSimpleData(res.data[i], 'pi');
                            break;

                        case 'page_fan_adds_unique':
                            pageNewLikers.updateSimpleData(res.data[i], 'pfn');
                            break;

                        case 'page_fans':
                            pageTotalLikers.saveLivetimeValue(res.data[i]);
                            break;

                        case 'page_impressions_by_age_gender_unique':
                            genderAndAgeToFrequency.updateAgeGenderData(res.data[i], 'agegender');
                            // updateState();
                            break;

                        case 'page_consumptions':
                            clicksOnPageContents.updateSimpleData(res.data[i], 'pc');
                            break;

                        case 'page_fans_country':
                            fansCountry.saveLivetimeValue(res.data[i]);
                            break;

                        case 'page_fans_by_like_source':
                            fansByLikeSource.updateAdvancedData(res.data[i], 'likeSourceToNumberOfFans');
                            break;

                        case 'page_impressions_frequency_distribution':
                            if (res.data[i].period == 'day') {
                                pageImpressionsFrequencyDistribution.updateAdvancedData(res.data[i], 'pifd');
                            }
                            break;

                        case 'page_views_total':
                            pageViews.updateSimpleData(res.data[i], 'pvt');
                            break;

                        case 'page_actions_post_reactions_like_total':
                            postLikes.updateSimpleData(res.data[i], 'like');
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
                                postReactions.updateAdvancedData(res.data[i], 'feedback');
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

        // (function (d, s, id) {
        //     var js, fjs = d.getElementsByTagName(s)[0];
        //     if (d.getElementById(id)) return;
        //     js = d.createElement(s); js.id = id;
        //     js.src = "https://connect.facebook.net/en_US/sdk.js";
        //     fjs.parentNode.insertBefore(js, fjs);
        // }(document, 'script', 'facebook-jssdk'));

        wait(4 * 1000).then(() => {
            // let todaysValue = { 'ppe': parseFloat(maindata[Object.keys(maindata)[0]]['ppe']), 'pi': parseFloat(maindata[Object.keys(maindata)[0]]['pi']) }
            var metric;
            console.log(maindata)
            // while (maindata == []) this.run();
            for (metric of metricsArray) {
                todaysValue[metric] = parseFloat(maindata[Object.keys(maindata)[0]][metric])
                difference[metric] = (parseFloat(maindata[Object.keys(maindata)[0]][metric]) - parseFloat(maindata[Object.keys(maindata)[1]][metric])) / parseFloat(maindata[Object.keys(maindata)[1]][metric]) * 100
            }
            // temp = JSON.parse(JSON.stringify(progressValues));
            // console.log(outerGenderAge);
            console.log(maindata)
            console.log(temp);
            this.setState({ data: maindata, todaysValue: todaysValue, difference: difference, progressValues: temp });
            console.log(this.state.progressValues)
            // try setting 1 by 1
            // progressValues: {'likeSourceToNumberOfFans': total7Days['likeSourceToNumberOfFans'], 'pifd': total7Days['pifd'], 'pvs': total7Days['pvs'], 'feedback': total7Days['feedback']}}

        })
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
            window.FB.logout(function(response){
                console.log("Logged Out!");
                window.location = "/";
              });
        // })
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.logout}>Sign Out</button>
                <Card>
                    <CardBody>
                        <Row >
                            {metricsArray.map((value, index) => {
                                return (
                                    <Col lg="4" key={index}>
                                        <div className="card mb-2 widget-chart">
                                            <div className="widget-chart-content">
                                                <UncontrolledButtonDropdown className="mb-2 mr-2">
                                                    <DropdownToggle caret color="primary" className="mb-2 mr-2">
                                                        Days
                                                    </DropdownToggle>
                                                    <DropdownMenu>
                                                        <DropdownItem header>Choose the number of days</DropdownItem>
                                                        {/* <DropdownItem onClick={() => { this.currentAll('ppe', this.state.obj, total28Days); console.log(this.state.obj); this.currentAll('ppe', this.state.num, 28); console.log(this.state.num); this.currentAll('ppe', this.state.todaysValue, (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']))); console.log(this.state.todaysValue); this.currentAll('ppe', (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']) - parseFloat(maindata[Object.keys(maindata)[1]]['ppe'])) / parseFloat(maindata[Object.keys(maindata)[1]]['ppe']) * 100, this.state.difference); console.log(this.state.difference); }}>dk Days</DropdownItem> */}
                                                        <DropdownItem onClick={() => { this.current0(value, total7Days); console.log(this.state.obj); this.current1(value, 7); console.log(this.state.num); this.current2(value); console.log(this.state.todaysValue); this.current3(value); console.log(this.state.difference); }}>7 Days</DropdownItem>
                                                        <DropdownItem onClick={() => { this.current0(value, total28Days); this.current1(value, 28); this.current2(value); this.current3(value); }}>28 Days</DropdownItem>
                                                        <DropdownItem onClick={() => { this.current0(value, total90Days); this.current1(value, 90); this.current2(value); this.current3(value); }}>90 Days</DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledButtonDropdown>
                                                <div className="widget-numbers">
                                                    {this.state.todaysValue[value]}
                                                </div>
                                                <div className="widget-subheading">
                                                    {metricsName[index]}
                                                </div>
                                                <div className={this.state.difference[value] > 0 ? "widget-description text-success" : "widget-description text-danger"}>
                                                    <FontAwesomeIcon icon={this.state.difference[value] > 0 ? faAngleUp : faAngleDown} />
                                                    <span className="pl-1">{(this.state.difference[value]).toFixed(2)}%</span>
                                                </div>
                                                <div>
                                                    <ResponsiveContainer height={160}>
                                                        <AreaChart data={maindata.slice(0, this.state.num[value])} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                                                            <defs>
                                                                <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                                                    <stop offset="10%" stopColor="var(--warning)" stopOpacity={0.7} />
                                                                    <stop offset="90%" stopColor="var(--warning)" stopOpacity={0} />
                                                                </linearGradient>
                                                            </defs>
                                                            <Tooltip />
                                                            <Area type='monotoneX' dataKey={value} stroke='var(--warning)' strokeWidth={2} fillOpacity={1}
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
                                    </Col>

                                )
                            })}
                        </Row>
                    </CardBody>
                </Card>
                <br></br>
                <h2>Facebook Demographic Data</h2>
                <Col lg="12">
                    <Card className="main-card mb-3">
                        <CardBody>
                            <div>
                                <UncontrolledButtonDropdown className="mb-2 mr-2">
                                    <DropdownToggle caret color="primary" className="mb-2 mr-2">
                                        Days
                                    </DropdownToggle>
                                    <DropdownMenu>
                                        <DropdownItem header>Choose the number of days</DropdownItem>
                                        {/* <DropdownItem onClick={() => { this.currentAll('ppe', this.state.obj, total28Days); console.log(this.state.obj); this.currentAll('ppe', this.state.num, 28); console.log(this.state.num); this.currentAll('ppe', this.state.todaysValue, (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']))); console.log(this.state.todaysValue); this.currentAll('ppe', (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']) - parseFloat(maindata[Object.keys(maindata)[1]]['ppe'])) / parseFloat(maindata[Object.keys(maindata)[1]]['ppe']) * 100, this.state.difference); console.log(this.state.difference); }}>dk Days</DropdownItem> */}
                                        <DropdownItem onClick={() => { this.current4(genderAge7); }}>7 Days</DropdownItem>
                                        <DropdownItem onClick={() => { this.current4(genderAge28); }}>28 Days</DropdownItem>
                                        <DropdownItem onClick={() => { this.current4(genderAge90); }}>90 Days</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledButtonDropdown>
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
                <Card>
                    <div>
                        <Row>
                            {Object.keys(this.state.progressValues).map((key) => {
                                return (
                                    <Col lg="6">
                                        <div className="card mb-2 widget-chart">
                                            <div className="widget-chart-content">
                                                <CardBody>
                                                    <h4>{key.toUpperCase()}</h4>
                                                    <UncontrolledButtonDropdown className="mb-2 mr-2">
                                                        <DropdownToggle caret color="primary" className="mb-2 mr-2">
                                                            Days
                                        </DropdownToggle>
                                                        <DropdownMenu>
                                                            <DropdownItem header>Choose the number of days</DropdownItem>
                                                            {/* <DropdownItem onClick={() => { this.currentAll('ppe', this.state.obj, total28Days); console.log(this.state.obj); this.currentAll('ppe', this.state.num, 28); console.log(this.state.num); this.currentAll('ppe', this.state.todaysValue, (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']))); console.log(this.state.todaysValue); this.currentAll('ppe', (parseFloat(maindata[Object.keys(maindata)[0]]['ppe']) - parseFloat(maindata[Object.keys(maindata)[1]]['ppe'])) / parseFloat(maindata[Object.keys(maindata)[1]]['ppe']) * 100, this.state.difference); console.log(this.state.difference); }}>dk Days</DropdownItem> */}
                                                            <DropdownItem onClick={() => { this.current7(total7Days, key); this.current8(total7Days); }}>7 Days</DropdownItem>
                                                            <DropdownItem onClick={() => { this.current7(total28Days, key); this.current8(total28Days); }}>28 Days</DropdownItem>
                                                            <DropdownItem onClick={() => { this.current7(total90Days, key); this.current8(total90Days); }}>90 Days</DropdownItem>
                                                        </DropdownMenu>
                                                    </UncontrolledButtonDropdown>
                                                    {Object.keys(this.state.progressValues[key]).map((key2) => {
                                                        return (
                                                            <div>
                                                                <h5>{key2}</h5>
                                                                <Progress className="mb-3" animated color={barColor[key]} value={this.state.progressValues[key][key2]}>{this.state.totalWhatDays[key][key2]}</Progress>
                                                            </div>
                                                        )
                                                    })}
                                                </CardBody>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })}
                        </Row>
                    </div>
                </Card>
            </Fragment >
        )
    }
}
