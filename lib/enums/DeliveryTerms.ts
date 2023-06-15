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
 export enum DeliveryTerms {
        DAP = 1,
        DDP = 2,
        FOB = 3,
        FCA = 4,
        FAS = 5,
        EXW = 6,
        DPU = 7,
        CPT = 8,
        CIP = 9,
        CIF = 10,
        CFR = 11,
}

@JsonConverter
export class DeliveryTermsConverter implements JsonCustomConvert<DeliveryTerms> {
    serialize(data: DeliveryTerms) {
        return data;
    }
    deserialize(enumType: string): DeliveryTerms {
        return DeliveryTerms[enumType as keyof typeof DeliveryTerms];
    }
}