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
 export enum FailureCodes {
        BelowLegalDrinkingAge = 0,
        ShippingProhibitedToAddress = 1,
        MissingRequiredLicense = 2,
        VolumeLimitExceeded = 3,
        InvalidFieldValue = 4,
        MissingRequiredField = 5,
        InvalidFieldType = 6,
        InvalidFormat = 7,
        InvalidDate = 8,
        AlcoholContentLimitExceeded = 9,
}

@JsonConverter
export class FailureCodesConverter implements JsonCustomConvert<FailureCodes> {
    serialize(data: FailureCodes) {
        return data;
    }
    deserialize(enumType: string): FailureCodes {
        return FailureCodes[enumType as keyof typeof FailureCodes];
    }
}