import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'

import { AddMediaResponse } from '../models/AddMediaResponse';
import { ErrorResponse } from '../models/ErrorResponse';
import { IWPEnum } from '../models/IWPEnum';
import { JobInfoResponse } from '../models/JobInfoResponse';
import { JobOptions } from '../models/JobOptions';
import { LoginBody } from '../models/LoginBody';
import { LoginResponse } from '../models/LoginResponse';
import { NewJobBody } from '../models/NewJobBody';
import { NewJobResponse } from '../models/NewJobResponse';
import { PerformTranscriptionBody } from '../models/PerformTranscriptionBody';
import { PerformTranscriptionResponse } from '../models/PerformTranscriptionResponse';
import { PerformTranslationResponse } from '../models/PerformTranslationResponse';
import { VerifyKeyResponse } from '../models/VerifyKeyResponse';

import { ObservableAccountApi } from "./ObservableAPI";
import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";

export interface AccountApiGetSettingsRequest {
    /**
     * 
     * @type number
     * @memberof AccountApigetSettings
     */
    v: number
}

export interface AccountApiLoginRequest {
    /**
     * 
     * @type number
     * @memberof AccountApilogin
     */
    v: number
    /**
     * 
     * @type LoginBody
     * @memberof AccountApilogin
     */
    loginBody: LoginBody
}

export interface AccountApiLogoutRequest {
    /**
     * 
     * @type number
     * @memberof AccountApilogout
     */
    v: number
}

export interface AccountApiVerifyKeyRequest {
    /**
     * 
     * @type number
     * @memberof AccountApiverifyKey
     */
    v: number
}

export class ObjectAccountApi {
    private api: ObservableAccountApi

