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
 export enum CollectedBy {
        Seller = 0,
        Marketplace = 1,
        Buyer = 2,
        OTA = 3,
}

@JsonConverter
export class CollectedByConverter implements JsonCustomConvert<CollectedBy> {
    serialize(data: CollectedBy) {
        return data;
    }
    deserialize(enumType: string): CollectedBy {
        return CollectedBy[enumType as keyof typeof CollectedBy];
    }
}