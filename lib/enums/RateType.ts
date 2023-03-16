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

import { JsonConverter, JsonCustomConvert } from "json2typescript";

/**
* @export
* @enum {string}
*/
 export enum RateType {
        ReducedA = 65,
        ReducedB = 66,
        Food = 70,
        General = 71,
        IncreasedStandard = 73,
        LinenRental = 76,
        Medical = 77,
        Construction = 78,
        Parking = 80,
        SuperReduced = 81,
        ReducedR = 82,
        Standard = 83,
        Leasing = 84,
        LeasingLow = 85,
        Services = 88,
        Zero = 90,
}

@JsonConverter
export class RateTypeConverter implements JsonCustomConvert<RateType> {
    serialize(data: RateType) {
        return data;
    }
    deserialize(enumType: string): RateType {
        return RateType[enumType as keyof typeof RateType];
    }
}