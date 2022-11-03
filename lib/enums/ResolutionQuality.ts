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
 * @version    22.11.0
 * @link       https://github.com/avadev/AvaTax-REST-V2-JS-SDK
 */

/**
* @export
* @enum {string}
*/
 export enum ResolutionQuality {
        NotCoded = 0,
        External = 1,
        CountryCentroid = 2,
        RegionCentroid = 3,
        PartialCentroid = 4,
        PostalCentroidGood = 5,
        PostalCentroidBetter = 6,
        PostalCentroidBest = 7,
        Intersection = 8,
        Interpolated = 9,
        Rooftop = 10,
        Constant = 11,
}