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
 export enum BatchStatus {
        Waiting = 0,
        SystemErrors = 1,
        Cancelled = 2,
        Completed = 3,
        Creating = 4,
        Deleted = 5,
        Errors = 6,
        Paused = 7,
        Processing = 8,
        Cancelling = 9,
}

@JsonConverter
export class BatchStatusConverter implements JsonCustomConvert<BatchStatus> {
    serialize(data: BatchStatus) {
        return data;
    }
    deserialize(enumType: string): BatchStatus {
        return BatchStatus[enumType as keyof typeof BatchStatus];
    }
}