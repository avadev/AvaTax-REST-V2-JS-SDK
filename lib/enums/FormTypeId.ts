/*
 * AvaTax Software Development Kit for JavaScript
 *
 * (c) 2004-2022 Avalara, Inc.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author     Justin Soliz <justin.soliz@avalara.com>
 * @author     Ted Spence <ted.spence@avalara.com>
 * @copyright  2004-2018 Avalara, Inc.
 * @license    https://www.apache.org/licenses/LICENSE-2.0
 * @version    22.6.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

/**
* @export
* @enum {string}
*/
 export enum FormTypeId {
        SalesAndUse = 0,
        Sales = 1,
        SellersUse = 2,
        Lodging = 3,
        SalesAndLodging = 4,
        ConsumerUse = 5,
        ResortAndRental = 6,
        TouristAndRental = 7,
        Prepayment = 8,
        PrepaymentAllowed = 9,
}