    public constructor(configuration: Configuration, requestFactory?: AccountApiRequestFactory, responseProcessor?: AccountApiResponseProcessor) {
        this.api = new ObservableAccountApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get Account Settings
     * @param param the request object
     */
    public getSettings(param: AccountApiGetSettingsRequest, options?: Configuration): Promise<any> {
        return this.api.getSettings(param.v,  options).toPromise();
    }

    /**
     * Login to the cielo24 API to obtain an API access token for use when calling other methods. Optional arguments may be passed either as HTTP headers or query string parameters. Required arguments must be passed as query string parameters.
     * @param param the request object
     */
    public login(param: AccountApiLoginRequest, options?: Configuration): Promise<LoginResponse> {
        return this.api.login(param.v, param.loginBody,  options).toPromise();
    }

    /**
     * Logout of the current session, invalidating the API token.
     * @param param the request object
     */
    public logout(param: AccountApiLogoutRequest, options?: Configuration): Promise<void> {
        return this.api.logout(param.v,  options).toPromise();
    }

    /**
     * Test Auth
     * @param param the request object
     */
    public verifyKey(param: AccountApiVerifyKeyRequest, options?: Configuration): Promise<VerifyKeyResponse> {
        return this.api.verifyKey(param.v,  options).toPromise();
    }

}

import { ObservableJobApi } from "./ObservableAPI";
import { JobApiRequestFactory, JobApiResponseProcessor} from "../apis/JobApi";

export interface JobApiAddMediaFileRequest {
    /**
     * 
     * @type number
     * @memberof JobApiaddMediaFile
     */
    v: number
    /**
     * 
     * @type string
     * @memberof JobApiaddMediaFile
     */
    jobId: string
    /**
     * 
     * @type number
     * @memberof JobApiaddMediaFile
     */
    contentLength: number
    /**
     * 
     * @type HttpFile
     * @memberof JobApiaddMediaFile
     */
    body: HttpFile
    /**
     * 
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApiaddMediaFile
     */
    isDuplicate?: 'true' | 'false'
}

export interface JobApiAddMediaUrlRequest {
    /**
     * 
     * @type number
     * @memberof JobApiaddMediaUrl
     */
    v: number
    /**
     * 
     * @type string
     * @memberof JobApiaddMediaUrl
     */
    jobId: string
    /**
     * 
     * @type string
     * @memberof JobApiaddMediaUrl
     */
    mediaUrl: string
    /**
     * 
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApiaddMediaUrl
     */
    isDuplicate?: 'true' | 'false'
}

export interface JobApiAuthorizeJobRequest {
    /**
     * 
     * @type number
     * @memberof JobApiauthorizeJob
     */
    v: number
    /**
     * 
     * @type string
     * @memberof JobApiauthorizeJob
     */
    jobId: string
}

export interface JobApiGetCaptionRequest {
    /**
     * 
     * @type number
     * @memberof JobApigetCaption
     */
    v: number
    /**
     * 
     * @type string
     * @memberof JobApigetCaption
     */
    jobId: string
    /**
     * 
     * @type &#39;DFXP&#39; | &#39;ECHO&#39; | &#39;QT&#39; | &#39;SAMI&#39; | &#39;SBV&#39; | &#39;SCC&#39; | &#39;SRT&#39; | &#39;TPM&#39; | &#39;TRANSCRIPT&#39; | &#39;TWX&#39; | &#39;WEB_VTT&#39;
     * @memberof JobApigetCaption
     */
    captionFormat: 'DFXP' | 'ECHO' | 'QT' | 'SAMI' | 'SBV' | 'SCC' | 'SRT' | 'TPM' | 'TRANSCRIPT' | 'TWX' | 'WEB_VTT'
    /**
     * Rather than returning the file, return a permanent URL to the file.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    buildUrl?: 'true' | 'false'
    /**
     * Minimum number of words allowed in a caption.
     * @type number
     * @memberof JobApigetCaption
     */
    captionWordsMin?: number
    /**
     * When true, puts each sentence into its own caption. When false, more than one sentence may appear in a single caption.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    captionBySentence?: 'true' | 'false'
    /**
     * Maximum number of characters to be displayed on each caption line.
     * @type number
     * @memberof JobApigetCaption
     */
    charactersPerCaptionLine?: number
    /**
     * Allows you to specify a custom header for your DFXP caption file. The header should be the entire contents of the header including the opening and closing tags. Ignored if caption_format does not equal DFXP.
     * @type string
     * @memberof JobApigetCaption
     */
    dfxpHeader?: string
    /**
     * Will prevent captions from having the last word in a sentence start a new line. Last words will ALWAYS be kept on the same line, even if it breaks the characters_per_caption_line option.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    disallowDangling?: 'true' | 'false'
    /**
     * Determines what speaker name should used for sound effects.
     * @type string
     * @memberof JobApigetCaption
     */
    displayEffectsSpeakerAs?: string
    /**
     * Determines the way speakers are identified in the captions. Choose \&quot;no\&quot; to not display speaker identities at all: \&quot;&gt;&gt; example\&quot; Choose \&quot;number\&quot; to display only the speaker number: \&quot;&gt;&gt; Speaker 1: example\&quot; Choose \&quot;name\&quot; to display the speaker name: \&quot;&gt;&gt; John Doe: example\&quot;. If you choose \&quot;name\&quot;, the speaker number will be displayed if the name is not available.
     * @type &#39;no&#39; | &#39;number&#39; | &#39;name&#39;
     * @memberof JobApigetCaption
     */
    displaySpeakerId?: 'no' | 'number' | 'name'
    /**
     * The named version of element list to generate the transcript from. If not specified, the transcript will be generated from the latest version.
     * @type &#39;PREMIUM&#39; | &#39;INTERIM_PROFESSIONAL&#39; | &#39;PROFESSIONAL&#39; | &#39;SPEAKER_ID&#39; | &#39;FINAL&#39; | &#39;MECHANICAL&#39; | &#39;CUSTOMER_APPROVED_RETURN&#39; | &#39;CUSTOMER_APPROVED_TRANSLATION&#39;
     * @memberof JobApigetCaption
     */
    iwpName?: 'PREMIUM' | 'INTERIM_PROFESSIONAL' | 'PROFESSIONAL' | 'SPEAKER_ID' | 'FINAL' | 'MECHANICAL' | 'CUSTOMER_APPROVED_RETURN' | 'CUSTOMER_APPROVED_TRANSLATION'
    /**
     * The version of element list to generate the captions from. If not specified, the caption will be generated from the latest version. (ISO 8601 Date String)
     * @type string
     * @memberof JobApigetCaption
     */
    elementlistVersion?: string
    /**
     * Determine what characters to use to denote speaker changes.
     * @type string
     * @memberof JobApigetCaption
     */
    emitSpeakerChangeTokensAs?: string
    /**
     * Force the contents of the captions to be all UPPER or lower case. If blank, the case of the captions is not changed.
     * @type &#39;&#39; | &#39;lower&#39; | &#39;upper&#39;
     * @memberof JobApigetCaption
     */
    forceCase?: '' | 'lower' | 'upper'
    /**
     * When true, and the caption format requested is DFXP, the jobs name, ID and language will be added to the DFXP metadata header. When false, these data are omitted from the header. Ignored if caption_format does not equal DFXP.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    includeDfxpMetadata?: 'true' | 'false'
    /**
     * Captions generated will, on average, be this duration. However, they may vary significantly based on other parameters you set.
     * @type number
     * @memberof JobApigetCaption
     */
    layoutTargetCaptionLengthMs?: number
    /**
     * Inserts a line break in between sentences that are in the same caption.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    lineBreakOnSentence?: 'true' | 'false'
    /**
     * Determine the end of line (EOL) character to use for the captions.
     * @type &#39;UNIX&#39; | &#39;OSX&#39; | &#39;WINDOWS&#39;
     * @memberof JobApigetCaption
     */
    lineEndingFormat?: 'UNIX' | 'OSX' | 'WINDOWS'
    /**
     * Number of lines to be displayed for each caption.
     * @type number
     * @memberof JobApigetCaption
     */
    linesPerCaption?: number
    /**
     * Replace profanity with asterisks.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    maskProfanity?: 'true' | 'false'
    /**
     * No captions longer than this (in milliseconds) will be produced. If not specified, there is no maximum.
     * @type number
     * @memberof JobApigetCaption
     */
    maximumCaptionDuration?: number
    /**
     * Captions with a gap between them that is smaller than this (in milliseconds) will have their start and/or end times changed so there is no time gap between the captions.
     * @type number
     * @memberof JobApigetCaption
     */
    mergeGapInterval?: number
    /**
     * Extends the duration of short captions to the this minimum length. Additional time is taken from later caption blocks to meet this minimum time.
     * @type number
     * @memberof JobApigetCaption
     */
    minimumCaptionLengthMs?: number
    /**
     * Adds a minimum time between captions such as there will always be some time between captions where no text is displayed. When captions are very close together, time will be removed from the caption duration to make the gap.
     * @type number
     * @memberof JobApigetCaption
     */
    minimumGapBetweenCaptionsMs?: number
    /**
     * Does not put time gaps of any kind between caption blocks. Ignored if caption_format does not equal QT.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    qtSeamless?: 'true' | 'false'
    /**
     * Remove verbal disfluencies from the generated transcript. Common disfluencies such as \&quot;um\&quot; and \&quot;ah\&quot; are removed while maintaining appropriate punctuation.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    removeDisfluencies?: 'true' | 'false'
    /**
     * A list of sounds to not show in the caption. This is a JSON style list, and should look like [\&quot;MUSIC\&quot;, \&quot;LAUGH\&quot;]. Ignored if remove_sound_references is true.
     * @type Array&lt;&#39;UNKNOWN&#39; | &#39;INAUDIBLE&#39; | &#39;CROSSTALK&#39; | &#39;MUSIC&#39; | &#39;NOISE&#39; | &#39;LAUGH&#39; | &#39;COUGH&#39; | &#39;FOREIGN&#39; | &#39;BLANK_AUDIO&#39; | &#39;APPLAUSE&#39; | &#39;BLEEP&#39; | &#39;ENDS_SENTENCE&#39;&gt;
     * @memberof JobApigetCaption
     */
    removeSoundsList?: Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'>
    /**
     * Remove ALL non-verbal sound and noise references from the generated transcript. Sounds and unidentified noises are depicted in the caption as [SOUND], [COUGH] and [NOISE]. If this parameter is set, these identifiers are omitted from the caption.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    removeSoundReferences?: 'true' | 'false'
    /**
     * Replace common slang terms from the generated transcript. Common replacements are \&quot;want to\&quot; for \&quot;wanna\&quot;, \&quot;going to\&quot; for \&quot;gonna\&quot;, etc.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    replaceSlang?: 'true' | 'false'
    /**
     * If there is a interval of silence in the middle of a sentence longer than this, then the caption will be split.
     * @type number
     * @memberof JobApigetCaption
     */
    silenceMaxMs?: number
    /**
     * When true, puts each speaker into its own caption. When false, more than one speaker may appear in a single caption.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    singleSpeakerPerCaption?: 'true' | 'false'
    /**
     * Specifies the characters to surround sound references with. The default will generate sound references that look like this: [MUSIC].
     * @type Array&lt;string&gt;
     * @memberof JobApigetCaption
     */
    soundBoundaries?: Array<string>
    /**
     * Sound references that are longer than this threshold will be made their own caption entirely, and will not have any text included with them. If not set, Sound references will be included back to back with text no matter the duration of the sound.
     * @type number
     * @memberof JobApigetCaption
     */
    soundThreshold?: number
    /**
     * If true, all sound references will always be in their own caption. If false, more than one sound reference may appear in a single caption.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    soundTokensByCaption?: 'true' | 'false'
    /**
     * If true, all sound references will always be in their own line. If false, more than one sound reference may appear in a single line.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    soundTokensByLine?: 'true' | 'false'
    /**
     * If non-empty, the specified sound references will always be in their own caption. If empty, more than one sound reference may appear in a single caption. Ignored if sound_tokens_by_caption is true.
     * @type Array&lt;&#39;UNKNOWN&#39; | &#39;INAUDIBLE&#39; | &#39;CROSSTALK&#39; | &#39;MUSIC&#39; | &#39;NOISE&#39; | &#39;LAUGH&#39; | &#39;COUGH&#39; | &#39;FOREIGN&#39; | &#39;BLANK_AUDIO&#39; | &#39;APPLAUSE&#39; | &#39;BLEEP&#39; | &#39;ENDS_SENTENCE&#39;&gt;
     * @memberof JobApigetCaption
     */
    soundTokensByCaptionList?: Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'>
    /**
     * If non-empty, the specified sound references will always be in their own line. If empty, more than one sound reference may appear in a single line. Ignored if sound_tokens_by_line is true.
     * @type Array&lt;&#39;UNKNOWN&#39; | &#39;INAUDIBLE&#39; | &#39;CROSSTALK&#39; | &#39;MUSIC&#39; | &#39;NOISE&#39; | &#39;LAUGH&#39; | &#39;COUGH&#39; | &#39;FOREIGN&#39; | &#39;BLANK_AUDIO&#39; | &#39;APPLAUSE&#39; | &#39;BLEEP&#39; | &#39;ENDS_SENTENCE&#39;&gt;
     * @memberof JobApigetCaption
     */
    soundTokensByLineList?: Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'>
    /**
     * If true, a speaker change will cause a new caption to be made. If false, multiple speakers may appear in a single caption.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    speakerOnNewLine?: 'true' | 'false'
    /**
     * If the caption format is SRT, determines what the caption blocks will look like. The default, prints caption blocks that look like this:    1:   00:00:06,060 --&gt; 00:00:16,060   This is the caption text.  You can alter the caption block by re-arranging or removing the substitution string values, shown enclosed in braces \&quot;{}\&quot; in the default value below. Substitution strings may used more than once if desired. Any text that is not a substitution string will be displayed as written. To add new lines, include a \\n. Note, you may need to escape the \\n with an extra backslash when encoding the request. 
     * @type string
     * @memberof JobApigetCaption
     */
    srtFormat?: string
    /**
     * Removes all square brackets like &#39;[&#39; or &#39;]&#39; from captions. By default square brackets surround sound references like &#39;[MUSIC]&#39;, but they may exist as part of the caption text as well.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    stripSquareBrackets?: 'true' | 'false'
    /**
     * Adds a utf8 bytemark to the beginning of the caption. This should only be used if the system you are loading the caption files into needs a byte marker. The vast majority of systems do not.
     * @type &#39;true&#39; | &#39;false&#39;
     * @memberof JobApigetCaption
     */
    utf8Mark?: 'true' | 'false'
    /**
     * Replaces English spelling with location accurate spelling. i.e. Color --&gt; Colour  A: American  B: British  Z: British ize  U: Australian  C: Canadian 
     * @type &#39;A&#39; | &#39;B&#39; | &#39;Z&#39; | &#39;U&#39; | &#39;C&#39;
     * @memberof JobApigetCaption
     */
    replaceEnglishSpelling?: 'A' | 'B' | 'Z' | 'U' | 'C'
}

export interface JobApiJobInfoRequest {
    /**
     * 
     * @type number
     * @memberof JobApijobInfo
     */
    v: number
    /**
     * 
     * @type string
     * @memberof JobApijobInfo
     */
    jobId: string
}

export interface JobApiNewJobRequest {
    /**
     * 
     * @type number
     * @memberof JobApinewJob
     */
    v: number
    /**
     * 
     * @type NewJobBody
     * @memberof JobApinewJob
     */
    newJobBody: NewJobBody
}

export interface JobApiPerformTranscriptionRequest {
    /**
     * 
     * @type number
     * @memberof JobApiperformTranscription
     */
    v: number
    /**
     * 
     * @type PerformTranscriptionBody
     * @memberof JobApiperformTranscription
     */
    performTranscriptionBody: PerformTranscriptionBody
}

export interface JobApiPerformTranslationRequest {
    /**
     * 
     * @type number
     * @memberof JobApiperformTranslation
     */
    v: number
    /**
     * 
     * @type string
     * @memberof JobApiperformTranslation
     */
    jobId: string
    /**
     * The language(s) being ordered (Any RFC 5646 language code) separated by comma (,)
     * @type string
     * @memberof JobApiperformTranslation
     */
    targetLanguages: string
    /**
     * 
     * @type &#39;true&#39; | &#39;false&#39; | &#39;t&#39; | &#39;f&#39; | &#39;true&#39; | &#39;false&#39;
     * @memberof JobApiperformTranslation
     */
    approveUplevel?: 'true' | 'false' | 't' | 'f' | 'true' | 'false'
}

export class ObjectJobApi {
    private api: ObservableJobApi

