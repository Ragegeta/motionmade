/**
 * Deterministic tests for bondQuoteEngine.computeBondQuote.
 * Runs in plain Node — no frameworks, no new dependencies.
 *
 * Usage:  node bondQuoteEngine.test.js
 */

'use strict';

var engine = require('./bondQuoteEngine');
var computeBondQuote = engine.computeBondQuote;

var passed = 0;
var failed = 0;

function assert(condition, name) {
  if (condition) {
    console.log('  PASS  ' + name);
    passed++;
  } else {
    console.error('  FAIL  ' + name);
    failed++;
  }
}

function eq(actual, expected, name) {
  assert(actual === expected, name + ' (got ' + actual + ', expected ' + expected + ')');
}

// -------------------------------------------------------
// 1. Base case: 1 bed, 1 bath, apartment, standard, unfurnished, no add-ons
//    subtotal = 180 + 90 + 70 = 340
//    total = round(340 * 1.0 * 1.0) = 340
// -------------------------------------------------------
console.log('\n[1] Base case');
(function () {
  var r = computeBondQuote({
    bedrooms: 1, bathrooms: 1,
    propertyType: 'apartment', condition: 'standard',
    furnished: false, addOns: {}
  });
  eq(r.total, 340, 'total');
  eq(r.low, Math.round(340 * 0.9), 'low = 306');
  eq(r.high, Math.round(340 * 1.15), 'high = 391');
})();

// -------------------------------------------------------
// 2. Multi-bedroom house with property multiplier
//    3 bed, 2 bath, house, standard
//    subtotal = 180 + 270 + 140 = 590
//    total = round(590 * 1.1) = 649
// -------------------------------------------------------
console.log('\n[2] Multi-bedroom house');
(function () {
  var r = computeBondQuote({
    bedrooms: 3, bathrooms: 2,
    propertyType: 'house', condition: 'standard',
    furnished: false, addOns: {}
  });
  eq(r.total, 649, 'total');
  eq(r.low, Math.round(649 * 0.9), 'low = 584');
  eq(r.high, Math.round(649 * 1.15), 'high = 746');
})();

// -------------------------------------------------------
// 3. Heavy condition multiplier
//    2 bed, 1 bath, apartment, heavy
//    subtotal = 180 + 180 + 70 = 430
//    total = round(430 * 1.0 * 1.2) = 516
// -------------------------------------------------------
console.log('\n[3] Heavy condition');
(function () {
  var r = computeBondQuote({
    bedrooms: 2, bathrooms: 1,
    propertyType: 'apartment', condition: 'heavy',
    furnished: false, addOns: {}
  });
  eq(r.total, 516, 'total');
  eq(r.low, Math.round(516 * 0.9), 'low = 464');
  eq(r.high, Math.round(516 * 1.15), 'high = 593');
})();

// -------------------------------------------------------
// 4. Very dirty condition multiplier
//    2 bed, 1 bath, apartment, very_dirty
//    subtotal = 430
//    total = round(430 * 1.0 * 1.35) = 581
// -------------------------------------------------------
console.log('\n[4] Very dirty condition');
(function () {
  var r = computeBondQuote({
    bedrooms: 2, bathrooms: 1,
    propertyType: 'apartment', condition: 'very_dirty',
    furnished: false, addOns: {}
  });
  eq(r.total, 581, 'total');
  eq(r.low, Math.round(581 * 0.9), 'low = 523');
  eq(r.high, Math.round(581 * 1.15), 'high = 668');
})();

// -------------------------------------------------------
// 5. Furnished +100
//    2 bed, 1 bath, apartment, standard, furnished
//    subtotal = 180 + 180 + 70 + 100 = 530
//    total = 530
// -------------------------------------------------------
console.log('\n[5] Furnished adjustment');
(function () {
  var r = computeBondQuote({
    bedrooms: 2, bathrooms: 1,
    propertyType: 'apartment', condition: 'standard',
    furnished: true, addOns: {}
  });
  eq(r.total, 530, 'total');
  eq(r.low, Math.round(530 * 0.9), 'low = 477');
  eq(r.high, Math.round(530 * 1.15), 'high = 610');
})();

// -------------------------------------------------------
// 6. Full add-on stacking
//    3 bed, 2 bath, house, heavy, furnished,
//    oven + 3 carpet rooms + balcony + garage + pest
//    subtotal = 180+270+140+100+60+120+40+60+120 = 1090
//    total = round(1090 * 1.1 * 1.2) = round(1438.8) = 1439
// -------------------------------------------------------
console.log('\n[6] Full add-on stacking');
(function () {
  var r = computeBondQuote({
    bedrooms: 3, bathrooms: 2,
    propertyType: 'house', condition: 'heavy',
    furnished: true,
    addOns: { oven: true, carpetRooms: 3, balcony: true, garage: true, pest: true }
  });
  eq(r.total, 1439, 'total');
  eq(r.low, Math.round(1439 * 0.9), 'low = 1295');
  eq(r.high, Math.round(1439 * 1.15), 'high = 1655');
})();

// -------------------------------------------------------
// 7. Range math: low = total * 0.9, high = total * 1.15
//    Verified across a sweep of totals
// -------------------------------------------------------
console.log('\n[7] Range math consistency');
(function () {
  var configs = [
    { bedrooms: 0, bathrooms: 0, propertyType: 'apartment', condition: 'standard', furnished: false, addOns: {} },
    { bedrooms: 5, bathrooms: 3, propertyType: 'townhouse', condition: 'very_dirty', furnished: true, addOns: { oven: true, carpetRooms: 5, balcony: true, garage: true, pest: true } }
  ];
  configs.forEach(function (cfg, i) {
    var r = computeBondQuote(cfg);
    eq(r.low, Math.round(r.total * 0.9), 'config ' + i + ': low = round(total*0.9)');
    eq(r.high, Math.round(r.total * 1.15), 'config ' + i + ': high = round(total*1.15)');
  });
})();

// -------------------------------------------------------
// 8. Sanity: outputs are finite, non-negative, high > low
// -------------------------------------------------------
console.log('\n[8] Sanity checks');
(function () {
  var combos = [
    { bedrooms: 1, bathrooms: 1, propertyType: 'apartment', condition: 'standard', furnished: false, addOns: {} },
    { bedrooms: 4, bathrooms: 2, propertyType: 'house', condition: 'very_dirty', furnished: true, addOns: { oven: true, carpetRooms: 4, balcony: true, garage: true, pest: true } },
    { bedrooms: 0, bathrooms: 0, propertyType: 'townhouse', condition: 'heavy', furnished: false, addOns: {} }
  ];
  combos.forEach(function (cfg, i) {
    var r = computeBondQuote(cfg);
    assert(isFinite(r.total) && isFinite(r.low) && isFinite(r.high), 'combo ' + i + ': all finite');
    assert(r.total >= 0 && r.low >= 0 && r.high >= 0, 'combo ' + i + ': all non-negative');
    assert(r.high > r.low, 'combo ' + i + ': high > low');
  });
})();

// -------------------------------------------------------
// Summary
// -------------------------------------------------------
console.log('\n' + '='.repeat(40));
console.log('Results: ' + passed + ' passed, ' + failed + ' failed');
if (failed > 0) {
  console.error('SOME TESTS FAILED');
  process.exit(1);
} else {
  console.log('ALL TESTS PASSED');
}
