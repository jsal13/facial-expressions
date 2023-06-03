const facialExpressionMapping = {
    "😀": "Grinning Face",
    "😃": "Grinning face with big eyes"
}

function getNewFacialExpression() {
    var keys = Object.keys(facialExpressionMapping);
    var randomKey = keys[keys.length * Math.random() << 0];
    var randomObj = facialExpressionMapping[randomKey];
    return [randomKey, randomObj];
}
