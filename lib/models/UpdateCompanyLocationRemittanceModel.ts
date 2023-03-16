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
 * Expire a location without restriction then update with new remittance and dates.
 * @export
 * @class UpdateCompanyLocationRemittanceModel
 */
 @JsonObject("UpdateCompanyLocationRemittanceModel")
 export class UpdateCompanyLocationRemittanceModel {
    /**
     * @type {Enums.AddressCategoryId}
     * @memberof UpdateCompanyLocationRemittanceModel
     */
   @JsonProperty("addressCategoryId", Enums.AddressCategoryIdConverter)
   addressCategoryId: Enums.AddressCategoryId = undefined;
    /**
     * @type {Date}
     * @memberof UpdateCompanyLocationRemittanceModel
     */
   @JsonProperty("effectiveDate", DateConverter)
   effectiveDate: Date = undefined;
    /**
     * @type {Date}
     * @memberof UpdateCompanyLocationRemittanceModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
 }