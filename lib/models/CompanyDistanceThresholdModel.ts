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
 * A company-distance-threshold model indicates the distance between a company
and the taxing borders of various countries.  Distance thresholds are necessary
to correctly calculate some value-added taxes.
            
Distance thresholds only apply to sales of goods in certain countries.  A distance threshold
is applied for each ship-from/ship-to combination of countries.  The threshold amount is defined by
the ship-to country.
            
Generally, if you have exceeded a distance threshold for taxes between a pair of countries, your tax calculation
will be determined to be the rate in the destination country.  If you have not exceeded the threshold,
your tax calculation will be determined to be the rate in the origin country.
            
The amount of a threshold is not tracked or managed in AvaTax, but the decision of your tax compliance department
as to whether you have exceeded this threshold is maintained in this object.
            
By default, you are considered to have exceeded tax thresholds. If you wish to change this default, you can create
a company-distance-threshold object to select the correct behavior for this origin/destination tax calculation process.
 * @export
 * @class CompanyDistanceThresholdModel
 */
 @JsonObject("CompanyDistanceThresholdModel")
 export class CompanyDistanceThresholdModel {
    /**
     * @type {number}
     * @memberof CompanyDistanceThresholdModel
     */
   @JsonProperty("id", Number, true)
   id?: number | undefined = undefined;
    /**
     * @type {number}
     * @memberof CompanyDistanceThresholdModel
     */
   @JsonProperty("companyId", Number, true)
   companyId?: number | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyDistanceThresholdModel
     */
   @JsonProperty("originCountry", String)
   originCountry: string = undefined;
    /**
     * @type {string}
     * @memberof CompanyDistanceThresholdModel
     */
   @JsonProperty("destinationCountry", String)
   destinationCountry: string = undefined;
    /**
     * @type {Date}
     * @memberof CompanyDistanceThresholdModel
     */
   @JsonProperty("effDate", DateConverter, true)
   effDate?: Date | undefined = undefined;
    /**
     * @type {Date}
     * @memberof CompanyDistanceThresholdModel
     */
   @JsonProperty("endDate", DateConverter, true)
   endDate?: Date | undefined = undefined;
    /**
     * @type {boolean}
     * @memberof CompanyDistanceThresholdModel
     */
   @JsonProperty("thresholdExceeded", Boolean, true)
   thresholdExceeded?: boolean | undefined = undefined;
    /**
     * @type {string}
     * @memberof CompanyDistanceThresholdModel
     */
   @JsonProperty("type", String)
   type: string = undefined;
 }