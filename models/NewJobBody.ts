/**
 * Cielo24
 * The cielo24 Web Services Platform API allows developers to easily integrate transcription, captioning and keyword extraction into their applications without having to use a manual web portal.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: devs@cielo24.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class NewJobBody {
    /**
    * A human readable identifier for the job
    */
    'jobName'?: string;
    /**
    * Native job language
    */
    'language'?: string;
    /**
    * An identifier you want to associate with this job
    */
    'externalId'?: string;
    /**
    * Create the job in specified sub-account
    */
    'username'?: string;
    /**
    * An requestor you want to associate with this job
    */
    'requestor'?: string;
    /**
    * An reference you want to associate with this job
    */
    'reference'?: string;
    /**
    * Amount of speakers that the video will have
    */
    'expectedSpeakers'?: number;
    /**
    * Allows creating multiple jobs with the same external_id
    */
    'isDuplicate'?: NewJobBodyIsDuplicateEnum;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "jobName",
            "baseName": "job_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "string",
            "format": ""
        },
        {
            "name": "externalId",
            "baseName": "external_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "requestor",
            "baseName": "requestor",
            "type": "string",
            "format": ""
        },
        {
            "name": "reference",
            "baseName": "reference",
            "type": "string",
            "format": ""
        },
        {
            "name": "expectedSpeakers",
            "baseName": "expected_speakers",
            "type": "number",
            "format": ""
        },
        {
            "name": "isDuplicate",
            "baseName": "is_duplicate",
            "type": "NewJobBodyIsDuplicateEnum",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return NewJobBody.attributeTypeMap;
    }

    public constructor() {
    }
}


export type NewJobBodyIsDuplicateEnum = "true" | "false" ;