    public constructor(configuration: Configuration, requestFactory?: JobApiRequestFactory, responseProcessor?: JobApiResponseProcessor) {
        this.api = new ObservableJobApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a piece of media to an existing job using a local file. No content-type should be included in the HTTP header. The media should be uploaded as raw binary, no encoding (base64, hex, etc) is required. Chunk-transfer encoding is NOT supported. File size is limited to 10 gb
     * @param param the request object
     */
    public addMediaFile(param: JobApiAddMediaFileRequest, options?: Configuration): Promise<AddMediaResponse> {
        return this.api.addMediaFile(param.v, param.jobId, param.contentLength, param.body, param.isDuplicate,  options).toPromise();
    }

    /**
     * Add a piece of media to an existing job using a public media url. A job may only have a single piece of media associated with it, attempting to add additional media will return an error code.
     * @param param the request object
     */
    public addMediaUrl(param: JobApiAddMediaUrlRequest, options?: Configuration): Promise<AddMediaResponse> {
        return this.api.addMediaUrl(param.v, param.jobId, param.mediaUrl, param.isDuplicate,  options).toPromise();
    }

    /**
     * Authorize an existing job. If your account has the \"customer authorization\" feature enabled (it is not enabled by default) jobs you create will be held in the \"Authorizing\" state until you call this method. Calling this method on a job that is not the \"Authorizing\" state has no effect and will return success. Please contact support@cielo24.com to enable the \"customer authorization\" feature.
     * @param param the request object
     */
    public authorizeJob(param: JobApiAuthorizeJobRequest, options?: Configuration): Promise<void> {
        return this.api.authorizeJob(param.v, param.jobId,  options).toPromise();
    }

    /**
     * Get the caption file for a job. The job must have completed transcription before a caption can be downloaded.
     * @param param the request object
     */
    public getCaption(param: JobApiGetCaptionRequest, options?: Configuration): Promise<string> {
        return this.api.getCaption(param.v, param.jobId, param.captionFormat, param.buildUrl, param.captionWordsMin, param.captionBySentence, param.charactersPerCaptionLine, param.dfxpHeader, param.disallowDangling, param.displayEffectsSpeakerAs, param.displaySpeakerId, param.iwpName, param.elementlistVersion, param.emitSpeakerChangeTokensAs, param.forceCase, param.includeDfxpMetadata, param.layoutTargetCaptionLengthMs, param.lineBreakOnSentence, param.lineEndingFormat, param.linesPerCaption, param.maskProfanity, param.maximumCaptionDuration, param.mergeGapInterval, param.minimumCaptionLengthMs, param.minimumGapBetweenCaptionsMs, param.qtSeamless, param.removeDisfluencies, param.removeSoundsList, param.removeSoundReferences, param.replaceSlang, param.silenceMaxMs, param.singleSpeakerPerCaption, param.soundBoundaries, param.soundThreshold, param.soundTokensByCaption, param.soundTokensByLine, param.soundTokensByCaptionList, param.soundTokensByLineList, param.speakerOnNewLine, param.srtFormat, param.stripSquareBrackets, param.utf8Mark, param.replaceEnglishSpelling,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public jobInfo(param: JobApiJobInfoRequest, options?: Configuration): Promise<JobInfoResponse> {
        return this.api.jobInfo(param.v, param.jobId,  options).toPromise();
    }

    /**
     * Create a new job. A job is a container into which you can upload media and request that transcription be performed. Creating a job is prerequisite for virtually all other methods.
     * @param param the request object
     */
    public newJob(param: JobApiNewJobRequest, options?: Configuration): Promise<NewJobResponse> {
        return this.api.newJob(param.v, param.newJobBody,  options).toPromise();
    }

    /**
     * Request that transcription be performed on the specified job. A callback URL, if specified, will be called when the transcription is complete. See [callback documentation](https://cielo24.readthedocs.io/en/latest/basics.html#callbacks-label) for details.
     * @param param the request object
     */
    public performTranscription(param: JobApiPerformTranscriptionRequest, options?: Configuration): Promise<PerformTranscriptionResponse> {
        return this.api.performTranscription(param.v, param.performTranscriptionBody,  options).toPromise();
    }

    /**
     * Request that orders a new Translation language for a video that has been previously Transcribed and/or Translated. The New Job ID and job target language will be returned upon completion.
     * @param param the request object
     */
    public performTranslation(param: JobApiPerformTranslationRequest, options?: Configuration): Promise<PerformTranslationResponse> {
        return this.api.performTranslation(param.v, param.jobId, param.targetLanguages, param.approveUplevel,  options).toPromise();
    }

}
