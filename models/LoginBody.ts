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

export class LoginBody {
    /**
    * The username associated with this account
    */
    'username'?: string;
    /**
    * The password associated with this account
    */
    'password'?: string;
    /**
    * A long term security key generated via generate_api_key
    */
    'securekey'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "username",
            "baseName": "username",
            "type": "string",
            "format": ""
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string",
            "format": "password"
        },
        {
            "name": "securekey",
            "baseName": "securekey",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LoginBody.attributeTypeMap;
    }

    public constructor() {
    }
}
