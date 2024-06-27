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
 * certificate log for a customer. Exposed in url $includes
 * @export
 * @class CertificateLogModel
 */
 @JsonObject("CertificateLogModel")
 export class CertificateLogModel {
    /**
     * @type {number}
     * @memberof CertificateLogModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CertificateLogModel
     */
   @JsonProperty("certificateId", Number, true)
   certificateId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateLogModel
     */
   @JsonProperty("account", String, true)
   account?: string | undefined = undefined;
    /**
     * @type {string}
     * @memberof CertificateLogModel
     */
   @JsonProperty("entry", String, true)
   entry?: string | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CertificateLogModel
     */
   @JsonProperty("created", DateConverter, true)
   created?: Date | undefined = undefined;
 }