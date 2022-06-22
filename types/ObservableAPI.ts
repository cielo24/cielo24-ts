import { ResponseContext, RequestContext, HttpFile } from '../http/http';
import * as models from '../models/all';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AccountApiRequestFactory, AccountApiResponseProcessor} from "../apis/AccountApi";
export class ObservableAccountApi {
    private requestFactory: AccountApiRequestFactory;
    private responseProcessor: AccountApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountApiRequestFactory,
        responseProcessor?: AccountApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountApiResponseProcessor();
    }

    /**
     * Get Account Settings
     * @param v 
     */
    public getSettings(v: number, _options?: Configuration): Observable<any> {
        const requestContextPromise = this.requestFactory.getSettings(v, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSettings(rsp)));
            }));
    }

    /**
     * Login to the cielo24 API to obtain an API access token for use when calling other methods. Optional arguments may be passed either as HTTP headers or query string parameters. Required arguments must be passed as query string parameters.
     * @param v 
     * @param loginBody 
     */
    public login(v: number, loginBody: LoginBody, _options?: Configuration): Observable<LoginResponse> {
        const requestContextPromise = this.requestFactory.login(v, loginBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.login(rsp)));
            }));
    }

    /**
     * Logout of the current session, invalidating the API token.
     * @param v 
     */
    public logout(v: number, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.logout(v, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.logout(rsp)));
            }));
    }

    /**
     * Test Auth
     * @param v 
     */
    public verifyKey(v: number, _options?: Configuration): Observable<VerifyKeyResponse> {
        const requestContextPromise = this.requestFactory.verifyKey(v, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.verifyKey(rsp)));
            }));
    }

}

