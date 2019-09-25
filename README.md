# 文字转语音小网站

这个使用百度的语音合成 api，使用 js 写的一个简单的小工具， 由于 access_token 需要 30 天更换一次。所以访问的时候可能无法使用。

目前支持中英文和语音包选择。

### 获取 token 链接

```
"https://openapi.baidu.com/oauth/2.0/token?grant_type=client_credentials&client_id=api_key&client_secret=Secret Key"
```
