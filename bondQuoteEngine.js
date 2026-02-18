/**
 * Bond Cleaning Quote Engine — pure deterministic pricing logic.
 * No DOM, no side effects. Used by the bond-cleaning-quote-calculator page.
 */

(function (global) {
  'use strict';

  var BASE = 180;
  var PER_BEDROOM = 90;
  var PER_BATHROOM = 70;
  var FURNISHED = 100;
  var ADDON_OVEN = 60;
  var ADDON_CARPET_PER_ROOM = 40;
  var ADDON_BALCONY = 40;
  var ADDON_GARAGE = 60;
  var ADDON_PEST = 120;

  var PROPERTY_MULT = { apartment: 1.0, townhouse: 1.05, house: 1.1 };
  var CONDITION_MULT = { standard: 1.0, heavy: 1.2, very_dirty: 1.35 };

  var LOW_FACTOR = 0.9;
  var HIGH_FACTOR = 1.15;

  /**
   * Compute bond cleaning quote from form input.
   * @param {Object} input
   * @param {number} input.bedrooms
   * @param {number} input.bathrooms
   * @param {string} input.propertyType - 'apartment' | 'townhouse' | 'house'
   * @param {string} input.condition - 'standard' | 'heavy' | 'very_dirty'
   * @param {boolean} input.furnished
   * @param {Object} input.addOns - { oven, carpetRooms, balcony, garage, pest }
   * @returns {{ total: number, low: number, high: number }}
   */
  function computeBondQuote(input) {
    var bedrooms = Math.max(0, Number(input.bedrooms) || 0);
    var bathrooms = Math.max(0, Number(input.bathrooms) || 0);
    var propertyType = input.propertyType && PROPERTY_MULT[input.propertyType] ? input.propertyType : 'apartment';
    var condition = input.condition && CONDITION_MULT[input.condition] ? input.condition : 'standard';
    var furnished = !!input.furnished;
    var addOns = input.addOns || {};

    var subtotal = BASE
      + bedrooms * PER_BEDROOM
      + bathrooms * PER_BATHROOM
      + (furnished ? FURNISHED : 0)
      + (addOns.oven ? ADDON_OVEN : 0)
      + (Math.max(0, Number(addOns.carpetRooms) || 0) * ADDON_CARPET_PER_ROOM)
      + (addOns.balcony ? ADDON_BALCONY : 0)
      + (addOns.garage ? ADDON_GARAGE : 0)
      + (addOns.pest ? ADDON_PEST : 0);

    var total = Math.round(subtotal * PROPERTY_MULT[propertyType] * CONDITION_MULT[condition]);
    var low = Math.round(total * LOW_FACTOR);
    var high = Math.round(total * HIGH_FACTOR);

    return { total: total, low: low, high: high };
  }

  /**
   * Format number as AUD currency string (e.g. "$1,234").
   * @param {number} n
   * @returns {string}
   */
  function formatAUD(n) {
    return '$' + Number(n).toLocaleString('en-AU', { maximumFractionDigits: 0, minimumFractionDigits: 0 });
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { computeBondQuote: computeBondQuote, formatAUD: formatAUD };
  } else {
    global.bondQuoteEngine = { computeBondQuote: computeBondQuote, formatAUD: formatAUD };
  }
})(typeof window !== 'undefined' ? window : this);
