
//整理多语言，未完成
export default {
    //多语言拼接符,无需翻译
    '_SPLICE': '',
    'month': {
        '01': '一月',
        '02': '二月',
        '03': '三月',
        '04': '四月',
        '05': '五月',
        '06': '六月',
        '07': '七月',
        '08': '八月',
        '09': '九月',
        '10': '十月',
        '11': '十一月',
        '12': '十二月',
    },
    'week': {
        '0': '周日',
        '1': '周一',
        '2': '周二',
        '3': '周三',
        '4': '周四',
        '5': '周五',
        '6': '周六',
        'hours': {
            '0': '本周工时',
            '-1': '上周工时',
            'type': {
                'regular': '正常工作',
                'overtime': '加班',
                'leave': '请假',
                'travel': '出差',
            }
        }
    },
    'btn': {
        'revoke': '撤销',
        'filter': '筛选',
        'submit': '提交',
        'delete': '删除',
        'confirm': '确定',
        'agree': '同意',
        'reject': '驳回',
        'reset': '重置',
    },

    'common': {
        'leave': {
            'day': '请假天数',
        },
        'hours': '时长',
        'detailedDescription': '详细说明',
        'enterDetailedDescription': '请输入详细描述',
        'detail': '详情'
    },

    'process': {
        'ACTIVE': '审批中',
        'COMPLETED': '已通过',
        'REJECT': '已驳回',
        'CANCEL': '已撤销'
    },


    time: {
        hour: '小时'
    },

    
    'form': {
        'title': {
            'dashboard': '掌上考勤',
            'signin': '打卡',
            'payroll': '我的薪资',
            'approval': '我的签核',
            'scheduling': '我的排班',
            'request-leave': '请假申请',
            'request-travel': '出差申请',
            'request-overtime': '加班申请',
            'request-shifts': '换班申请',
            'transfer-shifts': '换班申请',
            'add-shifts': '换班申请',
            'my-shifts-list': '换班申请',
            'my-forms': '我的表单',
            'form-detail': '表单详情',
            'balance': '查看额度',
            'request-sick-leave': '请假列表',
            'sick-leave-form': '销假申请'
        },
        'info': {
            'applyPersonName': '申请人姓名',
            'departmentInfo': '部门信息',
            'departmentCode': '部门代码',
            'departmentName': '部门名称',
            'oldPhoneModel': '手机原基本信息',
            'newPhoneModel': '手机变更后信息',
            'phoneModal': '手机型号',
            'phoneSystemVersion': '手机系统版本',
            'deviceNumber': '设备号',
            'SIMCardID': 'SIM卡ID',
            'bindWorker': '绑定员工',
            'changeReason': '变更原因',
            'total': '共找到了{{total}}个表单',
            'Others': '移动设备变更信息',
            'leaveNumber': '请假数值',
            'overtimeNumber': '加班数值',
            'cancelNumber': '销假数值',
            'occurrenceTime': '发生时间',
            'detailedDescription': '详细说明',
            'startTime': '开始时间',
            'startDate': '开始日期',
            'endTime': '结束时间',
            'endDate': '结束日期',
            'overTimeReason': '加班原因',
            'hour': '时数',
            'leave': '请假',
            'overtime': '加班',
            'businesstravel': '出差',
            'cancel': '销假',
            'applicantInfomation': '申请信息',
            'applicant': '申请人',
            'applicantPosition': '申请人职位',
            'applicantDepartment': '申请人部门',
            'applicantTime': '申请时间',
            'formNumber': '表单编号',
            'formDetail': '表单详情',
        },
        'approveStatus': {
            'ACTIVE': '审核中',
            'COMPLETED': '已通过',
            'REJECT': '已驳回',
            'CANCEL': '已撤销'
        },
        type: {
            'leaveApplyForm': '请假申请单',
            'overtimeApplyForm': '加班申请单',
            'cancelApplyForm': '销假申请单',
            'exceptionApplyForm': '个人异常申请单',
            'shiftApplyForm': '换班申请单',
            // 加班
            'PROCESSOVERTIMEFORM': '加班',
            // 异常
            'ExceptionHandlingprocess': '异常',
            // 出差
            'PROCESSBUSINESSTRAVELFORM': '出差',
            // 请假
            'PROCESSLEAVEFORM': '请假',
            // 换班
            'PROCESSTRANSFERSHIFTFORM': '换班',
            // 换班需求
            'PROCESSDEMANDPOOLFORM': '换班需求',
            //销假
            'PROCESSCANCELFORM': '销假',
            //入职
            'PROCESSENTRYAPPLICATIONFORM': '入职',
            //离职
            'PROCESSDISMISSIONFORM': '离职',
            //转正
            'PROCESSTRANSFERFORM': '转正',
            //异动
            'PROCESSADJUSTFORM': '异动',
        },
        messages: {
            'pleaseUploadAattachment': '请上传附件',
            'pleaseReuploadTheAttachments': '请重新上传附件',
            'leaveSubmitSuccess': '您的请假申请单已提交成功',
            'overTimeSubmitSuccess': '您的加班申请单已提交成功',
            'travelSubmitSuccess': '您的出差申请单已提交成功',
            'sickLeaveSubmitSuccess': '您的销假申请单已提交成功',
        },

        
        'noInfomation': '暂无信息',
       
        'leaveTime':{
            'D': '请假天数',
            'H': '请假时数'
        },
        'overtimeHours': '加班时数',
        'leaveHours': '请假时数',
        'leaveDays': '请假天数',
        'isRepeat': '是否重复',
        'repeatTime': '重复次数',
        'leaveReason': '请假原因',
        'expound': '详细说明',
        'attachment': '附件',
        'leaveQuota': '请假额度',
        'overtimeQuota': '加班额度',
        'usedQuota': '已使用额度',
        'approvalingQuota': '审批中额度',
        'residualQuota': '剩余额度',
        'approvalProcess': '审批流程',
        'reason': {
            'PROCESSLEAVEFORM': '请假原因',
            'PROCESSOVERTIMEFORM': '加班原因',
            'PROCESSBUSINESSTRAVELFORM': '出差原因',
            'ExceptionHandlingprocess': '申诉原因'
        },
        'travel': {
            'type': '出差类型',
            'destination': '目的地',
            'searchProjectCode': '搜索项目代码',
            'projectCode': '项目代码',
            'hours': '出差时数',
            'reason': '出差原因',
            'detailedItinerary': '详细行程',
            'costType': '费用种类',
            'costDescribe': '费用描述',
            'applicationAmount': '申请金额',
            'addSpareGoldApplication': '添加备用金申请',
            'destinationPlaceholder': '例：北京、上海',
            'reasonPlaceholder': '请输入出差原因...',
            'itineraryPlaceholder': '请输入详细行程...',
            'spareGoldApply': '备用金申请',
            'spareGoldPlaceholder': '请输入费用详细描述',
            'amountSummary': '金额汇总',
            'spareGold': '备用金',
            'spareGoldStartDate': '备用金开始日期',
            'spareGoldEndDate': '备用金结束日期',
            'validate': {
                '0': '备用金开始日期要大于等于出差开始日期',
                '1': '备用金开始时间要小于等于出差结束日期和备用金结束日期',
                '2': '备用金结束日期要大于等于出差开始日期和备用金开始日期',
                '3': '备用金结束日期要小于等于出差结束日期'
            },
            
        },
        'sickLeave': {
            'startDate': '销假开始日期',
            'endDate': '销假结束日期',
            'hours': '销假时数',
            'fixedHours': '固定时段'
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
        'mode': '请假模式',
        'reason': '请假原因',
        'RepetitionalTimes': '重复次数',
        'leaveMode': {
            '0': '全天',
            '1': '上半个班次',
            '2': '下半个班次',
            '3': '弹性时段',
            '4': '多天'
        }
    },
    'balance': {
        'approving': '审批中',
        'goToLeave': '去请假',
        'year': '年',
    },
    'quota': {
        'effectivePeriod': '有效期',
        'to': '至',
        'used': '已用',
        'remain': '剩余',
        'hours': '工时',
        'usedOvertime': '已加班',
        'totalOvertime': '可加班额度',
        'unit': {
            '0': '天',
            '1': '工时'
        }
    },
    'requestOvertime': {
        'type': '加班类型',
        'currentPayPeriodQuota': '本考勤周期可加班额度',
        'date': '加班日期',
        'actual': '实际加班日期',
        'startTime': '开始时间',
        'endTime': '结束时间',
        'day': {
            'previous': '前一天',
            'current': '当天',
            'next': '后一天'
        },
        'reason': '加班原因',
        'isOff': '是否转调休',
        'manualMeal': '餐补时数',
        'mealType': '选餐类型',
        'approvedOverTime': '已加班：',
        'approvedHours': '已申请时数（小时）',
        'safetyQuota': '额度上限（小时）',
    },
    'shifts': {
        'btn': {
            'provideShifts': '提供换班需求，等待别人与你换班',
        },
        'shiftTime': '上班时间',
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
    'yes': '是',
    'no': '否',
    'message': {
        'applySuccess': '申请成功',
        'chooseAtLeastOneForm': '至少选择一个表单',
        'approveSuccess': '审核完成',
    },
    'dateRange': '日期区间',
    'thisMonth': '本月',
    'lastMonth': '上月',
    'formStatus': '表单状态',
    'formType': '表单类型',
    'batchOperation': '批量操作',
    'all': '全部',
    'auditOpinion': '审核意见',
    'mobileInfoChange': '手机信息变更',
    'noFormApplication': '暂无表单申请',
    'noFormApplicationRemark': '这里将会展示您需要审批的表单信息',
    'enterauditOpinion': '请输入审核意见',
    'loadMore': '查看更多',
};