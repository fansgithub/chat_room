export default {
    '_SPLICE': ' ',
    'month': {
        '01': 'Jan',
        '02': 'Feb',
        '03': 'Mar',
        '04': 'Apr',
        '05': 'May',
        '06': 'Jun',
        '07': 'Jul',
        '08': 'Aug',
        '09': 'Sep',
        '10': 'Oct',
        '11': 'Nov',
        '12': 'Dec',
    },
    'btn': {
        'revoke': 'Revoke',
        'filter': 'Filter',
        'submit': 'submit',
        'delete': 'delete',
        'confirm': 'Confirm'
    },
    time: {
        hour: 'hour'
    },
    'title': {
        'dashboard': 'Gaia Mobile',
        'signin': 'Sign In',
        'payroll': 'My Payroll',
        'approval': 'My Approval',
        'scheduling': 'My Schedule',
        'request-leave': 'Leave Request',
        'request-travel': 'Travel Request',
        'request-overtime': 'Overtime Request',
        'request-shifts': 'Shift Change',
        'transfer-shifts': 'Shift Change',
        'add-shifts': 'Shift Change',
        'my-shifts-list': 'Shift Change',
        'my-forms': 'My Forms',
        'form-detail': 'Form Detail',
        'balance': '查看额度',
        'request-sick-leave': 'Leave List',
        'sick-leave-form': 'Request Sick Leave'
    },
    'common': {
        'leave': {
            'day': '请假天数',
        },
        'hours': 'Hours',
        'detailedDescription': 'Detailed Description',
        'enterDetailedDescription': 'Please enter a detailed description ',
        'detail': 'Detail'
    },
    'week': {
        '0': 'Sun',
        '1': 'Mon',
        '2': 'Tues',
        '3': 'Wed',
        '4': 'Thur',
        '5': 'Fri',
        '6': 'Sat',
        'hours': {
            '0': 'This Week',
            '-1': 'Last Week',
            'type': {
                'regular': 'Regular',
                'overtime': 'Overtime',
                'leave': 'Leave',
                'travel': 'Travel',
            }
        }
    },
    'process': {
        'ACTIVE': 'ACTIVE',
        'COMPLETED': 'COMPLETED',
        'REJECT': 'REJECT',
        'CANCEL': 'CANCEL'
    },
    'form': {
        // 加班
        'PROCESSOVERTIMEFORM': 'Over Time',
        // 异常
        'ExceptionHandlingprocess': 'Exception',
        // 出差
        'PROCESSBUSINESSTRAVELFORM': 'Business',
        // 请假
        'PROCESSLEAVEFORM': 'Leave',
        // 换班
        'PROCESSTRANSFERSHIFTFORM': 'Transfer Shift',
        // 换班需求
        'PROCESSDEMANDPOOLFORM': 'Shift In Demand',
        //销假
        'PROCESSCANCELFORM': 'Sick LEave',
        //入职
        'PROCESSENTRYAPPLICATIONFORM': 'Entry',
        //离职
        'PROCESSDISMISSIONFORM': 'Leave Office',
        //转正
        'PROCESSTRANSFERFORM': 'Positive',
        //异动
        'PROCESSADJUSTFORM': 'Transaction',
        'noInfomation': 'No Information',
        'startTime': 'Start Time',
        'startDate': 'Start Date',
        'endTime': 'End Time',
        'endDate': 'End Date',
        'overTimeReason': 'Over Time Reason',
        'hour': 'Hour',
        'leave': 'Leave',
        'overtime': 'Overtime',
        'businesstravel': 'Business Travel',
        'cancel': 'Sick Leave',
        'applicantInfomation': 'Applicant Infomation',
        'applicant': 'Applicant',
        'applicantPosition': 'Applicant Position',
        'applicantDepartment': 'Applicant Department',
        'applicantTime': 'Applicant Time',
        'formNumber': 'Form Number',
        'formDetail': 'Form Detail',
        'leaveTime':{
            'D': 'Leave Days',
            'H': 'Leave Hours'
        },
        'overtimeHours': 'Hours',
        'leaveHours': 'Leave Hours',
        'leaveDays': 'Leave Days',
        'isRepeat': 'IsRepeat',
        'repeatTime': 'Repeat Time',
        'leaveReason': 'Leave Reason',
        'expound': 'Expound',
        'attachment': 'Attachment',
        'leaveQuota': 'Leave Quota',
        'overtimeQuota': 'Over Time Quoto',
        'usedQuota': 'Used Quota',
        'approvalingQuota': 'Approvaling Quota',
        'residualQuota': 'Residual Quota',
        'approvalProcess': 'Approval Process',
        'reason': {
            'PROCESSLEAVEFORM': 'Leave Reason',
            'PROCESSOVERTIMEFORM': 'Over Time Reason',
            'PROCESSBUSINESSTRAVELFORM': 'Business Reason',
        },
        'travel': {
            'type': 'Travel Type',
            'destination': 'Destination',
            'projectCode': 'Project Code',
            'searchProjectCode': 'Search Project Code',
            'hours': 'Travel Hours',
            'reason': 'Travel Reason',
            'detailedItinerary': 'Detailed Itinerary',
            'costType': 'Cost Type',
            'costDescribe': 'Cost Describe',
            'applicationAmount': 'Application Amount',
            'addSpareGoldApplication': 'Add A Spare Gold Application',
            'destinationPlaceholder': 'ex：Bei Jing、Shang Hai',
            'reasonPlaceholder': 'Please enter the reasons for the business trip...',
            'itineraryPlaceholder': 'Please enter the detailed itinerary...',
            'spareGoldApply': 'Spare Gold Apply',
            'spareGoldPlaceholder': 'Please enter the Detailed description of the cost...',
            'amountSummary': 'Amount Summary',
            'spareGold': 'Spare Gold',
            'validate': {
                '0': 'The start date of the spare gold should be greater than the start date of the business trip',
                '1': 'he start time of the spare gold should be less than equal to the end date of the business trip and the end of the spare gold',
                '2': 'The end date of the spare gold should be greater than equal to the start date of the business trip and the start date of the reserve gold',
                '3': 'The end date of the spare gold should be less than equal to the end date of the business trip'
            }
        },
        'sickLeave': {
            'startDate': 'Sick Leave Start Date',
            'endDate': 'Sick Leave End Date',
            'hours': 'Sick Leave Hours',
            'fixedHours': 'Fixed Hours'
        },
        'transfershift': {
            'shiftChange': '换班申请',
            'beforeChange': '换班前',
            'afterChange': '换班后',
            'apply': '申请',
            'changed': '被换'
        }
    },
    'requestLeave': {
        'viewBalance': '查看假期额度',
        'type': '请假类型',
        'mode': 'Leave Mode',
        'hours': '时长',
        'RepetitionalTimes': '重复次数',
        'leaveMode': {
            '0': '全天',
            '1': '上半个班次',
            '2': '下半个班次',
            '3': '弹性时段',
        }
    },
    'balance': {
        'approving': 'Approving',
        'goToLeave': '去请假',
        'year': 'Year',
    },
    'quota': {
        'effectivePeriod': 'Effective Period',
        'to': 'to',
        'used': 'Used',
        'remain': 'Remain',
        'hours': 'Hours',
        'usedOvertime': '已加班',
        'totalOvertime': '可加班额度',
        'unit': {
            '0': '天',
            '1': '工时'
        }
    },
    'requestOvertime': {
        type: 'Overtime Type',
        'currentPayPeriodQuota': '本考勤周期可加班额度',
        'date': 'Date',
        'actual': 'Actual',
        'startTime': 'Start Time',
        'endTime': 'End Time',
        'day': {
            'previous': 'Previous Day',
            'current': 'Current Day',
            'next': 'Next Day'
        },
        'reason': 'Reason',
        'isOff': '是否转调休',
        'manualMeal': '餐补时数',
        'mealType': '选餐类型',
    },
    'shifts': {
        'btn': {
            'provideShifts': '提供换班需求，等待别人与你换班',
        },
        'shiftTime': 'Shift Time',
        'reason': '换班理由',
        'selectYourShifts': '选择您要换的班次',
        'yourShifts': '您可替换的班次',
        'otherShifts': '他人提供的班次',
        'message': {
            'notHaveShift': '您当前没有符合条件的可换班',
            'demandPoolDetail': '目前暂无人员提供换班',
            'provideShifts': '您可以提供换班需求，等待别人与您换班'
        }
    },
    'yes': 'YES',
    'no': 'NO',
    'message': {
        'applySuccess': 'Apply Success'
    },
    'dateRange': 'Date Range',
    'thisMonth': 'This Month',
    'lastMonth': 'Last Month',
    'formStatus': 'Form Status',
    'formType': 'Form Type'
};