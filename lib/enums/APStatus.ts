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
 export enum APStatus {
        NoAccrualMatch = 0,
        ShortPayItemsAccrueMatch = 1,
        MarkForReviewMatch = 2,
        RejectMatch = 3,
        NoAccrualUndercharge = 4,
        AccruedUndercharge = 5,
        ShortPayItemsAccrueUndercharge = 6,
        NeedReviewUndercharge = 7,
        RejectUndercharge = 8,
        NoAccrualOvercharge = 9,
        ShortPayAvalaraCalculated = 10,
        ShortPayItemsAccrueOvercharge = 11,
        MarkForReviewOvercharge = 12,
        RejectOvercharge = 13,
        NoAccrualAmountThresholdNotMet = 14,
        NoAccrualExemptedCostCenter = 15,
        NoAccrualExemptedItem = 16,
        NoAccrualTrustedVendor = 17,
        AccruedVendor = 18,
        NeedReviewVendor = 19,
        NoAccrualExemptedVendor = 20,
        NoAccrualExemptedGLAccount = 21,
        PendingAccrualVendor = 22,
        PendingAccrualUndercharge = 23,
}

@JsonConverter
export class APStatusConverter implements JsonCustomConvert<APStatus> {
    serialize(data: APStatus) {
        return data;
    }
    deserialize(enumType: string): APStatus {
        return APStatus[enumType as keyof typeof APStatus];
    }
}