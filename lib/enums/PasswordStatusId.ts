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
 export enum PasswordStatusId {
        UserCannotChange = 0,
        UserCanChange = 1,
        UserMustChange = 2,
}

@JsonConverter
export class PasswordStatusIdConverter implements JsonCustomConvert<PasswordStatusId> {
    serialize(data: PasswordStatusId) {
        return data;
    }
    deserialize(enumType: string): PasswordStatusId {
        return PasswordStatusId[enumType as keyof typeof PasswordStatusId];
    }
}