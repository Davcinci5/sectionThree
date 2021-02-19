import React from 'react';

import {LineChart} from '../components/Chart/Chart'

export default {
  title: 'Example/Chart',
  component: LineChart
};

const Template = (args) => <LineChart {...args} />;

export const PoolCost = Template.bind({});
PoolCost.args = {
    data: [['JANUARY',10.5],['FEBRUARY',23.6],['MARCH',12.8],['APRIL',27.9],['MAY',17.4],['JUNE',35.5],['JULY',28.4],['AUGUST',33.1],['SEPTEMBER',40.6],['OCTOBER',35.5],['NOVEMBER',27.8],['DECEMBER',36.4]],
    start: 0,
    set: 12,
    text: 'Pool Cost',
    nextSet: ()=>{}
};

export const WeatherChange = Template.bind({});
WeatherChange.args = {
    data: [['JANUARY',15],['FEBRUARY',26],['MARCH',18],['APRIL',29],['MAY',14],['JUNE',35],['JULY',24],['AUGUST',31],['SEPTEMBER',46],['OCTOBER',35],['NOVEMBER',28],['DECEMBER',34]],
    start: 1,
    set: 6,
    text: 'Weather Change',
    nextSet: ()=>{}
};

export const RateChangeHundred = Template.bind({});
RateChangeHundred.args = {
    data: [['USD',1],['XIH',12],['QYJ',23],['GLS',97],['BOM',97],['THF',64],['FIK',88],['ZOU',42],['KNX',51],['XKY',105],['WFQ',86],['LDD',32],['AWN',27],['LRA',18],['IDF',57],['EIQ',100],['STA',97],['DQG',74],['BNI',37],['OLA',12],['JXO',89],['RNQ',14],['MSZ',88],['JEI',47],['VTJ',83],['CNB',19],['TZT',43],['AJY',40],['MRN',50],['AQG',48],['AVZ',21],['RGH',98],['JQW',49],['WRC',12],['VRO',64],['TXB',52],['OWT',107],['GXG',105],['HOX',80],['LAD',96],['KFH',45],['TSW',85],['UBX',17],['WUV',19],['FWL',95],['AAG',93],['AZY',103],['AAV',70],['FMK',27],['LPG',10],['FEA',35],['QNE',10],['PDH',15],['XMA',71],['QYK',57],['XTH',104],['NBL',43],['YHA',73],['QQC',31],['BPF',60],['COT',99],['VKZ',73],['VEM',27],['QWG',63],['DCU',94],['BUK',23],['CTZ',12],['JJY',40],['BZZ',25],['MZU',99],['CFV',51],['XSG',107],['JKV',57],['DTX',102],['YMQ',88],['PTI',12],['QMZ',79],['YPG',108],['SOQ',35],['ZCH',79],['WSK',72],['LPW',15],['JZV',65],['TRF',102],['ZSV',89],['LBP',45],['VMH',41],['EFU',33],['TWC',31],['PVT',33],['GMI',23],['CKM',71],['UJG',81],['LQQ',43],['ZNV',89],['YSR',84],['DTX',92],['FSH',27],['XMI',98],['MDQ',20],['RCY',23]],
    start: 0,
    set: 100,
    text: 'Rate Exchange 100',
    nextSet: ()=>{}
};



