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
import { TransactionLineTaxAmountByTaxTypeModel } from "./TransactionLineTaxAmountByTaxTypeModel";
import { JsonObject, JsonProperty } from "json2typescript";
import { DateConverter } from "../utils/dateConverter";

/**
 * Represents a tax override for a transaction
 * @export
 * @class TaxOverrideModel
 */
 @JsonObject("TaxOverrideModel")
 export class TaxOverrideModel {
    /**
     * @type {Enums.TaxOverrideType}
     * @memberof TaxOverrideModel
     */
   @JsonProperty("type", Enums.TaxOverrideTypeConverter, true)
   type?: Enums.TaxOverrideType | undefined = undefined;
    /**
     * @type {number}
     * @memberof TaxOverrideModel
     */
   @JsonProperty("taxAmount", Number, true)
   taxAmount?: number | undefined = undefined;
    /**
     * @type {Date}
     * @memberof TaxOverrideModel
     */
   @JsonProperty("taxDate", DateConverter, true)
   taxDate?: Date | undefined = undefined;
    /**
     * @type {string}
     * @memberof TaxOverrideModel
     */
   @JsonProperty("reason", String, true)
   reason?: string | undefined = undefined;
    /**
     * @type {TransactionLineTaxAmountByTaxTypeModel[]}
     * @memberof TaxOverrideModel
     */
   @JsonProperty("taxAmountByTaxTypes", [TransactionLineTaxAmountByTaxTypeModel], true)
   taxAmountByTaxTypes?: TransactionLineTaxAmountByTaxTypeModel[] | undefined = undefined;
 }