let routes = [{
    path: '/home',
    component: (resolve) => require(["./../modules/Home.vue"], resolve),
    children: [
      // 重定向到档案页
      {
        path: '',
        redirect: "/homePage",
      },
      {
        path: "/homePage",
        name: "homePage",
        component: (resolve) => require(["./../modules/homePage.vue"], resolve),
        meta: {
          title: "首页",
        }
      },

      {
        path: "/myCenter",
        name: "myCenter",
        component: (resolve) => require(["./../modules/myCenter.vue"], resolve),
        meta: {
          title: "个人中心",
          keepAlive: false
        }
      },


    ]
  },
  {
    path: "/oilCardRecharge",
    name: "oilCardRecharge",
    component: (resolve) => require(["./../modules/oilCardRecharge.vue"], resolve),
    meta: {
      title: "油卡充值",
    }
  },
  {
    path: "/oilCardBound",
    name: "oilCardBound",
    component: (resolve) => require(["./../modules/oilCardBound.vue"], resolve),
    meta: {
      title: "绑定油卡",
    }
  },
  {
    path: "/telephoneBillRecharge",
    name: "telephoneBillRecharge",
    component: (resolve) => require(["./../modules/telephoneBillRecharge.vue"], resolve),
    meta: {
      title: "话费充值",
    }
  },
  {
    path: "/noticeInfo",
    name: "noticeInfo",
    component: (resolve) => require(["./../modules/noticeInfo.vue"], resolve),
    meta: {
      title: "注意事项",
    }
  },


  {
    path: "/distributorLogin",
    name: "distributorLogin",
    component: (resolve) => require(["./../modules/distributorLogin.vue"], resolve),
    meta: {
      title: "经销商登录",
    }
  },

  {
    path: "/expandManagement",
    name: "expandManagement",
    component: (resolve) => require(["./../modules/expandManagement.vue"], resolve),
    meta: {
      title: "推广员管理",
    }
  },

  {
    path: "/feedback",
    name: "feedback",
    component: (resolve) => require(["./../modules/feedback.vue"], resolve),
    meta: {
      title: "意见反馈",
    }
  },
  {
    path: "/aboutUs",
    name: "aboutUs",
    component: (resolve) => require(["./../modules/aboutUs.vue"], resolve),
    meta: {
      title: "关于我们",
    }
  },
  {
    path: "/connect",
    name: "connect",
    component: (resolve) => require(["./../modules/connect.vue"], resolve),
    meta: {
      title: "联系客服",
    }
  },
  // 经销商页面
  {
    path: "/distributorManagement",
    name: "distributorManagement",
    component: (resolve) => require(["./../modules/distributorManagement/distributorManagement.vue"], resolve),
    meta: {
      title: "经销商管理",
    }
  },
  {
    path: "/oilChariotHistory",
    name: "oilChariotHistory",
    component: (resolve) => require(["./../modules/distributorManagement/oilChariotHistory.vue"], resolve),
    meta: {
      title: "屯油记录",
    }

  },
  {
    path: "/discountCardInfo",
    name: "discountCardInfo",
    component: (resolve) => require(["./../modules/distributorManagement/discountCardInfo.vue"], resolve),
    meta: {
      title: "优惠卡信息",
    }
  },
  {
    path: "/userList",
    name: "userList",
    component: (resolve) => require(["./../modules/distributorManagement/userList.vue"], resolve),
    meta: {
      title: "用户列表",
    }
  },
  {
    path: "/discountCardIssue",
    name: "discountCardIssue",
    component: (resolve) => require(["./../modules/distributorManagement/discountCardIssue.vue"], resolve),
    meta: {
      title: "发行优惠卡",
    }
  },
  {
    path: "/createAgent",
    name: "createAgent",
    component: (resolve) => require(["./../modules/distributorManagement/createAgent.vue"], resolve),
    meta: {
      title: "创建代理/推广员",
    }
  },
  {
    path: "/agentList",
    name: "agentList",
    component: (resolve) => require(["./../modules/distributorManagement/agentList.vue"], resolve),
    meta: {
      title: "代理/推广员列表",
    }
  },
  {
    path: "/uploadPictures",
    name: "uploadPictures",
    component: (resolve) => require(["./../modules/distributorManagement/uploadPictures.vue"], resolve),
    meta: {
      title: "上传广告图",
    }
  },
  {
    path: "/setCustomerInfo",
    name: "setCustomerInfo",
    component: (resolve) => require(["./../modules/distributorManagement/setCustomerInfo.vue"], resolve),
    meta: {
      title: "设置客服信息",
    }
  },
  // 代理员页面
  {
    path: "/agentManagement",
    name: "agentManagement",
    component: (resolve) => require(["./../modules/agentManagement/agentManagement.vue"], resolve),
    meta: {
      title: "代理员管理",
    }
  },
  {
    path: "/discountCardList",
    name: "discountCardList",
    component: (resolve) => require(["./../modules/agentManagement/discountCardList.vue"], resolve),
    meta: {
      title: "优惠卡列表",
    }
  },
  {
    path: "/agentUserList",
    name: "agentUserList",
    component: (resolve) => require(["./../modules/agentManagement/agentUserList.vue"], resolve),
    meta: {
      title: "用户列表",
    }
  },
  {
    path: "/creatcustomer",
    name: "creatcustomer",
    component: (resolve) => require(["./../modules/agentManagement/creatcustomer.vue"], resolve),
    meta: {
      title: "创建推广员",
    }
  },
  {
    path: "/customerList",
    name: "customerList",
    component: (resolve) => require(["./../modules/agentManagement/customerList.vue"], resolve),
    meta: {
      title: "推广员列表",
    }
  },

]
routes.push({
  path: '/',
  redirect: '/home'
})

export default routes;
