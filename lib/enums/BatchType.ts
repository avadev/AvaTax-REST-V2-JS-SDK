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
 export enum BatchType {
        AvaCertUpdate = 0,
        AvaCertUpdateAll = 1,
        BatchMaintenance = 2,
        CompanyLocationImport = 3,
        DocumentImport = 4,
        ExemptCertImport = 5,
        ItemImport = 6,
        SalesAuditExport = 7,
        SstpTestDeckImport = 8,
        TaxRuleImport = 9,
        TransactionImport = 10,
        UPCBulkImport = 11,
        UPCValidationImport = 12,
        CustomerSupplierImport = 13,
        VarianceImport = 14,
        CostCenterImport = 15,
        GLAccountImport = 16,
        AdvancedRulesImport = 17,
        ItemImportV2 = 18,
}

@JsonConverter
export class BatchTypeConverter implements JsonCustomConvert<BatchType> {
    serialize(data: BatchType) {
        return data;
    }
    deserialize(enumType: string): BatchType {
        return BatchType[enumType as keyof typeof BatchType];
    }
}