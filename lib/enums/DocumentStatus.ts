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
 export enum DocumentStatus {
        Temporary = 0,
        Saved = 1,
        Posted = 2,
        Committed = 3,
        Cancelled = 4,
        Adjusted = 5,
        Queued = 6,
        PendingApproval = 7,
        Any = -1,
}

@JsonConverter
export class DocumentStatusConverter implements JsonCustomConvert<DocumentStatus> {
    serialize(data: DocumentStatus) {
        return data;
    }
    deserialize(enumType: string): DocumentStatus {
        return DocumentStatus[enumType as keyof typeof DocumentStatus];
    }
}