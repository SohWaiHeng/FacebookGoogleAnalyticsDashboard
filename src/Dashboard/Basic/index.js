import React, { Component, Fragment } from 'react';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Bar, Pie } from 'react-chartjs-2';
import styles from './index.css';

import {
    Row, Col,
    Card,
    CardBody,
    Progress,
} from 'reactstrap';

import {
    AreaChart, Area, 
    ResponsiveContainer,
    Tooltip,
} from 'recharts';

import {
    faAngleUp,
    faAngleDown,
    faThumbsUp,
    faHeart,
    faLaugh,
    faSadTear,
    faSurprise,
    faAngry
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
var maindata = [];
var total7Days = {
    'Likes Sources': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    'Page View Sites': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    'Fans Impressions': {
        "link": 0,
        "like": 0,
        "comment": 0,
        "other": 0
    }
};
var total28Days = {
    'Likes Sources': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    'Page View Sites': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    'Fans Impressions': {
        "link": 0,
        "like": 0,
        "comment": 0,
        "other": 0
    }
};
var total90Days = {
    'Likes Sources': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    'Page View Sites': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    'Fans Impressions': {
        "link": 0,
        "like": 0,
        "comment": 0,
        "other": 0
    }
};
var temp = {
    'Likes Sources': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    'Page View Sites': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    'Fans Impressions': {
        "link": 0,
        "like": 0,
        "comment": 0,
        "other": 0
    }
};
var countryDataArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var countryDataNames = [];
var totalCountryData = { '7': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], '28': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], '90': [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] };
var country = {
    labels: countryDataNames,
    datasets: [
        {
            data: countryDataArr,
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
var todaysDate, day7Date, day28Date, day90Date;
var previous7Days = { 'country': [] };
var previous28Days = { 'country': [] };
const lineChartColour = '#2ad2c9';
const countryNum = { 'Australia': 0, 'Canada': 0, 'China': 0, 'Great Britain': 0, 'Hong Kong': 0, 'India': 0, 'Macao': 0, 'Malaysia': 0, 'Singapore': 0, 'Taiwan': 0, 'USA': 0, 'Others': 0 };
const countryArr = { 'AU': 'Australia', 'CA': 'Canada', 'CN': 'China', 'GB': 'Great Britain', 'HK': 'Hong Kong', 'ID': 'India', 'MO': 'Macao', 'MY': 'Malaysia', 'SG': 'Singapore', 'TW': 'Taiwan', 'US': 'USA' }
let genderAge7 = { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] };
let genderAge28 = { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] };
let genderAge90 = { 'M': [0, 0, 0, 0, 0, 0, 0], 'F': [0, 0, 0, 0, 0, 0, 0], 'U': [0, 0, 0, 0, 0, 0, 0] };
var difference = { 'Page Engagement': { '7': 0, '28': 0, '90': 0 }, 'Post Impressions': { '7': 0, '28': 0, '90': 0 }, 'New Fans': { '7': 0, '28': 0, '90': 0 }, 'Page Consumptions': { '7': 0, '28': 0, '90': 0 }, 'Page View Total': { '7': 0, '28': 0, '90': 0 }, 'Daily Reach': { '7': 0, '28': 0, '90': 0 }, 'Number of Likes': { '7': 0, '28': 0, '90': 0 }, 'Number of Loves': { '7': 0, '28': 0, '90': 0 }, 'Number of Wow': { '7': 0, '28': 0, '90': 0 }, 'Number of Haha': { '7': 0, '28': 0, '90': 0 }, 'Number of Sorry': { '7': 0, '28': 0, '90': 0 }, 'Number of Anger': { '7': 0, '28': 0, '90': 0 } };
var todaysValue = {};
const barColor = { 'Likes Sources': 'success', 'Page Impressions Frequency': 'info', 'Page View Sites': 'warning', 'Fans Impressions': 'danger' }
const metricsArray = ['Page Engagement', 'Post Impressions', 'New Fans', 'Page Consumptions', 'Page View Total', 'Daily Reach'];
const reactionArray = ['Number of Likes', 'Number of Loves', 'Number of Wow', 'Number of Haha', 'Number of Sorry', 'Number of Anger'];
const description = {'WWW': 'World Wide Web', 'MOBILE': 'Mobile', 'OTHER': 'Others', 'link': 'Shared a post/story', 'like': 'Like a post/story', 'comment': 'Commented on a post/story', 'other': 'Others'}
var progressValues = {
    'Likes Sources': {
        "Ads": 0,
        "News Feed": 0,
        "Page Suggestions": 0,
        "Restored Likes from Reactivated Accounts": 0,
        "Search": 0,
        "Your Page": 0,
        "Other": 0
    },
    'Page View Sites': {
        "WWW": 0,
        "MOBILE": 0,
        "OTHER": 0
    },
    'Fans Impressions': {
        "link": 0,
        "like": 0,
        "comment": 0,
        "other": 0
    }
};

function formatNumber(num) {
    if (num == null) return;
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

var pageImpressionsFrequencyDistribution, pageViewsBySite, fansByLikeSource, fansCountry, pageTotalLikers, pagePostEngagement, pageImpressions, pageNewLikers, genderAndAgeToFrequency, clicksOnPageContents, pageViews, postLikes, postLoves, postWow, postHaha, postSorry, postAnger, postReactions, dailyReach;

export default class BasicDashboard extends Component {

    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',
            obj: { 'Page Engagement': total7Days, 'Post Impressions': total7Days, 'New Fans': total7Days, 'Page Consumptions': total7Days, 'Page View Total': total7Days, 'Daily Reach': total7Days, 'Number of Likes': total7Days, 'Number of Loves': total7Days, 'Number of Wow': total7Days, 'Number of Haha': total7Days, 'Number of Sorry': total7Days, 'Number of Anger': total7Days },
            num: { 'Page Engagement': 7, 'Post Impressions': 7, 'New Fans': 7, 'Page Consumptions': 7, 'Page View Total': 7, 'Daily Reach': 7, 'Number of Likes': 7, 'Number of Loves': 7, 'Number of Wow': 7, 'Number of Haha': 7, 'Number of Sorry': 7, 'Number of Anger': 7 },
            todaysValue: { 'Page Engagement': 0, 'Post Impressions': 0, 'New Fans': 0, 'Page Consumptions': 0, 'Page View Total': 0, 'Daily Reach': 0, 'Number of Likes': 0, 'Number of Loves': 0, 'Number of Wow': 0, 'Number of Haha': 0, 'Number of Sorry': 0, 'Number of Anger': 0 },
            difference: { 'Page Engagement': { '7': 0, '28': 0, '90': 0 }, 'Post Impressions': { '7': 0, '28': 0, '90': 0 }, 'New Fans': { '7': 0, '28': 0, '90': 0 }, 'Page Consumptions': { '7': 0, '28': 0, '90': 0 }, 'Page View Total': { '7': 0, '28': 0, '90': 0 }, 'Daily Reach': { '7': 0, '28': 0, '90': 0 }, 'Number of Likes': { '7': 0, '28': 0, '90': 0 }, 'Number of Loves': { '7': 0, '28': 0, '90': 0 }, 'Number of Wow': { '7': 0, '28': 0, '90': 0 }, 'Number of Haha': { '7': 0, '28': 0, '90': 0 }, 'Number of Sorry': { '7': 0, '28': 0, '90': 0 }, 'Number of Anger': { '7': 0, '28': 0, '90': 0 } },
            currentDifference: '7',
            mydata: [],
            totalWhatDays: total7Days,
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
                        data: genderAge90['M']
                    },
                    {
                        label: 'Female',
                        backgroundColor: 'rgba(255,87,121,0.2)',
                        borderColor: 'rgba(255,87,122,1)',
                        borderWidth: 1,
                        stack: 1,
                        hoverBackgroundColor: 'rgba(255,171,188,1)',
                        hoverBorderColor: 'rgba(255,87,122,1)',
                        data: genderAge90['F']
                    },
                    {
                        label: 'Unknown',
                        backgroundColor: 'rgba(15,21,150,0.2)',
                        borderColor: 'rgba(25,99,232,1)',
                        borderWidth: 1,
                        stack: 2,
                        hoverBackgroundColor: 'rgba(25,99,232,1)',
                        hoverBorderColor: 'rgba(7,9,232,1)',
                        data: genderAge90['U']
                    }
                ]
            },
            thecountry: {
                labels: [],
                datasets: [
                    {
                        data: [],
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
                'Likes Sources': {
                    "Ads": 0,
                    "News Feed": 0,
                    "Page Suggestions": 0,
                    "Restored Likes from Reactivated Accounts": 0,
                    "Search": 0,
                    "Your Page": 0,
                    "Other": 0
                },
                'Page View Sites': {
                    "WWW": 0,
                    "MOBILE": 0,
                    "OTHER": 0
                },
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

    updateDataDisplayed(difference) {
        const arr = difference == '7' ? total7Days : (difference == '28' ? total28Days : total90Days)
        metricsArray.map((value, index) => {
            this.current0(value, arr);
            this.current1(value, parseFloat(difference));
            this.current2(value);
            this.current3(value);
        })
        reactionArray.map((value, index) => {
            this.current0(value, arr);
            this.current1(value, parseFloat(difference));
            this.current2(value);
            this.current3(value);
        })
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
            difference[metric]['7'] = ((total7Days[metric] - previous7Days[metric]) / previous7Days[metric]) * 100
            difference[metric]['28'] = ((total28Days[metric] - previous28Days[metric]) / previous28Days[metric]) * 100
            return { difference };
        })
    }

    current4(obj) {
        this.setState(prevState => {
            let demographic = Object.assign({}, prevState.demographic);
            const copy = JSON.parse(JSON.stringify(obj))
            demographic.datasets.map((value) => {
                if (value.label == 'Male') value.data = copy['M'];
                else if (value.label == 'Female') value.data = copy['F'];
                else if (value.label == 'Unknown') value.data = copy['U'];
            })
            return { demographic };
        })
    };

    current5(array) {
        this.setState(prevState => {
            let thecountry = Object.assign({}, prevState.thecountry);
            thecountry.datasets[0].data = array;
            return { thecountry }
        })
    }

    current7(obj, name) {
        Object.entries(obj[name]).forEach(([key2, value2]) => {
            temp[name][key2] = 0 || ((obj[name][key2] / Math.max(...Object.values(obj[name]))) * 100);
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

    current6(number) {
        this.setState(prevState => {
            let demographic = Object.assign({}, prevState.demographic.datasets[2].data);
            demographic = number;
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

        window.fbAsyncInit = function () {

            window.FB.init({
                appId: process.env.FACEBOOK_APP_ID,
                xfbml: true,
                status: true,
                cooie: true,
                version: 'v8.0'
            });

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

        wait(2 * 1000).then(() => { getFBData() });

        function getFBData() {

            let accesstoken = {PAGE_ACCESS_TOKEN};

            const now = Math.round(Date.now() / 1000);
            const before = Math.round(now - 8000000);
            now.toString();
            before.toString();

            function getValue(data) {
                maindata = data;
                return maindata;
            }

            function startThis(callback) {
                return getInsights("page_post_engagements,page_impressions,page_fans,page_fan_adds_unique,page_impressions_by_age_gender_unique,page_consumptions,page_fans_by_like_source,page_impressions_frequency_distribution,page_views_total,page_views_by_site_logged_in_unique,page_fans_country,page_actions_post_reactions_like_total,page_actions_post_reactions_love_total,page_actions_post_reactions_wow_total,page_actions_post_reactions_haha_total,page_actions_post_reactions_sorry_total,page_actions_post_reactions_anger_total,page_positive_feedback_by_type,page_impressions_viral_unique", function (res) {
                    createClass(res, function (resp) {
                        getValue(resp);
                    })
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
                                    total7Days[name] = sum || 0;
                                } else if (count == 75) {
                                    previous7Days[name] = sum - total7Days[name] || 0
                                } else if (count == 61) {
                                    total28Days[name] = sum || 0;
                                } else if (count == 33) {
                                    previous28Days[name] = sum - total28Days[name] || 0
                                } else if (count == 0) {
                                    total90Days[name] = sum || 0;
                                    return;
                                }
                                obj[name] = data.values[count].value || 0;
                                sum += data.values[count].value || 0;
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

                    changeCountryData(data) {
                        todaysDate = data.values[90].end_time.substring(0, 10)
                        day7Date = data.values[84].end_time.substring(0, 10)
                        day28Date = data.values[63].end_time.substring(0, 10)
                        day90Date = data.values[1].end_time.substring(0, 10)
                        Object.entries(data.values[data.values.length - 1].value).forEach(([key, value]) => {
                            key in countryArr ? countryNum[countryArr[key]] = value : countryNum['Others'] += value;
                        })
                        Object.entries(countryNum).forEach(([key, value]) => {
                            var count = 0;
                            while (count < 12) {
                                if (value >= countryDataArr[count]) {
                                    countryDataArr.splice(count, 0, value)
                                    countryDataNames.splice(count, 0, key)
                                    break;
                                }
                                count++;
                            }
                            countryDataArr[count] = value
                            countryDataNames[count] = key
                        })
                        countryDataArr = countryDataArr.slice(0, 12);
                        countryDataNames = countryDataNames.slice(0, 12);
                    }

                    saveLivetimeValue(data) {
                        todaysDate = data.values[90].end_time.substring(0, 10)
                        day7Date = data.values[84].end_time.substring(0, 10)
                        day28Date = data.values[63].end_time.substring(0, 10)
                        day90Date = data.values[1].end_time.substring(0, 10)
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

                    changeAgeAndGender(data) {
                        const substitute = { '13-17': 0, '18-24': 1, '25-34': 2, '35-44': 3, '45-54': 4, '55-64': 5, '65+': 6 }
                        Object.entries(data.values[data.values.length - 1].value).forEach(([key, value]) => {
                            if (key.substring(0, 1) == 'U' && key.substring(2) == '13-17') return;
                            genderAge90[key.substring(0, 1)][substitute[key.substring(2)]] = value == NaN ? 0 : value;
                        })
                    }

                    updateAgeGenderData(data, name) {
                        var count = data.values.length - 1, sum = { 'M': {}, 'F': {}, 'U': {} };
                        const substitute = { '13-17': 0, '18-24': 1, '25-34': 2, '35-44': 3, '45-54': 4, '55-64': 5, '65+': 6 }
                        allData.forEach((obj) => {
                            if (data.period == 'day') {
                                obj[name] = { 'M': {}, 'F': {}, 'U': {} };
                                let temp;
                                if (count == data.values.length - 1) {
                                    Object.entries(data.values[count].value).forEach(([key, value]) => {
                                        value == NaN ? temp = 0 : temp = value;
                                        genderAge90[key.substring(0, 1)][key.substring(2)] = value == NaN ? 0 : value;
                                        sum[key.substring(0, 1)][key.substring(2)] = temp;
                                    });
                                } else if (count > -1) {
                                    Object.entries(data.values[count].value).forEach(([key, value]) => {
                                        value == NaN ? temp = 0 : temp = value;
                                        obj[name][key.substring(0, 1)][key.substring(2)] = temp;
                                        genderAge90[key.substring(0, 1)][key.substring(2)] += temp;
                                    });
                                }
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
                dailyReach = new Metrics('page_impressions_viral_unique', 7)


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

                        case 'page_impressions_viral_unique':
                            pageTotalLikers.updateSimpleData(res.data[i], 'Daily Reach');
                            break;

                        case 'page_impressions_by_age_gender_unique':
                            genderAndAgeToFrequency.changeAgeAndGender(res.data[i]);
                            break;

                        case 'page_consumptions':
                            clicksOnPageContents.updateSimpleData(res.data[i], 'Page Consumptions');
                            break;

                        case 'page_fans_country':
                            fansCountry.changeCountryData(res.data[i]);
                            break;

                        case 'page_fans_by_like_source':
                            fansByLikeSource.updateAdvancedData(res.data[i], 'Likes Sources');
                            break;

                        case 'page_views_total':
                            pageViews.updateSimpleData(res.data[i], 'Page View Total');
                            break;

                        case 'page_actions_post_reactions_like_total':
                            postLikes.updateSimpleData(res.data[i], 'Number of Likes');
                            break;

                        case 'page_actions_post_reactions_love_total':
                            postLoves.updateSimpleData(res.data[i], 'Number of Loves');
                            break;

                        case 'page_actions_post_reactions_wow_total':
                            postWow.updateSimpleData(res.data[i], 'Number of Wow');
                            break;

                        case 'page_actions_post_reactions_haha_total':
                            postHaha.updateSimpleData(res.data[i], 'Number of Haha');
                            break;

                        case 'page_actions_post_reactions_sorry_total':
                            postSorry.updateSimpleData(res.data[i], 'Number of Sorry');
                            break;

                        case 'page_actions_post_reactions_anger_total':
                            postAnger.updateSimpleData(res.data[i], 'Number of Anger');
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
                return maindata;
            })

        }

        wait(6 * 1000).then(() => {
            var metric;
            for (metric of metricsArray) {
                todaysValue[metric] = parseFloat(maindata[Object.keys(maindata)[0]][metric])
                difference[metric]['7'] = ((total7Days[metric] - previous7Days[metric]) / previous7Days[metric]) * 100
                difference[metric]['28'] = ((total28Days[metric] - previous28Days[metric]) / previous28Days[metric]) * 100
            }
            for (metric of reactionArray) {
                todaysValue[metric] = parseFloat(maindata[Object.keys(maindata)[0]][metric])
                difference[metric]['7'] = ((total7Days[metric] - previous7Days[metric]) / previous7Days[metric]) * 100
                difference[metric]['28'] = ((total28Days[metric] - previous28Days[metric]) / previous28Days[metric]) * 100
            }
            this.setState({ data: maindata, todaysValue: todaysValue, difference: difference, progressValues: temp, thecountry: country });

        })
    }

    logout = () => {
        window.FB.logout(function (response) {
            window.location = "/";
        });
    }

    render() {
        return (
            <>
                <Fragment>
                    <UncontrolledButtonDropdown className="mb-2 mr-2">
                        <DropdownToggle caret color="primary" className="mb-2 mr-2">
                            Days
                        </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem header>Choose the number of days</DropdownItem>
                            <DropdownItem onClick={() => { this.changeCurrentDifference('7'); this.updateDataDisplayed('7'); }}><b>7 Days</b> ({day7Date} to {todaysDate})</DropdownItem>
                            <DropdownItem onClick={() => { this.changeCurrentDifference('28'); this.updateDataDisplayed('28'); }}><b>28 Days</b> ({day28Date} to {todaysDate})</DropdownItem>
                            <DropdownItem onClick={() => { this.changeCurrentDifference('90'); this.updateDataDisplayed('90'); }}><b>90 Days</b> ({day90Date} to {todaysDate})</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledButtonDropdown>
                    <Row >
                        {metricsArray.map((value, index) => {
                            return (
                                <Col lg="4" key={index}>
                                    <div className="card" className={styles.card}>
                                        <div className="card-body">
                                            <div className="card mb-2 widget-chart">
                                                <div className="widget-chart-content"><br />
                                                    <div className="widget-subheading">
                                                        <h2><b>{metricsArray[index]}</b></h2>
                                                    </div>
                                                    <div className="widget-numbers">
                                                        <h3><b>{this.state.currentDifference == '7' ? formatNumber(total7Days[value]) : (this.state.currentDifference == '28' ? formatNumber(total28Days[value]) : this.state.currentDifference == '90' ? formatNumber(total90Days[value]) : '')}</b></h3>
                                                    </div>
                                                    {this.state.currentDifference == '90' ? '' :
                                                        <div>
                                                            <div className={this.state.difference[value][this.state.currentDifference] > 0 ? "widget-description text-success" : "widget-description text-danger"}>
                                                                <FontAwesomeIcon icon={this.state.difference[value][this.state.currentDifference] > 0 ? faAngleUp : faAngleDown} />
                                                                <span className="pl-1">{(this.state.difference[value][this.state.currentDifference]).toFixed(2)}%</span>
                                                            </div>
                                                            <div>( from prev. period [{this.state.currentDifference == '7' ? formatNumber(previous7Days[value]) : formatNumber(previous28Days[value])}] )</div>
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
                                                },
                                                plugins: {
                                                    datalabels: {
                                                        display: false
                                                    }
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
                                        <Pie dataKey="value" data={this.state.thecountry}
                                            options={{
                                                plugins: {
                                                    datalabels: {
                                                        display: false
                                                    }
                                                }
                                            }}
                                        />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <Card style={{width:"80%", height:"60%", marginLeft:"10%"}}>
                        <h2><b>Page Reactions</b></h2>
                        <Row>
                            <Col md="4"><CardBody>
                                <FontAwesomeIcon icon={faThumbsUp} size="3x" /> <div><h4>{this.state.currentDifference == '7' ? formatNumber(total7Days['Number of Likes']) : (this.state.currentDifference == '28' ? formatNumber(total28Days['Number of Likes']) : this.state.currentDifference == '90' ? formatNumber(total90Days['Number of Likes']) : '')}</h4></div>
                            </CardBody></Col>
                            <Col md="4"><CardBody>
                                <FontAwesomeIcon icon={faHeart} size="3x" /> <div><h4>{this.state.currentDifference == '7' ? formatNumber(total7Days['Number of Loves']) : (this.state.currentDifference == '28' ? formatNumber(total28Days['Number of Loves']) : this.state.currentDifference == '90' ? formatNumber(total90Days['Number of Loves']) : '')}</h4></div>
                            </CardBody></Col>
                            <Col md="4"><CardBody><FontAwesomeIcon icon={faLaugh} size="3x" /> <div><h4>{this.state.currentDifference == '7' ? formatNumber(total7Days['Number of Haha']) : (this.state.currentDifference == '28' ? formatNumber(total28Days['Number of Haha']) : this.state.currentDifference == '90' ? formatNumber(total90Days['Number of Haha']) : '')}</h4></div> </CardBody></Col> 

                            <Col lg="4"><CardBody><FontAwesomeIcon icon={faSurprise} size="3x" /> <div><h4>{this.state.currentDifference == '7' ? formatNumber(total7Days['Number of Wow']) : (this.state.currentDifference == '28' ? formatNumber(total28Days['Number of Wow']) : this.state.currentDifference == '90' ? formatNumber(total90Days['Number of Wow']) : '')}</h4></div> </CardBody></Col> 
                            <Col lg="4"><CardBody><FontAwesomeIcon icon={faSadTear} size="3x" /> <div><h4>{this.state.currentDifference == '7' ? formatNumber(total7Days['Number of Sorry']) : (this.state.currentDifference == '28' ? formatNumber(total28Days['Number of Sorry']) : this.state.currentDifference == '90' ? formatNumber(total90Days['Number of Sorry']) : '')}</h4></div> </CardBody></Col> 
                            <Col lg="4"><CardBody><FontAwesomeIcon icon={faAngry} size="3x" /> <div><h4>{this.state.currentDifference == '7' ? formatNumber(total7Days['Number of Anger']) : (this.state.currentDifference == '28' ? formatNumber(total28Days['Number of Anger']) : this.state.currentDifference == '90' ? formatNumber(total90Days['Number of Anger']) : '')}</h4></div> </CardBody></Col> 

                        </Row></Card>
                    <Row>
                        {Object.keys(this.state.progressValues).map((key) => {
                            return (
                                <Col lg="4">
                                    <div className="card" className={styles.card}>
                                        <div className="card-body">
                                            <div className="card mb-2 widget-chart">
                                                <div className="widget-chart-content">
                                                    <h3><b>{key}</b></h3>
                                                    {Object.keys(this.state.progressValues[key]).map((key2) => {
                                                        return (
                                                            <div>
                                                                <h5>{key2 in description? description[key2] : key2}</h5>
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
            </>
        )
    }
}
