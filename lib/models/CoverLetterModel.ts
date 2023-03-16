/*
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2022 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Jonathan Wenger <jonathan.wenger@avalara.com>
 * @author     Sachin Baijal <sachin.baijal@avalara.com>
 * @copyright  2004-2018 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

import * as Enums from '../enums/index';
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * The CoverLetter model represents a message sent along with an invitation to use CertExpress to
upload certificates.  An invitation allows customers to use CertExpress to upload their exemption
certificates directly; this cover letter explains why the invitation was sent.
 * @export
 * @class CoverLetterModel
 */
 @JsonObject("CoverLetterModel")
 export class CoverLetterModel {
    /**
     * @type {number}
     * @memberof CoverLetterModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CoverLetterModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CoverLetterModel
     */
   @JsonProperty("title", String, true)
   title?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CoverLetterModel
     */
   @JsonProperty("subject", String, true)
   subject?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CoverLetterModel
     */
   @JsonProperty("description", String, true)
   description?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CoverLetterModel
     */
   @JsonProperty("createdDate", DateConverter, true)
   createdDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CoverLetterModel
     */
   @JsonProperty("modifiedDate", DateConverter, true)
   modifiedDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CoverLetterModel
     */
   @JsonProperty("active", Boolean, true)
   active?: boolean | undefined = undefined;
    /**
     * @type {number}
     * @memberof CoverLetterModel
     */
   @JsonProperty("pageCount", Number, true)
   pageCount?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CoverLetterModel
     */
   @JsonProperty("templateFilename", String, true)
   templateFilename?: string | undefined = undefined;
    /**
     * @type {number}
     * @memberof CoverLetterModel
     */
   @JsonProperty("version", Number, true)
   version?: number | undefined = undefined;
 }