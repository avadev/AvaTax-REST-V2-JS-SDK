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
import { CreateMultiDocumentModel } from "./CreateMultiDocumentModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Contains information about the original API request and response that created
a MultiDocument object.
 * @export
 * @class ReconstructedMultiDocumentModel
 */
 @JsonObject("ReconstructedMultiDocumentModel")
 export class ReconstructedMultiDocumentModel {
    /**
     * @type {CreateMultiDocumentModel}
     * @memberof ReconstructedMultiDocumentModel
     */
   @JsonProperty("request", CreateMultiDocumentModel, true)
   request?: CreateMultiDocumentModel | undefined = undefined;
 }