import { JobApiRequestFactory, JobApiResponseProcessor} from "../apis/JobApi";
export class ObservableJobApi {
    private requestFactory: JobApiRequestFactory;
    private responseProcessor: JobApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: JobApiRequestFactory,
        responseProcessor?: JobApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new JobApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new JobApiResponseProcessor();
    }

    /**
     * Add a piece of media to an existing job using a local file. No content-type should be included in the HTTP header. The media should be uploaded as raw binary, no encoding (base64, hex, etc) is required. Chunk-transfer encoding is NOT supported. File size is limited to 10 gb
     * @param v 
     * @param jobId 
     * @param contentLength 
     * @param body 
     * @param isDuplicate 
     */
    public addMediaFile(v: number, jobId: string, contentLength: number, body: HttpFile, isDuplicate?: 'true' | 'false', _options?: Configuration): Observable<AddMediaResponse> {
        const requestContextPromise = this.requestFactory.addMediaFile(v, jobId, contentLength, body, isDuplicate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addMediaFile(rsp)));
            }));
    }

    /**
     * Add a piece of media to an existing job using a public media url. A job may only have a single piece of media associated with it, attempting to add additional media will return an error code.
     * @param v 
     * @param jobId 
     * @param mediaUrl 
     * @param isDuplicate 
     */
    public addMediaUrl(v: number, jobId: string, mediaUrl: string, isDuplicate?: 'true' | 'false', _options?: Configuration): Observable<AddMediaResponse> {
        const requestContextPromise = this.requestFactory.addMediaUrl(v, jobId, mediaUrl, isDuplicate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addMediaUrl(rsp)));
            }));
    }

    /**
     * Authorize an existing job. If your account has the \"customer authorization\" feature enabled (it is not enabled by default) jobs you create will be held in the \"Authorizing\" state until you call this method. Calling this method on a job that is not the \"Authorizing\" state has no effect and will return success. Please contact support@cielo24.com to enable the \"customer authorization\" feature.
     * @param v 
     * @param jobId 
     */
    public authorizeJob(v: number, jobId: string, _options?: Configuration): Observable<void> {
        const requestContextPromise = this.requestFactory.authorizeJob(v, jobId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.authorizeJob(rsp)));
            }));
    }

    /**
     * Get the caption file for a job. The job must have completed transcription before a caption can be downloaded.
     * @param v 
     * @param jobId 
     * @param captionFormat 
     * @param buildUrl Rather than returning the file, return a permanent URL to the file.
     * @param captionWordsMin Minimum number of words allowed in a caption.
     * @param captionBySentence When true, puts each sentence into its own caption. When false, more than one sentence may appear in a single caption.
     * @param charactersPerCaptionLine Maximum number of characters to be displayed on each caption line.
     * @param dfxpHeader Allows you to specify a custom header for your DFXP caption file. The header should be the entire contents of the header including the opening and closing tags. Ignored if caption_format does not equal DFXP.
     * @param disallowDangling Will prevent captions from having the last word in a sentence start a new line. Last words will ALWAYS be kept on the same line, even if it breaks the characters_per_caption_line option.
     * @param displayEffectsSpeakerAs Determines what speaker name should used for sound effects.
     * @param displaySpeakerId Determines the way speakers are identified in the captions. Choose \&quot;no\&quot; to not display speaker identities at all: \&quot;&gt;&gt; example\&quot; Choose \&quot;number\&quot; to display only the speaker number: \&quot;&gt;&gt; Speaker 1: example\&quot; Choose \&quot;name\&quot; to display the speaker name: \&quot;&gt;&gt; John Doe: example\&quot;. If you choose \&quot;name\&quot;, the speaker number will be displayed if the name is not available.
     * @param iwpName The named version of element list to generate the transcript from. If not specified, the transcript will be generated from the latest version.
     * @param elementlistVersion The version of element list to generate the captions from. If not specified, the caption will be generated from the latest version. (ISO 8601 Date String)
     * @param emitSpeakerChangeTokensAs Determine what characters to use to denote speaker changes.
     * @param forceCase Force the contents of the captions to be all UPPER or lower case. If blank, the case of the captions is not changed.
     * @param includeDfxpMetadata When true, and the caption format requested is DFXP, the jobs name, ID and language will be added to the DFXP metadata header. When false, these data are omitted from the header. Ignored if caption_format does not equal DFXP.
     * @param layoutTargetCaptionLengthMs Captions generated will, on average, be this duration. However, they may vary significantly based on other parameters you set.
     * @param lineBreakOnSentence Inserts a line break in between sentences that are in the same caption.
     * @param lineEndingFormat Determine the end of line (EOL) character to use for the captions.
     * @param linesPerCaption Number of lines to be displayed for each caption.
     * @param maskProfanity Replace profanity with asterisks.
     * @param maximumCaptionDuration No captions longer than this (in milliseconds) will be produced. If not specified, there is no maximum.
     * @param mergeGapInterval Captions with a gap between them that is smaller than this (in milliseconds) will have their start and/or end times changed so there is no time gap between the captions.
     * @param minimumCaptionLengthMs Extends the duration of short captions to the this minimum length. Additional time is taken from later caption blocks to meet this minimum time.
     * @param minimumGapBetweenCaptionsMs Adds a minimum time between captions such as there will always be some time between captions where no text is displayed. When captions are very close together, time will be removed from the caption duration to make the gap.
     * @param qtSeamless Does not put time gaps of any kind between caption blocks. Ignored if caption_format does not equal QT.
     * @param removeDisfluencies Remove verbal disfluencies from the generated transcript. Common disfluencies such as \&quot;um\&quot; and \&quot;ah\&quot; are removed while maintaining appropriate punctuation.
     * @param removeSoundsList A list of sounds to not show in the caption. This is a JSON style list, and should look like [\&quot;MUSIC\&quot;, \&quot;LAUGH\&quot;]. Ignored if remove_sound_references is true.
     * @param removeSoundReferences Remove ALL non-verbal sound and noise references from the generated transcript. Sounds and unidentified noises are depicted in the caption as [SOUND], [COUGH] and [NOISE]. If this parameter is set, these identifiers are omitted from the caption.
     * @param replaceSlang Replace common slang terms from the generated transcript. Common replacements are \&quot;want to\&quot; for \&quot;wanna\&quot;, \&quot;going to\&quot; for \&quot;gonna\&quot;, etc.
     * @param silenceMaxMs If there is a interval of silence in the middle of a sentence longer than this, then the caption will be split.
     * @param singleSpeakerPerCaption When true, puts each speaker into its own caption. When false, more than one speaker may appear in a single caption.
     * @param soundBoundaries Specifies the characters to surround sound references with. The default will generate sound references that look like this: [MUSIC].
     * @param soundThreshold Sound references that are longer than this threshold will be made their own caption entirely, and will not have any text included with them. If not set, Sound references will be included back to back with text no matter the duration of the sound.
     * @param soundTokensByCaption If true, all sound references will always be in their own caption. If false, more than one sound reference may appear in a single caption.
     * @param soundTokensByLine If true, all sound references will always be in their own line. If false, more than one sound reference may appear in a single line.
     * @param soundTokensByCaptionList If non-empty, the specified sound references will always be in their own caption. If empty, more than one sound reference may appear in a single caption. Ignored if sound_tokens_by_caption is true.
     * @param soundTokensByLineList If non-empty, the specified sound references will always be in their own line. If empty, more than one sound reference may appear in a single line. Ignored if sound_tokens_by_line is true.
     * @param speakerOnNewLine If true, a speaker change will cause a new caption to be made. If false, multiple speakers may appear in a single caption.
     * @param srtFormat If the caption format is SRT, determines what the caption blocks will look like. The default, prints caption blocks that look like this:    1:   00:00:06,060 --&gt; 00:00:16,060   This is the caption text.  You can alter the caption block by re-arranging or removing the substitution string values, shown enclosed in braces \&quot;{}\&quot; in the default value below. Substitution strings may used more than once if desired. Any text that is not a substitution string will be displayed as written. To add new lines, include a \\n. Note, you may need to escape the \\n with an extra backslash when encoding the request. 
     * @param stripSquareBrackets Removes all square brackets like &#39;[&#39; or &#39;]&#39; from captions. By default square brackets surround sound references like &#39;[MUSIC]&#39;, but they may exist as part of the caption text as well.
     * @param utf8Mark Adds a utf8 bytemark to the beginning of the caption. This should only be used if the system you are loading the caption files into needs a byte marker. The vast majority of systems do not.
     * @param replaceEnglishSpelling Replaces English spelling with location accurate spelling. i.e. Color --&gt; Colour  A: American  B: British  Z: British ize  U: Australian  C: Canadian 
     */
    public getCaption(v: number, jobId: string, captionFormat: 'DFXP' | 'ECHO' | 'QT' | 'SAMI' | 'SBV' | 'SCC' | 'SRT' | 'TPM' | 'TRANSCRIPT' | 'TWX' | 'WEB_VTT', buildUrl?: 'true' | 'false', captionWordsMin?: number, captionBySentence?: 'true' | 'false', charactersPerCaptionLine?: number, dfxpHeader?: string, disallowDangling?: 'true' | 'false', displayEffectsSpeakerAs?: string, displaySpeakerId?: 'no' | 'number' | 'name', iwpName?: 'PREMIUM' | 'INTERIM_PROFESSIONAL' | 'PROFESSIONAL' | 'SPEAKER_ID' | 'FINAL' | 'MECHANICAL' | 'CUSTOMER_APPROVED_RETURN' | 'CUSTOMER_APPROVED_TRANSLATION', elementlistVersion?: string, emitSpeakerChangeTokensAs?: string, forceCase?: '' | 'lower' | 'upper', includeDfxpMetadata?: 'true' | 'false', layoutTargetCaptionLengthMs?: number, lineBreakOnSentence?: 'true' | 'false', lineEndingFormat?: 'UNIX' | 'OSX' | 'WINDOWS', linesPerCaption?: number, maskProfanity?: 'true' | 'false', maximumCaptionDuration?: number, mergeGapInterval?: number, minimumCaptionLengthMs?: number, minimumGapBetweenCaptionsMs?: number, qtSeamless?: 'true' | 'false', removeDisfluencies?: 'true' | 'false', removeSoundsList?: Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'>, removeSoundReferences?: 'true' | 'false', replaceSlang?: 'true' | 'false', silenceMaxMs?: number, singleSpeakerPerCaption?: 'true' | 'false', soundBoundaries?: Array<string>, soundThreshold?: number, soundTokensByCaption?: 'true' | 'false', soundTokensByLine?: 'true' | 'false', soundTokensByCaptionList?: Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'>, soundTokensByLineList?: Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'>, speakerOnNewLine?: 'true' | 'false', srtFormat?: string, stripSquareBrackets?: 'true' | 'false', utf8Mark?: 'true' | 'false', replaceEnglishSpelling?: 'A' | 'B' | 'Z' | 'U' | 'C', _options?: Configuration): Observable<string> {
        const requestContextPromise = this.requestFactory.getCaption(v, jobId, captionFormat, buildUrl, captionWordsMin, captionBySentence, charactersPerCaptionLine, dfxpHeader, disallowDangling, displayEffectsSpeakerAs, displaySpeakerId, iwpName, elementlistVersion, emitSpeakerChangeTokensAs, forceCase, includeDfxpMetadata, layoutTargetCaptionLengthMs, lineBreakOnSentence, lineEndingFormat, linesPerCaption, maskProfanity, maximumCaptionDuration, mergeGapInterval, minimumCaptionLengthMs, minimumGapBetweenCaptionsMs, qtSeamless, removeDisfluencies, removeSoundsList, removeSoundReferences, replaceSlang, silenceMaxMs, singleSpeakerPerCaption, soundBoundaries, soundThreshold, soundTokensByCaption, soundTokensByLine, soundTokensByCaptionList, soundTokensByLineList, speakerOnNewLine, srtFormat, stripSquareBrackets, utf8Mark, replaceEnglishSpelling, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCaption(rsp)));
            }));
    }

    /**
     * @param v 
     * @param jobId 
     */
    public jobInfo(v: number, jobId: string, _options?: Configuration): Observable<JobInfoResponse> {
        const requestContextPromise = this.requestFactory.jobInfo(v, jobId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.jobInfo(rsp)));
            }));
    }

    /**
     * Create a new job. A job is a container into which you can upload media and request that transcription be performed. Creating a job is prerequisite for virtually all other methods.
     * @param v 
     * @param newJobBody 
     */
    public newJob(v: number, newJobBody: NewJobBody, _options?: Configuration): Observable<NewJobResponse> {
        const requestContextPromise = this.requestFactory.newJob(v, newJobBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.newJob(rsp)));
            }));
    }

    /**
     * Request that transcription be performed on the specified job. A callback URL, if specified, will be called when the transcription is complete. See [callback documentation](https://cielo24.readthedocs.io/en/latest/basics.html#callbacks-label) for details.
     * @param v 
     * @param performTranscriptionBody 
     */
    public performTranscription(v: number, performTranscriptionBody: PerformTranscriptionBody, _options?: Configuration): Observable<PerformTranscriptionResponse> {
        const requestContextPromise = this.requestFactory.performTranscription(v, performTranscriptionBody, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.performTranscription(rsp)));
            }));
    }

    /**
     * Request that orders a new Translation language for a video that has been previously Transcribed and/or Translated. The New Job ID and job target language will be returned upon completion.
     * @param v 
     * @param jobId 
     * @param targetLanguages The language(s) being ordered (Any RFC 5646 language code) separated by comma (,)
     * @param approveUplevel 
     */
    public performTranslation(v: number, jobId: string, targetLanguages: string, approveUplevel?: 'true' | 'false' | 't' | 'f' | 'true' | 'false', _options?: Configuration): Observable<PerformTranslationResponse> {
        const requestContextPromise = this.requestFactory.performTranslation(v, jobId, targetLanguages, approveUplevel, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.performTranslation(rsp)));
            }));
    }

}
