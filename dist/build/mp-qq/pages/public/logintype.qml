<view class="login-type"><view class="logo"><image src="/static/rage.png"></image></view><view><button class="confirm-btn" open-type="getUserInfo" formType="submit" data-event-opts="{{[['tap',[['toAuthLogin',['$event']]]]]}}" bindtap="__e">授权登录</button><button class="confirm-btn plain" plain data-event-opts="{{[['tap',[['navTo',['/pages/public/login']]]]]}}" bindtap="__e">已有RF账号登录</button></view><view class="footer">登录表示同意<text data-event-opts="{{[['tap',[['navTo',['/pages/about/detail?field=protocol_privacy&title=隐私协议']]]]]}}" class="protocol" bindtap="__e">RangeFrame使用协议 / 隐私协议</text></view></view>