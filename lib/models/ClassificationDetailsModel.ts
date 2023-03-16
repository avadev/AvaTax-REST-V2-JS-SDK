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
 * Represents classification details model
 * @export
 * @class ClassificationDetailsModel
 */
 @JsonObject("ClassificationDetailsModel")
 export class ClassificationDetailsModel {
    /**
     * @type {number}
     * @memberof ClassificationDetailsModel
     */
   @JsonProperty("classified", Number, true)
   classified?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ClassificationDetailsModel
     */
   @JsonProperty("inProgress", Number, true)
   inProgress?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ClassificationDetailsModel
     */
   @JsonProperty("notClassified", Number, true)
   notClassified?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ClassificationDetailsModel
     */
   @JsonProperty("failed", Number, true)
   failed?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof ClassificationDetailsModel
     */
   @JsonProperty("notFound", Number, true)
   notFound?: number | undefined = undefined;
 }