// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http';
import  FormData from "form-data";
import { URLSearchParams } from 'url';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { AddMediaResponse } from '../models/AddMediaResponse';
import { ErrorResponse } from '../models/ErrorResponse';
import { JobInfoResponse } from '../models/JobInfoResponse';
import { NewJobBody } from '../models/NewJobBody';
import { NewJobResponse } from '../models/NewJobResponse';
import { PerformTranscriptionBody } from '../models/PerformTranscriptionBody';
import { PerformTranscriptionResponse } from '../models/PerformTranscriptionResponse';
import { PerformTranslationResponse } from '../models/PerformTranslationResponse';

/**
 * no description
 */
export class JobApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Add a piece of media to an existing job using a local file. No content-type should be included in the HTTP header. The media should be uploaded as raw binary, no encoding (base64, hex, etc) is required. Chunk-transfer encoding is NOT supported. File size is limited to 10 gb
     * @param v 
     * @param jobId 
     * @param contentLength 
     * @param body 
     * @param isDuplicate 
     */
    public async addMediaFile(v: number, jobId: string, contentLength: number, body: HttpFile, isDuplicate?: 'true' | 'false', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'v' is not null or undefined
        if (v === null || v === undefined) {
            throw new RequiredError("JobApi", "addMediaFile", "v");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobApi", "addMediaFile", "jobId");
        }


        // verify required parameter 'contentLength' is not null or undefined
        if (contentLength === null || contentLength === undefined) {
            throw new RequiredError("JobApi", "addMediaFile", "contentLength");
        }


        // verify required parameter 'body' is not null or undefined
        if (body === null || body === undefined) {
            throw new RequiredError("JobApi", "addMediaFile", "body");
        }



        // Path Params
        const localVarPath = '/job/add_media';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (v !== undefined) {
            requestContext.setQueryParam("v", ObjectSerializer.serialize(v, "number", ""));
        }

        // Query Params
        if (jobId !== undefined) {
            requestContext.setQueryParam("job_id", ObjectSerializer.serialize(jobId, "string", ""));
        }

        // Query Params
        if (isDuplicate !== undefined) {
            requestContext.setQueryParam("is_duplicate", ObjectSerializer.serialize(isDuplicate, "'true' | 'false'", ""));
        }

        // Header Params
        requestContext.setHeaderParam("Content-Length", ObjectSerializer.serialize(contentLength, "number", ""));


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "video/mp4"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "HttpFile", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Add a piece of media to an existing job using a public media url. A job may only have a single piece of media associated with it, attempting to add additional media will return an error code.
     * @param v 
     * @param jobId 
     * @param mediaUrl 
     * @param isDuplicate 
     */
    public async addMediaUrl(v: number, jobId: string, mediaUrl: string, isDuplicate?: 'true' | 'false', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'v' is not null or undefined
        if (v === null || v === undefined) {
            throw new RequiredError("JobApi", "addMediaUrl", "v");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobApi", "addMediaUrl", "jobId");
        }


        // verify required parameter 'mediaUrl' is not null or undefined
        if (mediaUrl === null || mediaUrl === undefined) {
            throw new RequiredError("JobApi", "addMediaUrl", "mediaUrl");
        }



        // Path Params
        const localVarPath = '/job/add_media';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (v !== undefined) {
            requestContext.setQueryParam("v", ObjectSerializer.serialize(v, "number", ""));
        }

        // Query Params
        if (jobId !== undefined) {
            requestContext.setQueryParam("job_id", ObjectSerializer.serialize(jobId, "string", ""));
        }

        // Query Params
        if (mediaUrl !== undefined) {
            requestContext.setQueryParam("media_url", ObjectSerializer.serialize(mediaUrl, "string", ""));
        }

        // Query Params
        if (isDuplicate !== undefined) {
            requestContext.setQueryParam("is_duplicate", ObjectSerializer.serialize(isDuplicate, "'true' | 'false'", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Authorize an existing job. If your account has the \"customer authorization\" feature enabled (it is not enabled by default) jobs you create will be held in the \"Authorizing\" state until you call this method. Calling this method on a job that is not the \"Authorizing\" state has no effect and will return success. Please contact support@cielo24.com to enable the \"customer authorization\" feature.
     * @param v 
     * @param jobId 
     */
    public async authorizeJob(v: number, jobId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'v' is not null or undefined
        if (v === null || v === undefined) {
            throw new RequiredError("JobApi", "authorizeJob", "v");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobApi", "authorizeJob", "jobId");
        }


        // Path Params
        const localVarPath = '/job/authorize';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (v !== undefined) {
            requestContext.setQueryParam("v", ObjectSerializer.serialize(v, "number", ""));
        }

        // Query Params
        if (jobId !== undefined) {
            requestContext.setQueryParam("job_id", ObjectSerializer.serialize(jobId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
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
    public async getCaption(v: number, jobId: string, captionFormat: 'DFXP' | 'ECHO' | 'QT' | 'SAMI' | 'SBV' | 'SCC' | 'SRT' | 'TPM' | 'TRANSCRIPT' | 'TWX' | 'WEB_VTT', buildUrl?: 'true' | 'false', captionWordsMin?: number, captionBySentence?: 'true' | 'false', charactersPerCaptionLine?: number, dfxpHeader?: string, disallowDangling?: 'true' | 'false', displayEffectsSpeakerAs?: string, displaySpeakerId?: 'no' | 'number' | 'name', iwpName?: 'PREMIUM' | 'INTERIM_PROFESSIONAL' | 'PROFESSIONAL' | 'SPEAKER_ID' | 'FINAL' | 'MECHANICAL' | 'CUSTOMER_APPROVED_RETURN' | 'CUSTOMER_APPROVED_TRANSLATION', elementlistVersion?: string, emitSpeakerChangeTokensAs?: string, forceCase?: '' | 'lower' | 'upper', includeDfxpMetadata?: 'true' | 'false', layoutTargetCaptionLengthMs?: number, lineBreakOnSentence?: 'true' | 'false', lineEndingFormat?: 'UNIX' | 'OSX' | 'WINDOWS', linesPerCaption?: number, maskProfanity?: 'true' | 'false', maximumCaptionDuration?: number, mergeGapInterval?: number, minimumCaptionLengthMs?: number, minimumGapBetweenCaptionsMs?: number, qtSeamless?: 'true' | 'false', removeDisfluencies?: 'true' | 'false', removeSoundsList?: Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'>, removeSoundReferences?: 'true' | 'false', replaceSlang?: 'true' | 'false', silenceMaxMs?: number, singleSpeakerPerCaption?: 'true' | 'false', soundBoundaries?: Array<string>, soundThreshold?: number, soundTokensByCaption?: 'true' | 'false', soundTokensByLine?: 'true' | 'false', soundTokensByCaptionList?: Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'>, soundTokensByLineList?: Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'>, speakerOnNewLine?: 'true' | 'false', srtFormat?: string, stripSquareBrackets?: 'true' | 'false', utf8Mark?: 'true' | 'false', replaceEnglishSpelling?: 'A' | 'B' | 'Z' | 'U' | 'C', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'v' is not null or undefined
        if (v === null || v === undefined) {
            throw new RequiredError("JobApi", "getCaption", "v");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobApi", "getCaption", "jobId");
        }


        // verify required parameter 'captionFormat' is not null or undefined
        if (captionFormat === null || captionFormat === undefined) {
            throw new RequiredError("JobApi", "getCaption", "captionFormat");
        }










































        // Path Params
        const localVarPath = '/job/get_caption';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (v !== undefined) {
            requestContext.setQueryParam("v", ObjectSerializer.serialize(v, "number", ""));
        }

        // Query Params
        if (jobId !== undefined) {
            requestContext.setQueryParam("job_id", ObjectSerializer.serialize(jobId, "string", ""));
        }

        // Query Params
        if (captionFormat !== undefined) {
            requestContext.setQueryParam("caption_format", ObjectSerializer.serialize(captionFormat, "'DFXP' | 'ECHO' | 'QT' | 'SAMI' | 'SBV' | 'SCC' | 'SRT' | 'TPM' | 'TRANSCRIPT' | 'TWX' | 'WEB_VTT'", ""));
        }

        // Query Params
        if (buildUrl !== undefined) {
            requestContext.setQueryParam("build_url", ObjectSerializer.serialize(buildUrl, "'true' | 'false'", ""));
        }

        // Query Params
        if (captionWordsMin !== undefined) {
            requestContext.setQueryParam("caption_words_min", ObjectSerializer.serialize(captionWordsMin, "number", ""));
        }

        // Query Params
        if (captionBySentence !== undefined) {
            requestContext.setQueryParam("caption_by_sentence", ObjectSerializer.serialize(captionBySentence, "'true' | 'false'", ""));
        }

        // Query Params
        if (charactersPerCaptionLine !== undefined) {
            requestContext.setQueryParam("characters_per_caption_line", ObjectSerializer.serialize(charactersPerCaptionLine, "number", ""));
        }

        // Query Params
        if (dfxpHeader !== undefined) {
            requestContext.setQueryParam("dfxp_header", ObjectSerializer.serialize(dfxpHeader, "string", ""));
        }

        // Query Params
        if (disallowDangling !== undefined) {
            requestContext.setQueryParam("disallow_dangling", ObjectSerializer.serialize(disallowDangling, "'true' | 'false'", ""));
        }

        // Query Params
        if (displayEffectsSpeakerAs !== undefined) {
            requestContext.setQueryParam("display_effects_speaker_as", ObjectSerializer.serialize(displayEffectsSpeakerAs, "string", ""));
        }

        // Query Params
        if (displaySpeakerId !== undefined) {
            requestContext.setQueryParam("display_speaker_id", ObjectSerializer.serialize(displaySpeakerId, "'no' | 'number' | 'name'", ""));
        }

        // Query Params
        if (iwpName !== undefined) {
            requestContext.setQueryParam("iwp_name", ObjectSerializer.serialize(iwpName, "'PREMIUM' | 'INTERIM_PROFESSIONAL' | 'PROFESSIONAL' | 'SPEAKER_ID' | 'FINAL' | 'MECHANICAL' | 'CUSTOMER_APPROVED_RETURN' | 'CUSTOMER_APPROVED_TRANSLATION'", ""));
        }

        // Query Params
        if (elementlistVersion !== undefined) {
            requestContext.setQueryParam("elementlist_version", ObjectSerializer.serialize(elementlistVersion, "string", ""));
        }

        // Query Params
        if (emitSpeakerChangeTokensAs !== undefined) {
            requestContext.setQueryParam("emit_speaker_change_tokens_as", ObjectSerializer.serialize(emitSpeakerChangeTokensAs, "string", ""));
        }

        // Query Params
        if (forceCase !== undefined) {
            requestContext.setQueryParam("force_case", ObjectSerializer.serialize(forceCase, "'' | 'lower' | 'upper'", ""));
        }

        // Query Params
        if (includeDfxpMetadata !== undefined) {
            requestContext.setQueryParam("include_dfxp_metadata", ObjectSerializer.serialize(includeDfxpMetadata, "'true' | 'false'", ""));
        }

        // Query Params
        if (layoutTargetCaptionLengthMs !== undefined) {
            requestContext.setQueryParam("layout_target_caption_length_ms", ObjectSerializer.serialize(layoutTargetCaptionLengthMs, "number", ""));
        }

        // Query Params
        if (lineBreakOnSentence !== undefined) {
            requestContext.setQueryParam("line_break_on_sentence", ObjectSerializer.serialize(lineBreakOnSentence, "'true' | 'false'", ""));
        }

        // Query Params
        if (lineEndingFormat !== undefined) {
            requestContext.setQueryParam("line_ending_format", ObjectSerializer.serialize(lineEndingFormat, "'UNIX' | 'OSX' | 'WINDOWS'", ""));
        }

        // Query Params
        if (linesPerCaption !== undefined) {
            requestContext.setQueryParam("lines_per_caption", ObjectSerializer.serialize(linesPerCaption, "number", ""));
        }

        // Query Params
        if (maskProfanity !== undefined) {
            requestContext.setQueryParam("mask_profanity", ObjectSerializer.serialize(maskProfanity, "'true' | 'false'", ""));
        }

        // Query Params
        if (maximumCaptionDuration !== undefined) {
            requestContext.setQueryParam("maximum_caption_duration", ObjectSerializer.serialize(maximumCaptionDuration, "number", ""));
        }

        // Query Params
        if (mergeGapInterval !== undefined) {
            requestContext.setQueryParam("merge_gap_interval", ObjectSerializer.serialize(mergeGapInterval, "number", ""));
        }

        // Query Params
        if (minimumCaptionLengthMs !== undefined) {
            requestContext.setQueryParam("minimum_caption_length_ms", ObjectSerializer.serialize(minimumCaptionLengthMs, "number", ""));
        }

        // Query Params
        if (minimumGapBetweenCaptionsMs !== undefined) {
            requestContext.setQueryParam("minimum_gap_between_captions_ms", ObjectSerializer.serialize(minimumGapBetweenCaptionsMs, "number", ""));
        }

        // Query Params
        if (qtSeamless !== undefined) {
            requestContext.setQueryParam("qt_seamless", ObjectSerializer.serialize(qtSeamless, "'true' | 'false'", ""));
        }

        // Query Params
        if (removeDisfluencies !== undefined) {
            requestContext.setQueryParam("remove_disfluencies", ObjectSerializer.serialize(removeDisfluencies, "'true' | 'false'", ""));
        }

        // Query Params
        if (removeSoundsList !== undefined) {
            requestContext.setQueryParam("remove_sounds_list", ObjectSerializer.serialize(removeSoundsList, "Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'>", ""));
        }

        // Query Params
        if (removeSoundReferences !== undefined) {
            requestContext.setQueryParam("remove_sound_references", ObjectSerializer.serialize(removeSoundReferences, "'true' | 'false'", ""));
        }

        // Query Params
        if (replaceSlang !== undefined) {
            requestContext.setQueryParam("replace_slang", ObjectSerializer.serialize(replaceSlang, "'true' | 'false'", ""));
        }

        // Query Params
        if (silenceMaxMs !== undefined) {
            requestContext.setQueryParam("silence_max_ms", ObjectSerializer.serialize(silenceMaxMs, "number", ""));
        }

        // Query Params
        if (singleSpeakerPerCaption !== undefined) {
            requestContext.setQueryParam("single_speaker_per_caption", ObjectSerializer.serialize(singleSpeakerPerCaption, "'true' | 'false'", ""));
        }

        // Query Params
        if (soundBoundaries !== undefined) {
            requestContext.setQueryParam("sound_boundaries", ObjectSerializer.serialize(soundBoundaries, "Array<string>", ""));
        }

        // Query Params
        if (soundThreshold !== undefined) {
            requestContext.setQueryParam("sound_threshold", ObjectSerializer.serialize(soundThreshold, "number", ""));
        }

        // Query Params
        if (soundTokensByCaption !== undefined) {
            requestContext.setQueryParam("sound_tokens_by_caption", ObjectSerializer.serialize(soundTokensByCaption, "'true' | 'false'", ""));
        }

        // Query Params
        if (soundTokensByLine !== undefined) {
            requestContext.setQueryParam("sound_tokens_by_line", ObjectSerializer.serialize(soundTokensByLine, "'true' | 'false'", ""));
        }

        // Query Params
        if (soundTokensByCaptionList !== undefined) {
            requestContext.setQueryParam("sound_tokens_by_caption_list", ObjectSerializer.serialize(soundTokensByCaptionList, "Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'>", ""));
        }

        // Query Params
        if (soundTokensByLineList !== undefined) {
            requestContext.setQueryParam("sound_tokens_by_line_list", ObjectSerializer.serialize(soundTokensByLineList, "Array<'UNKNOWN' | 'INAUDIBLE' | 'CROSSTALK' | 'MUSIC' | 'NOISE' | 'LAUGH' | 'COUGH' | 'FOREIGN' | 'BLANK_AUDIO' | 'APPLAUSE' | 'BLEEP' | 'ENDS_SENTENCE'>", ""));
        }

        // Query Params
        if (speakerOnNewLine !== undefined) {
            requestContext.setQueryParam("speaker_on_new_line", ObjectSerializer.serialize(speakerOnNewLine, "'true' | 'false'", ""));
        }

        // Query Params
        if (srtFormat !== undefined) {
            requestContext.setQueryParam("srt_format", ObjectSerializer.serialize(srtFormat, "string", ""));
        }

        // Query Params
        if (stripSquareBrackets !== undefined) {
            requestContext.setQueryParam("strip_square_brackets", ObjectSerializer.serialize(stripSquareBrackets, "'true' | 'false'", ""));
        }

        // Query Params
        if (utf8Mark !== undefined) {
            requestContext.setQueryParam("utf8_mark", ObjectSerializer.serialize(utf8Mark, "'true' | 'false'", ""));
        }

        // Query Params
        if (replaceEnglishSpelling !== undefined) {
            requestContext.setQueryParam("replace_english_spelling", ObjectSerializer.serialize(replaceEnglishSpelling, "'A' | 'B' | 'Z' | 'U' | 'C'", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * @param v 
     * @param jobId 
     */
    public async jobInfo(v: number, jobId: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'v' is not null or undefined
        if (v === null || v === undefined) {
            throw new RequiredError("JobApi", "jobInfo", "v");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobApi", "jobInfo", "jobId");
        }


        // Path Params
        const localVarPath = '/job/info';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (v !== undefined) {
            requestContext.setQueryParam("v", ObjectSerializer.serialize(v, "number", ""));
        }

        // Query Params
        if (jobId !== undefined) {
            requestContext.setQueryParam("job_id", ObjectSerializer.serialize(jobId, "string", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Create a new job. A job is a container into which you can upload media and request that transcription be performed. Creating a job is prerequisite for virtually all other methods.
     * @param v 
     * @param newJobBody 
     */
    public async newJob(v: number, newJobBody: NewJobBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'v' is not null or undefined
        if (v === null || v === undefined) {
            throw new RequiredError("JobApi", "newJob", "v");
        }


        // verify required parameter 'newJobBody' is not null or undefined
        if (newJobBody === null || newJobBody === undefined) {
            throw new RequiredError("JobApi", "newJob", "newJobBody");
        }


        // Path Params
        const localVarPath = '/job/new';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (v !== undefined) {
            requestContext.setQueryParam("v", ObjectSerializer.serialize(v, "number", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(newJobBody, "NewJobBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Request that transcription be performed on the specified job. A callback URL, if specified, will be called when the transcription is complete. See [callback documentation](https://cielo24.readthedocs.io/en/latest/basics.html#callbacks-label) for details.
     * @param v 
     * @param performTranscriptionBody 
     */
    public async performTranscription(v: number, performTranscriptionBody: PerformTranscriptionBody, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'v' is not null or undefined
        if (v === null || v === undefined) {
            throw new RequiredError("JobApi", "performTranscription", "v");
        }


        // verify required parameter 'performTranscriptionBody' is not null or undefined
        if (performTranscriptionBody === null || performTranscriptionBody === undefined) {
            throw new RequiredError("JobApi", "performTranscription", "performTranscriptionBody");
        }


        // Path Params
        const localVarPath = '/job/perform_transcription';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (v !== undefined) {
            requestContext.setQueryParam("v", ObjectSerializer.serialize(v, "number", ""));
        }


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(performTranscriptionBody, "PerformTranscriptionBody", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * Request that orders a new Translation language for a video that has been previously Transcribed and/or Translated. The New Job ID and job target language will be returned upon completion.
     * @param v 
     * @param jobId 
     * @param targetLanguages The language(s) being ordered (Any RFC 5646 language code) separated by comma (,)
     * @param approveUplevel 
     */
    public async performTranslation(v: number, jobId: string, targetLanguages: string, approveUplevel?: 'true' | 'false' | 't' | 'f' | 'true' | 'false', _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'v' is not null or undefined
        if (v === null || v === undefined) {
            throw new RequiredError("JobApi", "performTranslation", "v");
        }


        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError("JobApi", "performTranslation", "jobId");
        }


        // verify required parameter 'targetLanguages' is not null or undefined
        if (targetLanguages === null || targetLanguages === undefined) {
            throw new RequiredError("JobApi", "performTranslation", "targetLanguages");
        }



        // Path Params
        const localVarPath = '/job/translate';

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (v !== undefined) {
            requestContext.setQueryParam("v", ObjectSerializer.serialize(v, "number", ""));
        }

        // Query Params
        if (jobId !== undefined) {
            requestContext.setQueryParam("job_id", ObjectSerializer.serialize(jobId, "string", ""));
        }

        // Query Params
        if (targetLanguages !== undefined) {
            requestContext.setQueryParam("target_languages", ObjectSerializer.serialize(targetLanguages, "string", ""));
        }

        // Query Params
        if (approveUplevel !== undefined) {
            requestContext.setQueryParam("approve_uplevel", ObjectSerializer.serialize(approveUplevel, "'true' | 'false' | 't' | 'f' | 'true' | 'false'", ""));
        }


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["ApiKeyAuth"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class JobApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addMediaFile
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addMediaFile(response: ResponseContext): Promise<AddMediaResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddMediaResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddMediaResponse", ""
            ) as AddMediaResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(400, "An error occurred", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddMediaResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddMediaResponse", ""
            ) as AddMediaResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addMediaUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addMediaUrl(response: ResponseContext): Promise<AddMediaResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AddMediaResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddMediaResponse", ""
            ) as AddMediaResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(400, "An error occurred", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AddMediaResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AddMediaResponse", ""
            ) as AddMediaResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to authorizeJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async authorizeJob(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            return;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(400, "An error occurred", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getCaption
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getCaption(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(400, "An error occurred", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to jobInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async jobInfo(response: ResponseContext): Promise<JobInfoResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: JobInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobInfoResponse", ""
            ) as JobInfoResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(400, "An error occurred", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: JobInfoResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "JobInfoResponse", ""
            ) as JobInfoResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to newJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async newJob(response: ResponseContext): Promise<NewJobResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: NewJobResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NewJobResponse", ""
            ) as NewJobResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(400, "An error occurred", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: NewJobResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "NewJobResponse", ""
            ) as NewJobResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to performTranscription
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async performTranscription(response: ResponseContext): Promise<PerformTranscriptionResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PerformTranscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PerformTranscriptionResponse", ""
            ) as PerformTranscriptionResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(400, "An error occurred", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PerformTranscriptionResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PerformTranscriptionResponse", ""
            ) as PerformTranscriptionResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to performTranslation
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async performTranslation(response: ResponseContext): Promise<PerformTranslationResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: PerformTranslationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PerformTranslationResponse", ""
            ) as PerformTranslationResponse;
            return body;
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            const body: ErrorResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ErrorResponse", ""
            ) as ErrorResponse;
            throw new ApiException<ErrorResponse>(400, "An error occurred", body, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PerformTranslationResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PerformTranslationResponse", ""
            ) as PerformTranslationResponse;
            return body;
        }

        throw new ApiException<string | Buffer | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
