# .JobApi

All URIs are relative to *https://api.cielo24.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addMediaFile**](JobApi.md#addMediaFile) | **POST** /job/add_media | 
[**addMediaUrl**](JobApi.md#addMediaUrl) | **GET** /job/add_media | 
[**authorizeJob**](JobApi.md#authorizeJob) | **POST** /job/authorize | 
[**getCaption**](JobApi.md#getCaption) | **GET** /job/get_caption | 
[**jobInfo**](JobApi.md#jobInfo) | **GET** /job/info | 
[**newJob**](JobApi.md#newJob) | **POST** /job/new | 
[**performTranscription**](JobApi.md#performTranscription) | **POST** /job/perform_transcription | 
[**performTranslation**](JobApi.md#performTranslation) | **POST** /job/translate | 


# **addMediaFile**
> AddMediaResponse addMediaFile(body)

Add a piece of media to an existing job using a local file. No content-type should be included in the HTTP header. The media should be uploaded as raw binary, no encoding (base64, hex, etc) is required. Chunk-transfer encoding is NOT supported. File size is limited to 10 gb

### Example


```typescript
import {  } from 'cielo24';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiAddMediaFileRequest = {
  // number
  v: 1,
  // string
  jobId: "0fbd6015910e42dca25a863c4925d77c",
  // number
  contentLength: 1,
  // HttpFile
  body: { data: Buffer.from(fs.readFileSync('/path/to/file', 'utf-8')), name: '/path/to/file' },
  // 'true' | 'false' (optional)
  isDuplicate: "false",
};

apiInstance.addMediaFile(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **HttpFile**|  |
 **v** | [**number**] |  | defaults to 1
 **jobId** | [**string**] |  | defaults to undefined
 **contentLength** | [**number**] |  | defaults to undefined
 **isDuplicate** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** |  | (optional) defaults to 'false'


### Return type

**AddMediaResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: video/mp4
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **addMediaUrl**
> AddMediaResponse addMediaUrl()

Add a piece of media to an existing job using a public media url. A job may only have a single piece of media associated with it, attempting to add additional media will return an error code.

### Example


```typescript
import {  } from 'cielo24';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiAddMediaUrlRequest = {
  // number
  v: 1,
  // string
  jobId: "0fbd6015910e42dca25a863c4925d77c",
  // string
  mediaUrl: "http://www.domain.com/video.mp4",
  // 'true' | 'false' (optional)
  isDuplicate: "false",
};

apiInstance.addMediaUrl(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | [**number**] |  | defaults to 1
 **jobId** | [**string**] |  | defaults to undefined
 **mediaUrl** | [**string**] |  | defaults to undefined
 **isDuplicate** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** |  | (optional) defaults to 'false'


### Return type

**AddMediaResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **authorizeJob**
> void authorizeJob()

Authorize an existing job. If your account has the \"customer authorization\" feature enabled (it is not enabled by default) jobs you create will be held in the \"Authorizing\" state until you call this method. Calling this method on a job that is not the \"Authorizing\" state has no effect and will return success. Please contact support@cielo24.com to enable the \"customer authorization\" feature.

### Example


```typescript
import {  } from 'cielo24';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiAuthorizeJobRequest = {
  // number
  v: 1,
  // string
  jobId: "0fbd6015910e42dca25a863c4925d77c",
};

apiInstance.authorizeJob(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | [**number**] |  | defaults to 1
 **jobId** | [**string**] |  | defaults to undefined


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
**200** | Success |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **getCaption**
> string getCaption()

Get the caption file for a job. The job must have completed transcription before a caption can be downloaded.

### Example


```typescript
import {  } from 'cielo24';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiGetCaptionRequest = {
  // number
  v: 1,
  // string
  jobId: "0fbd6015910e42dca25a863c4925d77c",
  // 'DFXP' | 'ECHO' | 'QT' | 'SAMI' | 'SBV' | 'SCC' | 'SRT' | 'TPM' | 'TRANSCRIPT' | 'TWX' | 'WEB_VTT'
  captionFormat: "SRT",
  // 'true' | 'false' | Rather than returning the file, return a permanent URL to the file. (optional)
  buildUrl: "false",
  // number | Minimum number of words allowed in a caption. (optional)
  captionWordsMin: 3,
  // 'true' | 'false' | When true, puts each sentence into its own caption. When false, more than one sentence may appear in a single caption. (optional)
  captionBySentence: "false",
  // number | Maximum number of characters to be displayed on each caption line. (optional)
  charactersPerCaptionLine: 30,
  // string | Allows you to specify a custom header for your DFXP caption file. The header should be the entire contents of the header including the opening and closing tags. Ignored if caption_format does not equal DFXP. (optional)
  dfxpHeader: "<head></head>",
  // 'true' | 'false' | Will prevent captions from having the last word in a sentence start a new line. Last words will ALWAYS be kept on the same line, even if it breaks the characters_per_caption_line option. (optional)
  disallowDangling: "true",
  // string | Determines what speaker name should used for sound effects. (optional)
  displayEffectsSpeakerAs: "Sounds",
  // 'no' | 'number' | 'name' | Determines the way speakers are identified in the captions. Choose \"no\" to not display speaker identities at all: \">> example\" Choose \"number\" to display only the speaker number: \">> Speaker 1: example\" Choose \"name\" to display the speaker name: \">> John Doe: example\". If you choose \"name\", the speaker number will be displayed if the name is not available. (optional)
  displaySpeakerId: "number",
  // 'PREMIUM' | 'INTERIM_PROFESSIONAL' | 'PROFESSIONAL' | 'SPEAKER_ID' | 'FINAL' | 'MECHANICAL' | 'CUSTOMER_APPROVED_RETURN' | 'CUSTOMER_APPROVED_TRANSLATION' | The named version of element list to generate the transcript from. If not specified, the transcript will be generated from the latest version. (optional)
  iwpName: "MECHANICAL",
  // string | The version of element list to generate the captions from. If not specified, the caption will be generated from the latest version. (ISO 8601 Date String) (optional)
  elementlistVersion: "2014-07-31T12:35:52.324389",
  // string | Determine what characters to use to denote speaker changes. (optional)
  emitSpeakerChangeTokensAs: "-->",
  // '' | 'lower' | 'upper' | Force the contents of the captions to be all UPPER or lower case. If blank, the case of the captions is not changed. (optional)
  forceCase: "lower",
  // 'true' | 'false' | When true, and the caption format requested is DFXP, the jobs name, ID and language will be added to the DFXP metadata header. When false, these data are omitted from the header. Ignored if caption_format does not equal DFXP. (optional)
  includeDfxpMetadata: "false",
  // number | Captions generated will, on average, be this duration. However, they may vary significantly based on other parameters you set. (optional)
  layoutTargetCaptionLengthMs: 4000,
  // 'true' | 'false' | Inserts a line break in between sentences that are in the same caption. (optional)
  lineBreakOnSentence: "true",
  // 'UNIX' | 'OSX' | 'WINDOWS' | Determine the end of line (EOL) character to use for the captions. (optional)
  lineEndingFormat: "OSX",
  // number | Number of lines to be displayed for each caption. (optional)
  linesPerCaption: 3,
  // 'true' | 'false' | Replace profanity with asterisks. (optional)
  maskProfanity: "true",
  // number | No captions longer than this (in milliseconds) will be produced. If not specified, there is no maximum. (optional)
  maximumCaptionDuration: 10000,
  // number | Captions with a gap between them that is smaller than this (in milliseconds) will have their start and/or end times changed so there is no time gap between the captions. (optional)
  mergeGapInterval: 1500,
  // number | Extends the duration of short captions to the this minimum length. Additional time is taken from later caption blocks to meet this minimum time. (optional)
  minimumCaptionLengthMs: 1500,
  // number | Adds a minimum time between captions such as there will always be some time between captions where no text is displayed. When captions are very close together, time will be removed from the caption duration to make the gap. (optional)
  minimumGapBetweenCaptionsMs: 100,
  // 'true' | 'false' | Does not put time gaps of any kind between caption blocks. Ignored if caption_format does not equal QT. (optional)
  qtSeamless: "true",
  // 'true' | 'false' | Remove verbal disfluencies from the generated transcript. Common disfluencies such as \"um\" and \"ah\" are removed while maintaining appropriate punctuation. (optional)
  removeDisfluencies: "false",
  // Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'> | A list of sounds to not show in the caption. This is a JSON style list, and should look like [\"MUSIC\", \"LAUGH\"]. Ignored if remove_sound_references is true. (optional)
  removeSoundsList: ["MUSIC","LAUGH"],
  // 'true' | 'false' | Remove ALL non-verbal sound and noise references from the generated transcript. Sounds and unidentified noises are depicted in the caption as [SOUND], [COUGH] and [NOISE]. If this parameter is set, these identifiers are omitted from the caption. (optional)
  removeSoundReferences: "false",
  // 'true' | 'false' | Replace common slang terms from the generated transcript. Common replacements are \"want to\" for \"wanna\", \"going to\" for \"gonna\", etc. (optional)
  replaceSlang: "true",
  // number | If there is a interval of silence in the middle of a sentence longer than this, then the caption will be split. (optional)
  silenceMaxMs: 1000,
  // 'true' | 'false' | When true, puts each speaker into its own caption. When false, more than one speaker may appear in a single caption. (optional)
  singleSpeakerPerCaption: "false",
  // Array<string> | Specifies the characters to surround sound references with. The default will generate sound references that look like this: [MUSIC]. (optional)
  soundBoundaries: ["(",")"],
  // number | Sound references that are longer than this threshold will be made their own caption entirely, and will not have any text included with them. If not set, Sound references will be included back to back with text no matter the duration of the sound. (optional)
  soundThreshold: 5000,
  // 'true' | 'false' | If true, all sound references will always be in their own caption. If false, more than one sound reference may appear in a single caption. (optional)
  soundTokensByCaption: "true",
  // 'true' | 'false' | If true, all sound references will always be in their own line. If false, more than one sound reference may appear in a single line. (optional)
  soundTokensByLine: "true",
  // Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'> | If non-empty, the specified sound references will always be in their own caption. If empty, more than one sound reference may appear in a single caption. Ignored if sound_tokens_by_caption is true. (optional)
  soundTokensByCaptionList: [],
  // Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'> | If non-empty, the specified sound references will always be in their own line. If empty, more than one sound reference may appear in a single line. Ignored if sound_tokens_by_line is true. (optional)
  soundTokensByLineList: ["NOISE"],
  // 'true' | 'false' | If true, a speaker change will cause a new caption to be made. If false, multiple speakers may appear in a single caption. (optional)
  speakerOnNewLine: "false",
  // string | If the caption format is SRT, determines what the caption blocks will look like. The default, prints caption blocks that look like this:    1:   00:00:06,060 --> 00:00:16,060   This is the caption text.  You can alter the caption block by re-arranging or removing the substitution string values, shown enclosed in braces \"{}\" in the default value below. Substitution strings may used more than once if desired. Any text that is not a substitution string will be displayed as written. To add new lines, include a \\n. Note, you may need to escape the \\n with an extra backslash when encoding the request.  (optional)
  srtFormat: "{caption_number:d}\n{start_hour:02d}:{start_minute:02d}:{start_second:02d},{start_millisecond:03d} -->{end_hour:02d}:{end_minute:02d}:{end_second:02d},{end_millisecond:03d}\n{caption_text}\n\n",
  // 'true' | 'false' | Removes all square brackets like '[' or ']' from captions. By default square brackets surround sound references like '[MUSIC]', but they may exist as part of the caption text as well. (optional)
  stripSquareBrackets: "true",
  // 'true' | 'false' | Adds a utf8 bytemark to the beginning of the caption. This should only be used if the system you are loading the caption files into needs a byte marker. The vast majority of systems do not. (optional)
  utf8Mark: "true",
  // 'A' | 'B' | 'Z' | 'U' | 'C' | Replaces English spelling with location accurate spelling. i.e. Color --> Colour  A: American  B: British  Z: British ize  U: Australian  C: Canadian  (optional)
  replaceEnglishSpelling: "B",
};

apiInstance.getCaption(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | [**number**] |  | defaults to 1
 **jobId** | [**string**] |  | defaults to undefined
 **captionFormat** | [**&#39;DFXP&#39; | &#39;ECHO&#39; | &#39;QT&#39; | &#39;SAMI&#39; | &#39;SBV&#39; | &#39;SCC&#39; | &#39;SRT&#39; | &#39;TPM&#39; | &#39;TRANSCRIPT&#39; | &#39;TWX&#39; | &#39;WEB_VTT&#39;**]**Array<&#39;DFXP&#39; &#124; &#39;ECHO&#39; &#124; &#39;QT&#39; &#124; &#39;SAMI&#39; &#124; &#39;SBV&#39; &#124; &#39;SCC&#39; &#124; &#39;SRT&#39; &#124; &#39;TPM&#39; &#124; &#39;TRANSCRIPT&#39; &#124; &#39;TWX&#39; &#124; &#39;WEB_VTT&#39;>** |  | defaults to undefined
 **buildUrl** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Rather than returning the file, return a permanent URL to the file. | (optional) defaults to 'false'
 **captionWordsMin** | [**number**] | Minimum number of words allowed in a caption. | (optional) defaults to 1
 **captionBySentence** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | When true, puts each sentence into its own caption. When false, more than one sentence may appear in a single caption. | (optional) defaults to 'true'
 **charactersPerCaptionLine** | [**number**] | Maximum number of characters to be displayed on each caption line. | (optional) defaults to 42
 **dfxpHeader** | [**string**] | Allows you to specify a custom header for your DFXP caption file. The header should be the entire contents of the header including the opening and closing tags. Ignored if caption_format does not equal DFXP. | (optional) defaults to ''
 **disallowDangling** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Will prevent captions from having the last word in a sentence start a new line. Last words will ALWAYS be kept on the same line, even if it breaks the characters_per_caption_line option. | (optional) defaults to 'false'
 **displayEffectsSpeakerAs** | [**string**] | Determines what speaker name should used for sound effects. | (optional) defaults to 'Effects'
 **displaySpeakerId** | [**&#39;no&#39; | &#39;number&#39; | &#39;name&#39;**]**Array<&#39;no&#39; &#124; &#39;number&#39; &#124; &#39;name&#39;>** | Determines the way speakers are identified in the captions. Choose \&quot;no\&quot; to not display speaker identities at all: \&quot;&gt;&gt; example\&quot; Choose \&quot;number\&quot; to display only the speaker number: \&quot;&gt;&gt; Speaker 1: example\&quot; Choose \&quot;name\&quot; to display the speaker name: \&quot;&gt;&gt; John Doe: example\&quot;. If you choose \&quot;name\&quot;, the speaker number will be displayed if the name is not available. | (optional) defaults to 'name'
 **iwpName** | [**&#39;PREMIUM&#39; | &#39;INTERIM_PROFESSIONAL&#39; | &#39;PROFESSIONAL&#39; | &#39;SPEAKER_ID&#39; | &#39;FINAL&#39; | &#39;MECHANICAL&#39; | &#39;CUSTOMER_APPROVED_RETURN&#39; | &#39;CUSTOMER_APPROVED_TRANSLATION&#39;**]**Array<&#39;PREMIUM&#39; &#124; &#39;INTERIM_PROFESSIONAL&#39; &#124; &#39;PROFESSIONAL&#39; &#124; &#39;SPEAKER_ID&#39; &#124; &#39;FINAL&#39; &#124; &#39;MECHANICAL&#39; &#124; &#39;CUSTOMER_APPROVED_RETURN&#39; &#124; &#39;CUSTOMER_APPROVED_TRANSLATION&#39;>** | The named version of element list to generate the transcript from. If not specified, the transcript will be generated from the latest version. | (optional) defaults to ''
 **elementlistVersion** | [**string**] | The version of element list to generate the captions from. If not specified, the caption will be generated from the latest version. (ISO 8601 Date String) | (optional) defaults to ''
 **emitSpeakerChangeTokensAs** | [**string**] | Determine what characters to use to denote speaker changes. | (optional) defaults to '>>'
 **forceCase** | [**&#39;&#39; | &#39;lower&#39; | &#39;upper&#39;**]**Array<&#39;&#39; &#124; &#39;lower&#39; &#124; &#39;upper&#39;>** | Force the contents of the captions to be all UPPER or lower case. If blank, the case of the captions is not changed. | (optional) defaults to ''
 **includeDfxpMetadata** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | When true, and the caption format requested is DFXP, the jobs name, ID and language will be added to the DFXP metadata header. When false, these data are omitted from the header. Ignored if caption_format does not equal DFXP. | (optional) defaults to 'true'
 **layoutTargetCaptionLengthMs** | [**number**] | Captions generated will, on average, be this duration. However, they may vary significantly based on other parameters you set. | (optional) defaults to 5000
 **lineBreakOnSentence** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Inserts a line break in between sentences that are in the same caption. | (optional) defaults to 'false'
 **lineEndingFormat** | [**&#39;UNIX&#39; | &#39;OSX&#39; | &#39;WINDOWS&#39;**]**Array<&#39;UNIX&#39; &#124; &#39;OSX&#39; &#124; &#39;WINDOWS&#39;>** | Determine the end of line (EOL) character to use for the captions. | (optional) defaults to 'UNIX'
 **linesPerCaption** | [**number**] | Number of lines to be displayed for each caption. | (optional) defaults to 2
 **maskProfanity** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Replace profanity with asterisks. | (optional) defaults to 'false'
 **maximumCaptionDuration** | [**number**] | No captions longer than this (in milliseconds) will be produced. If not specified, there is no maximum. | (optional) defaults to undefined
 **mergeGapInterval** | [**number**] | Captions with a gap between them that is smaller than this (in milliseconds) will have their start and/or end times changed so there is no time gap between the captions. | (optional) defaults to 1000
 **minimumCaptionLengthMs** | [**number**] | Extends the duration of short captions to the this minimum length. Additional time is taken from later caption blocks to meet this minimum time. | (optional) defaults to undefined
 **minimumGapBetweenCaptionsMs** | [**number**] | Adds a minimum time between captions such as there will always be some time between captions where no text is displayed. When captions are very close together, time will be removed from the caption duration to make the gap. | (optional) defaults to undefined
 **qtSeamless** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Does not put time gaps of any kind between caption blocks. Ignored if caption_format does not equal QT. | (optional) defaults to 'false'
 **removeDisfluencies** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Remove verbal disfluencies from the generated transcript. Common disfluencies such as \&quot;um\&quot; and \&quot;ah\&quot; are removed while maintaining appropriate punctuation. | (optional) defaults to 'true'
 **removeSoundsList** | **Array<&#39;UNKNOWN&#39; &#124; &#39;INAUDIBLE&#39; &#124; &#39;CROSSTALK&#39; &#124; &#39;MUSIC&#39; &#124; &#39;NOISE&#39; &#124; &#39;LAUGH&#39; &#124; &#39;COUGH&#39; &#124; &#39;FOREIGN&#39; &#124; &#39;BLANK_AUDIO&#39; &#124; &#39;APPLAUSE&#39; &#124; &#39;BLEEP&#39; &#124; &#39;ENDS_SENTENCE&#39;>** | A list of sounds to not show in the caption. This is a JSON style list, and should look like [\&quot;MUSIC\&quot;, \&quot;LAUGH\&quot;]. Ignored if remove_sound_references is true. | (optional) defaults to undefined
 **removeSoundReferences** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Remove ALL non-verbal sound and noise references from the generated transcript. Sounds and unidentified noises are depicted in the caption as [SOUND], [COUGH] and [NOISE]. If this parameter is set, these identifiers are omitted from the caption. | (optional) defaults to 'true'
 **replaceSlang** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Replace common slang terms from the generated transcript. Common replacements are \&quot;want to\&quot; for \&quot;wanna\&quot;, \&quot;going to\&quot; for \&quot;gonna\&quot;, etc. | (optional) defaults to 'false'
 **silenceMaxMs** | [**number**] | If there is a interval of silence in the middle of a sentence longer than this, then the caption will be split. | (optional) defaults to 2000
 **singleSpeakerPerCaption** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | When true, puts each speaker into its own caption. When false, more than one speaker may appear in a single caption. | (optional) defaults to 'true'
 **soundBoundaries** | **Array&lt;string&gt;** | Specifies the characters to surround sound references with. The default will generate sound references that look like this: [MUSIC]. | (optional) defaults to undefined
 **soundThreshold** | [**number**] | Sound references that are longer than this threshold will be made their own caption entirely, and will not have any text included with them. If not set, Sound references will be included back to back with text no matter the duration of the sound. | (optional) defaults to undefined
 **soundTokensByCaption** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | If true, all sound references will always be in their own caption. If false, more than one sound reference may appear in a single caption. | (optional) defaults to 'false'
 **soundTokensByLine** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | If true, all sound references will always be in their own line. If false, more than one sound reference may appear in a single line. | (optional) defaults to 'false'
 **soundTokensByCaptionList** | **Array<&#39;UNKNOWN&#39; &#124; &#39;INAUDIBLE&#39; &#124; &#39;CROSSTALK&#39; &#124; &#39;MUSIC&#39; &#124; &#39;NOISE&#39; &#124; &#39;LAUGH&#39; &#124; &#39;COUGH&#39; &#124; &#39;FOREIGN&#39; &#124; &#39;BLANK_AUDIO&#39; &#124; &#39;APPLAUSE&#39; &#124; &#39;BLEEP&#39; &#124; &#39;ENDS_SENTENCE&#39;>** | If non-empty, the specified sound references will always be in their own caption. If empty, more than one sound reference may appear in a single caption. Ignored if sound_tokens_by_caption is true. | (optional) defaults to undefined
 **soundTokensByLineList** | **Array<&#39;UNKNOWN&#39; &#124; &#39;INAUDIBLE&#39; &#124; &#39;CROSSTALK&#39; &#124; &#39;MUSIC&#39; &#124; &#39;NOISE&#39; &#124; &#39;LAUGH&#39; &#124; &#39;COUGH&#39; &#124; &#39;FOREIGN&#39; &#124; &#39;BLANK_AUDIO&#39; &#124; &#39;APPLAUSE&#39; &#124; &#39;BLEEP&#39; &#124; &#39;ENDS_SENTENCE&#39;>** | If non-empty, the specified sound references will always be in their own line. If empty, more than one sound reference may appear in a single line. Ignored if sound_tokens_by_line is true. | (optional) defaults to undefined
 **speakerOnNewLine** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | If true, a speaker change will cause a new caption to be made. If false, multiple speakers may appear in a single caption. | (optional) defaults to 'true'
 **srtFormat** | [**string**] | If the caption format is SRT, determines what the caption blocks will look like. The default, prints caption blocks that look like this:    1:   00:00:06,060 --&gt; 00:00:16,060   This is the caption text.  You can alter the caption block by re-arranging or removing the substitution string values, shown enclosed in braces \&quot;{}\&quot; in the default value below. Substitution strings may used more than once if desired. Any text that is not a substitution string will be displayed as written. To add new lines, include a \\n. Note, you may need to escape the \\n with an extra backslash when encoding the request.  | (optional) defaults to '{caption_number:d}\n{start_hour:02d}:{start_minute:02d}:{start_second:02d},{start_millisecond:03d} -->{end_hour:02d}:{end_minute:02d}:{end_second:02d},{end_millisecond:03d}\n{caption_text}\n\n'
 **stripSquareBrackets** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Removes all square brackets like &#39;[&#39; or &#39;]&#39; from captions. By default square brackets surround sound references like &#39;[MUSIC]&#39;, but they may exist as part of the caption text as well. | (optional) defaults to 'false'
 **utf8Mark** | [**&#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39;>** | Adds a utf8 bytemark to the beginning of the caption. This should only be used if the system you are loading the caption files into needs a byte marker. The vast majority of systems do not. | (optional) defaults to 'false'
 **replaceEnglishSpelling** | [**&#39;A&#39; | &#39;B&#39; | &#39;Z&#39; | &#39;U&#39; | &#39;C&#39;**]**Array<&#39;A&#39; &#124; &#39;B&#39; &#124; &#39;Z&#39; &#124; &#39;U&#39; &#124; &#39;C&#39;>** | Replaces English spelling with location accurate spelling. i.e. Color --&gt; Colour  A: American  B: British  Z: British ize  U: Australian  C: Canadian  | (optional) defaults to 'A'


### Return type

**string**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **jobInfo**
> JobInfoResponse jobInfo()


### Example


```typescript
import {  } from 'cielo24';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiJobInfoRequest = {
  // number
  v: 1,
  // string
  jobId: "0fbd6015910e42dca25a863c4925d77c",
};

apiInstance.jobInfo(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | [**number**] |  | defaults to 1
 **jobId** | [**string**] |  | defaults to undefined


### Return type

**JobInfoResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **newJob**
> NewJobResponse newJob(newJobBody)

Create a new job. A job is a container into which you can upload media and request that transcription be performed. Creating a job is prerequisite for virtually all other methods.

### Example


```typescript
import {  } from 'cielo24';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiNewJobRequest = {
  // number
  v: 1,
  // NewJobBody
  newJobBody: {
    jobName: "jobName_example",
    language: "en (Any RFC 5646 language code)",
    externalId: "12345",
    username: "my_sub_account",
    requestor: "test_requestor",
    reference: "test_reference",
    expectedSpeakers: 40,
    isDuplicate: "false",
  },
};

apiInstance.newJob(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **newJobBody** | **NewJobBody**|  |
 **v** | [**number**] |  | defaults to 1


### Return type

**NewJobResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **performTranscription**
> PerformTranscriptionResponse performTranscription(performTranscriptionBody)

Request that transcription be performed on the specified job. A callback URL, if specified, will be called when the transcription is complete. See [callback documentation](https://cielo24.readthedocs.io/en/latest/basics.html#callbacks-label) for details.

### Example


```typescript
import {  } from 'cielo24';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiPerformTranscriptionRequest = {
  // number
  v: 1,
  // PerformTranscriptionBody
  performTranscriptionBody: {
    jobId: "0fbd6015910e42dca25a863c4925d77c",
    transcriptionFidelity: "MECHANICAL",
    priority: "STANDARD",
    callbackUrl: "http://www.domain.com/path",
    options: "{"notes": "test"}",
    targetLanguage: "en (Any RFC 5646 language code)",
    turnaroundHours: 36,
  },
};

apiInstance.performTranscription(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **performTranscriptionBody** | **PerformTranscriptionBody**|  |
 **v** | [**number**] |  | defaults to 1


### Return type

**PerformTranscriptionResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **performTranslation**
> PerformTranslationResponse performTranslation()

Request that orders a new Translation language for a video that has been previously Transcribed and/or Translated. The New Job ID and job target language will be returned upon completion.

### Example


```typescript
import {  } from 'cielo24';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .JobApi(configuration);

let body:.JobApiPerformTranslationRequest = {
  // number
  v: 1,
  // string
  jobId: "0fbd6015910e42dca25a863c4925d77c",
  // string | The language(s) being ordered (Any RFC 5646 language code) separated by comma (,)
  targetLanguages: "fr,de",
  // 'true' | 'false' | 't' | 'f' | 'true' | 'false' (optional)
  approveUplevel: "true",
};

apiInstance.performTranslation(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v** | [**number**] |  | defaults to 1
 **jobId** | [**string**] |  | defaults to undefined
 **targetLanguages** | [**string**] | The language(s) being ordered (Any RFC 5646 language code) separated by comma (,) | defaults to undefined
 **approveUplevel** | [**&#39;true&#39; | &#39;false&#39; | &#39;t&#39; | &#39;f&#39; | &#39;true&#39; | &#39;false&#39;**]**Array<&#39;true&#39; &#124; &#39;false&#39; &#124; &#39;t&#39; &#124; &#39;f&#39; &#124; &#39;true&#39; &#124; &#39;false&#39;>** |  | (optional) defaults to undefined


### Return type

**PerformTranslationResponse**

### Authorization

[ApiKeyAuth](README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Success |  -  |
**400** | An error occurred |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


