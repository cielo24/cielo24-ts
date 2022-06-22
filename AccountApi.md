# .AccountApi

All URIs are relative to *https://api.cielo24.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getSettings**](AccountApi.md#getSettings) | **GET** /account/get_settings | 
[**login**](AccountApi.md#login) | **POST** /account/login | 
[**logout**](AccountApi.md#logout) | **POST** /account/logout | 
[**verifyKey**](AccountApi.md#verifyKey) | **GET** /account/verify_key | 


# **getSettings**
> any getSettings()

Get Account Settings

### Example


```typescript
import {  } from 'cielo24';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountApi(configuration);

let body:.AccountApiGetSettingsRequest = {
  // number
  v: 1,
};

apiInstance.getSettings(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | [**number**] |  | defaults to 1


### Return type

**any**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Test |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **login**
> LoginResponse login(loginBody)

Login to the cielo24 API to obtain an API access token for use when calling other methods. Optional arguments may be passed either as HTTP headers or query string parameters. Required arguments must be passed as query string parameters.

### Example


```typescript
import {  } from 'cielo24';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountApi(configuration);

let body:.AccountApiLoginRequest = {
  // number
  v: 1,
  // LoginBody
  loginBody: {
    username: "username_example",
    password: "password_example",
    securekey: "securekey_example",
  },
};

apiInstance.login(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginBody** | **LoginBody**|  |
 **v** | [**number**] |  | defaults to 1


### Return type

**LoginResponse**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **logout**
> void logout()

Logout of the current session, invalidating the API token.

### Example


```typescript
import {  } from 'cielo24';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountApi(configuration);

let body:.AccountApiLogoutRequest = {
  // number
  v: 1,
};

apiInstance.logout(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | [**number**] |  | defaults to 1


### Return type

**void**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **verifyKey**
> VerifyKeyResponse verifyKey()

Test Auth

### Example


```typescript
import {  } from 'cielo24';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .AccountApi(configuration);

let body:.AccountApiVerifyKeyRequest = {
  // number
  v: 1,
};

apiInstance.verifyKey(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | [**number**] |  | defaults to 1


### Return type

**VerifyKeyResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Test |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


