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
 export enum DocumentType {
        SalesOrder = 0,
        SalesInvoice = 1,
        PurchaseOrder = 2,
        PurchaseInvoice = 3,
        ReturnOrder = 4,
        ReturnInvoice = 5,
        InventoryTransferOrder = 6,
        InventoryTransferInvoice = 7,
        ReverseChargeOrder = 8,
        ReverseChargeInvoice = 9,
        CustomsInvoice = 10,
        CustomsOrder = 11,
        Any = -1,
}

@JsonConverter
export class DocumentTypeConverter implements JsonCustomConvert<DocumentType> {
    serialize(data: DocumentType) {
        return data;
    }
    deserialize(enumType: string): DocumentType {
        return DocumentType[enumType as keyof typeof DocumentType];
    }
}