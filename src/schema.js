"use strict";

const schema = {
    geometry: {
        location: {
            lat: "Number",
            lng: "Number"
        },
        viewport: {
            south: "Number",
            west: "Number",
            north: "Number",
            east: "Number"
        }
    },
    icon: "String",
    id: "Number",
    name: "String",
    opening_hours: {
        open_now: "Boolean"
    },
    photos: [
        {
            height: "Number",
            html_attributions: "Array",
            width: "Number"
        }
    ],
    place_id: "String",
    plus_code: {
        compound_code: "String",
        global_code: "String"
    },
    rating: "Decimal128",
    reference: "String",
    scope: "String",
    types: "Array",
    user_ratings_total: "Number",
    vicinity: "String",
    html_attributions: "Array"
}

module.exports = schema;