import service from "./base";

// 設定是否需要傳送token驗證 預設沒寫為不用
const needAuth = true;

// 登入
export const apiGetToken = data => {
  return service.post("/Account/GetToken", data);
};

// 登入
export const apiYkLogIn = data => {
  return service.post("/Account/YkLogIn", data);
};

// 註冊
export const apiRegister = data => {
  return service.post("/Account/Register", data);
};

// 刷新token
export const apiRefreshToken = data => {
  return service.post("/Account/RefreshToken", data, {
    needAuth,
    isRefreshToken: true
  });
};

// 发送注册手机验证码
export const apiGetSMSCode = params => {
  return service.get("/Account/GetSMSCode", { params });
};

// 发送圖形验证码
export const apiGetImgCode = () => {
  return service.get("/Account/GetImgCode");
};

// 忘記密碼
export const apiForgotPasswordValid = params => {
  return service.get("/Account/ForgotPasswordValid", { params });
};

// 郵箱找回密碼
export const apiForgotPasswordEmail = data => {
  return service.post("/Account/ForgotPasswordEmail", data);
};

// 修改密码
export const apiChangePassword = data => {
  return service.post("/Account/ChangePassword", data, { needAuth });
};

// 修改取款密码
export const apiChangeWalletPassword = data => {
  return service.post("/Account/ChangePassword", data, { needAuth });
};

// 个人信息
export const apiGetPersonalInformation = data => {
  return service.post("/Account/GetPersonalInformation", data, {
    needAuth,
    noLoading: true
  });
};
export const apiGetUnreadMessage = data => {
  return service.post("/Account/GetUnreadMessage", data, {
    needAuth,
    noLoading: true
  });
};
// 修改个人信息
export const apiUpdatePersonalInformation = data => {
  return service.post("/Account/UpdatePersonalInformation", data, { needAuth });
};
// 发送修改手机号验证码
export const apiSendUpdateMobileCode = params => {
  return service.get("/Account/SendUpdateMobileCode", { params, needAuth });
};
// 修改绑定手机号
export const apiChangePhoneNumberBind = data => {
  return service.post("/Account/ChangePhoneNumberBind", data, { needAuth });
};
// 修改地址
export const apiAddress = data => {
  return service.post("/Account/Address", data, { needAuth });
};
// 绑定银行卡
export const apiBindBankNo = data => {
  return service.post("/Account/BindBankNo", data, { needAuth });
};
// 或許銀行信息
export const apiGetBankInfo = data => {
  return service.post("/Account/GetBankInfo", data, { needAuth });
};
// 获取首页Banner
export const apiGetBanner = params => {
  return service.get("/Info/GetBanner", { params });
};

// 跑马灯滚动内容
export const apiMarqueeScrollContent = params => {
  return service.get("/Info/MarqueeScrollContent",{params});
};
// 跑马灯弹出内容层
export const apiShowScrollMessage = params=> {
  return service.get("/Info/ShowScrollMessage",{params});
};

// 优惠活动
export const apiGetActivity = params => {
  return service.get("/Info/GetActivity", { params });
};
// 已讀郵件
export const apiHaveReadMessger = params => {
  return service.get("/Info/HaveReadMessger", { params, needAuth });
};
// 站內信
export const apiGetMessage = params => {
  return service.get("/Info/GetMessage", { params, needAuth });
};

// 充值&轉帳紀錄
export const apiGetOrders = params => {
  return service.get("/History/GetOrders", { params, needAuth });
};

// 轉帳紀錄
export const apiGetTransfers = params => {
  return service.get("/History/GetTransfers", { params, needAuth });
};

// 反水记录
export const apiGetRebates = params => {
  return service.get("/History/GetRebates", { params, needAuth });
};

// 投注记录
export const apiGetBetLogs = params => {
  return service.get("/History/GetBetLogs", { params, needAuth });
};

// 获取主游戏列表
export const apiGameTypeList = data => {
  return service.post("/Game/GameTypeList", data, { needAuth });
};

//获取游戏列表
export const apiGetGames = params => {
  return service.post("/Game/GetGames", params, needAuth);
};

// 获取子游戏列表
export const apiGetChildGames = data => {
  return service.post("/Game/GetChildGames", data, { needAuth });
};

// 开始游戏
export const apiStartGame = params => {
  return service.get("/Game/StartGame", { params, needAuth });
};

// 投注记录游戏列表
export const apiGetGameType = data => {
  return service.post("/Game/GetGameType", data, { needAuth });
};
// 獲取取渠道列表
export const apiGetBalanceAsync = params => {
  return service.get("/Payment/GetBalanceAsync", { params, needAuth });
};
// 獲取取渠道列表
export const apiGetListBalanceAsync = data => {
  return service.post("/Payment/GetListBalanceAsync", data, { needAuth });
};
// 中心钱包
export const apiGetMidBalanceAsync = data => {
  return service.post("/Payment/GetMidBalanceAsync", data, { needAuth });
};
// 获取游戏余额
export const apiGetPayType = data => {
  return service.post("/Payment/GetPayType", data, { needAuth });
};

// 獲取取渠道列表
export const apiGetPlat = params => {
  return service.get("/Payment/GetPlat", { params, needAuth });
};

//Mao_获取游戏余额
export const apiMaoGetBalanceAsync = params => {
  return service.get("/Payment/MaoGetBalanceAsync", { params, needAuth });
};

// 充值
export const apiMaoPay = params => {
  return service.get("/Payment/MaoPay", { params, needAuth });
};
// 提款
export const apiMaoPayBankTransfer = data => {
  return service.post("/Payment/MaoPayBankTransfer", data, { needAuth });
};
// 提款資料
export const apiGetBankTransfer = data => {
  return service.post("/Payment/GetBankTransfer", data, { needAuth });
};
// 获取付款方式
export const apiTransferAmountAsync = data => {
  return service.post("/Payment/TransferAmountAsync", data, { needAuth });
};
// 修改取款密码
export const apiUpdateWalletPwd = data => {
  return service.post("/Account/UpdateWalletPwd", data, { needAuth });
};

// 修改取款密码
export const apiGetLanguages = () => {
  return service.get("/Setting/GetLanguages");
};

// 代理加盟注册 -
export const apiRegisterAgent = data => {
  return service.post("/Account/RegisterAgent", data, { needAuth });
};

// 取得銀行列表
export const apiGetBankList = data => {
  return service.post("/Payment/GetBankList", data, { needAuth });
};
// 取得銀行列表
export const apiGetBankInfoPay = params => {
  return service.get("/Payment/GetBankInfo", { params, needAuth });
};
// 卡转卡充值
export const apiPayForBank = data => {
  return service.post("/Payment/PayForBank", data, { needAuth });
};
// 创建备注码
export const apiGetRandomFour = data => {
  return service.post("/Payment/GetRandomFour", data, { needAuth });
};

// 兌換碼
export const apiExchangeSomething = params => {
  return service.get("/Payment/ExchangeSomething", { params, needAuth });
};

// 兌換紀錄
export const apiGetExchangeLog = data => {
  return service.post("/Payment/GetExchangeLog", data, { needAuth });
};

// 銀行卡列表
export const apiGetMyBankList = data => {
  return service.post("/Account/GetMyBankList", data, { needAuth });
};
// 刪除銀行卡
export const apiDelBankNo = params => {
  return service.get("/Account/DelBankNo", { params, needAuth });
};

// 獲取人工儲值訊息
export const apiGetCustomer = () => {
  return service.get("/Payment/GetCustomer", { needAuth });
};